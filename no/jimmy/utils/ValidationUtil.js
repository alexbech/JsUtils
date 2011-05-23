/**
 * Static utility class for common string validation operations.
 * NB! Uses norwegian formats.
 *
 * User: Alexander
 * Date: 19.05.11
 * Time: 10:17
 */

// Create default Namespace function if it does not already exist
if(typeof Namespace.standAlone==="undefined"){var Namespace=(function(){var n=function(b){var d=b.split(".");var a,c=window;for(a=0;a<d.length;a++){if(typeof(c[d[a]])==="undefined"){c[d[a]]={}}c=c[d[a]]}return c};return n})();Namespace.standAlone=true}

// Set up namespace and assign to short-hand variable
var ValidationUtil = Namespace('no.jimmy.utils.ValidationUtil');

/**
 * Method that checks if input is valid email address
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isEmail = function(input){
	return input.match( /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i ) != null;
};

/**
 * Method that checks if input is valid phone number
 * Accepted formats are:
 * 22222222
 * +47(optional space)22222222
 * 0047(optional space)22222222
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isPhone = function(input){
	return input.match( /^(\+47|0047)?\s?\d{8}$/ ) != null;
};

/**
 * Method that checks if input is valid cellphone number
 * Accepted formats are:
 * 99999999
 * +47(optional space)44444444
 * 0047(optional space)99999999
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isMobile = function(input){
	return input.match( /^(\+47|0047)?\s?(4|9)\d{7}$/ )  != null;
};

/**
 * Method that checks if input is valid date
 * Accepted formats are:
 * 1.1.1999
 * 01.01.99
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isDate = function(input){
	return input.match( /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[.\/-]([0]?[1-9]|[1][0-2])[.\/-]([0-9]{4}|[0-9]{2})$/ ) != null;
};

/**
 * Method that checks if input is valid zip code
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isZip = function(input){
	return input.match( /^\d{4}$/ ) != null;
};

/**
 * Method that checks if input is valid ip address
 * Accepted ranges are 0.0.0.0 to 255.255.255.255
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isIpAddress = function(input){
	return input.match( /^((2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.){3}(2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})$/ ) != null;
};

/**
 * Method that checks if input is valid full url
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isUrl = function(input){
	return input.match( /((https?|ftp)\:\/\/([\w-]+\.)?([\w-])+\.(\w)+\/?[\w\?\.\=\&\-\#\+\/]+)/ ) != null;
};

/**
 * Method that checks if input is valid domain
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isDomain = function(input){
	return input.match( /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)*[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?$/ ) != null;
};

/**
 * Method that checks that input is not empty
 *
 * @param input
 * @return boolean
 */
ValidationUtil.notEmpty = function(input){
	return input.match( /\S/ ) != null;
};

/**
 * Method that checks that input only contains numeric values
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isNumericOnly = function(input){
	return input.match( /[^0-9]/ ) == null;
};

/**
 * Method that checks that input only contains alphabetic values
 *
 * @param input
 * @return boolean
 */
ValidationUtil.isAlphabeticOnly = function(input){
	return input.match( /[^A-Za-z]/ ) == null;
};

/**
 * Method that checks that input does not contain any whitespace
 *
 * @param input
 * @return boolean
 */
ValidationUtil.noWhiteSpace = function(input){
	return input.match( /\s/ ) == null;
};

/**
 * Method that checks that input does not contain any special characters
 *
 * @param input
 * @return boolean
 */
ValidationUtil.noSpecialCharacters = function(input){
	return input.match( /\W/ ) == null;
};