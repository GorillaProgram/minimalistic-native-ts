/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
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
            <TouchableOpacity style={[styles.buttonStyle, this.props.buttonStyle]} onPress={this.props.handlePress}>
                <Text style={[styles.text, this.props.textStyle]}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
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
        fontSize: 30,
        color: 'white',
        fontWeight: '100',
        marginBottom: 20,
        textAlign: 'center',
        backgroundColor: 'red'
    } as React.TextStyle,

});
