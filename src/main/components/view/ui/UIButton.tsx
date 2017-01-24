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
    underlayColor?: string,
    handlePress?: () => void
}

interface State {

}

interface Style {
  buttonStyle: React.ViewStyle,
  text: React.TextStyle,
}

export default class UIButton extends Component<Props, State> {

    render() {
        return (
            <TouchableHighlight
                underlayColor={this.props.underlayColor ? this.props.underlayColor : "#0B4D8D"}
                style={[styles.button, this.props.buttonStyle]}
                onPress={this.props.handlePress}>
                <Text style={[styles.text, this.props.textStyle]}>
                    {this.props.children}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: "#1177DB",
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
