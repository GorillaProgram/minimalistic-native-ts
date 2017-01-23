/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import CommonStyles from '../../../main/constant/CommonStyle';
import ImagePath from '../../../main/constant/ImagePath';
import SliderGroup from '../../../main/components/view/slider/SliderGroup';
import { Square } from '../../../main/components/view/UIComponents';

class BusinessManagementView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const settings = {
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <SliderGroup title="借记卡业务" settings={settings}>
                        <div style={styles.slide}>
                            <Square title="开卡" image={ImagePath.cardOpenBusinessManagementIcon} onClick={this.props.handleOpenCardClick} />
                            <Square title="卡激活" image={ImagePath.cardActiveBusinessManagementIcon} onClick={this.props.handleCardActiveClick} />
                            <Square title="发卡" image={ImagePath.cardSendBusinessManagementIcon} onClick={this.props.handleSendCardClick} />
                        </div>
                    </SliderGroup>
                    <SliderGroup title="电子银行签约" settings={settings}>
                        <div style={styles.slide}>
                            <Square title="签约申请" image={ImagePath.contractApplyBusinessManagementIcon} onClick={this.props.handleContractApplyClick} />
                            <Square title="签约变更" image={ImagePath.contractChangeBusinessManagementIcon} onClick={this.props.handleContractChangedClick} />
                        </div>
                    </SliderGroup>
                    <SliderGroup title="业务办理" settings={settings}>
                        <div style={styles.slide}>
                            <Square title="业务办理箱" image={ImagePath.businessManagementBoxIcon} onClick={this.props.handleBusinessBoxClick} />
                            <Square title="出库" image={ImagePath.padOutsideBusinessManagementIcon} onClick={this.props.handlePadOutsideClick} />
                            <Square title="入库" image={ImagePath.padInsideBusinessManagementIcon} onClick={this.props.handlePadInsideClick} />
                        </div>
                    </SliderGroup>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {

    },
    slide: {
        display: 'flex',
        flexDirection: 'row',
    }
};

BusinessManagementView.propTypes = {
    handleOpenCardClick: PropTypes.func.isRequired,
    handleCardActiveClick: PropTypes.func.isRequired,
    handleSendCardClick: PropTypes.func.isRequired,
    handleContractApplyClick: PropTypes.func.isRequired,
    handleContractChangedClick: PropTypes.func.isRequired,
    handleBusinessBoxClick: PropTypes.func.isRequired,
    handlePadOutsideClick: PropTypes.func.isRequired,
    handlePadInsideClick: PropTypes.func.isRequired
};

export default BusinessManagementView;
