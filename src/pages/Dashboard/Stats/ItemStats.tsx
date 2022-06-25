
export const ItemStats = () => {
  return (
    <div className=" rounded-full p-3 bg-primary-100">
      <div className="flex items-center gap-x-2">
        <span className="text-orange-500">{/* <IconFire /> */}</span>
        <div className="flex flex-col ">
          <span className="font-poppins font-semibold text-secondary-100">300 task</span>
          <span className="font-poppins text-text-200 font-light truncate">
            completas
          </span>
        </div>
      </div>
    </div>
  )
}
