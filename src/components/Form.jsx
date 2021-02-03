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

    const getAuthors = async (e) => { 
        e.preventDefault();
        let dataGlobal =  await fetch(`http://localhost:5000/users`).then(response => response.json())
        console.log(dataGlobal);
        for(let i = 0; i < dataGlobal.length; i++){
            console.log(dataGlobal[i]._id)
            let option = document.createElement("option");
            option.text= dataGlobal[i].name;
            option.value = dataGlobal[i]._id;
            let select = document.getElementById("author");
            select.appendChild(option);
        }
     let authorButton = document.getElementById("author-button")
     authorButton.remove();
    };
        const fetchData = async (e) => { 
        e.preventDefault();
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        const myObject = {
            title: e.target[0].value,
            content: e.target[1].value,
            author: e.target[2].value
        }
        console.log(myObject)
        console.log(JSON.stringify(myObject))
        try {
            await fetch("http://localhost:5000/posts/601ad57572f0de2ca0164787", //<--------------- HARD CODED _ID NEEDS FIXING STILL BROKED
            {
                method: 'POST',
                headers: 'application/json',
                body: JSON.stringify(myObject)
    
            }).then(response => response.json()).then(data => console.log(data[0].content))
        } catch (error) {
            console.log(error)
        }
       
        // const data = await response;
        // console.log(data);
    };
    return(
        <div>
            <button id="author-button" onClick={getAuthors}>Get Authors</button>
            <form action="post" onSubmit={fetchData}>
                <label>Post </label>
                <input type="text" id="title" placeholder="Title"/>
                <input type="text" id="content" placeholder="Content"/>
                <select name="author" id="author">
                 
                </select>
                <input type="submit" name="submit"/>
            </form>
        </div>
    );
};



const SearchUsers = () => {
    const fetchData = async (e) => { 
    e.preventDefault();
    await fetch(`http://localhost:5000/users`).then(response => response.json()).then(data => console.log(data))
    // const data = await response;
    // console.log(data);
 
};

    return(
        <div>
            <form action="post" onSubmit={fetchData} >
                <label>Search </label>
                <input type="text" id="search-title" placeholder="Title"/>
                <input type="submit" name="submit" />
            </form>
        </div>
    );
};

export {PostForm, SearchUsers}