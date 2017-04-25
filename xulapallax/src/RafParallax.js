 /* eslint-disable */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.index = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var lastTime = 0,
        lastTimeSelected = 0,
        elementCache = [];

    exports.default = _react2.default.createClass({
        displayName: 'src',
        getDefaultProps: function getDefaultProps() {
            return {
                perspective: 100,
                x: false,
                y: true,
                relativeToParent: true
            };
        },
        componentDidMount: function componentDidMount() {
            this._raf = window.requestAnimationFrame(this.tick);
        },
        componentWillUnmount: function componentWillUnmount() {
            window.cancelAnimationFrame(this._raf);
        },
        tick: function tick(t) {
            // Cap updates to near 60fps
            if (t - lastTime < 1000 / 60) {
                window.requestAnimationFrame(this.tick);
                lastTime = t;
                return;
            }
            // Only update element cache every 500ms to avoid bottlenecks
            // caused by repeatedly selecting elements
            if (t - lastTimeSelected > 500) {
                elementCache = this.node.getElementsByClassName('parallax');
                lastTimeSelected = t;
            }
            var depthElements = elementCache,
                yOffset = window.pageYOffset,
                xOffset = window.pageXOffset,
                viewportHeight = window.innerHeight,
                viewportWidth = window.innerWidth,
                i = depthElements.length - 1,
                el,
                elOffsetX,
                elOffsetY,
                depth,
                x,
                y,
                parent,
                parentRect;

            for (i; i >= 0; i--) {
                el = depthElements[i];
                depth = el.getAttribute('data-parallax-depth');
                elOffsetX = el.getAttribute('data-parallax-offset-x') || 0;
                elOffsetY = el.getAttribute('data-parallax-offset-y') || 0;
                parent = el.parentElement;

                if (this.props.relativeToParent && parent) {
                    parentRect = parent.getBoundingClientRect();
                    y = this.props.y ? -parentRect.top * depth / this.props.perspective : 0;
                    x = this.props.x ? -parentRect.left * depth / this.props.perspective : 0;
                } else {
                    y = this.props.y ? yOffset * depth / this.props.perspective : 0;
                    x = this.props.x ? xOffset * depth / this.props.perspective : 0;
                }
                x += +elOffsetX;
                y += +elOffsetY;
                el.style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
            }
            lastTime = t;
            window.requestAnimationFrame(this.tick);
        },
        render: function render() {
            var _this = this;

            return _react2.default.createElement(
                'div',
                { className: 'parallax', ref: function ref(el) {
                        _this.node = el;
                    } },
                this.props.children
            );
        }
    });
});
