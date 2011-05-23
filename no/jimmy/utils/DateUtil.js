/**
 * Static utility class for common date operations
 *
 * User: Alexander
 * Date: 15.03.11
 * Time: 14:02
 */

// Create default Namespace function if it does not already exist
if(typeof Namespace.standAlone==="undefined"){var Namespace=(function(){var n=function(b){var d=b.split(".");var a,c=window;for(a=0;a<d.length;a++){if(typeof(c[d[a]])==="undefined"){c[d[a]]={}}c=c[d[a]]}return c};return n})();Namespace.standAlone=true}

// Set up namespace and assign to short-hand variable
var DateUtil = Namespace('no.jimmy.utils.DateUtil');

/**
 * Method that returns timestamp for supplied or current date
 *
 * @param date
 * @return number
 */
DateUtil.getStamp = function(date){
	date = no.jimmy.utils.DateUtil.getDate(date);
	return date.getTime();
};

/**
 * Method that returns a new Date instance
 *
 * @param date
 * @return date
 */
DateUtil.getDate = function(date){
	return (typeof date === "undefined") ? new Date() : date;
};

/**
 * Method that returns supplied date's week number.
 * If no date is supplied a new date object is created, using todays date.
 *
 * @param date
 * @return Week number for supplied date
 */
DateUtil.getWeekNumber = function(date){
	date = no.jimmy.utils.DateUtil.getDate(date);
	var a = date.getFullYear();
	var m = date.getMonth() + 1;
	var j = date.getDate();
	var S = Math.floor(a / 100);
	var A = a % 100;
	var aB = (a % 4 == 0 && a % 100 != 0) || (a % 1000 == 0) ? 1 : 0;
	var jNA = (5 * S + Math.floor(S / 4) + A + Math.floor(A / 4) + aB * 6) % 7;
	var w = Math.floor((jNA + (m == 1 ? j : m == 2 ? 31 + j : Math.floor((30.6 * m) - 32.3) + j + aB * 1) + 5) / 7) - Math.floor(jNA / 5);
	return (w == 0 || w == 53 ? 1 : w);
};