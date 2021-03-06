/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { PropTypes } from 'react';
import {
    StyleSheet,
    requireNativeComponent,
    View
} from 'react-native';

const iCacheableImageViewFace = {
    name: 'CacheableImageView',
    propTypes: {
        src: PropTypes.string,
        isCircle: PropTypes.bool,
        style: StyleSheet.create({}),
        // borderRadius: PropTypes.number,
        // resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
        ...View.propTypes // 包含默认的View的属性
    },
};

export default requireNativeComponent('CacheableImageView', iCacheableImageViewFace);
