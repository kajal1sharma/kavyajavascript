// server api => json 

// url => resousees 
// routes /user /login /register /producct/info => 
//user url => route (service)
// api (endpoint) abstraction

async function getInfo(){
    let result = await fetch("https://dummyjson.com/todos")
    console.log(result )
    result = await result.json();
    console.log(result)
}

getInfo()