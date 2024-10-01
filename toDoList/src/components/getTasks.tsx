import { useState } from "react";

function GetTasks(){
    const [task, setTask] = useState("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (task) => {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks))
        console.log("Saving task:", task);
        setTask("");
    }

    return <form className="flex" onSubmit={handleSubmit}>
        <input onChange={
            (event) => {
                setTask(event.target.value);
            }
        } className="border-2 border-black w-full" type="text" value={task}/>
        <button className="border-2 border-black" type="submit">Submit</button>
    </form>
}

export default GetTasks;