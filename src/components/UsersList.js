import React, {useState, useEffect} from 'react'
import axios from 'axios';


const UsersList = () => {
    const [todos,setTodos] = useState([]);
    const [allTodos,setAllTodos] = useState([]);
    

    useEffect(()=>{
        (async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
                console.log(res);
                setTodos(res.data); 
                setAllTodos(res.data); 
            } catch (error) {
                console.log(error);    
            }
        })();    
    },[]);

    const filterData = (e) => {
        const query = e.target.value;
        console.log(query);
        const filterTodos = allTodos.filter((todo) => todo.title.includes(query))
        setTodos(
            filterTodos
        )
    }
  return (
    <div>

        <input type="text" onChange={filterData}/>
        {
            todos.map((todo,id) => 
            { 
                return(
                   <div>{todo.id} <h3>{todo.title}</h3></div>
                )
            })
        }
    </div>
  )
}

export default UsersList