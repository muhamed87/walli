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
			};
			return this.each( function() {
				var settings =  $.extend(defaults, options);
				var imageBlocks = []; // array to hold children elements.
				var item = 0;
				var itemsCount = 0;

				/**
				* Set width of walli to be 100% of its parent.
				*/
				setWidth = function() {
					$(this).css('width', '100%');
				};
				/**
				* Set count of imageBlocks.
				*/
				setCount = function() {
					itemsCount = imageBlocks.length;
				};
				/**
				* set width for each image block.
				*/
				setImageBlockWidth = function(container) {
					$('.item').outerWidth(getItemWidth(container));
					$('.item img').css('max-width','100%');
				};
				/**
				* Get random image block in each time.
				*/
				getRandomImageBlock = function(container) {
					var walliMainContainer = $(container).context.outerHTML;
					var imageBlock = imageBlocks[Math.floor(Math.random()*itemsCount)].context.outerHTML;
					while(walliMainContainer.search(imageBlock) > 0) {
						imageBlock = imageBlocks[Math.floor(Math.random()*itemsCount)].context.outerHTML;
					}
					return imageBlock;
				};
				/**
				* get width of each image block.
				*/
				getItemWidth = function(container) {
					return ($(container).width() / settings.columns);
				};

				/**
				* For each element inside the main container we will put it in array.
				*/
				$(this).children().each( function() {
					imageBlocks.push($(this));
					$(this).remove();
				});
				/**
				* append image block to walli container.
				*/
				appendToContainer = function(container) {
					var rowsCount = ((itemsCount / settings.columns) < settings.rows) ? settings.rows-1 : settings.rows;
					for (var r = 0; r < rowsCount; r++) {
						var $row = $('<div class="walli-row"></div>');
						$(container).append($row);
						for (var c = 0; c < settings.columns; c++) {
							if(item < itemsCount){
								$row.append('<div class="item active">' + getRandomImageBlock(container) + '</div>');
							}
							item++;
						}
					}
					setImageBlockWidth(this);
				};
				setWidth();
				setCount();
				appendToContainer(this);
			});
		}
	});
})(jQuery);
