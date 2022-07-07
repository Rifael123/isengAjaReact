
import './App.css';
import React from "react";
import Judul from "./component/Judul";

const App = () => {
  
  const [count, setLogin] = React.useState(false)
  
  const [username , setUsername] = React.useState("Rifael");
  
  const [password, setPassword] = React.useState("Sitorus");
  
  const login = () => {
    if(username === "Rifael" && password === "Sitorus") {
      setLogin(true);
    }else{
      setLogin(false);
    }
  }
  
  if(count){
    return(
      <div>
        <h1>Berhasil Login</h1>
        <button onClick = {function () {
          setLogin(false);
        }}>Log Out</button>
      </div>
      );
  }
  
  return (
    <fragment>
      <div>
       <Judul />
      </div>
      <div className = "form">
        <form>
         <center><input type="text" placeholder = "Username .." className = "username" value = {username}/></center>
         <center><input type = "text" placeholder = "Password ..." className = "password" value = {password}/></center>
         <center><button type = "button" onClick = {() => login()}>Login</button></center>
        </form>
      </div>
    </fragment>
    
    );
  
  
}

export default App;
