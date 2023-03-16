import { useState,useEffect } from "react";

export default function More(props) {

  const [time, setTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <form>
        <label>
          Title: 
          <input type="text"/>
        </label>
        <br/>


        <label>
          Notes: 
          <textarea type="text"/>
        </label>
      </form> 
      <h1>{time}</h1>
      <p>{time}</p>  
    </>
  );
}
