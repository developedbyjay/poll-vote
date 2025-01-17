import { writable } from "svelte/store";
const polls = [
  {
    id: 1,
    question: "Python or Javascript",
    answerA: "Python",
    answerB: "Javascript",
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: "React or Vue",
    answerA: "React",
    answerB: "Vue",
    votesA: 12,
    votesB: 8,
  },
  {
    id: 3,
    question: "Svelte or Angular",
    answerA: "Svelte",
    answerB: "Angular",
    votesA: 20,
    votesB: 5,
  },
  {
    id: 4,
    question: "Node.js or Django",
    answerA: "Node.js",
    answerB: "Django",
    votesA: 14,
    votesB: 10,
  },
  {
    id: 5,
    question: "CSS or SCSS",
    answerA: "CSS",
    answerB: "SCSS",
    votesA: 7,
    votesB: 13,
  },
  {
    id: 6,
    question: "SQL or NoSQL",
    answerA: "SQL",
    answerB: "NoSQL",
    votesA: 11,
    votesB: 9,
  },
  {
    id: 7,
    question: "Java or C#",
    answerA: "Java",
    answerB: "C#",
    votesA: 10,
    votesB: 10,
  },
  {
    id: 8,
    question: "HTML or Markdown",
    answerA: "HTML",
    answerB: "Markdown",
    votesA: 15,
    votesB: 5,
  },
  {
    id: 9,
    question: "Bootstrap or Tailwind",
    answerA: "Bootstrap",
    answerB: "Tailwind",
    votesA: 8,
    votesB: 12,
  },
  {
    id: 10,
    question: "Git or SVN",
    answerA: "Git",
    answerB: "SVN",
    votesA: 18,
    votesB: 2,
  }
];

const PollStore = writable(polls);

export default PollStore;
