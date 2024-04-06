// eslint-disable-next-line react/prop-types
const Licence = ({ value, bgColor, textColor, dot }) => {
    let dotColor = value === 'Active' ? '#12B76A' : '#667085'
    return (
      <div className={`inline-flex gap-1 h-[22px] items-center justify-center rounded-[16px] p-[2px_8px_2px_6px]`} style={{background: bgColor}}>
        {dot ? <div><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill={dotColor} />
                </svg></div> : ''}
        <span className="font-medium text-sm leading-[150%]" style={{color: textColor}}>{value}</span>
      </div>
    )
  }
  
  export default Licence