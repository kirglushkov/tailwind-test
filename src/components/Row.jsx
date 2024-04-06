import StyledCheckbox from "./Checkbox"
import ProgressBar from "./ProgressBar"
import Badge from "./Badge"
import Licence from "./Licence"
import PropTypes from 'prop-types'

const Row = ({ name, url, icon, progress, statusValue, status, date, license }) => {
    return (
        <div className="flex h-[72px] w-full items-center border-b">
            <div className="flex gap-[12px] w-[292px] pl-[24px]">
                <StyledCheckbox />
                <img src={icon} />
                <div className="flex flex-col">
                    <span>{name}</span>
                    <span>{url}</span>
                </div>
            </div>
            <div className="w-[292px] pl-[24px] pr-[8px]">
                <ProgressBar value={progress} />
            </div>
            <div className="w-[72px]">
                <Badge down={status} value={statusValue} textColor={'#027a48'} bgColor={'#ecfdf3'} />
            </div>
            <div className="w-[131px] pl-[24px] text-[#667085] leading-[143%] text-[14px] font-[400]">{date}</div>
            <div></div>
            <div className="w-[312px] pl-[24px] flex gap-[4px]">
                {license.map((item, index) => {
                    return (
                        <Licence key={index} dot={item.dot} value={item.name} textColor={item.textColor} bgColor={item.bgColor} />
                    )
                })}
            </div>

            <div className="w-[116px] pl-[16px]">
                <button className="custom-button" onClick={""}><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 5.00008H3.16667M3.16667 5.00008H16.5M3.16667 5.00008V16.6667C3.16667 17.1088 3.34226 17.5327 3.65482 17.8453C3.96738 18.1578 4.39131 18.3334 4.83333 18.3334H13.1667C13.6087 18.3334 14.0326 18.1578 14.3452 17.8453C14.6577 17.5327 14.8333 17.1088 14.8333 16.6667V5.00008H3.16667ZM5.66667 5.00008V3.33341C5.66667 2.89139 5.84226 2.46746 6.15482 2.1549C6.46738 1.84234 6.89131 1.66675 7.33333 1.66675H10.6667C11.1087 1.66675 11.5326 1.84234 11.8452 2.1549C12.1577 2.46746 12.3333 2.89139 12.3333 3.33341V5.00008M7.33333 9.16675V14.1667M10.6667 9.16675V14.1667" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </button>
                <button className="custom-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.166 2.49993C14.3849 2.28106 14.6447 2.10744 14.9307 1.98899C15.2167 1.87054 15.5232 1.80957 15.8327 1.80957C16.1422 1.80957 16.4487 1.87054 16.7347 1.98899C17.0206 2.10744 17.2805 2.28106 17.4993 2.49993C17.7182 2.7188 17.8918 2.97863 18.0103 3.2646C18.1287 3.55057 18.1897 3.85706 18.1897 4.16659C18.1897 4.47612 18.1287 4.78262 18.0103 5.06859C17.8918 5.35455 17.7182 5.61439 17.4993 5.83326L6.24935 17.0833L1.66602 18.3333L2.91602 13.7499L14.166 2.49993Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

Row.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string,
    progress: PropTypes.string,
    statusValue: PropTypes.number,
    status: PropTypes.bool,
    date: PropTypes.string,
    license: PropTypes.array
}

export default Row