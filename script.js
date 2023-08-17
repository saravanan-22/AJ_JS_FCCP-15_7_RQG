let quoteElement = document.getElementById("quote");
let newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
  return fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => data.content);
}
function updateQuote() {
  getRandomQuote()
    .then((quote) => {
      quoteElement.textContent = quote;
    })
    .catch((error) => {
      quoteElement.textContent = "An error occurred while fetching the quote.";
    });
}
newQuoteButton.addEventListener("click", updateQuote);
updateQuote();
