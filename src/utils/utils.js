export function shortenName(text,max) {
  return text && text.length > max ? text.slice(0,max).split(' ').slice(0, -1).join(' ') + '...' : text
}

export function sortData(data, columnName) { 
  var sortedData = {};
  console.log(data);
  for (var i = 0; i < data.length; i++) {
      var object = data[i];

      if (Object.keys(sortedData).indexOf(object[columnName]) === -1) {
          sortedData[object[columnName]] = [];
      }

      sortedData[object[columnName]].push(object);
  }
  
  return sortedData;
}
