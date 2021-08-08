import React,{
  useState,
  useMemo,
} from 'react';
import { useEffect } from 'react';

interface User {
  name:string;
  login:string;
  avatar_url:string;
}

function App() {
  const [users,setUsers]=useState<[User]>();
  const userNames = useMemo(()=>users?.map(user=>user.login).join(', ') || "",[users]);
  //console.log("userName",userNames)
//Tambem posso tipar usando <[User]> pra dizer que é um array de coisas do tipo User
  const loadData = async ()=>{
    const response = await fetch("https://api.github.com/users/JLucasM-eng");
    const data = await response.json()
    console.log("data",data)
    setUsers([data])
  }
 
  return (
    <div className="App">
      <button onClick = {()=>{loadData()}}>Buscar</button>
      <div>{userNames}</div>
    </div>
  );
}

export default App;
