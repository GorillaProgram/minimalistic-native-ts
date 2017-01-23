/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import ImageCache from '../utilities/userInterface/ImageCache';
import DeviceUtility from '../utilities/peripheral/DeviceUtility';

const LifeCircle = {

    /**
     * 初始化页面配置
     */
    initializePage() {
        document.addEventListener('deviceready', () => {

            /* 初始化图片缓存 */
            ImageCache.imageCacheInitConfig();

            /* 禁止长按复制 */
            DeviceUtility.copyForbidden();

            /* 返回按钮事件 */
            document.addEventListener('backbutton', DeviceUtility.eventBackButton, false); // 返回键
        }, false);
    }

};

export default LifeCircle;
