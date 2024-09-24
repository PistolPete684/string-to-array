//declare the function and give it a parameter of a string that gets passed to it
function stringToArray(string){
  //use the split method to break the string into an array at the spaces in the string
  const newArray = string.split(" ");
  //return the new array
  return newArray;
}