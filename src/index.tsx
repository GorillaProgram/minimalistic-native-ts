/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './dataflow/store/Store';
import InitializeConfig from './main/initialize/InitializeConfig';
import App from './App';

interface Props {

}

interface State {

}

export default class MinimalisticApp extends Component<Props, State> {

    componentWillMount() {
        InitializeConfig.setupAppConfiguration();
    }

    render() {
        return (
            <Provider store={configureStore()}>
                <App />
            </Provider>
        );
    }
};
