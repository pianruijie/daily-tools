import React from "react";
import {useState, useEffect} from "react";

export function Weather(){
  const [name] = useState('this is a weather');
  return (
    <div>
      {name}
    </div>
  );
}

