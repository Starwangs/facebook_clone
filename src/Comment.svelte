<script>
    import { db } from './lib/shared/firebase'
    import { diff_minutes } from './lib/shared/fx'
    import Reply from './Reply.svelte'
    export let id, displayName, photoURL, content, timestamp, replys, thisDisplayName, thisPhotoURL, postId, comments

    let isReply = false

    timestamp = diff_minutes(timestamp)

    let newReply = {
        displayName: thisDisplayName,
        photoURL: thisPhotoURL,
        content: '',
        timestamp: Date.now()
    }

    timestamp = diff_minutes(timestamp)

    async function addReply() {
        let copiedComment = comments.find(comment => comment.id === id)
        copiedComment.replys.push(newReply)
        console.log(comments)
        if (newReply.content) await db.collection('posts').doc(postId).update({comments: [...comments]})
        newReply.content = ''
        isReply = false
    }

    async function deleteComment() {
        let copiedComment = comments.filter(comment => comment.id !== id)
        db.collection('posts').doc(postId).update({comments: [...copiedComment]})
    }
</script>

<div class="flex space-x-2">
    <img src={photoURL} alt="" class="w-9 h-9 rounded-full" />
    <div>
        <div class="flex">
            <div class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                <span class="font-semibold block">{displayName}</span>
                <span>{content}</span>
            </div>
            <div class="ml-2 my-auto cursor-pointer" on:click={deleteComment}><i class='bx bx-dots-horizontal-rounded'></i></div>
        </div>
        <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
            <span class="font-semibold cursor-pointer mx-1">Like</span>
            <span class="font-semibold cursor-pointer mx-1" on:click={() => isReply = !isReply}>Reply</span>
            {timestamp}m
        </div>
        {#each replys as reply}
            <Reply {...reply} />
        {/each}
        
        {#if isReply}
            <div class="py-2 px-4">
                <div class="flex space-x-2">
                    <img src={thisPhotoURL} alt="" class="w-9 h-9 rounded-full">
                    <div class="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                        <form on:submit|preventDefault={addReply}>
                            <input type="text" placeholder="Write a comment..." class="outline-none bg-transparent flex-1" bind:value={newReply.content}>
                        </form>
                        <div class="flex space-x-0 items-center justify-center">
                            <span class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i class='custom3 filter-gray v4 smile'></i></span>
                            <span class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer dark:text-dark-txt  dark:hover:bg-dark-second text-xl"><i class='custom3 filter-gray v4 camera' ></i></span>
                            <span class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer dark:text-dark-txt  dark:hover:bg-dark-second text-xl"><i class='custom3 filter-gray v4 gif' ></i></span>
                            <span class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer dark:text-dark-txt  dark:hover:bg-dark-second text-xl"><i class='custom3 filter-gray v4 sticker' ></i></span>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>