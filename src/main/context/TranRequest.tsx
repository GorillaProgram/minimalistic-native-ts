/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * 交易
 */
const TranRequest = {

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
    RQD: {
        // 交易数据
        
    }

};

export default TranRequest;
