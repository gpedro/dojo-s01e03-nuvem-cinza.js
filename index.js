'use strict';

module.exports = function (initialMap) {
  var map = initialMap;
  var daysElapsed = 1;

  var cloneArray = function (arr) {
    return arr.slice().map(function (row) {
      return row.slice();
    });
  };

  var advanceDay = function () {
    var nextMap = cloneArray(map);

    for (var x in map) {
      x = parseInt(x);
      var row = map[x];

      for (var y in row) {
        y = parseInt(y);
        var col = row[y];

        if (col === '*') {

          if (x + 1 < map.length) {
            nextMap[x + 1][y] = '*';
          }

          if (x > 0) {
            nextMap[x - 1][y] = '*';
          }

          if (y + 1 < map.length) {
            nextMap[x][y + 1] = '*';
          }

          if (y > 0) {
            nextMap[x][y - 1] = '*';
          }

        }
      }
    }

    daysElapsed++;
    map = nextMap;
  };

  return {
    advanceDay: advanceDay,
    getActualMap: function () {
      return map;
    },
    getDaysElapsed: function () {
      return daysElapsed;
    }
  };
};
