import styles from "./todoitem.module.css";
import React from 'react';
export default function TodoItem({item,todos,setTodos}){
    function handleDelete(item){
       console.log("delete button clicked for item");
       setTodos(todos.filter((todo) => todo !== item));

    }
    
    function handleClick(name) {
      const newArray = todos.map((todo)=>
        todo.name === name ? {...todo,done: !todo.done } :todo
    )
      setTodos(newArray);


    }
    const className = item.done ? styles.completed : "" ;
    return (
    <div className={styles.item}>
        <div className={styles.itemName}>
            
        <span className={className} onClick={()=> handleClick(item.name)}>{item.name}</span>
        <span>
          <button
            onClick={()=>handleDelete(item)} 
            className={styles.deleteButton}>x</button>  
        </span>
        <hr className={styles.line}/>
    </div>
    </div>
    );
}