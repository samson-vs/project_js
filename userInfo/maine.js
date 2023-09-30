const userId = new URL(location.href).searchParams.get('userId')
const foo = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    const block = document.getElementById('block')
    const ul = document.createElement('ul')
    block.appendChild(ul)
    rec(user, ul)


    const button = document.createElement('button')
    button.innerHTML = 'post of current user';
    button.onclick = () => {
        location.href = `../post-details/index.html?userId=${user.id}`
    }
    block.appendChild(button)
}

    void foo();

function rec (obj, key) {

    for (const failed in obj) {
        const value = obj[failed];
        if (typeof value === "object" ){
            ulB(failed,value, key)
        }else {
            liB(failed,value, key)
        }
    }

}
function ulB (kay, value, block) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    block.appendChild(li)
    li.appendChild(ul)
    ul.innerText = `${kay}`
    rec(value,ul)

}
function liB (value, user, key) {
  const li = document.createElement('li')
  li.innerText = `${value} ${user}`
    key.appendChild(li)
}