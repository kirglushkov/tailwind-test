import Container from "./components/Container"
import EyeSVG from "./components/EyeSVG"
import SecondSVG from "./components/SecondSVG"


export default function App() {
  return (
    <Container>
        <div>
          <div>
            <div className="font-medium text-xs text-my-green mb-5">
              <span>React</span>
            </div>
            <div className="mb-[32px]">
              <span className="font-bold text-xl text-black">React 18 — Reactjs Latest Version to Bring Lots...</span>
              <br/>
              <span className="font-[400] text-[14px] text-black opacity-80">The extensively forecasted Version of React 18 has emerged finally. Its company has ultimately disclosed...</span>
            </div>
          </div>
          <svg width="266" height="2" viewBox="0 0 266 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M1 1H265" stroke="#333333" strokeLinecap="round" />
          </svg>
          <div className="mt-[16px] flex justify-between">
            <div className="flex gap-2">
              <SecondSVG/>
              <span>author321</span>
            </div>
            <div className="flex gap-2 align-middle justify-center">
              <EyeSVG/>
                <span>321</span>
            </div>
          </div>
        </div>
    </Container>
  )
}