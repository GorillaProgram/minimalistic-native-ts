/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import NoInfoPanel from '../../../../main/components/view/panel/NoInfoPanel';
import ContentSlider from '../slider/ContentSlider';

class ProductPanel extends Component {

    constructor(props) {
        super(props);


    }

    sliderOrNoInfoPanel(models, settings, noInfoImage, noInfoTitle) {
        return (
            models.length === 0 ?
            <NoInfoPanel
                image={noInfoImage}
                title={noInfoTitle} /> :
            <ContentSlider
                settings={settings}
                models={models} />
        );
    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                <label style={styles.title}>{this.props.title}</label>
                <img src={this.props.image} style={styles.image} />
                <div style={styles.sliderLayout}>
                    {this.sliderOrNoInfoPanel(this.props.models, this.props.settings, this.props.noInfoImage, this.props.noInfoTitle)}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 18
    },
    image: {
        width: '100%',
        height: 8,
        marginTop: 14
    },
    sliderLayout: {
        marginTop: 25,
        marginBottom: 20
    }
};

ProductPanel.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    settings: PropTypes.object.isRequired,
    models: PropTypes.array.isRequired,
    noInfoImage: PropTypes.string.isRequired,
    noInfoTitle: PropTypes.string.isRequired
};

export default ProductPanel;
