import { useState } from "react"
import { InputText } from "../../components/Atoms/InputText"
import { SubTitle } from "../../components/Atoms/SubTitle"
import Header from "../Dashboard/OwnComponents/Header"
import { ItemTask } from "./OwnComponents/ItemTask"

export const Tasks = () => {

  return (
    <div className="flex flex-col gap-y-5">
      <Header link="/estadisticas" text="Tareas" />

      <InputText />

      <div className="w-full flex flex-col gap-y-2">
        <SubTitle text="Tareas pendientes" />
        <div className="flex flex-col gap-y-2 overflow-y-scroll h-[calc(100vh-400px)]">
          {
            Array(10).fill(0).map((_, index) => (
              <ItemTask key={index} task={{ text: 'lorem lorem lorem', status: false, id: '321' }} />
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default Tasks

