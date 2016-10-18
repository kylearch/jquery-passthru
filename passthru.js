(function($) {

	$.fn.passthru = function(options, forcedParams) {

		var self = this;
		this.params = {};

		this.settings = $.extend({
			overwrite: true,
		}, options);

		this.getParamsFromQuery = function(query) {
			if (query.length) {
				var rawParams = query.substr(1).split("&"),
				params = {};
				for (var i = 0; i < rawParams.length; i++) {
					var p = rawParams[i].split("=");
					params[p[0]] = p[1];
				}
				return params;
			} else {
				return {};
			}
		}

		this.getParamsFromHref = function(href) {
			var link = document.createElement('a');
			link.href = href;
			return this.mergeObjects(this.params, this.getParamsFromQuery(link.search), this.settings.overwrite);
		}

		this.mergeObjects = function(object1, object2, overwrite) {
			var mergedObject = $.extend({}, object2);
			for (var key in object1) {
				if (mergedObject.hasOwnProperty(key)) {
					if (overwrite) mergedObject[key] = object1[key];
				} else {
					mergedObject[key] = object1[key];
				}
			}
			return mergedObject;
		}

		this.params = this.getParamsFromQuery(document.location.search);

		this.filter("[href]").each(function() {
			var href = $(this).attr('href'),
				query = self.mergeObjects(forcedParams, self.getParamsFromHref(href), true);
			if ( ! $.isEmptyObject(query)) {
				var queryString = "?" + $.param(query);
				href = (href.indexOf("?") !== -1) ? href.substr(0, href.indexOf("?")) : href ;
				$(this).attr('href', href + queryString);
			}
		});

		return this;

	};

}(jQuery));