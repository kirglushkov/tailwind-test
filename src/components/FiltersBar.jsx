const FiltersBar = () => {
  return (
    <div>
    <div className="tab inline-flex">
      <button className="py-[10px] px-[16px] focus:bg-slate-300">View all</button>
      <button className="tab-button focus:bg-slate-300">Monitored</button>
      <button className="py-[10px] px-[16px] focus:bg-slate-300">Text</button>
    </div>

<form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                stroke="#667085"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full px-[14px] py-[10px] text-[16px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  )
}

export default FiltersBar