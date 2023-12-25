import React,{Fragment,useEffect,useState} from 'react';

const ListTodos=()=>{

    const [todos,setTodos]=useState([]);

    const getTodos=async()=>{
            try {
                const response=await fetch("https://localhost:5000/todos");
                const jsonData= await response.json();
                setTodos(jsonData);
            } catch (err) {
                console.error(err.message);
            }
    }

   useEffect(()=>{
    getTodos();
   },[]);

   console.log(todos);

    return(
        <Fragment>
            {" "}
           <table class="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr> */}
            {todos.map(todo=>(
                <tr key="todo.todoid">
                    <td>{todo.description}</td>
                    <td>Edit</td>
                    <td>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </Fragment>
        
    )
}

export default ListTodos;