/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Base64Images from '../../constant/Base64Images';
import JQMUtility from './JQMUtility';
import DataUtility from '../data/DataUtility';

const DialogUtility = {

    /* 弹框相关 start */
    /**
     * 提示弹框
     */
    showMessage(dialogConfig, positiveAction, negativeAction) {
        dialogConfig.imageURL = Base64Images.messageIcon;
        dialogConfig.dialogTitle = '提示';
        if (negativeAction) {
            DialogUtility.showAlert(dialogConfig, positiveAction, negativeAction);
        } else {
            DialogUtility.showConfirmAlert(dialogConfig, positiveAction);
        }
    },
    /**
     * 成功弹框
     */
    showSuccess(dialogConfig, positiveAction, negativeAction) {
        dialogConfig.imageURL = Base64Images.successIcon;
        dialogConfig.dialogTitle = '成功';
        if (negativeAction) {
            DialogUtility.showAlert(dialogConfig, positiveAction, negativeAction);
        } else {
            DialogUtility.showConfirmAlert(dialogConfig, positiveAction);
        }
    },
    /**
     * 失败弹框
     */
    showFailure(dialogConfig, positiveAction, negativeAction) {
        dialogConfig.imageURL = Base64Images.failureIcon;
        dialogConfig.dialogTitle = '失败';
        if (negativeAction) {
            DialogUtility.showAlert(dialogConfig, positiveAction, negativeAction);
        } else {
            DialogUtility.showConfirmAlert(dialogConfig, positiveAction);
        }
    },
    /**
     *
     * @param dialogConfig
     * {
     *      imageURL: '',
     *      message: '',
     *      positiveTitle: '',
     *      negativeTitle: '',
     *      dialogTitle: ''
     * }
     */
    showAlert(dialogConfig, positiveAction, negativeAction) {
        if (DataUtility.isNull(dialogConfig.dialogTitle)) {
            dialogConfig.dialogTitle = '提示';
        }
        if (DataUtility.isNull(dialogConfig.negativeTitle)) {
            dialogConfig.negativeTitle = '取消';
        }
        if (DataUtility.isNull(dialogConfig.positiveTitle)) {
            dialogConfig.positiveTitle = '确认';
        }
        JQMUtility.loader(`
                <div class="dialogLayout">
                    <div class="dialogBackground"></div>
                    <div class="dialog">
                        <div class="dialogHeaderLayout">${dialogConfig.dialogTitle}</div>
                        <div class="dialogContentLayout">
                            <img src="${dialogConfig.imageURL}" class="dialogImage" />
                            <div class="dialogMessageLayout">
                                <label class="dialogMessage">${dialogConfig.message}</label>
                            </div>
                        </div>
                        <div class="dialogButtonLayout">
                            <button id="negativeButton" class="negativeButton" data-role="none">${dialogConfig.negativeTitle}</button>
                            <button id="positiveButton" class="positiveButton" data-role="none">${dialogConfig.positiveTitle}</button>
                        </div>
                    </div>
                </div>
            `);
        $('#negativeButton').on('click', () => {
            if (negativeAction) {
                negativeAction();
            }
            DialogUtility.dismissDialog();
        });
        $('#positiveButton').on('click', () => {
            if (positiveAction) {
                positiveAction();
            }
            DialogUtility.dismissDialog();
        });
    },
    /**
     *
     * @param dialogConfig
     * {
     *      imageURL: '',
     *      message: '',
     *      positiveTitle: '',
     *      dialogTitle: ''
     * }
     */
    showConfirmAlert(dialogConfig, positiveAction) {
        if (DataUtility.isNull(dialogConfig.dialogTitle)) {
            dialogConfig.dialogTitle = '提示';
        }
        if (DataUtility.isNull(dialogConfig.positiveTitle)) {
            dialogConfig.positiveTitle = '确认';
        }
        JQMUtility.loader(`
                <div class="dialogLayout">
                    <div class="dialogBackground"></div>
                    <div class="dialog">
                        <div class="dialogHeaderLayout">${dialogConfig.dialogTitle}</div>
                        <div class="dialogContentLayout">
                            <img src="${dialogConfig.imageURL}" class="dialogImage" />
                            <div class="dialogMessageLayout">
                                <label class="dialogMessage">${dialogConfig.message}</label>
                            </div>
                        </div>
                        <div class="dialogButtonLayout">
                            <button id="positiveButton" class="positiveButton" data-role="none">${dialogConfig.positiveTitle}</button>
                        </div>
                    </div>
                </div>
            `);
        $('#positiveButton').on('click', () => {
            if (positiveAction) {
                positiveAction();
            }
            DialogUtility.dismissDialog();
        });
    },
    /**
     * 关闭弹框
     */
    dismissDialog() {
        $.mobile.loading('hide');
    },
    /* 弹框相关 end */

    /* 调用外设相关 start */
    /**
     * 刷身份证Dialog
     */
    showIDCardInfoDialog(positiveAction, negativeAction) {
        JQMUtility.loader(`
                <div class="dialogLayout">
                    <div class="dialogBackground"></div>
                    <div class="dialogCard">
                        <div class="dialogHeaderLayout">读取身份证</div>
                        <div class="dialogContentBigImageLayout">
                            <div class="dialogImageDes">读取身份证</div>
                            <img src="${Base64Images.IDIcon}" class="dialogImage" />
                        </div>
                        <div class="dialogButtonLayout">
                            <button id="negativeButton" class="negativeButton" data-role="none">取消</button>
                            <button id="positiveButton" class="positiveButton" data-role="none">确定</button>
                        </div>
                    </div>
                </div>
            `);
        $('#negativeButton').on('click', () => {
            if (negativeAction) {
                negativeAction();
            }
            DialogUtility.dismissDialog();
        });
        $('#positiveButton').on('click', () => {
            if (positiveAction) {
                positiveAction();
            }
            DialogUtility.dismissDialog();
        });
    },
    /**
     * 刷磁条卡或IC卡Dialog
     */
    showDebitCardInfoDialog(magneticStripePositiveAction, ICPositiveAction, negativeAction) {
        JQMUtility.loader(`
                <div class="dialogLayout">
                    <div class="dialogBackground"></div>
                    <div class="dialogCard">
                        <div class="dialogHeaderLayout">读取借记卡</div>
                        <div class="dialogContentBigImageLayout">
                            <div class="dialogImageDes">读取借记卡</div>
                            <img src="${Base64Images.debitCardIcon}" class="dialogImage" />
                        </div>
                        <div class="dialogButtonLayout">
                            <button id="magneticStripeCardButton" class="positiveButton" data-role="none">磁条卡</button>
                            <button id="negativeButton" class="negativeButton" data-role="none">取消</button>
                            <button id="ICCardButton" class="positiveButton" data-role="none">芯片卡</button>
                        </div>
                    </div>
                </div>
            `);
        $('#negativeButton').on('click', () => {
            if (negativeAction) {
                negativeAction();
            }
            DialogUtility.dismissDialog();
        });
        $('#magneticStripeCardButton').on('click', () => {
            if (magneticStripePositiveAction) {
                magneticStripePositiveAction();
            }
            DialogUtility.dismissDialog();
        });
        $('#ICCardButton').on('click', () => {
            if (ICPositiveAction) {
                ICPositiveAction();
            }
            DialogUtility.dismissDialog();
        });
    },
    /**
     * 刷指纹Dialog
     */
    showFingerprintDialog(positiveAction, negativeAction) {
        JQMUtility.loader(`
                <div class="dialogLayout">
                    <div class="dialogBackground"></div>
                    <div class="dialogCard">
                        <div class="dialogHeaderLayout">指纹</div>
                        <div class="dialogContentBigImageLayout">
                            <div class="dialogImageDes">指纹</div>
                            <img src="${Base64Images.fingerprintIcon}" class="dialogFingerprint"/>
                        </div>
                        <div class="dialogButtonLayout">
                            <button id="negativeButton" class="negativeButton" data-role="none">取消</button>
                            <button id="positiveButton" class="positiveButton" data-role="none">确定</button>
                        </div>
                    </div>
                </div>
            `);
        $('#negativeButton').on('click', () => {
            if (negativeAction) {
                negativeAction();
            }
            DialogUtility.dismissDialog();
        });
        $('#positiveButton').on('click', () => {
            if (positiveAction) {
                positiveAction();
            }
            DialogUtility.dismissDialog();
        });
    },
    /* 调用外设相关 end */

    /**
     * 信息确认Dialog
     */
    showConsumerInfoConfirmDialog(consumerInfo, consumerID, cardCategory, cardNumber, originPasswordAction, newPasswordAction, signatureAction, positiveAction, negativeAction) {
        JQMUtility.loader(`
                <div class="dialogLayout">
                    <div class="dialogBackground"></div>
                    <div class="dialogConsumerInfoConfirm">
                        <div class="dialogHeaderLayout">客户信息确认</div>
                        <div class="dialogConsumerInfoConfirmLayout">
                            <div class="dialogConsumerInfoLayout">
                                <div class="editLayout">
                                    <label>客户号 :</label>
    						        <label id="cardOpenDialogConsumerNumber" class="dialog-content-span-size">${consumerID}</label>
                                </div>
                                <div class="editLayout">
                                    <label>手机号 :</label>
    						        <label id="cardOpenDialogPhoneNumber" class="dialog-content-span-size">${consumerInfo.MobilePhone}</label>
                                </div>
                                <div class="editLayout">
                                    <label>客户名称 :</label>
    						        <label id="cardOpenDialogConsumerName" class="dialog-content-span-size">${consumerInfo.CnShortName}</label>
                                </div>
                                <div class="editLayout">
                                    <label>证件类型 :</label>
    						        <label id="cardOpenDialogIDCardType" class="dialog-content-span-size">第二代居民身份证</label>
                                </div>
                                <div class="editLayout">
                                    <label>证件号码 :</label>
    						        <label id="cardOpenDialogIDCardNumber" class="dialog-content-span-size">${consumerInfo.LegalNum}</label>
                                </div>
                                <div class="editLayout">
                                    <label>借记卡类型 :</label>
    						        <label id="cardOpenDialogCardType" class="dialog-content-span-size">${cardCategory}</label>
                                </div>
                                <div class="editLayout">
                                    <label>借记卡卡号 :</label>
    						        <label id="cardOpenDialogCardNumber" class="dialog-content-span-size">${cardNumber}</label>
                                </div>
                                <div class="editLayout">
                                     <label>初始密码 :</label>
                                    <span class="dialog-content-span-size">
                                        <input id="originPassword" class="editView" type="password" data-role="none" readonly="readonly" />
                                    </span>
                                </div>
                                <div class="editLayout">
                                     <label>确认密码 :</label>
    						        <span class="dialog-content-span-size">
                                        <input id="newPassword" class="editView" type="password" data-role="none" disabled='disabled' readonly="readonly" />
                                    </span>
                                </div>
                                <div class="editLayout"></div>
                                <div class="editLayout"></div>
                            </div>
                            <div class="dialogConsumerSignatureLayout">
                                <div class="editLayout" style="flex-direction: column; align-items: flex-start;">
                                    <label>用户电子签名区</label>
                                    <div style="min-height: 180px; margin-top: 8px;">
                                        <img id="signatureImage" src="${Base64Images.signatureIcon}" style="width: 200px; height: 200px">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dialogButtonLayout">
                            <button id="negativeButton" class="negativeButton" data-role="none">取消</button>
                            <button id="positiveButton" class="positiveButton" data-role="none" disabled='disabled'>确定</button>
                        </div>
                    </div>
                </div>
            `);
        $('#originPassword').on('click', () => {
            if (originPasswordAction) {
                originPasswordAction();
            }
        });
        $('#newPassword').on('click', () => {
            if (newPasswordAction) {
                newPasswordAction();
            }
        });
        $('#signatureImage').on('click', () => {
            if (signatureAction) {
                signatureAction();
            }
        });
        $('#negativeButton').on('click', () => {
            if (negativeAction) {
                negativeAction();
            }
            DialogUtility.dismissDialog();
        });
        $('#positiveButton').on('click', () => {
            if (positiveAction) {
                positiveAction();
            }
            DialogUtility.dismissDialog();
        });
    },
    /**
     * 显示交易详情字段
     */
    showCardOpenBusinessDetails(model) {
        JQMUtility.loader(`
                <div class="dialogLayout">
                    <div class="dialogBackground"></div>
                    <div class="dialogBusinessDetails">
                        <div class="dialogHeaderLayout">
                            <label class="editTitle">交易明细</label>
                            <img id="closeImage" src="${Base64Images.failureIcon}" class="closeImage" />
                        </div>
                        <div class="dialogDetailsLayout">
                            <div class="dialogDetailsRowLayout">
                                <div class="editLayout">
                                    <label class="editTitle">客户号 :</label>
                                    <label class="editValue">${DataUtility.nullToEmptyString(model.CustmerCode)}</label>
                                </div>
                                <div class="editLayout">
                                    <label class="editTitle">客户姓名 :</label>
                                    <label class="editValue">${DataUtility.nullToEmptyString(model.consumerName)}</label>
                                </div>
                            </div>
                            <div class="dialogDetailsRowLayout">
                                <div class="editLayout">
                                    <label class="editTitle">证件类型 :</label>
                                    <label class="editValue">第二代居民身份证</label>
                                </div>
                                <div class="editLayout">
                                    <label class="editTitle">证件号码 :</label>
                                    <label class="editValue">${DataUtility.nullToEmptyString(model.consumerIDCardNumber)}</label>
                                </div>
                            </div>
                            <div class="dialogDetailsRowLayout">
                                <div class="editLayout">
                                    <label class="editTitle">手机号 :</label>
                                    <label class="editValue">${DataUtility.nullToEmptyString(model.phoneNumber)}</label>
                                </div>
                            </div>
                            <div class="dialogDetailsRowLayout">
                                <div class="editLayout">
                                    <label class="editTitle">借记卡类型 :</label>
                                    <label class="editValue">${DataUtility.nullToEmptyString(model.CARD_NAME)}</label>
                                </div>
                                <div class="editLayout">
                                    <label class="editTitle">借记卡卡号 :</label>
                                    <label class="editValue">${DataUtility.nullToEmptyString(model.LOCAL_REF_79)}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        $('#closeImage').on('click', () => {
            DialogUtility.dismissDialog();
        });
    },


};

export default DialogUtility;
