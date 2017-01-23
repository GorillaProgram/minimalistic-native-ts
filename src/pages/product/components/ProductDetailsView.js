/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import NoInfoPanel from '../../../main/components/view/panel/NoInfoPanel';
import Just from '../../../main/context/Just';

class ProductDetailsView extends Component {

    constructor(props) {
        super(props);


    }

    detailsOrNoInfoPanel(detailsURL, noInfoImage, noInfoTitle) {
        return (
            Just.isNull(detailsURL) ?
            <NoInfoPanel
                image={noInfoImage}
                title={noInfoTitle} /> :
            <img src={detailsURL} />
        );
    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                {this.detailsOrNoInfoPanel(this.props.detailsURL, this.props.noInfoImage, this.props.noInfoTitle)}
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

};

ProductDetailsView.propTypes = {
    style: PropTypes.object,
    detailsURL: PropTypes.string.isRequired,
    noInfoImage: PropTypes.string.isRequired,
    noInfoTitle: PropTypes.string.isRequired
};

export default ProductDetailsView;
