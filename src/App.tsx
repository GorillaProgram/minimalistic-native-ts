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

}

interface State {

}

export default class App extends Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome to React Native with Typescript!
                </Text>
                <Image source={require('./ic_launcher.png')} style={styles.image} />
                <TouchableOpacity onPress={() => {
                    console.log('===============');
                }}>
                    <Text style={styles.text}>
                        Press Me~
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

    image: {
        width: 80,
        height: 80,
        marginBottom: 30
    } as React.ImageStyle,

});
