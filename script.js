// Random Quote Generator

// Array of quotes
const quotes = [
    "Believe in yourself and all that you are.",
    "Every day is a new beginning.",
    "Happiness is a choice you make.",
    "Your vibe attracts your tribe.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it..",
    "Success doesn't just find you. You have to go out and get it."
  ];
  
  // Function to display a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
  }
  