import React,{Fragment,useState} from 'react';
const InputTodos=()=>{

    const [description,setDescription]=useState("");

    const onSubmitForm= async e=>{
        e.preventDefault()
        try {
            const body={description};
            const response=await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location="/";
        } catch (err) {
            console.error(err.message);
        }

    }

    return(
        <Fragment>
             <h1 className="text-center mt-5">Todo List App</h1>
             <form className="d-flex mt-5">
                <input className="form-control" type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
                <button className="btn btn-success" onSubmit={onSubmitForm}>Add</button>
             </form>
        </Fragment>
    )
};

export default InputTodos;