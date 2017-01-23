/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *      UI控件
 */
import React, { Component, PropTypes } from 'react';

class UIButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonStyle: styles.defaultStyle
        };
    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                <button
                    style={{...styles.button, ...this.state.buttonStyle}}
                    onMouseDown={() => {
                        this.setState({
                            buttonStyle: styles.activeStyle
                        });
                    }}
                    onMouseLeave={() => {
                        this.setState({
                            buttonStyle: styles.defaultStyle
                        });
                    }}
                    onMouseUp={() => {
                        this.setState({
                            buttonStyle: styles.defaultStyle
                        });
                    }}
                    onClick={this.props.onClick}
                    >
                    {this.props.title}
                </button>
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
        width: 400,
    },
    button: {
        width: '80%',
        height: 44,
        minHeight: 44,
        fontSize: 18,
        color: 'white',
        letterSpacing: '-0.15px',
        border: 'none',
        outline: 'none',
        borderRadius: 10,
    },
    defaultStyle: {
        background: '#1177DB',
    },
    activeStyle: {
        background: '#0B4D8D'
    }
};

UIButton.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default UIButton;
