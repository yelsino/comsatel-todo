import Header from './OwnComponents/Header'
import { Stats } from './Stats/Stats'
import { Welcome } from './OwnComponents/Welcome'
import { IconConfig } from '../../components/Atoms/Icons'

const Dashboard = () => {
  return (
    <>
      <Header link='/tareas' text={<IconConfig />} />
      <Welcome />
      <Stats />
    </>
  )
}

export default Dashboard
