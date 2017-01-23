/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';

class UITabGroup extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                <div style={{...styles.tabLayout, ...this.props.tabLayout}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    tabLayout: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        border: '1px solid #1177DB'
    }
};

UITabGroup.propTypes = {
    style: PropTypes.object,
    tabLayout: PropTypes.object,
    children: PropTypes.any
};

export default UITabGroup;
