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
    containerStyle?: React.ViewStyle,
    buttonStyle?: React.ViewStyle,
    textStyle?: React.TextStyle,
    handlePress?: () => void
}

interface State {

}

export default class UIButton extends Component<Props, State> {

    render() {
        console.log(this.props.handlePress);
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <TouchableOpacity style={this.props.buttonStyle} onPress={this.props.handlePress}>
                    <Text style={[styles.text, this.props.textStyle]}>
                        {this.props.children}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 40,
    } as React.ViewStyle,

    text: {
        fontSize: 30,
        fontWeight: '100',
        marginBottom: 20,
        textAlign: 'center',
    } as React.TextStyle,

});
