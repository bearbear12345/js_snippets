Array.prototype.add = function(item) {
  /* Adds _item_ into an array */
  this[this.length] = item;
  return this;
}
Array.prototype.remove = function(item, selector) {
	/* Removes _item_ from an array, and if multiple existences of _item_ exists, removes the (n)th one (selector) */
    var array = [];
    if (typeof selector === 'undefined') {
      for (var a = 0; a < this.length; a++) {
        if (a == this.indexOf(item)) continue;
        array.add(this[a]);
      }
    } else {
      var tmparray = [];
      for (var b = 0; b < this.length; b++) {
        if (this[b] != item) continue;
        tmparray.add(b);
      }
      for (var c = 0; c < this.length; c++) {
        if (c == tmparray[selector]) continue;
        array.add(this[c]);
      }
    }
    if (array[0] == "") return [];
    return array;
  }

Array.prototype.getOccurences = function() {
  /* Return an object of array items and their repeated occurences */
  var result = {};
  for (var i = 0; i < this.length; i++) {
    if (result[this[i]]) result[this[i]] += 1;
    else result[this[i]] = 1;
  }
  return result;
}
Array.prototype.countOccurence = function(item) {
  /* Returns a count of the occurences a value is found in an array */
  return this.getOccurences()[item];
}