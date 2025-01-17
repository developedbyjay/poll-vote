<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
  import { tweened } from "svelte/motion";
  import PollStore from "../stores/PollStore";
  import Card from "../shared/Card.svelte";
  import Button from "../shared/Button.svelte";

  export let poll;

  //   reactive statement
  $: totalVotes = poll.votesA + poll.votesB;

  $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;

  $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  function handleDelete(id) {
    PollStore.update((polls) => {
      return polls.filter((p) => p.id !== id);
    });
  }

  function handleVote(option, id) {
    PollStore.update((polls) => {
      return polls.map((poll) => {
        if (poll.id === id) {
          if (option === "a") {
            poll.votesA++;
          } else {
            poll.votesB++;
          }
        }
        return poll;
      });
    });
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div on:click={() => handleVote("a", poll.id)} class="answer">
      <div style="width: {$tweenedA}%" class="percent percent-a"></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div on:click={() => handleVote("b", poll.id)} class="answer">
      <div style="width: {$tweenedB}%" class="percent percent-b"></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete">
      <Button flat={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
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

  .delete {
    text-align: center;
  }
</style>
