import React,{useState,useEffect} from 'react';
import Dropdown from './Dropdown';
import Input from './Input';


 function Login () {

    const elements = [
        {value:"App 1", name: "App 1"},
        {value:"App 2", name: "App 2"},
        {value:"App 3", name: "App 3"}
    ]
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [comment, setComment] = useState("");
    const [fieldType,setFieldType] = useState("password");
    const [longComment,setLongComment] = useState(false);
    const [selectedOption, setSelectedOption] = useState('App 1')
    
    
    useEffect(() => {
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Comment:", comment);
    },[username,password,comment])
   
   function changeFieldType () {
       setFieldType(
           fieldType ==="password" ? 'text' : "password"
       )
   }
  
   function handleSubmit(event) {
       event.preventDefault();
       alert(`Username: ${username}\nPassword:${password}\nComment: ${comment}\nSuccessfully logged in into: ${selectedOption}`)
   }

    return (
        <div id="Login">
            <form onSubmit={handleSubmit}>
                <Input type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) =>{setUsername(e.target.value)}} />
                
                <Input 
                  type={fieldType}
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
                  toggle={changeFieldType}
                  />
                  <Input 
                  type="text"
                  placeholder="Enter comments"
                  value={comment}
                  name="comment"
                  onChange={(e)=> {setComment(e.target.value)}}
                  renderTextArea={longComment}
                  changeInput={() =>{setLongComment(!longComment)} }
                  />
                  
                   <Dropdown elements={elements} changeOption={(e) =>setSelectedOption(e.target.value)}/>
                   <br />
                  <button className="action-button">Sign In</button>
            </form>
        </div>
    );
};

export default Login;