/**
* Walli
* @version 1.1.0
* @authors Muhamed Mamdouh & Rudy Zidan
* @license The MIT License (MIT)
*/

(function($){
	$.fn.extend({
		walli: function(options) {
			var defaults = {
				rows: 3,
				columns: 6,
				timer: 3000
			};
			return this.each( function() {
				var settings =  $.extend(defaults, options);
				var imageBlocks = []; // array to hold children elements.
				var item = 0;
				var itemsCount = 0;

				// Set count of imageBlocks
				setCount = function() {
					itemsCount = imageBlocks.length;
				};

				// Set width for each image block
				setImageBlockWidth = function(container) {
					$('.walli-item').outerWidth(getItemWidth(container));
				};

				// Get random image block in each time
				getRandomImageBlock = function(container) {
					var walliMainContainer = $(container).context.outerHTML;
					var imageBlock = imageBlocks[Math.floor(Math.random()*itemsCount)].context.outerHTML;
					while(walliMainContainer.search(imageBlock) > 0) {
						imageBlock = imageBlocks[Math.floor(Math.random()*itemsCount)].context.outerHTML;
					}
					return imageBlock;
				};

				// Get width of each image block
				getItemWidth = function(container) {
					return ($(container).width() / settings.columns);
				};

				// For each element inside the main container we will put it in array
				$(this).children().each( function() {
					imageBlocks.push($(this));
					$(this).remove();
				});

				// Append image block to walli container
				appendToContainer = function(container) {
					var rowsCount = ((itemsCount / settings.columns) < settings.rows) ? settings.rows-1 : settings.rows;
					for (var r = 0; r < rowsCount; r++) {
						var $row = $('<div class="walli-row"></div>');
						$(container).append($row);
						for (var c = 0; c < settings.columns; c++) {
							if(item < itemsCount){
								$row.append('<div class="walli-item">' + getRandomImageBlock(container) + '</div>');
							}
							item++;
						}
					}
					setImageBlockWidth(this);
				};


				animation = function(container) {
					var newImage = getRandomImageBlock(container);
					var randomChild = Math.floor( Math.random() * $(container).find('.walli-item').length );
					var randomImageContainer = $(container).find('.walli-item')[randomChild];
					$(randomImageContainer).children().fadeOut(function(){
						$(randomImageContainer).append($(newImage).css('display','none'));
						$(this).remove();
						$(randomImageContainer).find('img').fadeIn(function(){
							$(this).removeAttr('style');
						});
					});
				};

				setCount();
				appendToContainer(this);

				var startAnimation = setInterval(animation,settings.timer,this);

				$(this).on('mouseover', function(){
					clearInterval(startAnimation);
				});

				$(this).on('mouseout', function(){
					startAnimation = setInterval(animation,settings.timer,this);
				});

			});
		}
	});
})(jQuery);