# jQuery Character Limiter Plugin

## Description
Easy to use [jQuery](https://jquery.com/) plugin for limiting number of characters in any text field with an option to display current character count.

## Setup
Download the archive, extract it, and include `character-limiter.js` in your HTML page after jQuery.

## Usage
### Basic

```javascript
jQuery('your-text-field-selector-here').limitCharacters(150);
```

### Advanced

```javascript
jQuery('your-text-field-selector-here').limitCharacters(150, {
		displayCount : true,
		countClass   : "pull-right"
	});
```

## Requirements
- jQuery

## License
jQuery Character Limiter is released under the MIT license. See LICENSE for details.