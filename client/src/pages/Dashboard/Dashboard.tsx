import Header from './OwnComponents/Header'
import { Stats } from './Stats/Stats'
import { Welcome } from './OwnComponents/Welcome'
import { IconConfig } from '../../components/Atoms/Icons'
import { useContext, } from 'react'
import { TaskContext } from '../../context'

const Dashboard = () => {

  const { tasks } = useContext(TaskContext);

  return (
    <>
      <Header link='/tareas' text={<IconConfig />} />
      <Welcome />
      <Stats tasks={tasks} />
    </>
  )
}

export default Dashboard
