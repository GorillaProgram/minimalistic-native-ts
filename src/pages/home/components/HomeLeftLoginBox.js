/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';

class HomeLeftLoginBox extends Component {

    constructor(props) {
        super(props);


    }

    loginedBox(model) {
        return (
            <div style={styles.loginBox}>
                <div style={styles.userInfoLayout}>
                    <div style={styles.headImageLayout}>
                        <img style={styles.userHeadImage} src="./static/imgs/defaultHeadImage.png" />
                    </div>
                    <div style={styles.userInfoDesLayout}>
                        <label style={styles.userInfo}>欢迎您, </label>
                        <label style={styles.userInfo}>{model.userName}</label>
                    </div>
                </div>
                <div style={styles.counterInfoLayout}>
                    <label style={styles.counterInfo}>
                        网点号: {model.orgCode}
                    </label>
                    <label style={styles.counterInfo}>
                        柜员号: {model.userID}
                    </label>
                </div>
                <div style={styles.userSetting} onClick={this.props.handleSettingClick}>
                    <img style={styles.userSettingImage} src="./static/imgs/userSetting.png"/>
                </div>
            </div>
        );
    }

    notLoginBox() {
        return (
            <div style={styles.loginBox}>
                <div style={styles.userInfoLayout} onClick={this.props.handleLoginClick}>
                    <div style={styles.headImageLayout}>
                        <img style={styles.headImage} src="./static/imgs/loginIcon.png" />
                    </div>
                    <div style={styles.userInfoDesLayout}>
                        <label style={styles.userInfo}>点击登录</label>
                    </div>
                </div>
                <div style={styles.userSetting}>
                    <img style={styles.userSettingImage} src="./static/imgs/userSetting.png"/>
                </div>
            </div>
        );
    }

    render() {
        return (
            this.props.model ? this.loginedBox(this.props.model) : this.notLoginBox()
        );
    }

}

const styles = {
    loginBox: {
        display: 'flex',
        flexDirection: 'column',
        height: '30%',
        width: 189,
        backgroundColor: '#004892',
        color: '#FFFFFF'
    },
    userInfoLayout: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 45
    },
    headImageLayout: {
        display: 'flex',
        flexDirection: 'column',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        background: '#CCC',
        borderRadius: '50%',
    },
    headImage: {
        width: 30,
        height: 30
    },
    userInfoDesLayout: {
        display: 'flex',
        flexDirection: 'column',
        height: 65,
        justifyContent: 'center',
        marginLeft: 10
    },
    userInfo: {
        fontSize: 14
    },
    userHeadImage: {
        width: '100%',
        height: '100%'
    },
    counterInfoLayout: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 20
    },
    counterInfo: {
        fontSize: 14
    },
    userSetting: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 10, right: 10
    },
    userSettingImage: {
        width: '100%',
        height: '100%'
    }
};

HomeLeftLoginBox.propTypes = {
    model: PropTypes.object,
    handleLoginClick: PropTypes.func,
    handleSettingClick: PropTypes.func
};

export default HomeLeftLoginBox;
