export default (word1, word2) => {
  console.log(formatData(word1)  , formatData(word2), formatData(word1) === formatData(word2) )
  console.log(word1 , word2 )
  try {
    return formatData(word1) === formatData(word2)
  } catch (error) {
    return false;
  }
};
function normalize(word) {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}
function formatData(word) {
  return normalize(word.toUpperCase()).split("").sort().join("");
}

/*
Si un anagrama tambien puede ser formado por mas de una palabra esta funcion de abajo cumple con ese requisito
function formatData(word) {
  return normalize(word.toUpperCase()).split(" ").join("").split("").sort().join("").replace(/[^\w\s]/gi, '');
}
*/