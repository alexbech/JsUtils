/**
 * Static utility class for common array operations
 *
 * User: Alexander
 * Date: 15.03.11
 * Time: 14:02
 */

// Create default Namespace function if it does not already exist
if(typeof Namespace.standAlone==="undefined"){var Namespace=(function(){var n=function(b){var d=b.split(".");var a,c=window;for(a=0;a<d.length;a++){if(typeof(c[d[a]])==="undefined"){c[d[a]]={}}c=c[d[a]]}return c};return n})();Namespace.standAlone=true}

// Set up namespace and assign to short-hand variable
var ArrayUtil = Namespace('no.jimmy.utils.ArrayUtil');

/**
 * Method that rotates array left or 'first-to-last' any given number of places.
 *
 * @param array
 * @param numberOfPlaces
 */
ArrayUtil.left = function(array, numberOfPlaces){
	numberOfPlaces = (typeof numberOfPlaces === 'undefined') ? 1 : numberOfPlaces;
	numberOfPlaces %= array.length;
	for (var i=0; i<numberOfPlaces; i++) {
		array.push(array.shift());
	}
};

/**
 * Method that rotates array right or 'last-to-first' any given number of places.
 *
 * @param array
 * @param numberOfPlaces
 */
ArrayUtil.right = function(array, numberOfPlaces){
	numberOfPlaces = (typeof numberOfPlaces === 'undefined') ? 1 : numberOfPlaces;
	numberOfPlaces %= array.length;
	for (var i=0; i<numberOfPlaces; i++) {
		array.unshift(array.pop());
	}
};

/**
 * Method that returns a shallow copy of supplied array.
 *
 * @param array
 * @return array
 */
ArrayUtil.copy = function(array){
	return array.slice();
};

/**
 * Method that inserts an element if the element does not exists in array and removes it if it does.
 *
 * @param array
 * @param element
 * @return boolean
 */
ArrayUtil.toggle = function(array, element){
	var index = array.indexOf(element);
	if(index > -1){
		array.splice(index, 1);
	}else{
		array.push(element);
	}
	return (index == -1);
};

/**
 * Method that removes all instances of element/value from an array.
 *
 * @param array
 * @param element
 */
ArrayUtil.remove = function(array, element){
	var length = array.length;
	for(var i=length; i > -1; i--) {
		if(array[i] === element) {
			array.splice(i, 1);
		}
	}
};

/**
 * Method that checks if an array contains supplied element/value.
 *
 * @param array
 * @param element
 * @return boolean
 */
ArrayUtil.contains = function(array, element){
	return (array.indexOf(element) != -1);
};

/**
 * Method(s) that shuffle or randomize an array.
 *
 * @param array
 */
ArrayUtil.shuffle = ArrayUtil.randomize = function(array){
	for(var rnd, tmp, i=array.length; i; rnd=parseInt(Math.random()*i), tmp=array[--i], array[i]=array[rnd], array[rnd]=tmp);
};

/**
 * Method that checks if supplied index is valid for given array.
 *
 * @param array
 * @param index
 * @return boolean
 */
ArrayUtil.validIndex = function(array, index){
	return (index > -1 && index < array.length);
};

/**
 * Method that retrives random element/value from array.
 * If removeElement is true, the element/value is removed from the array.
 *
 * @param array
 * @param removeElement
 * @return element
 */
ArrayUtil.getRandom = function(array, removeElement){
	if(array.length < 1) return null;
	if(removeElement){
		return array.splice(Math.floor(Math.random()*array.length), 1)[0];
	}else{
		return array[Math.floor(Math.random()*array.length)];
	}
};

/**
 * Method(s) that swap or exchange elements/values from one index to another.
 *
 * @param array
 * @param from
 * @param to
 */
ArrayUtil.swap = ArrayUtil.exchange = function(array, from, to){
	if(from != to && ArrayUtil.validIndex(array, from) && ArrayUtil.validIndex(array, to)){
		var tmp = array[to];
		array[to] = array[from];
		array[from] = tmp;
	}
};

/**
 * Method that remove duplicate elements/values in original array and returns new array.
 *
 * @param array
 * @return array
 */
ArrayUtil.unique = function(array) {
	var copy = [];
	var length = array.length;
	var item;
	for (var i=0; i<length; ++i) {
		item = array[i];
		if(copy.indexOf(item) == -1) copy.push(item);
	}
	return copy;
};

/**
 * Method that insert elements/values at given index.
 * First two arguments (array,index) are removed and remaining arguments are inserted.
 *
 * @param array
 * @param index
 * @param additional parameters to insert
 */
ArrayUtil.insert = function(array, index) {
	if(arguments.length < 3) return false;
	var length = Math.max(array.length, index);
	index = index < 0 ? length : index;
	array.splice.apply(array, [index, 0].concat(Array.prototype.slice.call(arguments, 2)));
};

/**
 * Method that insert elements/values before given element/value.
 * If before element is not found nothing is inserted.
 *
 * @see ArrayUtil.insert
 *
 * @param array
 * @param before
 * @param additional parameters to insert
 */
ArrayUtil.insertBefore = function(array, before) {
	if(arguments.length < 3) return false;
	var index = array.indexOf(before);
	if(index == -1) return false;
	ArrayUtil.insert.apply(array, [array, index].concat(Array.prototype.slice.call(arguments, 2)));
};

/**
 * Method that insert elements/values after given element/value.
 * If after element is not found nothing is inserted.
 *
 * @see ArrayUtil.insert
 *
 * @param array
 * @param after
 * @param additional parameters to insert
 */
ArrayUtil.insertAfter = function(array, after) {
	if(arguments.length < 3) return false;
	var index = array.indexOf(after);
	if(index == -1) return false;
	ArrayUtil.insert.apply(array, [array, index+1].concat(Array.prototype.slice.call(arguments, 2)));
};






