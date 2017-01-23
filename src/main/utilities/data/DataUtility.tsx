/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Constant from '../../constant/Constant';

const DataUtility = {

    isNull(arg) {
        return (!arg || arg === null || arg === '' || arg === 'null' || arg === ' ' || arg === 'undefined' || arg === 'error: no value for key ~');
    },
    isNotNull(arg) {
        return !DataUtility.isNull(arg);
    },
    /**
     * 判断是否为空, 为空的话, 返回空字符串
     */
    nullToEmptyString(arg) {
        return DataUtility.isNull(arg) ? '' : arg;
    },
    /**
     * 转换日期格式 19900101为1991-01-01
     */
    dateFormate(date) {
        var newDate = '';
        if (DataUtility.isNotNull(date)) {
            if (date.length === 8) {
                newDate = date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2);
            }
        }
        return newDate;
    },
    /**
     * 获取性别信息
     */
    gender(gender) {
        return gender === 'M' ? '男' : '女';
    },
    /**
     *  获取性别信息对应的值
     */
    genderValue(gender) {
        return gender === '男' ? 'M' : 'F';
    },
    /**
     * 获取图片全路径
     */
    fullImageUrl(imageUrl) {
        return `${Constant.FULL_IMAGE_URL}${imageUrl}`;
    }

};

export default DataUtility;
