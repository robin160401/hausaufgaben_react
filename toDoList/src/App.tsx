import RenderTasks from "./components/renderTasks";
import GetTasks from "./components/getTasks";

function App() {

  return (
    <div className="flex items-center justify-center">
     <div className=" w-4/6">
        <h1 className="text-6xl text-center bg-purple-600 p-8 text-green-400">Website To Do</h1>
        <RenderTasks/>
        <GetTasks/>
     </div>
    </div>
  )
}

export default App
