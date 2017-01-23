/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Just from '../../../main/context/Just';
import BusinessManagementView from '../view/BusinessManagementView';

class BusinessManagementContainer extends Component {

    constructor(props) {
        super(props);

        this.handleOpenCardClick = this.handleOpenCardClick.bind(this);
        this.handleCardActiveClick = this.handleCardActiveClick.bind(this);
        this.handleSendCardClick = this.handleSendCardClick.bind(this);
        this.handleContractApplyClick = this.handleContractApplyClick.bind(this);
        this.handleContractChangedClick = this.handleContractChangedClick.bind(this);
        this.handleBusinessBoxClick = this.handleBusinessBoxClick.bind(this);
        this.handlePadOutsideClick = this.handlePadOutsideClick.bind(this);
        this.handlePadInsideClick = this.handlePadInsideClick.bind(this);
    }

    /**
     * 开卡
     */
    handleOpenCardClick() {

    }

    /**
     * 卡激活
     */
    handleCardActiveClick() {

    }

    /**
     * 发卡
     */
    handleSendCardClick() {

    }

    /**
     * 签约申请
     */
    handleContractApplyClick() {

    }

    /**
     * 签约变更
     */
    handleContractChangedClick() {

    }

    /**
     * 业务办理箱
     */
    handleBusinessBoxClick() {

    }

    /**
     * 出库
     */
    handlePadOutsideClick() {

    }

    /**
     * 入库
     */
    handlePadInsideClick() {

    }

    render() {
        return (
            <BusinessManagementView
                handleOpenCardClick={this.handleOpenCardClick}
                handleCardActiveClick={this.handleCardActiveClick}
                handleSendCardClick={this.handleSendCardClick}
                handleContractApplyClick={this.handleContractApplyClick}
                handleContractChangedClick={this.handleContractChangedClick}
                handleBusinessBoxClick={this.handleBusinessBoxClick}
                handlePadOutsideClick={this.handlePadOutsideClick}
                handlePadInsideClick={this.handlePadInsideClick}
            />
        );
    }
}

BusinessManagementContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

BusinessManagementContainer.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    const { test } = state;
    Just.log(test);
    return {

    };
}

export default connect(mapStateToProps)(BusinessManagementContainer);
