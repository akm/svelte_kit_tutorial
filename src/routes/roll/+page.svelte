<script lang="ts">
	let number: number;

	async function roll() {
		const response = await fetch('/api/rolls');
		number = await response.json();
	}
</script>

<button on:click={roll}>Roll the dice</button>

{#if number !== undefined}
	<p>You rolled a {number}</p>
{/if}
