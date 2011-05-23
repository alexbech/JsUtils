/**
 * Static utility class for type checking
 *
 * User: Alexander
 * Date: 15.03.11
 * Time: 11:46
 */

// Create default Namespace function if it does not already exist
if(typeof Namespace.standAlone==="undefined"){var Namespace=(function(){var n=function(b){var d=b.split(".");var a,c=window;for(a=0;a<d.length;a++){if(typeof(c[d[a]])==="undefined"){c[d[a]]={}}c=c[d[a]]}return c};return n})();Namespace.standAlone=true}

// Set up namespace and assign to short-hand variable
var TypeUtil = Namespace('no.jimmy.utils.TypeUtil');

/**
 * Method that checks if supplied value is numeric.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isNumeric = function(value){
	var num = parseInt(value);
	return !isNaN(num);
};

/**
 * Method that checks if supplied value is an integer.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isInteger = function(value){
	return (typeof value == 'number') && value === +value && value === (value|0);
};

/**
 * Method that checks if supplied value is a floating number.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isFloat = function(value){
	return (typeof value == 'number') && value === +value && value !== (value|0);
};

/**
 * Method that checks if supplied value is a string.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isString = function(value){
	return TypeUtil.getType(value) == "String";
};

/**
 * Method that checks if supplied value is an array.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isArray = function(value){
	return TypeUtil.getType(value) == "Array";
};

/**
 * Method that checks if supplied value is a boolean.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isBoolean = function(value){
	return TypeUtil.getType(value) == "Boolean";
};

/**
 * Method that checks if supplied value is an object.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isObject = function(value){
	return TypeUtil.getType(value) == "Object";
};

/**
 * Method that checks if supplied value is a function.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isFunction = function(value){
	return TypeUtil.getType(value) == "Function";
};

/**
 * Method that checks if supplied value is a date.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isDate = function(value){
	return TypeUtil.getType(value) == "Date";
};

/**
 * Method that checks if supplied value is a domElement.
 *
 * @param value
 * @returns boolean
 */
TypeUtil.isDOMElement = function(value){
	return TypeUtil.getType(value).indexOf("HTML") == 0;
};

/**
 * Method used to inspect an instance's type.
 *
 * @param instance
 * @returns string
 */
TypeUtil.getType = function(instance){
    if(instance === null)return "Null";
	return Object.prototype.toString.call(instance).match(/^\[object (.*)\]$/)[1];
};