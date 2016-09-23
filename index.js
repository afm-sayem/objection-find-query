'use strict';

exports.format = function (paramValues, prefix) {
  var params = compact(paramValues);
  var paramObj = {};
  for (var op in params) {
    if ({}.hasOwnProperty.call(params, op)) {
      Object.assign(paramObj, getFilters(flatten(params[op]), op, prefix));
    }
  }
  return paramObj;
};

function getFilters(data, op, prefix) {
  var filterObj = {};

  for (var key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      filterObj[prefix + '[' + key + ':' + op + ']'] = data[key];
    }
  }

  return filterObj;
}

function compact(objectWithEmptyValues) {
  var obj = JSON.parse(JSON.stringify(objectWithEmptyValues));
  for (var i in obj) {
    if ({}.hasOwnProperty.call(obj, i)) {
      if (obj[i] === undefined || obj[i] === null) {
        delete obj[i];
      } else if (typeof obj[i] === 'object' && !(obj[i] instanceof(Array))) {
        compact(obj[i]);
      }
    }
  }
  return obj;
}

function flatten(obj) {
  var flatObj = {};

  function makeFlat(obj, path) {
    var keys = Array.isArray(obj) || (typeof obj === 'string') ? false : Object.keys(obj);
    if (keys.length) {
      keys.forEach(function (key) {
        makeFlat(obj[key], (path ? path + '.' : path) + key);
      });
    } else {
      flatObj[path] = obj;
    }
  }
  makeFlat(obj, '');
  return flatObj;
}

