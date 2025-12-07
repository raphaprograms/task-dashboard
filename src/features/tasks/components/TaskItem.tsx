import type { Task } from '../types';


function TaskItem(props: { task: Task }) {

    return <div>Task: {props.task.title}</div>
}

export default TaskItem;