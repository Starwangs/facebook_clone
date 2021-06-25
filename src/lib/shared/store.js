import { writable } from 'svelte/store'
import { db } from './firebase'

export const isDark = writable(false)
export const posts = writable([])

isDark.subscribe(bool => bool ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark'))

db.collection('posts').orderBy('timestamp').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') fetchDB(change.doc.data())
        else if (change.type === 'modified') updateDB(change.doc.data())
        else if (change.type === 'removed') delDB(change.doc.data())
    })
})


function fetchDB(post) {
    posts.update(allPost => allPost = [post, ...allPost])
}

function updateDB(post) {
    posts.update(allPost => {
        let copiedPolls = [...allPost];
        let updatePost = copiedPolls.find((post_) => post_.id === post.id);

        Object.assign(updatePost, post)
  
        return copiedPolls;
      })
}

function delDB(post) {
    posts.update(allPost => allPost.filter(post_ => post_.id !== post.id))
}