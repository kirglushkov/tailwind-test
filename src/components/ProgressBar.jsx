/* eslint-disable react/prop-types */
const ProgressBar = ({ value }) => {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="w-[238px] bg-gray-200 rounded-full h-[8px] dark:bg-gray-700">
        <div className={"bg-my-violet h-[8px] rounded-full w-[45%]"} style={{ width: `${value}%`}}></div>
      </div>
      <span>{value}</span>
    </div>

  )
}

export default ProgressBar