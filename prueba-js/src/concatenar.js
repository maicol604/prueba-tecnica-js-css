export default (json) => {
  try {
    return json.map(item=>`${capitalice(item.nombre)} ${capitalice(item.apellido)} ${capitalice(item.apellido2)}`)
  } catch (error) {
    return "";
  }
};
function capitalice(word) {
  try {
      const auxWord = word.toLowerCase();
      return auxWord.charAt(0).toUpperCase() + auxWord.slice(1);
  } catch (error) {
    return "";
  }
}