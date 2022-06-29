import { LayoutGroup, motion } from "framer-motion"
import { MouseEventHandler, useContext, useState } from "react"
import { InputText } from "../../components/Atoms/InputText"
import { SubTitle } from "../../components/Atoms/SubTitle"
import { Modal } from "../../components/moleculas/Modal/Modal"
import { TaskContext } from "../../context"
import Header from "../Dashboard/OwnComponents/Header"
import { ItemTask } from "./OwnComponents/ItemTask"

export const Tasks = () => {

  const {
    todayTasks,
    updateTask,
    selectTask,
    deleteTask,
    selectConfirmTask,
    confirmTask,
    // confirmTask,
  } = useContext(TaskContext)
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => setModalState(!isModalOpen);


  const handlerDeleteTask: MouseEventHandler<HTMLButtonElement> = () => {
    // @ts-ignore: Unreachable code error
    deleteTask(confirmTask)
    toggleModal()
    selectConfirmTask(null)
  }



  return (
    <div className="flex flex-col gap-y-5">
      <Header link="/estadisticas" text="Tareas" />

      <LayoutGroup>
        <motion.div
          layout
          className="flex flex-col gap-y-3 "
        >
          <InputText />
          <div className="w-full flex flex-col gap-y-2 text-text-100">
            <SubTitle text="Tareas pendientes" />
            <div className="flex flex-col gap-y-2 overflow-y-scroll h-[calc(100vh-400px)]">
              {
                todayTasks.map((task, index) => (
                  <ItemTask
                    key={index}
                    task={task}
                    updateTask={updateTask}
                    selectTask={selectTask}
                    toggleModal={toggleModal}
                    selectConfirmTask={selectConfirmTask}
                  />
                ))
              }

              {
                todayTasks.length === 0 &&
                <div className="text-center text-text-100">
                  No hay ninuna tarea pendiente, recuerda que todas las tareas creadas serán archivadas a las 12:00 pm
                </div>
              }
            </div>

          </div>
        </motion.div>
      </LayoutGroup>

      <Modal
        title={'¿Vas a eliminar esta tarea?'}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <div className="flex gap-x-5">
          <button
            onClick={handlerDeleteTask}
            className="bg-primary-100 text-text-100 px-5 py-3 rounded-full hover:shadow-xl hover:bg-secondary-100 font-semibold transition ease-in-out duration-500 ">
            Eliminar
          </button>
          <button
            onClick={toggleModal}
            className="bg-primary-100 text-text-100 px-5 py-3 rounded-full hover:shadow-xl hover:bg-secondary-100 font-semibold transition ease-in-out duration-500 ">
            Cancelar
          </button>
        </div>
      </Modal>

    </div>
  )
}

export default Tasks
