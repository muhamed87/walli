/**
* Walli
* @version 1.0.0
* @authors Muhamed Mamdouh & Rudy Zidan
* @license The MIT License (MIT)
*/

(function($){
	$.fn.extend({
		walli: function(options) {
			var defaults = {
				rows: 3,
				columns: 5,
				timer: 3000
			}
				
			var options =  $.extend(defaults, options);
			return this.each(function() {
				var settings = options;

				var array = [];
				$(this).children().each(function(){
					var element = $(this);
					array.push(element);
					$(this).remove();
				});

				$(this).css('width', '100%');

				var item = 0;
				var items = array.length;
				if(array.length/settings.columns < settings.rows){
					for (var r = 0; r < settings.rows-1; r++) {
						var $row = $('<div class="walli-row"></div>');
						$(this).append($row);
						for (var c = 0; c < settings.columns; c++) {
							if(item<items){
								var getItem = array[Math.floor(Math.random()*array.length)].context.outerHTML;
								var showcase = $(this).context.outerHTML;
								while(showcase.search(getItem) > 0) {
									getItem = array[Math.floor(Math.random()*array.length)].context.outerHTML;
								}
							}
							$row.append('<div class="item active">' + getItem + '</div>');
							item++;
						}
					}
				}
				else {
					for (var r = 0; r < settings.rows; r++) {
						var $row = $('<div class="walli-row"></div>');
						for (var c = 0; c < settings.columns; c++) {
							if(item<items){
								var getItem = array[Math.floor(Math.random()*array.length)].context.outerHTML;
								var showcase = $(this).context.outerHTML;
								while(showcase.search(getItem) > 0) {
									getItem = array[Math.floor(Math.random()*array.length)].context.outerHTML;
								}
							}
							$row.append('<div class="item active">' + getItem + '</div>');
							item++;
						}
						$(this).append($row);
					}
				}

				var itemWidth = $(this).width()/settings.columns;
				$('.item').outerWidth(itemWidth);
				$('.item img').css('max-width','100%');
			});
		}
	});

})(jQuery);