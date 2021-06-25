<script>
    import { isDark } from './lib/shared/store'
    export let isLogin
</script>

{#if isLogin}
    <div class="bg-white w-12 h-12 rounded-full bottom-4 right-4 grid place-items-center shadow-2xl fixed z-50 cursor-pointer" on:click>
        <i class="custom4 filter-near-black v6 write"></i>
    </div>
{:else}
    <div class="bg-white w-12 h-12 rounded-full top-4 right-4 grid place-items-center shadow-2xl fixed text-xl cursor-pointer hover:bg-gray-300 dark:text-dark-txt dark:bg-dark-third" on:click={() => isDark.update(bool => !bool)}>
        <i class="bx bxs-moon" />
    </div>
{/if}