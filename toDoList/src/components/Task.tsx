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

    return <div className="flex justify-between bg-slate-300 pl-5 py-2" >
        <div className="flex">
            <input type="checkbox" onChange={handleCheckBox}/>
            <div className={`${taskClass} pl-3`}>{probs.children}</div>
        </div>
        <button className="p" onClick={deleteTask}>❌</button>
    </div>
}

export default Task;