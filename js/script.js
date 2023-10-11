/******************************************
 * Chow Ho Kin Wilkins 300367633
*****************************************/



/*** 
 * `quotes` array 
***/

{

}

const quotes = [
    {quote: "Ask not what your country can do for you; ask what you can do for your country.", 
    source: "John Kennedy", 
    citation: "Inauguaral Address", 
    year: 1961},
    {quote: "No one can make you feel inferior without your consent.", 
    source: "Eleanor Roosevelt", 
    citation: "This is My Story", 
    year: 1937},
    {quote: "Well done is better than well said.", 
    source: "Benjamin Franklin", 
    citation: "Poor Richard’s Almanack", 
    year: 1737},
    {quote: "I have nothing to offer but blood, toil, tears, and sweat.", 
    source: "Winston S. Churchill", 
    citation: "Speech in the House of Commons", 
    year: 1940},
    {quote: "To be or not to be, that is the question.", 
    source: "William Shakespeare", 
    citation: "Hamlet", 
    year: 1603},
    {quote: "What does not kill me makes me stronger.", 
    source: "Friedrich Nietzsche", 
    citation: "Twilight of the Idols", 
    year: 1888},
    {quote: "I have a dream.", 
    source: "Martin Luther King"}
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
    let index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

/***
 * `printQuote` function
***/


function printQuote(){
    const txtQuotes = document.getElementById("quote-box");
    const currentQuote = txtQuotes.getElementsByClassName("quote")[0].textContent;
    let quote = getRandomQuote();

    //Get a new quote if it is the same as the current one
    while (quote.quote == currentQuote){
        quote = getRandomQuote();
    }

    let s = `<p class="quote">${quote.quote}</p> <p class="source">${quote.source}`;
    
    if ("citation" in quote){
        s = `${s} <span class="citation">${quote.citation}</span>`;
    };

    if ("year" in quote){
        s = `${s} <span class="year">${quote.year}</span>`;
    };

    s = s + "</p>";
    
    txtQuotes.innerHTML = s;

}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);