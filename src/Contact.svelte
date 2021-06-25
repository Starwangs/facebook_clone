<script>
    export let contact
</script>

<li>
    <div class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
        <div class="relative">
            <img src={contact[1]} alt="" class="w-10 h-10 rounded-full">
            <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div>
            <span class="">{contact[0]}</span>
        </div>
    </div>
</li>