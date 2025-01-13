<script>
  import Header from "./components/Header.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Footer from "./components/Footer.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  function handleToggleTabs(e) {
    activeItem = e.detail;
  }
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:addTab={handleToggleTabs} />
  {#if activeItem === "Current Polls"}
    <h1>Current Polls</h1>
  {:else}
    <CreatePollForm />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
