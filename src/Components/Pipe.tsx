import React from 'react'
import "./Pipe.css";

interface PipeProps {
    h: string;
    type: string;
}

const Pipe = ({h, type}: PipeProps) => {
  return (
    <div className={'pipe ' + type} style={{height: h}}></div>
  )
}

export default Pipe