
  const truncate=({source,size}:{source:any,size:number})=>{
    return source.length > size ? source.slice(0, size - 1) + "...More" : source;
  }

  export default truncate
  
//   var res = truncate('Truncate text to fit in 3 lines', 14);
//   console.log(res);