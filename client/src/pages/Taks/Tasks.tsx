import { useEffect, useState } from "react"
import { InputText } from "../../components/Atoms/InputText"
import { SubTitle } from "../../components/Atoms/SubTitle"
import Header from "../Dashboard/OwnComponents/Header"
import { ItemTask } from "./OwnComponents/ItemTask"

export const Tasks = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/tasks')
      .then(response => response.json())
      .then(json => setTasks(json))
  }, [])

  return (
    <div className="flex flex-col gap-y-5">
      <Header link="/estadisticas" text="Tareas" />

      <InputText />

      <div className="w-full flex flex-col gap-y-2">
        <SubTitle text="Tareas pendientes" />
        <div className="flex flex-col gap-y-2 overflow-y-scroll h-[calc(100vh-400px)]">
          {
            tasks.map((task, index) => (
              <ItemTask key={index} task={task} />
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default Tasks

