const foo = async() =>{
    const res = await  fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const block = document.getElementById('block')
    for (const user of users) {
     const button = document.createElement('button')
     button.innerText = `${user.id}  ${user.name}`;
     block.appendChild(button)
     button.onclick = () =>{
         location.href = `../userInfo/index.html?userId=${user.id}`
        }
    }
}



void foo();