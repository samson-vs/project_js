const userId = new URL(location.href).searchParams.get('userId')
const postId = new URL(location.href).searchParams.get('userId')

const foo = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const users = await res.json();
    const user = (users.find(user => user.id ));
    const div = document.getElementById('block')
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
    const ul = document.createElement('ul')
    div.appendChild(ul)

   rec(po,ul)
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