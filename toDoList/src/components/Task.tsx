import { useState } from "react";

interface TaskProbs{
    id: string;
    children: React.ReactNode;
    onDelete: (id:string) => void;
}

function Task(probs: TaskProbs){

    const [taskDone, setTaskDone] = useState(false);
    const handleCheckBox = () => {
        setTaskDone(!taskDone);
    }
    const taskClass = taskDone? `line-through` : "";

    const deleteTask = () => {
        probs.onDelete(probs.id);
    }

    return <div className="flex">
        <input type="checkbox" onChange={handleCheckBox}/>
        <div className={taskClass}>{probs.children}</div>
        <button onClick={deleteTask}>x</button>
    </div>
}

export default Task;