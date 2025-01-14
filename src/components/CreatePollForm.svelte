<script>
  import Button from "../shared/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Card from "../shared/Card.svelte";
  const dispatch = createEventDispatcher();
  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  function submitHandler() {
    valid = true;
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }

    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer-A can not be empty";
    } else {
      errors.answerA = "";
    }
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer-B can not be empty";
    } else {
      errors.answerB = "";
    }

    if (valid) {
      dispatch("newPoll", {
        id: Math.random(),
        votesA: 0,
        votesB: 0,
        ...fields,
      });
    }
  }
</script>

<Card>
  <form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
      <label for="question">Poll Question</label>
      <input
        type="text"
        name="question"
        id="question"
        bind:value={fields.question}
      />
      <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
      <label for="answer-a">Answer A:</label>
      <input
        type="text"
        name="answer-a"
        id="answer-a"
        bind:value={fields.answerA}
      />
      <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
      <label for="answer-b">Answer B:</label>
      <input
        type="text"
        name="answer-b"
        id="answer-b"
        bind:value={fields.answerB}
      />
      <div class="error">{errors.answerB}</div>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
  </form>
</Card>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px 0;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }

  .error {
    font-weight: bold;
    font-size: 12px;
    color: #773434;
  }
</style>
