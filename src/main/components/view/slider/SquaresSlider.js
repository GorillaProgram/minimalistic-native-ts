/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *      Slider包装类
 */
import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';

class SquaresSlider extends Component {

    render() {
        return (
            <Slider {...this.props.settings}>
                {this.props.children}
            </Slider>
        );
    }
}

SquaresSlider.propTypes = {
    settings: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default SquaresSlider;
