// Create an array of strings and print the longest string.

const strings = ['Ali Asghar', 'Danial', 'John','Salman'];

const longestString = strings.reduce((longest,str)=>{
    return str.length > longest.length ? str : longest;
},strings[0]);

console.log(longestString); // Ali Asghar