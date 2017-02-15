/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { PropTypes } from 'react';
import {
    requireNativeComponent,
    View
} from 'react-native';

var iface = {
    name: 'UICacheableImageView',
    propTypes: {
        src: PropTypes.string,
        // borderRadius: PropTypes.number,
        resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
        ...View.propTypes // 包含默认的View的属性
    },
};

export default requireNativeComponent('UICacheableImageView', iface);
