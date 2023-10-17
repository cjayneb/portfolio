import React, { ReactNode } from 'react'
import "./Title.css";

interface TitleProps {
    children: ReactNode;
    color: string;
}



const Title = ({children, color}: TitleProps) => {
  return (
    <div className={color + " mainTitleFont"}>{children}</div>
  )
}

export default Title