import { useEffect, useState } from "react";
import Task from "./Task";

function RenderTasks(){
    const [tasks, setTasks] = useState<string[]>([]);

    useEffect(()=> {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(storedTasks)
    }, []);

    const handleDeleteTask = (taskId: string) => {
        const updatedTasks = tasks.filter(task => task !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    return <div>
        {tasks.map((task:any) => (
            <Task key={task} id={task} onDelete={handleDeleteTask}>
                {task}
            </Task>
        ))}
    </div>
}

export default RenderTasks;