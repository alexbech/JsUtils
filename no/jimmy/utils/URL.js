/**
 * Utility class that parses out the different parts of a url.
 * Also has convenience methods for adding & removing url-params.
 *
 * User: Alexander
 * Date: 12.04.11
 * Time: 15:00
 */

// Create default Namespace function if it does not already exist
if(typeof Namespace.standAlone==="undefined"){var Namespace=(function(){var n=function(b){var d=b.split(".");var a,c=window;for(a=0;a<d.length;a++){if(typeof(c[d[a]])==="undefined"){c[d[a]]={}}c=c[d[a]]}return c};return n})();Namespace.standAlone=true}

Namespace('no.jimmy.utils');

no.jimmy.utils.URL = function(uri){
	var self = this;
	uri = uri || window.location;
	/**
	* @author of RegExp Steven Levithan
	*/
	var expression = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	var keys = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];

	var m = expression.exec( uri );
	var i = keys.length;

	while ( i-- ) {
		this[ keys[i] ] = m[i] || "";
	}

	this.params = {};

	if(this.query){
		this.query.replace( /(?:^|&)([^&=]*)=?([^&]*)/g, function ( $0, $1, $2 ) {
			if ($1) {
				self.params[$1] = $2;
			}
		});
	}
};

no.jimmy.utils.URL.prototype.addRequestParameter = function(name, value){
	this.params[name] = value;
};

no.jimmy.utils.URL.prototype.removeRequestParameter = function(name){
	delete this.params[name];
};

no.jimmy.utils.URL.prototype.removeRequestParameters = function(){
	this.params = {};
};

no.jimmy.utils.URL.prototype.hasRequestParameters = function(){
	for(var prop in this.params){
		if(typeof this.params[prop] != "function") return true;
	}
	return false;
};

no.jimmy.utils.URL.prototype.toString = function(){
	var url = "";
	if(this.protocol != "") url += this.protocol + "://";
	if(this.authority != "") url += this.authority;
	if(this.path != "") url += this.path;
	if(this.hasRequestParameters()){
		url += "?";
		for(var prop in this.params){
			if(typeof this.params[prop] != "function"){
				url += prop + "=" + this.params[prop] + "&";
			}
		}
		url = url.substring(0, url.length-1);
	}
	if(this.anchor != "") url += "#" + this.anchor;
	return url;
};