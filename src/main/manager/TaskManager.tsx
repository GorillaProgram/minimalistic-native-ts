/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *      AtomicTask管理类, 用来组合AtomicTask, 形成交易顺序
 */
import AtomicTask from '../task/AtomicTask';

const TaskManager = {

    ...AtomicTask

};

export default TaskManager;
