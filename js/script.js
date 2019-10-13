/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
****************************

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

***/

// creating quote objects in an array
let quotes = [
  {
    // quote properties
    quote: 'When you come to the boundaries of what you know, it is time to make some mistakes.',
    source: 'Robert T. Kiyosaki',
    citation: '-Rich Dad Poor Dad',
    year: 1997,
    tag: '-Business'
  },
  {
    quote: 'The way of success is the way of continuous pursuit of knowledge.',
    source: 'Napoleon Hill ',
    citation: '-Think and Grow Rich',
    year: 1937,
    tag: '-Business'
  },
  {
    quote: 'Courage is not the absence of fear, but the triumph over it',
    source: 'Nelson Mandela',
    citation: '-Long Walk to Freedom',
    year: 1994,
    tag: '-Politics'
  },
  {
    quote: 'For I am confident of this very thing, that He who began a good work in you will perfect it until the day of Christ Jesus.',
    source: 'Appostle Paul',
    citation: '-Bible: Philippians 1:6',
    tag: 'Religious'
  },
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    source: 'Franklin D. Roosevelt'
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: 'Benjamin Franklin'
  },
  {
    quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    source: 'Ralph Waldo Emerson'
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    tag: '-Politics'
  },
  {
    quote: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.',
    source:'Abraham Lincoln'
  },
  {
    quote: 'If you really look closely, most overnight successes took a long time.',
    source: 'Steve Jobs',
    tag: '-Business'
  },
];

// array of different colors represented on hexadecimal
let colors = [
  '#0000FF', 
  '#8A2BE2', 
  '#7FFFD4', 
  '#8A2BE2', 
  '#A52A2A',
  '#5F9EA0',
  '#7FFF00',
  '#FF7F50',
  '#008B8B',
  '#556B2F',
  '#E9967A',
  '#FF1493',
  '#FFD700',
  '#ADFF2F',
  '#800080'
];


//This function will generates random quote objects from the quotes array

function getRandomQuote(){
  let random_number = Math.floor(Math.random() * quotes.length)+ 1;
  
  return quotes[random_number]; // to return the quotes randomly
}

/***
 This function will be use to execute the methods in the quotes array variable
 It will call the getRandomQuote function to display the quotes rendomly
 It will execute two properties of the quote methods explicitly 
 and use a conditional stement to execute the remaining properties 
***/
function printQuote(){
  let random_quote = getRandomQuote();
  let HTML = '';
  HTML += '<p class="quote">' + random_quote.quote + '</p>'; 
  HTML += '<p class="source">' + random_quote.source;
  if(random_quote.citation){
    HTML += '<span class="citation">' + random_quote.citation + '</span>';
  }
  if(random_quote.year){
    HTML += '<span class="year">' + random_quote.year + '</span>';
  }
  if(random_quote.tag){
    HTML += '<span class="tag">' + random_quote.tag + '</span>';
  }
  
  HTML += '</p>';
  var div =document.getElementById("quote-box");
  div.innerHTML = HTML;
 randomColor(colors);
}


/*** This fuction is to generate different colors from the colors stored in the color array variable
the purpose is to display different colors when the printQuote function is executed.
***/
function randomColor(colors) {
 var col = Math.floor(Math.random() * colors.length) + 1;
 document.querySelector("body").style.backgroundColor = colors[col];
}
// To display the quotes after 20 seconds
setInterval(printQuote, 20000);
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

 let sss = document.getElementById('loadQuote').addEventListener("click", printQuote, false);