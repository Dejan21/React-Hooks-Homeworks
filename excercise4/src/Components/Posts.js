import React from 'react';

const Posts = ({postList}) => {
    return (
        <div className= "Posts">
            
            {postList.length > 0 ?
             <table border="1">
                 <thead>
                     <tr>
                         <th>Userid</th>
                         <th>id</th>
                         <th>title</th>
                         <th>Body</th>
                     </tr>
                 </thead>
                 <tbody>
                     {postList.map(post=> {
                         return(
                             <tr key={post.id}>
                                <td>{post.userid}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                             </tr>
                         )
                     })}
                 </tbody>
             </table>

               : 
            <h2>Loading ....</h2>}
        </div>
    );
};

export default Posts;