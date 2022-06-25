// import { IconFire } from "../Atoms/Icons";
import { SubTitle } from "../../../components/Atoms/SubTitle";
import { ItemStats } from "./ItemStats";
import { MyActivity } from "./MyActivity";

export const Stats = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <SubTitle text="Sus estadisticas" />
      <div className="grid grid-cols-30/70 gap-2 gap-y-5 ">
        <div className="row-span-2 rounded-[30px]  flex justify-center items-center flex-col bg-primary-100">
          <ItemStats />
        </div>

        <ItemStats />
        <ItemStats />

        <MyActivity />
      </div>
    </div>
  );
};
