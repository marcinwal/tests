var $ = function (selector) {
  var elements = [];

  ////////////////////
  // Your code here //
  ////////////////////
  var html = document.documentElement.innerHTML;



  matchElements = function(selector){
    var selection = {};
    var result = {}
    selection['tag'] = selector.match(/^[\w]+/);
    selection['id'] = selector.match(/\#[\w]+/); 
    selection['class'] = selector.match(/\.[\w]+/);
    for(sel in selection){
      if (selection[sel] != null){
        result[sel] = selection[sel][0].replace(/[\.,\#,\s]/,'');
      } 
    }
    return result;
  }

  createPattern = function(task){
    if (task.tag != undefined)
      {TAG = task.tag;}
    else 
      {TAG = ""}
    if (task.id != undefined)
      {ID = '.*' + 'id=' + '"' + ".*" + task.id + '.*' + '"';}
    else
      {ID="";}
    if (task.class != undefined)
      {CLASS = '.*' + 'class=' + '"' + ".*" + task.class + '.*' + '"';}
    else 
      {CLASS=""}
    pattern = "<"+TAG+ID+CLASS+".*>"
    return RegExp(pattern,'g');
  }

  convert = function(result){
    doc = [];
    for (res in result){
      parser = new DOMParser();
      doc.push(parser.parseFromString(result[res],"text/html"));
    }
    return doc;
  }

  task = matchElements(selector);
  pattern = createPattern(task);
  console.log(pattern);

  result = html.match(pattern);
  elements = convert(result);

  return elements;
}