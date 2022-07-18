import Coment_blok from "./Components/Coment_blok/Coment_blok.js"
import { useState } from "react";

function App() {

    const [commit, setCommit] = useState([])
    const [value, setValue] = useState('')
    
  return (
    <div className="App">
      <div className="input_main">
        <input value={value} onChange={e=>{ setValue(e.target.value)}} type={"text"}></input>

        <button onClick={()=>{
          setCommit(()=>{
            let info=[];
            info =  [...commit];
            info.push(value);
            return info
          });
          setValue("");
        } 
        }>Add</button>


      </div>
      {      
      commit.map((e,index)=>{
        let info = {new_comment:e,key:index}
      return <Coment_blok new_comment={info} setCommit={setCommit} commit={commit} />
      
      })
      }
     
    </div>
  );
}

export default App;
