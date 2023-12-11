import React from "react";
import {useState, useEffect} from "react";

export function CountDown(){
  const [name] = useState('this is a countdown');
  return (
    <div>
      {name}
    </div>
  );
}

