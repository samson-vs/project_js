const userId = new URL(location.href).searchParams.get('userId')
const postId = new URL(location.href).searchParams.get('userId')

const foo = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const users = await res.json();
    const user = (users.find(user => user.id ));
    const div = document.getElementById('block')
    const post = document.createElement('h2')
    post.innerHTML = 'post-details'
    post.className='titles'
    div.appendChild(post)
    const ul = document.createElement('ul')
    div.appendChild(ul)

    rec(user,ul)


}

void foo()


const a = async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const post = await res.json();
    const po = (post.find(post => post.id ));
    const div = document.getElementById('block')
    const coment = document.createElement('h2')
    coment.className='titles'
    coment.innerHTML = 'comments user'
    div.appendChild(coment)
    const ul = document.createElement('ul')
    div.appendChild(ul)


   rec(po,ul)
    const button = document.createElement('button')
    button.innerHTML = 'post of current user';
    button.onclick = () => {
        location.href = `../userInfo/index.html?userId=${userId}`
    }
    div.appendChild(button)

    const back = document.createElement('button')
    back.innerHTML = 'back user name';
    back.onclick = () => {
        location.href = `../userName/index.html`
    }

    div.appendChild(back)

}

void a()


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