import React,{useEffect, useState} from 'react';

 function SignUp() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showTable, setShowTable] = useState(false);


    useEffect(() => {
         console.log(`FirstName: ${firstName}\nLastName: ${lastName}\nUsername: ${username}\nPassword: ${password}`);
    }, [firstName, lastName, username, password])

    return (
        <div className="SignUp">
            <h2>First Name</h2>
            <input type="text" placeholder="fisrtName" value={firstName} onChange={(e) =>{ setFirstName(e.target.value)}}/>
            <br />
            <h2>Last Name</h2>
            <input type="text" placeholder="LastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
            <br />
            <h2>Username</h2>
             <input type="text" placeholder='Username' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
             <br />
             <h2>Password</h2>
             <input type="text" placeholder="Password" value={password} onChange={(e) => {setPassword( e.target.value)}} />
             <br />
             <br />
             <button onClick={() => {setShowTable(!showTable)}}> {showTable ===true ? "Hide Table" : 'Show Table'}</button>
             <br />
             { showTable && 
             <table border="1">
                 <thead>
                     <tr>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Username</th>         
                         <th>Password</th>         
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>{firstName}</td>
                         <td>{lastName}</td>
                         <td>{username}</td>
                         <td>{password}</td>
                     </tr>
                 </tbody>
             </table>

             }
        </div>
    );
};

export default SignUp;