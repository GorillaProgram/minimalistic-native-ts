/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import HomeContainer from '../../../pages/home/container/HomeContainer';
import HomeLeftTabs from '../../../pages/home/HomeLeftTabs';
import ProductContainer from '../../../pages/product/container/ProductContainer';
import BusinessManagementContainer from '../../../pages/businessManagement/container/BusinessManagementContainer';
import CommonToolsContainer from '../../../pages/commonTools/container/CommonToolsContainer';
import LoginContainer from '../../../pages/login/container/LoginContainer';
import WebView from '../../../main/components/page/WebView';

const RouterUtility = {

    IndexRoute: HomeContainer,
    RootRoute: {
        path: '/',
        component: HomeLeftTabs
    },
    ProductRoute: {
        path: 'product',
        component: ProductContainer
    },
    BusinessManagementRoute: {
        path: 'businessManagement',
        component: BusinessManagementContainer
    },
    CommonToolsRoute: {
        path: 'commonTools',
        component: CommonToolsContainer
    },
    LoginRoute: {
        path: 'login',
        component: LoginContainer
    },
    WebViewRoute: {
        path: 'webView',
        component: WebView
    },

};

export default RouterUtility;
