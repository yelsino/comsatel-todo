import Header from './OwnComponents/Header'
import { Stats } from './Stats/Stats'
import { Welcome } from './OwnComponents/Welcome'
import { IconConfig } from '../../components/Atoms/Icons'
import { useContext, useState, } from 'react'
import { TaskContext } from '../../context'
import { Modal } from '../../components/moleculas/Modal/Modal'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const { tasks, cleanTableTask, message, isLoading } = useContext(TaskContext);
  const [isModalOpen, setModalState] = useState(false);
  const navigate = useNavigate()
  const handleCleanTable = async () => {
    const res = await cleanTableTask()

    if (res) {
      toggleModal()
      localStorage.removeItem('nickname')
      navigate('/mi-nombre')
      alert('Se ha restablecido su progreso')
    }
    res &&
      !res && alert(message)
  }

  const toggleModal = () => setModalState(!isModalOpen);


  return (
    <>
      <Header link='/tareas' text={<button
        onClick={toggleModal}
      >
        <IconConfig />
      </button>} />
      <Welcome />
      <Stats tasks={tasks} />

      <Modal
        title={'Restablecer progreso'}
        message={'¿Estás seguro de que quieres restablecer tu progreso?'}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >

        <div className="flex gap-x-5 justify-center">
          {/* <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" >
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </button> */}
          <button
            disabled={isLoading}
            onClick={handleCleanTable}
            className="bg-primary-100 text-text-100 px-5 py-3 rounded-full hover:shadow-xl hover:bg-secondary-100 font-semibold transition ease-in-out duration-500 ">
            {isLoading ? 'Processing...' : 'Restablecer'}
          </button>
          <button
            onClick={toggleModal}
            className="bg-primary-100 text-text-100 px-5 py-3 rounded-full hover:shadow-xl hover:bg-secondary-100 font-semibold transition ease-in-out duration-500 ">
            Cancelar
          </button>
        </div>

      </Modal>
    </>
  )
}

export default Dashboard
