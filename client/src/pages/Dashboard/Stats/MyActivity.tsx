import moment from "moment";
import { Task } from "../../../interfaces/Tasks";
import LightBar from "./LightBar";

interface Props {
  tasksByDays: [string, Task[]][]
}

export const MyActivity = ({ tasksByDays }: Props) => {

  // select the last 7 days of tasksByDays
  return (
    <div className="col-span-2  rounded-full p-5 flex font-poppins gap-x-5 items-center bg-primary-100">

      <div className="flex flex-col items-center text-secondary-200 font-bold text-xs">
        <span>My</span>
        <span>Activity</span>
      </div>
      <div className={`flex gap-x-3 text-xs ${tasksByDays.length >= 1 ? 'justify-start' : 'justify-center'}   w-full`}>
        {
          tasksByDays.slice(-7).map(([date, tasks]) => {
            return (
              <LightBar key={date} tasksToday={tasks} date={date} />
            )
          })
        }
        {tasksByDays.length === 0 && (
          <p className="text-text-200 text-center font-poppins text-base">Ningúna tarea</p>
        )}

      </div>
    </div>
  );
};


