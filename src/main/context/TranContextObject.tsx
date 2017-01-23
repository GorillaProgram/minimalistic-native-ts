/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * 服务
 */
const TranContextObject = {

    CTL: {
        // 业务控制
        pageNo: '',
        pageLength: '',
        recordNum: '',
        fileName: '',
        funCode: '',
        transModel: '',
        transModelService: '',
        authModel: '',
        syncModel: '',
        authType: '',
        fixAuthStrategy: '',
        checkType: '',
        fixCheckStrategy: '',
        isRegTxJournal: '',
        isRegOprTrace: '',
        isLock: ''
    },
    COH: {
        // 公共信息
        transCode: '',
        transDate: '',
        transInstno: '',
        agentInstno: '',
        transTeller: '',
        transTellerPwd: '',
        tellerWorkModel: '',
        transSerialNo: '',
        serviceSerialNo: '',
        transTime: '',
        authTeller: '',
        transAuthNo: '',
        checkTeller: '',
        workstationCode: '',
        workstationIP: '',
        currentVersion: '',
        phaseVersion: '',
        deleteTeller: '',
        deleteAuthTeller: '',
        currentInstno: '',
        currentTeller: '',
        cancelTeller: '',
        OFSReqHead: {
            userName: '',
            userPwd: '',
            tellerCashBox: '',
            company: ''
        }
    },
    BDY: {
        // 对应RQD, 交易数据

    },
    RSH: {
        //
        succFlag: '',
        returnCode: '',
        returnMessage: '',
        bsDate: '',
        t24Date: '',
        OFSReqHead: {

        }
    }

};

export default TranContextObject;
