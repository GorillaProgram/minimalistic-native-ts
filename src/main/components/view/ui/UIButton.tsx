/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

interface Props {
    buttonStyle?: React.ViewStyle,
    textStyle?: React.TextStyle,
    handlePress?: () => void
}

interface State {

}

export default class UIButton extends Component<Props, State> {

    render() {
        return (
            <TouchableHighlight style={[styles.buttonStyle, this.props.buttonStyle]} onPress={this.props.handlePress}>
                <Text style={[styles.text, this.props.textStyle]}>
                    {this.props.children}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: "#999",
        padding: 10,
        borderRadius: 5,
    } as React.ViewStyle,

    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    } as React.TextStyle,

});
