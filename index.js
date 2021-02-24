/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';
console.log("Original Title was,",notTitle);
let title=notTitle.slice(0,5).replace("t","T");
let ca =notTitle.slice(5,10). replace("c","C");

console.log("Changed title is,",title+ca)