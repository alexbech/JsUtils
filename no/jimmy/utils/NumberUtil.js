/**
 * Static utility class for common number operations
 *
 * User: Alexander
 * Date: 15.03.11
 * Time: 14:03
 */

// Create default Namespace function if it does not already exist
if(typeof Namespace.standAlone==="undefined"){var Namespace=(function(){var n=function(b){var d=b.split(".");var a,c=window;for(a=0;a<d.length;a++){if(typeof(c[d[a]])==="undefined"){c[d[a]]={}}c=c[d[a]]}return c};return n})();Namespace.standAlone=true}

// Set up namespace and assign to short-hand variable
var NumberUtil = Namespace('no.jimmy.utils.NumberUtil');

/**
 * Method that checks if supplied value is an even number.
 *
 * @param value
 * @returns boolean
 */
NumberUtil.isEven = function(value){
	return (typeof value == 'number') && (value & 1) == 0;
};

/**
 * Method that checks if supplied value is an odd number.
 *
 * @param value
 * @returns boolean
 */
NumberUtil.isOdd = function(value){
	return (typeof value == 'number') && !NumberUtil.isEven(value);
};

/**
 * Method that checks if supplied value is a floating number.
 *
 * @param value
 * @returns boolean
 */
NumberUtil.isFloat = function(value){
	return (typeof value == 'number') && value === +value && value !== (value|0);
};

/**
 * Method that checks if supplied value is an integer.
 *
 * @param value
 * @returns boolean
 */
NumberUtil.isInteger = function(value){
	return (typeof value == 'number') && value === +value && value === (value|0);
};

/**
 * Method that checks if supplied value is between min & max values.
 *
 * @param value
 * @param min
 * @param max
 * @returns boolean
 */
NumberUtil.isBetween = function(value, min, max){
	return (typeof value == 'number') && (value >= min && value <= max);
};

/**
 * Method that checks if supplied value is a prime number.
 *
 * @param value
 * @returns boolean
 */
NumberUtil.isPrime = function(value){
	if(typeof value != 'number' || (value & 1) == 0) return false;
	if (value == 1 || value == 2) return true;
	var s = Math.sqrt(value);
	for (var i=3; i <= s; i++){
		if (value % i == 0) return false;
	}
	return true;
};

/**
 * Method that ceil the supplied value up to the closest increment.
 *
 * @param value
 * @param increment
 * @returns number
 */
NumberUtil.ceilTo = function(value, increment){
	return Math.ceil(value/increment)*increment;
};

/**
 * Method that floor the supplied value down to the closest increment.
 *
 * @param value
 * @param increment
 * @returns number
 */
NumberUtil.floorTo = function(value, increment){
	return Math.floor(value/increment)*increment;
};

/**
 * Method that rounds the supplied value to the closest increment.
 *
 * @param value
 * @param increment
 * @returns number
 */
NumberUtil.roundTo = function(value, increment){
	return Math.round(value/increment)*increment;
};

/**
 * Method that rounds the supplied value to the specified number of decimals.
 *
 * @param value
 * @param decimals
 * @returns number
 */
NumberUtil.roundToDecimals = function(value, decimals){
	decimals = Math.pow(10, decimals);
	return Math.round(value * decimals) / decimals;
};

/**
 * Method that keeps the supplied value between the specified min & max parameters.
 *
 * @param value
 * @param min
 * @param max
 * @returns number
 */
NumberUtil.limit = function(value, min, max){
	return Math.min(Math.max(min, value), max);
};

/**
 * Method that converts radians to degrees.
 *
 * @param radian
 * @returns number
 */
NumberUtil.radiansToDegrees = function(radian){
	return radian * 180 / Math.PI;
};

/**
 * Method that converts degrees to radians.
 *
 * @param degrees
 * @returns number
 */
NumberUtil.degreesToRadians = function(degrees){
	return degrees * Math.PI / 180;
};

/**
 * Method that returns random sign.
 *
 * @returns number
 */
NumberUtil.randomSign = function(){
	return (Math.random() > 0.5) ? 1 : -1;
};

/**
 * Method that returns random integer between min & max parameter.
 *
 * @param min
 * @param max
 * @returns number
 */
NumberUtil.randomInt = function(min, max){
	min = (typeof min === 'undefined') ? 0 : min;
	max = (typeof max === 'undefined') ? 1000 : max;
	return Math.floor(min + (Math.random() * (max - min)));
};

/**
 * Method that returns random float between min & max parameter.
 *
 * @param min
 * @param max
 * @returns number
 */
NumberUtil.randomFloat = function(min, max){
	min = (typeof min === 'undefined') ? 0 : min;
	max = (typeof max === 'undefined') ? 1000 : max;
	return min + (Math.random() * (max - min));
};

/**
 * Method that returns the difference between number a and b.
 *
 * @param a
 * @param b
 * @returns number
 */
NumberUtil.diff = NumberUtil.delta = function(a, b){
	return Math.abs(Math.max(a,b) - Math.min(a,b));
};