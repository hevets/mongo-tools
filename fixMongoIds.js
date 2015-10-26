'use strict';

module.exports = function unserializeMongoExport(obj) {
  if(!obj) return;

  Object.keys(obj).forEach(function(key) {
    if(typeof obj[key] === 'object' && obj[key].$oid) {
      return obj[key] = obj[key].$oid;
    }

    if(typeof obj[key] === 'object' && obj[key].$date) {
      return obj[key] = obj[key].$date;
    }

    if(typeof obj[key] === 'object' && typeof obj[key] === 'object') {
      return unserializeMongoExport(obj[key]);
    }

    obj[key] = obj[key];
  });

  return obj;
}
