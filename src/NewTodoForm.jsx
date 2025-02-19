import { useState } from "react";


//qiky onSubmit eshte prop qe vjen prej App.js e kem kriju funksionin addToDo edhe e kem pru si prop.
export function NewToDoForm({onLindi}){

    const [newItem, setNewItem] =  useState("");
    function handleSubmit(e){
        e.preventDefault();
        
        if(newItem === "") return

        //qiky osht addToDo function prej atje
        onLindi(newItem)

        setNewItem("");
    
      }
 return(
 <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item" />
           <button className="btn">Add</button>
        </div>
    </form>
 )
}

