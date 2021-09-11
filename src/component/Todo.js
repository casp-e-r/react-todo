import React,{useState} from 'react'
import "./Todo.css"
/* import $ from 'jquery' */

function Todo() {

    const[toDos,addTodos]= useState([])
    const[text,setText]= useState('')


    const removeTask=(index,status)=>{
        if(!status){
            if(window.confirm('🤷‍♂️   sure?...')){
                const remove=[...toDos]
                remove.splice(index,1)
                addTodos(remove)
            }
        }else{
            const remove=[...toDos]
            remove.splice(index,1)
            addTodos(remove)
        }
        
    }
    const date = new Date();


    const n = date.toDateString();


    


    
    return (
        <div className="container">

            <div className="input-section">
            <h1>things to do  </h1>
            <h3>{n}  </h3>
                <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="✍️ add tasks.."/>
                <div className="add-icon">
                <i className="fas  fa-plus" onClick={()=>{
                    if(text.length>0)
                         addTodos([...toDos,{id:Date.now(),text:text,status:false}])
                        setText('')
                    
                    /* console.log(text)
                    console.log(toDos) */
                }}></i>
                </div>
                
                
            </div>

            
            <ul>
                        {toDos.map((obj,index)=>{
                            if(!obj.status){
                            
                                return(
                                
                                        <div className="active">
                                        <li>
                                            <i className=" tick fa fa-check" onClick={(e)=>{
                                                console.log(obj.status)
                                                console.log(obj);
                                                addTodos(toDos.filter(obj1=>{
                                                    if(obj1.id===obj.id){
                                                        obj1.status=!obj.status
                                                    }
                                                    return obj1

                                                    
                                                }))
                                            }
                                            
                                            } value={obj.status}></i>
                                            
                                        
                                            <span>{obj.text}</span>
                                         
                                            {/* <i className="fa fa-pencil-square-o" ></i> */}

                                            <i className="fas fa-trash-alt" onClick={()=>removeTask(index,obj.status)}></i>
                                        

                                        </li>
                                        </div>
                                
                                )
                            }else{
                                return(
                                
                                    <div className="active ">
                                    <li>
                                        <i className=" tick fa fa-check" onClick={(e)=>{
                                            console.log(obj.status)
                                            console.log(obj);
                                            addTodos(toDos.filter(obj1=>{
                                                if(obj1.id===obj.id){
                                                    obj1.status=!obj.status
                                                }
                                                return obj1

                                                
                                            }))
                                        }
                                        
                                        } value={obj.status}></i>
                                        
                                    
                                        <span className="ticked">{obj.text}</span>
                                     
                                        {/* <i className="fa fa-pencil-square-o" ></i> */}

                                        <i className="fas fa-trash-alt" onClick={()=>removeTask(index,obj.status)}></i>
                                    

                                    </li>
                                    </div>
                            
                            )

                            }
                                  
                            
                        })}
            </ul>
            {/* <ul>
            {toDos.map((obj)=>{
                if(obj.status){
                    return(
                        <div className="done">
                            <h1>done</h1>
                            <li>{obj.text}</li>
                        </div>
                    
                    )
                }
                return null
            })}
            </ul> */}

            
                    

        </div>
    )
}

export default Todo;
