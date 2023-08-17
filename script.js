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



// let quoteElement = document.getElementById("quote");
// This line of code retrieves an HTML element with the ID "quote" and assigns it to the variable quoteElement.
//  This element is where the fetched quote will be displayed.

// let newQuoteButton = document.getElementById("new-quote");
// Similarly, this line of code retrieves an HTML element with the ID "new-quote" and assigns it to the variable newQuoteButton. 
// This element represents a button that, when clicked, triggers the fetching of a new random quote.

// function getRandomQuote() { ... }
// This is a function that performs an HTTP fetch request to the "https://api.quotable.io/random" URL to retrieve a random quote. 
// The fetch request returns a Promise. If the request is successful, it parses the response JSON and extracts the content property from the data. The content property contains the text of the random quote. This function is used to get a random quote from the API.

// function updateQuote() { ... }
// This function is responsible for updating the content of the quoteElement with a new random quote. 
// Inside the function, it calls the getRandomQuote() function to fetch a random quote using the API. If the fetch is successful, it updates the textContent property of the quoteElement with the fetched quote. If an error occurs during the fetch, it updates the textContent property to display an error message.

// newQuoteButton.addEventListener("click", updateQuote);
// This line of code adds an event listener to the "new-quote" button. 
// When the button is clicked, it triggers the updateQuote() function, which fetches and updates the quote.

// updateQuote();
// This line of code is executed immediately after the page loads. 
// It fetches and updates the quote, so the user sees a random quote as soon as the page loads.