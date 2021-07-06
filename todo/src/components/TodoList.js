import React, { useContext } from 'react'
import { TaskContext } from '../contexts/task'

const TodoList = ({ tasks }) => {
    const { toggleCompleted } = useContext(TaskContext);

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}
                    onClick={() => toggleCompleted(task.id)}
                    className={task.completed ? "completed" : ""}>
                    <li>{task.item}</li>
                </div>
            ))}
        </div>
    )
}

export default TodoList;