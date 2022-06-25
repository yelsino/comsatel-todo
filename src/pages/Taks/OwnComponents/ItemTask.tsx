import { IconNotCheck } from '../../../components/Atoms/Icons'

interface Props {
    task: { text: string, status: boolean, id: string }
}

export const ItemTask = ({ task }: Props) => {
    return (
        <div className=" bg-primary-100 px-3 py-3 gap-x-3 grid grid-cols-10/90 select-none  ">
            <span className="text-secondary-100"><IconNotCheck /></span>
            <p className="text-clip overflow-hidden  align-middle whitespace-pre-wrap break-words text-text-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore saepe dolore </p>
        </div>
    )
}
