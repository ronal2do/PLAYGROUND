import React, { PureComponent } from 'react';
import { css } from 'glamor';
import ink from '../images/tinta.png';

const bg = css({
    backgroundImage: `url('${ink}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    padding: 5,
    paddingLeft: 30,
    fontSize: 25,
    fontWeight: 400,
})

const ct = css({
    padding: 30,
})

class Title extends PureComponent {
    render() {
        const { title, styles } = this.props;
        return (
            <div className={ct} style={{styles}}>
                <h1 className={bg}>{title}</h1>
            </div>
        );
    }
}

export default Title;