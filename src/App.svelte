<script>
import LeftMenu from "./LeftMenu.svelte"
import Login from "./Login.svelte"
import Main from "./Main.svelte"
import Message from "./Message.svelte"
import Nav from "./Nav.svelte"
import RightMenu from "./RightMenu.svelte"

import { auth, googleProvider } from "./lib/shared/firebase"
import { authState } from "rxfire/auth"

let user

authState(auth).subscribe(u => user = u)

function login() {
	auth.signInWithPopup(googleProvider)
}
</script>
<header>
	{#if user}
		<Nav displayName={user.displayName} photoURL={user.photoURL} />
	{/if}
</header>

<main>
	<div class="flex justify-center h-screen">

		<Message isLogin={!!user} on:click={() => auth.signOut()}/>

		{#if user}
			<LeftMenu displayName={user.displayName} photoURL={user.photoURL} />
			<Main displayName={user.displayName} photoURL={user.photoURL} />
			<RightMenu />
		{:else}
			<Login on:click={login} />
		{/if}
	</div>
</main>