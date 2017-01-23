/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';

class NoInfoPanel extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                <img src={this.props.image} style={{...styles.image, ...this.props.imageStyle}} />
                <label style={{...styles.title, ...this.props.titleStyle}}>{this.props.title}</label>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    image: {
        width: 50,
        height: 30,
        marginRight: 5
    },
    title: {
        fontSize: 16,
        marginLeft: 5
    }
};

NoInfoPanel.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    imageStyle: PropTypes.object,
    titleStyle: PropTypes.object

};

export default NoInfoPanel;
