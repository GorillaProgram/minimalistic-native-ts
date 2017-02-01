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
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from './main/components/view/UIComponents';
// import { Action, test } from './dataflow/actions/Actions';
import TestAction from './dataflow/actions/TestAction';
import UIModule from './main/native-modules/UIModule';
import NetworkModule from './main/native-modules/NetworkModule';

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
                    // dispatch(test(0));
                    // UIModule.showLoading();
                    dispatch(new TestAction().test(0));
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
                    Press Me ~~
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
    console.log("=== mapStateToProps ===>>> " + test.item);
    return {

    };
}

export default connect(mapStateToProps)(App);
