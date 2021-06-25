<script>
    import { diff_minutes } from './lib/shared/fx'
    export let displayName, photoURL, content, timestamp

    timestamp = diff_minutes(timestamp)
</script>

<div class="flex space-x-2">
    <div class="mt-2"><i class='custom3 filter-gray v4 reply'></i></div>
    <img src={photoURL} alt="" class="w-9 h-9 rounded-full" />
    <div>
        <div class="flex">
            <div class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                <span class="font-semibold block">{displayName}</span>
                <span>{content}</span>
            </div>
            <div class="ml-2 my-auto cursor-pointer"><i class='bx bx-dots-horizontal-rounded'></i></div>
        </div>
        <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
            <span class="font-semibold cursor-pointer mx-1">Like</span>
            <span class="font-semibold cursor-pointer mx-1">Reply</span>
            {timestamp}m
        </div>
    </div>
</div>