"use strict";

jQuery(document).ready(function(e){
	var options =  { countClass: "pull-right" };
	jQuery('textarea').limitCharacters(150, options);
});