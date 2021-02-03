import React from "react";

// const search = () => {
//     alert("I got clicked!");
// };

// const fetchData = async () => { 
//     const response = await fetch("http://localhost:5000/post", 
//     {
//         method: 'POST',
//         headers: 'application.json',
//         body: document.getElementById("title")
//     });
//     console.log(response.body);
// }

const PostForm = () => {
    return(
        <div>
            <form action="post">
                <label>Post </label>
                <input type="text" id="title" placeholder="Title"/>
                <input type="text" id="content" placeholder="Content"/>
                <input type="text" id="author" placeholder="Author"/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    );
};



const SearchUsers = () => {
    const fetchData = async () => { 
    const response = await fetch(`http://localhost:5000/users`).then(response => response.json()).then(data => console.log(data))
    // const data = await response;
    // console.log(data);
};
    return(
        <div>
            <form action="post" onSubmit={fetchData()}>
                <label>Search </label>
                <input type="text" id="search-title" placeholder="Title"/>
                <input type="text" id="content" placeholder="Content"/>
                <input type="text" id="author" placeholder="Author"/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    );
};

export {PostForm, SearchUsers}