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
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    View
} from 'react-native';

interface Props {
    style?: React.ViewStyle;
}

interface State {

}

interface Style {
    container: React.ViewStyle;

}

export default class TestView extends Component<Props, State> {

    constructor(props: any) {
        super(props);


    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>

            </View>
        );
    }
};

const styles = StyleSheet.create<Style>({
    container: {

    },

});
