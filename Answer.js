

var $ = function (selector) {

  var queryElements = function(selector){
  var selection = {};
  var result = {}
  selection['getElementsByTagName'] = selector.match(/^[\w]+/);
  selection['getElementById'] = selector.match(/\#[\w]+/); 
  selection['getElementsByClassName'] = selector.match(/\.[\w]+/);
  for(sel in selection){
      if (selection[sel] != null){
        result[sel] = selection[sel][0].replace(/[\.,\#,\s]/,'');
      } 
    }
    return result;
  }

  //fetching DOM objects for all types
  var find = function(task){
    var results = {};
    for(query in task){
      results[query] = document[query](task[query]);
    }
    return results;
  }

  var intersection = function(array1,array2){
    var result = [];
    if ((array2 === undefined) && (array1 === undefined)) return undefined;
    if (array2 === undefined) {return array1;}
    if (array1 === undefined) {return array2;}
    for(i = 0;i < array1.length; i++){
      for(j = 0;j < array2.length; j++){
        if (array1[i] === array2[j]) { result.push(array1[i]);}
      }
    }
    return result;
  }
  var elements = [];

  var task = queryElements(selector);
  var res = find(task);
  var intersect = intersection(res.getElementsByTagName,res.getElementsByClassName);
  if (res.getElementById != undefined) {
    elements = intersection([res.getElementById],intersect);
  } else elements = intersect;
  if (elements === undefined) return [];
  return elements;
}