/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *      Slider中的左箭头
 */
import React, { Component, PropTypes } from 'react';
import ImagePath from '../../../../constant/ImagePath';

class PrevArrow extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div {...this.props} style={{...styles.container, ...this.props.style}}>
                <img src={ImagePath.prevArrow} style={styles.arrow} />
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrow: {
        width: 30,
        height: 43
    }
};

PrevArrow.propTypes = {
    style: PropTypes.object
};

export default PrevArrow;
