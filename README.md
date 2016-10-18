## Synopsis

Query Passthru is a jQuery plugin that persists URL query parameters throughout your page(s). It supports overwriting query parameters already on the link and passing in additional query parameters to append.

## Usage

Include the script query-passthru.min.js after jQuery.

	$("a").passthru();

If the above code is on a page whose URL is (for example) `https://myawesomesite.com/contact-us/?utm_source=direct&utm_campaign=adwords`, all of the `a` tags (with an `href` attribute) will get `?utm_source=direct&utm_campaign=adwords` appended.

## Options

	$("a").passthru({options}, {forcedParameters});

Currently the only option is `overwrite: true/false` (default `true`). When true, if a link is found containing a matching parameter key, the link's existing key/value will be overwritten with the value found in the document URL. If set to false, any existing parameters will not be overwritten by any matching keys in the URL.

`forcedParameters` is an optional object that will append additional key/value pairs to the resulting `href` attribute. These will always overwrite any existing parameters that match the given key(s).

## Installation

You can install query-passthru with [npm](https://www.npmjs.com/):

	npm install --save query-passthru

## License

This plugin is available under the [MIT license](http://mths.be/mit).