<script>
  import Header from "./components/Header.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Pollist from "./components/Poll-list.svelte";
  import Footer from "./components/Footer.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  function handleToggleTabs(e) {
    activeItem = e.detail;
  }

  function handleAddPoll(e) {
    polls = [...polls, e.detail];
    activeItem = "Current Polls";
  }

  let polls = [
    {
      id: 1,
      question: "Python or Javascript",
      answerA: "Python",
      answerB: "Javascript",
      votesA: 9,
      votesB: 15,
    },
  ];

  function handleVote(e) {
    const { option, id } = e.detail;
    polls = polls.map((poll) => {
      if (poll.id === id) {
        if (option === "a") {
          poll.votesA++;
        } else {
          poll.votesB++;
        }
      }
      return poll;
    });
  }
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:addTab={handleToggleTabs} />
  {#if activeItem === "Current Polls"}
    <Pollist {polls} on:vote={handleVote} />
  {:else}
    <CreatePollForm on:newPoll={handleAddPoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
