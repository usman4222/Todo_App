import axios from 'axios'


const baseUrl = "http://localhost:4000"

const getAllTodo = (setTodo) => {
    axios.get(baseUrl)
      .then(({ data }) => {
        console.log("Fetched data:", data);
        setTodo(data);
      })
      .catch((error) => {
        console.log("Error while setting Todo:", error);
      });
  }
  

const addTodo = (text, setTodo, setText) =>{

    axios.post(`${baseUrl}/save`, {text})
    .then((data)=>{
        console.log("This is saved data",data)
        setText("")
        getAllTodo(setTodo)
    })
    .catch((error) =>{
        console.log("This is an error while saving Todo", error )
    })
}


const updateTodo = (text, todoId, setTodo, setText, setUpdate) =>{

    axios.post(`${baseUrl}/update`, {_id: todoId, text})
    .then((data)=>{
        setText("")
        setUpdate(false)
        getAllTodo(setTodo)
    })
    .catch((error) =>{
        console.log("This is an error while Updating Todo", error )
    })
}


const deleteTodo = (_id, setTodo) =>{

    axios.post(`${baseUrl}/delete`, {_id})
    .then((data)=>{
        console.log(data)
        getAllTodo(setTodo)
    })
    .catch((error) =>{
        console.log("This is an error while Updating Todo", error )
    })
}

export {getAllTodo, addTodo, updateTodo, deleteTodo};