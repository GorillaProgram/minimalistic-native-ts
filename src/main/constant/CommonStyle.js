/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Constant from './Constant';

const CommonStyles = {
    homeRightContainer: {
        overflow: 'auto',
        position: 'fixed',
        top: 20, left: Constant.defaultTabWidth + 30, bottom: 20, right: 20
    },
    fullScreenContainer: {
        backgroundColor: Constant.defaultBackgroundColor,
        overflow: 'auto',
        position: 'fixed',
        top: 0, left: 0, bottom: 0, right: 0
    },
    contentLayout: {
        backgroundColor: Constant.defaultBackgroundColor,
        position: 'fixed',
        top: Constant.titleHeight, left: 0, bottom: 0, right: 0
    },
    leftPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '35%',
        height: '100%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        overflow: 'auto'
    },
    centerLine: {
        width: 1,
        height: '100%',
        backgroundColor: '#ddd'
    },
    rightPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '55%',
        height: '100%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        overflow: 'auto'
    },
    innerLayout: {
        flex: 1,
        width: '99%',
        marginTop: 80
    },
};

export default CommonStyles;
