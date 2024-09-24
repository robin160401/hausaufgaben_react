import RenderTasks from "./components/renderTasks";
import GetTasks from "./components/getTasks";

function App() {

  return (
    <>
     <div>
        <h1 className="text-3xl">Website To Do</h1>
        <RenderTasks/>
        <GetTasks/>
     </div>
    </>
  )
}

export default App
