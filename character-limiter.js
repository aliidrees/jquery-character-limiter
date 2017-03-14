/*
 * Plugin name: jQuery Character Limiter Plugin
 * Version: 1.0
 * Author: aliidrees
 * https://github.com/aliidrees/jquery-character-limiter
 *
 * Copyright 2017, Ali Idrees
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
 
"use strict";

(function($) {

    $.fn.limitCharacters = function(limit, options) {

        // Establish our default settings
        var settings = $.extend({
            displayCount : true,
            countClass   : ""
        }, options);

        return this.each( function() {
            // Store the jQuery object to be more efficient
			var $textarea = $(this);
			
			// Limit should be a positive number
			if (limit === undefined || isNaN(limit) || (!isNaN(limit) && limit <= 0) ) {
			    throw "Invalid character limit provided!";
			}

			// Just in case a float is passed..
			limit = Math.round(limit);

			// Store the maxlength and value of the field.
			var maxlength = limit;
			var val = $textarea.val();
			// Store the span that will be displaying the count
			var $countSpan;

			// Display count if it was specified
			if (settings.displayCount === true) {
				$countSpan = $("<span class=\"" + settings.countClass + "\">" + val.length + "/" + maxlength + "</span>").insertAfter($textarea);
			}

			// Trim the field if it already has content over the maxlength.
			$textarea.val(val.slice(0, maxlength));
			
			// Bind the trimming behavior to the "keyup" and "blur" event.
			$textarea.bind('keyup blur', function() {
			    $textarea.val($textarea.val().slice(0, maxlength));
			    // Update display count
			    if ($countSpan) {
			    	$countSpan.text($textarea.val().length + "/" + maxlength);
				}
			});

        });

    }

}(jQuery));
