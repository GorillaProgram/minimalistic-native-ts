/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { Component, ImageURISource } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

interface Props {
    style?: React.ViewStyle;
    source: string,
}

interface State {

}

interface Style {
    imageStyle: React.ViewStyle;
}

export default class UICircleImage extends Component<Props, State> {

    render() {
        return (
            <Image
                source={{uri: this.props.source}}
                style={[styles.imageStyle, this.props.style]}
            />
        );
    }

};

const styles = StyleSheet.create<Style>({

    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 25
    }

});
