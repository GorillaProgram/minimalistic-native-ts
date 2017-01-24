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
import UIModule from './main/module/UIModule';
import NetworkModule from './main/module/NetworkModule';

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
                <Image source={require('../android/app/src/main/res/mipmap-xhdpi/ic_launcher.png')} style={styles.image} />
                <Button buttonStyle={styles.buttonStyle} handlePress={() => {
                    // UIModule.showLoading();
                    NetworkModule.addNetworkJob('http://10.240.90.214:7001/padServer/ImageController/imageTrans', '{}', (response: any) => {
                        console.log("=== imageTrans response ===>>> " + response);
                    }, (error: any) => {

                    });
                    NetworkModule.addNetworkJob('http://10.240.90.214:7001/padServer/HomePageController/showIndexInfo', '{}', (response: any) => {
                        console.log("=== showIndexInfo response ===>>> " + response);
                    }, (error: any) => {

                    });
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
