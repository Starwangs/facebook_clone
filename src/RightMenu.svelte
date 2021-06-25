<script>
    import Contact from './Contact.svelte'
import { isDark, posts } from './lib/shared/store'

    let localDarkness
    let contacts = []

    isDark.subscribe(darkness => localDarkness = darkness)

    posts.subscribe(posts_ => contacts = posts_.map(post => [post.displayName, post.photoURL]))

    $: uniqueContact = Array.from(new Set(contacts.map(JSON.stringify)), JSON.parse)
</script>

<div class="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-0 overflow-auto {localDarkness ? 'overflow-hover' : 'overflow-hover-dark'}">
    <div class="h-full">
        <div class="flex justify-between items-center px-4 pt-4">
            <span class="font-semibold text-gray-500 text-lg dark:text-dark-txt">คำขอเป็นเพื่อน</span>
            <span class="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md">ดูทั้งหมด</span>
        </div>
        <div class="p-2">
            <a href="#" class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all">
                <img src="static/friend-5.jpg" alt="" class="w-16 h-16 rounded-full">
                <div class="flex-1 h-full">
                    <div class="dark:text-dark-txt">
                        <span class="font-semibold">Palm Palm</span>
                        <span class="float-right">6d</span>
                    </div>
                    <div class="flex space-x-2 mt-2">
                        <div class="w-1/2 bg-blue-500 cursor-pointer py-1 text-center font-semibold text-white rounded-lg">
                            Comfirm
                        </div>
                        <div class="w-1/2 bg-gray-300 cursor-pointer py-1 text-center font-semibold text-black rounded-lg">
                            Delete
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="border-b border-gray-200 dark:border-dark-third mt-6"></div>

        <div class="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
            <span class="font-semibold text-lg">ผู้ติดต่อ</span>
            <div class="flex space-x-1">
                <div class="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                    <i class='bx bxs-group' ></i>
                </div>
                <div class="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                    <i class='bx bx-search-alt-2' ></i>
                </div>
                <div class="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                    <i class='bx bx-dots-horizontal-rounded' ></i>
                </div>
            </div>
        </div>
        <ul class="p-2">
            {#each uniqueContact as contact}
                <Contact {contact} />
            {:else}
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-1.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">Thanate Lekwaree</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-2.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">Kampol Chumjun</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-3.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">ณัฐพัชร์ เพ็ชรสิมาลัย</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-4.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">Sarisa Junton</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-1.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">Thanate Lekwaree</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-2.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">Kampol Chumjun</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-3.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">ณัฐพัชร์ เพ็ชรสิมาลัย</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-4.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">Sarisa Junton</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-1.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">Thanate Lekwaree</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-2.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">Kampol Chumjun</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-3.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">ณัฐพัชร์ เพ็ชรสิมาลัย</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                        <div class="relative">
                            <img src="static/friend-4.jpg" alt="" class="rounded-full">
                            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <span class="">Sarisa Junton</span>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>

    </div>
</div>