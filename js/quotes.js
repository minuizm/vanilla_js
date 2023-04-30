const quotes = [
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "That it will never come again is what makes life so sweet.",
    author: "Emily Dickinson",
  },
  {
    quote: "It is never too late to be what you might have been",
    author: "George Eliot",
  },
  {
    quote: "Pain is inevitable. Suffering is optional.",
    author: "Haruki Murakami",
  },
  {
    quote:
      "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    author: "Stephen King",
  },
  {
    quote: "Self-awareness and self-love matter. Who we are is how we lead.",
    author: "Brene Brown",
  },
  {
    quote:
      "I am not at all in a humour for writing; I must write on until I am.",
    author: "Jane Austen",
  },
  {
    quote:
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author: "Toni Morrison",
  },
  {
    quote: "Tears are words that need to be written.",
    author: "Paulo Coelho",
  },
  {
    quote:
      "A writer never has a vacation. For a writer life consists of either writing or thinking about writing.",
    author: "Eugene Ionesco",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
