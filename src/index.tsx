/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './dataflow/store/Store';
import App from './App';

var store = configureStore();

interface Props {

}

interface State {

}

export default class ReduxApp extends Component<Props, State> {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
};
