/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Dimensions from '../utilities/userInterface/Dimensions';

const tabWidth = 188;
const titleHeight = 80;

export default {
    defaultTabWidth: tabWidth,
    matchParent: '100%',
    oneThird: '33.4%',
    twoThirds: '66.6%',
    screenWidth: Dimensions.width(),
    screenHeight: Dimensions.height(),
    defaultBackgroundColor: '#F9F9F9',
    homeBlock: 10,
    homeRadius: 10,
    homePanelBackgroundColor: '#F9F9F9',
    titleHeight: titleHeight,
    dialogTitleHeight: 40,
    loginDialogHeight: 250,

    /* 网络请求 start */
    REQUEST_TIMEOUT: 95 * 1000, // 超时时间
    RESPONSE_SUCCESS: 'PD0000', // 成功标示
    RESPONSE_FAILURE: 'PD9999', // 失败标示
    /* 网络请求 end */

    /* 图片 start */
    IMAGE_CACHE_SIZE: 50 * 1024 * 1024, // 大小
    FULL_IMAGE_URL: 'http://10.240.90.212:7001/padServer/padimages/', // 图片地址(需要前端进行拼接)
    /* 图片 end */

    /* 读取外设成功标示 start */
    SUCCESS_CODE_FROM_PERIPHERAL: '000',
    FAILURE_CODE_FROM_PERIPHERAL: '001',
    /* 读取外设成功标示 end */

};
