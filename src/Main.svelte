<script>
    import Post from './Post.svelte'
    import { db, storage } from './lib/shared/firebase'
    import { posts } from './lib/shared/store'
    import { v4 as uuidv4 } from 'uuid'
    import { flip } from "svelte/animate"
    import { scale, slide } from "svelte/transition"
    export let displayName, photoURL

    let newPost = {
        id: '',
        displayName,
        photoURL,
        timestamp: Date.now(),
        content: {
            text: '',
            photo: []
        },
        like: 30,
        comments: [],
        share: 10
    }

    let inputFile
    let imageUploaded = 0

    async function addPost() {
        newPost.id = uuidv4()
        for (let i = 0; i < inputFile.files.length; i++) if (i < 4) {
            await storage.ref(`${newPost.id}/${inputFile.files[i].name}`).put(inputFile.files[i])
            await storage.ref(`${newPost.id}/${inputFile.files[i].name}`).getDownloadURL().then(url => newPost.content.photo.push(url))
        }
        if (newPost.content.text || newPost.content.photo) await db.collection("posts").doc(newPost.id).set(newPost);
        newPost.content.text = ''
        newPost.content.photo = []
        imageUploaded = 0
    }
</script>

<div class="w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2">
    <div class="relative flex space-x-2 pt-4">
        <div class="w-1/4 sm:w-1/6 h-44 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer">
            <div class="h-3/5 overflow-hidden">
                <img src={photoURL} alt=""
                    class="w-full group-hover:transform group-hover:scale-110 transition-all duration-700" style="object-fit: cover;" />
            </div>
            <div
                class="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
                <span class="font-semibold">
                    Create <br> Story
                </span>
                <div
                    class="w-10 h-10 rounded-full bg-blue-500 text-white grid place-items-center text-2xl border-4 border-white dark:border-dark-second absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <i class="bx bx-plus"></i>
                </div>
            </div>
        </div>
        <div class="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
            <div class="relative h-full group cursor-pointer">
                <img src="static/story-1.jpg" alt="" class="group-hover:transform
        group-hover:scale-110 transition-all duration-700 h-full w-full">
                <div class="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                <span class="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                    Your story
                </span>
                <div class="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                    <img src={photoURL} alt="" />
                </div>
            </div>
        </div>
        <div class="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
            <div class="relative h-full group cursor-pointer">
                <img src=static/story-2.jpg alt="" class="group-hover:transform
        group-hover:scale-110 transition-all duration-700 h-full w-full">
                <div class="w-full h-full hover:bg-black absolute top-0 left-0 hover:bg-opacity-10"></div>
                <span class="absolute bottom-0 left-2 pr-2 pb-2 font-semibold text-white">
                    Sarisa Junton
                </span>
                <div class="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                    <img src="static/friend-4.jpg" alt="" />
                </div>
            </div>
        </div>
        <div class="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
            <div class="relative h-full group cursor-pointer">
                <img src=static/story-3.jpg alt="" class="group-hover:transform
        group-hover:scale-110 transition-all duration-700 h-full w-full">
                <div class="w-full h-full hover:bg-black absolute top-0 left-0 hover:bg-opacity-10"></div>
                <span class="absolute bottom-0 left-2 pr-2 pb-2 font-semibold text-white">
                    ณัฐพัชร์ เพ็ชรสิมาลัย
                </span>
                <div class="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                    <img src="static/friend-3.jpg" alt="" />
                </div>
            </div>
        </div>
        <div class="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
            <div class="relative h-full group cursor-pointer">
                <img src=static/story-4.jpg alt="" class="group-hover:transform
        group-hover:scale-110 transition-all duration-700 h-full w-full">
                <div class="w-full h-full hover:bg-black absolute top-0 left-0 hover:bg-opacity-10"></div>
                <span class="absolute bottom-0 left-2 pr-2 pb-2 font-semibold text-white">
                    Kampol Chumjun
                </span>
                <div class="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                    <img src="static/friend-2.jpg" alt="" />
                </div>
            </div>
        </div>
        <div class="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
            <div class="relative h-full group cursor-pointer">
                <img src=static/story-5.jpg alt="" class="group-hover:transform
        group-hover:scale-110 transition-all duration-700 h-full w-full">
                <div class="w-full h-full hover:bg-black absolute top-0 left-0 hover:bg-opacity-10"></div>
                <span class="absolute bottom-0 left-2 pr-2 pb-2 font-semibold text-white">
                    Thanate Lekwaree
                </span>
                <div class="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                    <img src="static/friend-1.jpg" alt="" />
                </div>
            </div>
        </div>
        <div
            class="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl bg-white absolute -right-6 top-1/2 transform -translate-y-1/4 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow text-gray-500 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
            <i class="bx bx-right-arrow-alt"></i>
        </div>
    </div>

    <div class="px-4 mt-6 shadow rounded-lg bg-white dark:bg-dark-second">
        <div class="px-2 py-4 border-b border-gray-300 dark:border-dark-third flex space-x-4">
            <img src={photoURL} alt="" class="w-10 h-10 rounded-full" />
            <div
                class="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
                <form on:submit|preventDefault={addPost}>
                    <input type="text" class="outline-none bg-transparent flex-1 pr-4" placeholder="What's on your mind, {displayName.split(' ')[0]}?" bind:value={newPost.content.text} />
                </form>
            </div>
        </div>
        <div class="p-2 flex">
            <div
                class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer">
                <i class="custom v1 live"></i>
                <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
            </div>
            <div
                class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer"
                on:click={() => document.querySelector('#uploader').click()}>
                <i class="custom v1 pic"></i>
                <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Photo/Video {imageUploaded ? `(${imageUploaded})` : ''}</span>
                <input type="file" id="uploader" hidden multiple bind:this={inputFile} on:change={() => imageUploaded += inputFile.files.length}>
            </div>
            <div
                class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer">
                <i class="custom v1 emoji"></i>
                <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Feeling/Activity</span>
            </div>
        </div>
    </div>

    <div class="p-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second overflow-hidden">
        <div class="flex space-x-4 relative">
            <div
                class="w-1/2 lg:w-3/12 flex space-x-2 items-center justify-center border-2 border-blue-200 dark:border-blue-700 rounded-full cursor-pointer">
                <i class="custom v2 video"></i>
                <span class="text-sm font-semibold text-blue-500">Create Room</span>
            </div>
            <div class="relative cursor-pointer">
                <img src="static/friend-4.jpg" alt="" class="rounded-full" />
                <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div class="relative cursor-pointer">
                <img src="static/friend-3.jpg" alt="" class="rounded-full" />
                <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div class="relative cursor-pointer">
                <img src="static/friend-2.jpg" alt="" class="rounded-full" />
                <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div class="relative cursor-pointer">
                <img src="static/friend-1.jpg" alt="" class="rounded-full" />
                <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
                <img src="static/friend-4.jpg" alt="" class="rounded-full" />
                <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
                <img src="static/friend-3.jpg" alt="" class="rounded-full" />
                <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
                <img src="static/friend-2.jpg" alt="" class="rounded-full" />
                <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
                <img src="static/friend-1.jpg" alt="" class="rounded-full" />
                <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
                <img src="static/friend-4.jpg" alt="" class="rounded-full" />
                <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div
                class="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl text-gray-500 bg-white absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
                <i class="bx bx-chevron-right"></i>
            </div>
        </div>
    </div>

    <div>

        {#each $posts as post, i (post.id)}
            <div in:scale={{delay: i * 200, duration: 600}} out:slide animate:flip={{duration: 500}}><Post {...post} thisDisplayName={displayName} thisPhotoURL={photoURL} /></div>
        {:else}
            <div class="bg-yellow-50 p-4 rounded-xl flex items-start text-yellow-600 my-4 shadow-lg max-w-xl mx-auto">
                <div class="text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 pt-1" viewBox="0 0 24 24"><path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>
                </div>
                <div class=" px-3">
                    <h3 class="text-yellow-800 font-semibold tracking-wider">
                        Warning 
                    </h3>
                    <p class="pt-2 text-yellow-700">
                        No posts or Server have some problems
                    </p>
                </div>
            </div>
        {/each}

    </div>
</div>

<style></style>