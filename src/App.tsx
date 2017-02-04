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
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from './main/components/view/UIComponents';
import { TEST, Action, actionCreator, netWorkActionCreator } from './dataflow/actions/Actions';
import UIModule from './main/native-modules/UIModule';
import NetworkModule from './main/native-modules/NetworkModule';
import Just from './main/context/Just';

interface Props {
    dispatch?: (action: any) => void;
}

interface State {
    test: any;
}

interface Style {
    container: React.ViewStyle;
    text: React.TextStyle;
    image: React.ImageStyle;
    buttonStyle: React.ViewStyle;
}

class App extends Component<Props, State> {

    render() {
        const { dispatch } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome to React Native with Typescript!
                </Text>
                <Image source={require('../android/app/src/main/res/mipmap-xhdpi/ic_launcher.png')} style={styles.image} />
                <Button buttonStyle={styles.buttonStyle} handlePress={() => {
                    // Just.toActivityForResult('com.framework.pages.activity.TestActivity', '{"name": "MeePwn"}', 100)
                    //     .then((response: any) => {
                    //         console.log('== response ===>>>> ' + response);
                    //     }, (error: any) => {
                    //         console.log('== error ===>>>> ' + error);
                    //     });
                    dispatch(netWorkActionCreator('http://www.baidu.com', {
                        actionType: 'http://www.baidu.com'
                    }));
                    Just.networkStatus()
                        .then((networkStatus: boolean) => {
                            Just.log('== networkStatus =====>>> ', networkStatus);
                        });
                    // Just.isNetworkConnected()
                    //     .then((isNetworkConnected: boolean) => {
                    //         Just.log('== isNetworkConnected =====>>> ', isNetworkConnected);
                    //     });
                    // Just.isWifiEnabled()
                    //     .then((isWifiEnabled: boolean) => {
                    //         Just.log('== isWifiEnabled =====>>> ', isWifiEnabled);
                    //     });
                    // Just.isWifi()
                    //     .then((isWifi: boolean) => {
                    //         Just.log('== isWifi =====>>> ', isWifi);
                    //     });
                    // Just.is3G()
                    //     .then((is3G: boolean) => {
                    //         Just.log('== is3G =====>>> ', is3G);
                    //     });
                    // Just.addNetworkJob('http://www.baidu.com', {})
                    //     .then((response: any) => {
                    //
                    //     }, (error: any) => {
                    //
                    //     });
                    // UIModule.showLoading();
                    // dispatch(actionCreator(TEST, {
                    //     item: -123
                    // }));
                    // dispatch(actionCreator(TEST, {
                    //     item: -1232
                    // }));
                    // NetworkModule.addNetworkJob('http://10.240.90.214:7001/padServer/ImageController/imageTrans', '{}', (response: any) => {
                    //     console.log("=== imageTrans response ===>>> " + response);
                    // }, (error: any) => {
                    //
                    // });
                    // NetworkModule.addNetworkJob('http://10.240.90.214:7001/padServer/HomePageController/showIndexInfo', '{}', (response: any) => {
                    //     console.log("=== showIndexInfo response ===>>> " + response);
                    // }, (error: any) => {
                    //
                    // });
                }}>
                    Press Me ~
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 40,
    },
    text: {
        fontSize: 30,
        fontWeight: '100',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 30
    },
    buttonStyle: {
        width: 200,
    }

});

function mapStateToProps(state: any) {
    const { test } = state;
    console.log("=== mapStateToProps ===>>> " + test.payload.item);
    return {

    };
}

export default connect(mapStateToProps)(App);
