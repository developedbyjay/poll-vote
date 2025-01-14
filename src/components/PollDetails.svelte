<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
  import { createEventDispatcher } from "svelte";
  import Card from "../shared/Card.svelte";

  const dispatch = createEventDispatcher();

  export let poll;

  //   reactive statement
  $: totalVotes = poll.votesA + poll.votesB;

  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);

  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

  function handleVote(option, id) {
    dispatch("vote", { option, id });
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div on:click={() => handleVote("a", poll.id)} class="answer">
      <div style="width: {percentA}%" class="percent percent-a"></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div on:click={() => handleVote("b", poll.id)} class="answer">
      <div style="width: {percentB}%" class="percent percent-b"></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }

  .percent {
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-a {
    border-left: 4px solid red;
    background-color: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 4px solid green;
    background-color: rgba(69, 196, 150, 0.2);
  }
</style>
