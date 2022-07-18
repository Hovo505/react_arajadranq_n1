import css from "./Coment_blok.css"
import React from 'react'

function Coment_blok({new_comment, setCommit ,commit}){

  function del(id){
    setCommit(()=>{
      let new_comment =[]
      new_comment=[...commit]
      new_comment.splice(id, 1);
      return new_comment
    })
  }
    return(
    <div className="blok">
      <h2>{new_comment.new_comment}</h2>
      <button id={new_comment.key} onClick={(e)=>{ del(e.target.id)}}>DEL</button>
    </div>
    )

}

export default Coment_blok;