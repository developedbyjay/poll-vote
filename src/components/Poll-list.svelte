<script>
  // import { onDestroy, onMount } from "svelte";
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
  {#each $PollStore as poll (poll.id)}
  dsjds
    {#if poll}
      <PollDetails {poll} on:vote />
    {:else} 
      <p>You can start adding new polls, don't sleep on it.</p>
    {/if}
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
