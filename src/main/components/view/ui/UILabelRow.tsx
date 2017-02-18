/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

interface Props {
    style?: React.ViewStyle;
    textStyle?: React.TextStyle;
    title: string,
    value: string
}

interface State {

}

interface Style {
    container: React.ViewStyle;
    text: React.TextStyle;
    divideText: React.TextStyle;
}

export default class UILabelRow extends Component<Props, State> {

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Text style={[styles.text, this.props.textStyle]}>
                    {this.props.title}
                </Text>
                <Text style={[styles.text, styles.divideText, this.props.textStyle]}>
                    :
                </Text>
                <Text style={[styles.text, this.props.textStyle]}>
                    {this.props.value}
                </Text>
            </View>
        );
    }

};

const styles = StyleSheet.create<Style>({

    container: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    divideText: {
        marginLeft: 5,
        marginRight: 5
    }

});
