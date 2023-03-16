import { useState } from "react";

export default function More(props) {

  const [word,setWord] = useState("")
  const [title,setTitle] = useState("")
  var today = new Date(),

  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); 

  return (
    <div>
        <form>
            <input type="text" value="Title"></input>
            <input type="text" value="Data"></input>
            <p>Date: 3/3/23</p>
            <p>{Date().toLocaleString()}</p>

        </form>
        
        <button onclick={props.del}>x</button>
    </div>
  );
}
