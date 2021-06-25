<div class="w-1/5 pt-16 h-full px-4 grid place-items-center">
    <div class="animate-gradient text-white font-bold p-4 rounded-full cursor-pointer text-center" on:click>
        Signin with Google
    </div>
</div>

<style>
    .animate-gradient {
        background: linear-gradient(135deg, #008aff, #00ffe7);
        animation: animate 7s linear infinite;
    }

    @keyframes animate {
        0%, 100% {
            filter: hue-rotate(0deg);
        }
        50% {
            filter: hue-rotate(360deg);
        }
    }
</style>