const express=require("express");
const cors=require("cors");
const app=express();
const pool=require("./db");

app.use(cors());
app.use(express.json());

app.post("/todos",async(req,res)=>{
    try{
        const {description}=req.body;
        const newTodo=await pool.query(
            "insert into todo (description) values ($1) returning *",
            [description]
        )
        res.json(newTodo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
})

app.get("/todos",async(req,res)=>{
    try{
        const alltodos=await pool.query(
            "select * from todo")
        res.json(alltodos.rows)    
    }
    catch(err){
         console.error(err.message);
    }
})

app.get("/todos/:id",async(req,res)=>{
  try {
      const {id}=req.params;
     const todo=await pool.query("select * from todo where todoid=$1",[id]);
      res.json(todo.rows[0]);

  } catch (error) {
      console.error(err.message);
  }
})

app.put("/todos/:id",async(req,res)=>{
    try {
        const {description}=req.body;
        const {id}=req.params;
        const updatetodo=await pool.query("update todo set description=$1 where todoid=$2",[description,id])
        res.json("data is updated");    
    } catch (error) {
        console.error(err.message);
    }
})

app.delete("/todos/:id",async(req,res)=>{
    const {id}=req.params;
    const deletequery=await pool.query("delete from todo where todoid=$1",[id])
    res.json("data is deleted");
})


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})
