const quote =[
    "Put yourself on view. This brings your talents to light.",
    "You cannot be really first-rate at your work if your work is all you are.",
    "A statement or belief manifestly inconsistent with one's own opinion.",
    "If you think you can, you can. And if you think you can't, you're right.",
    "He hasn't an enemy in the world - but all his friends hate him.",
    "Anyone who goes to a psychiatrist ought to have his head examined.",
    "Politics, n. Strife of interests masquerading as a contest of principles.",
    "Knowledge comes, but wisdom lingers.",
    "Act as if it were impossible to fail.",
    "Ask advice only of your equals."
]

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote(){
    while(true){
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if{
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    }
 }
}