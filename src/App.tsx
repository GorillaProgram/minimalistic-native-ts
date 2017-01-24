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
import { Button } from './main/components/view/UIComponents';

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
// <Image source={require('./ic_launcher.png')} style={styles.image} />
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome to React Native with Typescript!
                </Text>
                <Button buttonStyle={styles.buttonStyle} handlePress={() => {
                    console.log('==========');
                }}>
                    Press Me ~
                </Button>
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

    image: {
        width: 80,
        height: 80,
        marginBottom: 30
    } as React.ImageStyle,

    buttonStyle: {
        width: 200,
    }

});
