import React from "react";
import "./Pipe.css";

interface PipeProps {
  hT: string;
  hB: string;
}

const Pipe = ({ hT, hB }: PipeProps) => {
  return (
    <>
      <div className="pipe pipeTop" style={{ height: hT + "px" }}></div>
      <div className="pipe pipeBottom" style={{ height: hB + "px" }}></div>
    </>
  );
};

export default Pipe;
