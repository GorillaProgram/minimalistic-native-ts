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
    Image,
    DeviceEventEmitter
} from 'react-native';
import { connect } from 'react-redux';
import { Button, CacheableImageView } from './main/components/view/UIComponents';
import { TEST, Action, actionCreator, netWorkActionCreator } from './dataflow/actions/Actions';
import UIModule from './main/native-modules/UIModule';
import NetworkModule from './main/native-modules/NetworkModule';
import Just from './main/context/Just';

interface Props {
    dispatch?: (action: any) => any;
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

const imagePath = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2489051743,1646771720&fm=23&gp=0.jpg";

class App extends Component<Props, State> {

    componentWillMount() {
        DeviceEventEmitter.addListener('mu haha~', function (e: Event) {
            console.log('== event ===>>>> ' + Just.toString(e));
        });
    }

    componentDidMount() {
        Just.hideSplashScreen();

        let data = [];
        for (let i = 0; i < 100; i++) {
            data.push(i);
        }
        Just.initPicker({
            data: data,
            selectedValue: [59],
            onPickerConfirm: (data: any) => {
                console.log('== data ====>>> ' + data);
            },
            onPickerCancel: (data: any) => {
                console.log('== data ====>>> ' + data);
            },
            onPickerSelect: (data: any) => {
                console.log('== data ====>>> ' + data);
            }
        });
    }

    render() {
        const { dispatch } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome to React Native with Typescript!
                </Text>
                <CacheableImageView src={imagePath} isCircle={true} style={styles.image} />
                <Button buttonStyle={styles.buttonStyle} handlePress={() => {
                    // Just.showIDCardDialog('确定', '取消', () => {
                    //     Just.log('======== 确定 =======');
                    // }, () => {
                    //     Just.log('======== 取消 =======');
                    // });
                    // Just.showSuccessWithActions('革命尚未成功, 同志仍需努力~', () => {
                    //     Just.log('======== 确定 =======');
                    // }, () => {
                    //     Just.log('======== 取消 =======');
                    // });
                    // Just.showPicker();
                    // Just.toActivityForResult('com.framework.pages.activity.TestActivity', '{"name": "MeePwn"}', 100)
                    //     .then((response: any) => {
                    //         console.log('== response ===>>>> ' + response);
                    //     }, (error: any) => {
                    //         console.log('== error ===>>>> ' + error);
                    //     });
                    Just.openCamera('{"name": "MeePwn"}', 123)
                        .then((response: any) => {
                            console.log('== response ===>>>> ' + response);
                        }, (error: any) => {
                            console.log('== error ===>>>> ' + error);
                        });
                    // const url = 'http://10.240.90.219:8086/padServer/HomePageController/showIndexInfo';
                    // dispatch(netWorkActionCreator(url, {
                    //     actionType: url
                    // }));
                    // Just.networkStatus()
                    //     .then((networkStatus: boolean) => {
                    //         Just.log('== networkStatus =====>>> ', networkStatus);
                    //     });
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
                    // Just.showLoading();
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
