export default (json) => {
  try {
    return json.map(item=>item.edad).reduce((a,b)=>(a+b), 0)/json.length;
  } catch (error) {
    return "Se ha producido un error";
  }
};
  