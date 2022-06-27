import Header from './OwnComponents/Header'
import { Stats } from './Stats/Stats'
import { Welcome } from './OwnComponents/Welcome'
import { IconConfig } from '../../components/Atoms/Icons'
import { useEffect, useState } from 'react'

const Dashboard = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/tasks')
      .then(response => response.json())
      .then(json => setTasks(json))
  }, [])

  return (
    <>
      <Header link='/tareas' text={<IconConfig />} />
      <Welcome />
      <Stats tasks={tasks} />
    </>
  )
}

export default Dashboard
