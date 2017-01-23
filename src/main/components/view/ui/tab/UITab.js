/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';

class UITab extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const isSelectedStyle = this.props.isSelected ? styles.selected : styles.unselected;
        return (
            <div style={{...styles.container, ...isSelectedStyle, ...this.props.style}} onClick={this.props.onClick}>
                <div style={{...styles.title, ...this.props.titleStyle}}>
                    {this.props.title}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: '#1177DB'
    },
    selected: {
        borderBottom: '4px solid #1177DB'
    },
    unselected: {
        borderBottom: ''
    }

};

UITab.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    titleStyle: PropTypes.object,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default UITab;
