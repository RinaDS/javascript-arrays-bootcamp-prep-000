/*var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"*/
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var cities = ["New York" , "San Francisco"];
//["philadelphia". ...cities];
/*cities = ["Philadelphia", ...cities];
const cats = ["Milo" , "Garfield"];
const moreCats = ["Felix" , ...cats];*/
function addElementToBeginningOfArray (array, element){
  return [element,...array];
}
function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element);
}
function addElementToEndOfArray(array, element){
  return [array, ...element];
}
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}