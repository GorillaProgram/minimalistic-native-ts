/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *      广告Slider
 */
import React, { Component, PropTypes } from 'react';
import NoInfoPanel from '../panel/NoInfoPanel';
import Slider from 'react-slick';

class AdImagesSlider extends Component {

    constructor(props) {
        super(props);


    }

    adImagesSliderOrNoInfoPanel(models, settings, noInfoImage, noInfoTitle) {
        const imagesView = this.props.models.map((model, index) => {
            return (
                <img src={model.image} key={`${index}`} style={this.props.imageStyle} onClick={model.onClick}/>
            );
        });
        return (
            models.length === 0 ?
            <div style={{...styles.container, ...this.props.style}}>
                <NoInfoPanel
                    image={noInfoImage}
                    title={noInfoTitle} />
            </div> :
            <Slider style={styles.slider} {...settings}>
                {imagesView}
            </Slider>
        );
    }

    render() {
        return (
            this.adImagesSliderOrNoInfoPanel(this.props.models, this.props.settings, this.props.noInfoImage, this.props.noInfoTitle)
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    slider: {
        overflow: 'hidden'
    }
};

AdImagesSlider.propTypes = {
    style: PropTypes.object,
    imageStyle: PropTypes.object,
    settings: PropTypes.object.isRequired,
    models: PropTypes.array.isRequired,
    noInfoImage: PropTypes.string.isRequired,
    noInfoTitle: PropTypes.string.isRequired
};

export default AdImagesSlider;
