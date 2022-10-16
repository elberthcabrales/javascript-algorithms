function matchStrings(str, queries){
  if(!Array.isArray(str) && !Array.isArray(queries)){
    return [];
  }
  const results = new Array(queries.length).fill(0);
  const stringsKeyCountMatches = {}
  for(let i = 0; i < str.length;i++){
    if(stringsKeyCountMatches[str[i]]){
      stringsKeyCountMatches[str[i]] += 1;
    }else{
      stringsKeyCountMatches[str[i]] = 1;
    }
  }
  for(let i = 0; i < queries.length; i++){
    if(stringsKeyCountMatches[queries[i]]){
      results[i] = stringsKeyCountMatches[queries[i]]
    }else{
      results[i] = 0;
    }
  }

  return results;
}


const str = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

console.log(matchStrings(str, queries)); // expected [2,1,0]
