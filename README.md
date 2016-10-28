# walli
A jquery showcase plugin to display your clients randomly in a grid view, it will change clients images randomly as well in different animations. Walli plugin has default settings and you can put your own settings by passing new values to the options parameters.

# How to use:

- Include the js and css files of the plugin.
- Include jQuery library.
- Add your clients logos to a div, add "walli" class to the div to apply the styles from the css, and add another class name to the same div, and add the following code to call & apply the plugin: 

* To apply default settings:
$("class-name").walli(); 

* To apply your settings:
$('class-name').walli({
  rows: Number of rows here,
  columns: Number of columns here,
  timer: Time in milliseconds
});

# Options:
- rows: Number of rows
- columns: Number of columns
- timer: Time of changing clients images in milliseconds
