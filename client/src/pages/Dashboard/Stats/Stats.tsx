// import { IconFire } from "../Atoms/Icons";
import moment from "moment";
import { useEffect, useState } from "react";
import { SubTitle } from "../../../components/Atoms/SubTitle";
import { Task } from "../../../interfaces/Tasks";
import { ItemStats } from "./ItemStats";
import { MyActivity } from "./MyActivity";

interface Props {
  tasks: Task[];
}

export const Stats = ({ tasks }: Props) => {

  const [total, setTotal] = useState(0);
  const [missing, setMissing] = useState(0);
  const [finished, setFinished] = useState(0);

  const getTotalTasks = () => {
    setTotal(tasks.length);
  }

  const formatDate = (date: Date) => moment(date).format('L')

  const getMissingTasks = () => {
    const missingTasks = tasks.filter(({ status, createdAt }) => {
      return formatDate(new Date()) === formatDate(createdAt) && status === false;
    });
    setMissing(missingTasks.length);
  }

  const getFinishedTasks = () => {
    const finishTasks = tasks.filter(({ status, createdAt }) => {
      return formatDate(new Date()) === formatDate(createdAt) && status === true;
    });
    setFinished(finishTasks.length);
  }

  useEffect(() => {
    getTotalTasks();
    getMissingTasks();
    getFinishedTasks();
  }, [tasks])

  return (
    <div className="flex flex-col gap-y-5">
      <SubTitle text="Sus estadisticas" />
      <div className="grid grid-cols-30/70 gap-2 gap-y-5 ">
        <div className="row-span-2 rounded-[30px]  flex justify-center items-center flex-col bg-primary-100">
          <ItemStats number={total} text={'creadas'} icon={true} />
        </div>

        <ItemStats number={missing} text={'pendientes'} />
        <ItemStats number={finished} text={'finalizadas'} />

        <MyActivity tasks={tasks} />
      </div>
    </div>
  );
};
