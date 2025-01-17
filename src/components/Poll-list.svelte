<script>
  // import { onDestroy, onMount } from "svelte";
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollStore from "../stores/PollStore";
  import PollDetails from "./PollDetails.svelte";

  //  Old way of doing it

  // export let polls = [];
  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onMount(() => {
  //   PollStore.fetchPolls();
  // });

  // onDestroy(() => {
  //   unsub.unsubscribe();
  // });
</script>

<div class="poll-list">
  {#if $PollStore.length === 0}
    <p
      style=" grid-column: 1/-1; text-align: center; padding: 12px; background: #ccc;"
    >
      You can start adding new polls, don't sleep on it.
    </p>
  {:else}
    {#each $PollStore as poll (poll.id)}
      <div in:fade out:slide|local animate:flip={{ duration: 500 }}>
        <PollDetails {poll} />
      </div>
    {/each}
  {/if}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
