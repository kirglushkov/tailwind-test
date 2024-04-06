import * as Checkbox from '@radix-ui/react-checkbox'
import { useState } from 'react'

const StyledCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox.Root
        className={`w-[20px] h-[20px] rounded-[6px] flex align-middle justify-center items-center ${
          isChecked
            ? 'bg-[#f9f5ff] shadow-[#7f56d9] shadow-[0_0_0_1px_#7f56d9]'
            : 'bg-[#ffffff] shadow-[#c1c1c1] shadow-[0_0_0_1px_#7f56d9]'
        }`}
        id="c1"
        onCheckedChange={handleCheckboxChange}
        checked={isChecked}
      >
        <Checkbox.Indicator className="CheckboxIndicator">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6673 3.5L5.25065 9.91667L2.33398 7"
              stroke="#7F56D9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}

export default StyledCheckbox