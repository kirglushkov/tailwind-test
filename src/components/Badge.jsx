// eslint-disable-next-line react/prop-types
const Badge = ({ down, value, bgColor, textColor }) => {
    return (
      <div className={`inline-flex gap-1 h-[22px] items-center justify-center rounded-[16px] p-[2px_8px_2px_6px]`} style={{background: bgColor}}>
        <div>
          {down ? (
            <div>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1.5V8.5M5 8.5L8.5 5M5 8.5L1.5 5"
                  stroke="#F04438"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6"
                  stroke="#12B76A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
        <span className="font-medium text-sm leading-[150%]" style={{color: textColor}}>{value}%</span>
      </div>
    )
  }
  
  export default Badge