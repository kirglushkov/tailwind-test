const Pagination = () => {
  return (
    <div className="flex items-center px-[24px] justify-between h-[64px] w-full absolute bottom-0"> 
        <div className="my-text">Page 1 of 10</div>
        <div className="flex gap-[8px]">
            <button className="my-button my-text">Previous</button>
            <button className="my-button my-text">Next</button>
        </div>
    </div>
  )
}

export default Pagination