/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import DebugUtility from '../function/DebugUtility';

const DeviceUtility = {

    /**
     * 禁止复制
     */
    copyForbidden() {
        document.documentElement.style.webkitUserSelect = 'none';
        document.documentElement.style.webkitTouchCallout = 'none';
    },
    /* 返回键处理 start */
    eventBackButton() {
        // 调用Toast提示
        DebugUtility.toast('再次点击退出程序!');
        document.removeEventListener('backbutton', DeviceUtility.eventBackButton, false); // 注销返回键
        document.addEventListener('backbutton', DeviceUtility.exitApp, false);//绑定退出事件
        // 3秒后重新注册
        var intervalID = window.setInterval(function() {
            window.clearInterval(intervalID);
            document.removeEventListener('backbutton', DeviceUtility.exitApp, false); // 注销返回键
            document.addEventListener('backbutton', DeviceUtility.eventBackButton, false); // 返回键
        }, 3000);
    },
    exitApp() {
        navigator.app.exitApp();
    }
    /* 返回键处理 end */

};

export default DeviceUtility;
