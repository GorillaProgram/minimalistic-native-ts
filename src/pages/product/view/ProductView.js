/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import CommonStyles from '../../../main/constant/CommonStyle';
import Constant from '../../../main/constant/Constant';
import { Tab, TabGroup } from '../../../main/components/view/UIComponents';
import ProductDetailsView from '../components/ProductDetailsView';

class ProductView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <div style={styles.productListLayout}>
                        <TabGroup style={styles.tabGroup} >
                            <Tab
                                title="全部"
                                isSelected={this.props.allTabSelectedStatus}
                                style={styles.tab}
                                onClick={this.props.handleAllTabSelected} />
                            <Tab
                                title="理财"
                                isSelected={this.props.financingTabSelectedStatus}
                                style={styles.tab}
                                onClick={this.props.handleFinancingTabSelected} />
                            <Tab
                                title="基金"
                                isSelected={this.props.foundationTabSelectedStatus}
                                style={styles.tab}
                                onClick={this.props.handleFoundationTabSelected} />
                        </TabGroup>
                        <div style={styles.productList}>

                        </div>
                    </div>
                    <div style={styles.productDetailsLayout}>
                        <ProductDetailsView
                            style={styles.productDetails}
                            detailsURL=""
                            noInfoImage="./static/imgs/defaultNoticeImage.png"
                            noInfoTitle="查不到详情信息" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: Constant.matchParent,
    },
    productListLayout: {
        flex: 1,
        marginRight: Constant.homeBlock,
        overflow: 'hidden',
    },
    tabGroup: {
        height: 44,
        backgroundColor: 'blue'
    },
    tab: {
        flex: 1,
    },
    productList: {

    },
    productDetailsLayout: {
        flex: 1,
        backgroundColor: Constant.homePanelBackgroundColor,
        marginLeft: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden',
        border: '1px solid #888888'
    },
    productDetails: {
        height: Constant.matchParent
    }

};

ProductView.propTypes = {
    allTabSelectedStatus: PropTypes.bool.isRequired,
    financingTabSelectedStatus: PropTypes.bool.isRequired,
    foundationTabSelectedStatus: PropTypes.bool.isRequired,
    handleAllTabSelected: PropTypes.func.isRequired,
    handleFinancingTabSelected: PropTypes.func.isRequired,
    handleFoundationTabSelected: PropTypes.func.isRequired
};

export default ProductView;
