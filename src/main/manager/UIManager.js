/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Dimensions from '../utilities/userInterface/Dimensions';
import ImageCache from '../utilities/userInterface/ImageCache';
import JQMUtility from '../utilities/userInterface/JQMUtility';
import RouterUtility from '../utilities/userInterface/RouterUtility';
import DialogUtility from '../utilities/userInterface/DialogUtility';

const UIManager = {

    ...Dimensions,
    ...ImageCache,
    ...JQMUtility,
    ...RouterUtility,
    ...DialogUtility

};

export default UIManager;
