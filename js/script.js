/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {
    quote: '"When you come to the boundaries of what you know, it is time to make some mistakes."',
    source: '-Robert T. Kiyosaki',
    citation: '-Rich Dad Poor Dad',
    year: 1997
  },
  {
    quote: '“The way of success is the way of continuous pursuit of knowledge.”',
    source: '-Napoleon Hill ',
    citation: '-Think and Grow Rich',
    year: 1937
  },
  {
    quote: '"Courage is not the absence of fear, but the triumph over it"',
    source: '-Nelson Mandela',
    citation: '-Long Walk to Freedom',
    year: 1994
  },
  {
    quote: '"For I am confident of this very thing, that He who began a good work in you will perfect it until the day of Christ Jesus."',
    source: '-Appostle Paul',
    citation: '-Bible: Philippians 1:6',
  },
  {
    quote: '"When you reach the end of your rope, tie a knot in it and hang on."',
    source: '-Franklin D. Roosevelt',
  },
  {
    quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
    source: '-Benjamin Franklin',
  },
  {
    quote: '"Do not go where the path may lead, go instead where there is no path and leave a trail."',
    source: '-Ralph Waldo Emerson',
  },
  {
    quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    source: '-Nelson Mandela',
  },
  {
    quote: '"In the end, it\'s not the years in your life that count. It\'s the life in your years."',
    source:'-Abraham Lincoln',
  },
  {
    quote: '"If you really look closely, most overnight successes took a long time."',
    source: '-Steve Jobs',
  },
];
console.log(quotes);




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.