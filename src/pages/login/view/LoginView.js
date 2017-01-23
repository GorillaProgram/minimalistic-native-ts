/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import Constant from '../../../main/constant/Constant';
import CommonStyles from '../../../main/constant/CommonStyle';
import { Button, EditView } from '../../../main/components/view/UIComponents';
import ImagePath from '../../../main/constant/ImagePath';

class LoginView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <div style={styles.loginLayout}>
                        <div style={styles.loginHeaderLayout}>
                            柜员登录
                        </div>
                        <div style={styles.loginContentLayout}>
                            <EditView
                                style={styles.loginUserName}
                                image={ImagePath.loginUserName}
                                onChange={this.props.handleUserNameChange}
                                />
                            <EditView
                                style={styles.loginPassword}
                                image={ImagePath.loginPassword}
                                onChange={this.props.handlePasswordChange}
                                />
                            <Button
                                title="登录"
                                style={styles.loginButton}
                                onClick={this.props.handleLoginClick} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: Constant.screenHeight - 40 - 50,
        marginTop: 50,
    },
    loginLayout: {
        width: '60%',
        height: Constant.loginDialogHeight,
        border: '1px solid #888888',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.50)'
    },
    loginHeaderLayout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: Constant.dialogTitleHeight,
        paddingLeft: 15,
        backgroundColor: Constant.homePanelBackgroundColor,
        borderBottom: '1px solid #888888',
    },
    loginContentLayout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: Constant.loginDialogHeight - Constant.dialogTitleHeight,
    },
    loginUserName: {
        marginTop: 30
    },
    loginPassword: {
        marginTop: 20
    },
    loginButton: {
        marginTop: 20
    }

};

LoginView.propTypes = {
    handleUserNameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    handleLoginClick: PropTypes.func.isRequired
};

export default LoginView;
