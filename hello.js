const foo = async() =>{
    const res = await  fetch('https://jsonplaceholder.typicode.com/users');
    const user = await res.json();
}



void foo();