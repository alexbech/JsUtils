/**
 * Static utility class for common string operations
 *
 * User: Alexander
 * Date: 15.03.11
 * Time: 10:17
 */

// Create default Namespace function if it does not already exist
if(typeof Namespace.standAlone==="undefined"){var Namespace=(function(){var n=function(b){var d=b.split(".");var a,c=window;for(a=0;a<d.length;a++){if(typeof(c[d[a]])==="undefined"){c[d[a]]={}}c=c[d[a]]}return c};return n})();Namespace.standAlone=true}

// Set up namespace and assign to short-hand variable
var StringUtil = Namespace('no.jimmy.utils.StringUtil');

/**
 * Method that checks if a source string contains a given value.
 * Also has an optional case-sensitivity flag.
 *
 * @param source
 * @param value
 * @param caseInsensitive
 * @returns boolean
 */
StringUtil.contains = function(source, value, caseInsensitive) {
	if(caseInsensitive){
		source = source.toLowerCase();
		value = value.toLowerCase();
	}
	return (source.indexOf(value) != -1);
};

/**
 * Method that returns source with first letter capitalized.
 *
 * @param source
 * @returns string
 */
StringUtil.upperCaseFirst = function(source) {
	return source.substr(0, 1).toUpperCase() + source.substr(1, source.length);
};

/**
 * Method that returns source with all words capitalized.
 *
 * @param source
 * @returns string
 */
StringUtil.upperCaseWords = function(source) {
	var words = source.split(" ");
	for (var i=0; i < words.length; i++){
		words[i] = StringUtil.upperCaseFirst(words[i]);
	}
	return words.join(" ");
};

/**
 * Method that returns source with all sentences capitalized.
 *
 * @param source
 * @returns string
 */
StringUtil.upperCaseSentence = function(source) {
	var result = "";
	var brake = true;
	for (var i=0; i<source.length; i++) {
		result += brake ? source.charAt(i).toUpperCase() : source.charAt(i).toLowerCase();
		brake = (brake && source.charCodeAt(i) <= 32) || "\r\n.:;!?".indexOf(source.charAt(i)) != -1;
	}
	return result;
};

/**
 * Method that strips all whitespace from source.
 *
 * @param source
 * @returns string
 */
StringUtil.stripWhiteSpace = function(source) {
	return source.replace(/\s/g, "");
};

/**
 * Method that trim whitespace at the beginning & end of source.
 *
 * @param source
 * @returns string
 */
StringUtil.trim = function(source) {
	return source.replace(/^\s+|\s+$/g,"");
};

/**
 * Method that trim whitespace at the beginning of source.
 *
 * @param source
 * @returns string
 */
StringUtil.trimLeft = function(source) {
	return source.replace(/^\s+/,"");
};

/**
 * Method that trim whitespace at the end of source.
 *
 * @param source
 * @returns string
 */
StringUtil.trimRight = function(source) {
	return source.replace(/\s+$/,"");
};

/**
 * Method that checks if source string starts with given value.
 *
 * @param source
 * @param value
 * @returns boolean
 */
StringUtil.startsWith = function(source, value) {
	return (value == source.substring(0, value.length));
};

/**
 * Method that checks if source string ends with given value.
 *
 * @param source
 * @param value
 * @returns boolean
 */
StringUtil.endsWith = function(source, value) {
	return (value == source.substring(source.length - value.length));
};

/**
 * Method that replaces valueToRemove param with valueToInsert param in source.
 *
 * @param source
 * @param valueToRemove
 * @param valueToInsert
 * @returns string
 */
StringUtil.replace = function(source, valueToRemove, valueToInsert) {
	return source.split(valueToRemove).join(valueToInsert);
};

/**
 * Method that removes valueToRemove param in source.
 *
 * @param source
 * @param valueToRemove
 * @returns string
 */
StringUtil.remove = function(source, valueToRemove) {
	return source.split(valueToRemove).join("");
};

/**
 * Method that truncates source after given length and pads with trail.
 *
 * @param source
 * @param length
 * @param trail
 * @returns string
 */
StringUtil.truncate = function(source, length, trail) {
	if(source.length <= length) return source;
	return source.substr(0, length - trail.length) + trail;
};

/**
 * Method that formats number according to parameters and returns string.
 *
 * @param number
 * @param numberOfDecimals
 * @param decimalSeparator
 * @param thousandSeparator
 * @returns string
 */
StringUtil.numberFormat = function(number, numberOfDecimals, decimalSeparator, thousandSeparator) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+numberOfDecimals) ? 0 : Math.abs(numberOfDecimals),
        sep = (typeof thousandSeparator === 'undefined') ? ' ' : thousandSeparator,
        dec = (typeof decimalSeparator === 'undefined') ? '.' : decimalSeparator,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
};