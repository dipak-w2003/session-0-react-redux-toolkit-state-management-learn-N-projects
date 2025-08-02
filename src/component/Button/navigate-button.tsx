import { useNavigate } from "react-router-dom"
//import tailwind from "tailwindcss"
import React from "react"

export interface INavigate {
  tailwindCSSProps?: String | boolean,
  navigateWhere: number | string,
  btnName?: string,
  children?: React.ReactNode
}
const NavigateButton: React.FC<INavigate> = ({
  tailwindCSSProps,
  navigateWhere = -1,
  btnName = "click me",
  children

}) => {
  const navigate = useNavigate()

  const navigateTo = () => {


    if (typeof navigateWhere === "string") return navigate(navigateWhere)
    if (typeof navigateWhere === "number") return navigate(navigateWhere)
  }
  return <button className={`${tailwindCSSProps ?? 'flex items-center justify-center gap-2.5 px-2 py-2 bg-cyan-400'} cursor-pointer `} onClick={navigateTo}>

    <h4>{btnName}</h4>
    <span>
      {children}
    </span>

  </button>
}


export default NavigateButton
