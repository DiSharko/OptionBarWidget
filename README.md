OptionBarWidget
===============

An option bar widget made in javascript for CS 130 (UI).

The demo for this includes an html file, index.html, which sets up the divs to be filled with the widgets and includes JQuery, the option bar js code, and js code to add example widgets to the page.

The usage for creating a new option bar widget in javascript is:

```
new OptionBar({
	// mandatory:
		id: 'widget_id',
		containerId: 'html_div_to_attach_to',
		options: ['a','list','of','option','strings'],
    	
  	// optional:
		selected: 3, // the option selected by default
		toggle: true, // if there are only two options, any click in the widget will toggle between them
		textColor: '#FFF', // default is black

  	// if none of the following are specified, a default background color will be used.
  	// if all are specified, images take precedence over colors.
		backgroundColor: '#CCF',
		barColor: '#99F',
		backgroundImageUrl: 'background.png', // a static background image
		backgroundImageUrls: ['switch_off.png', 'switch_on.png'],
		  
	// if none of the following are specified, defaults will be used.
	// if only some are specified, the rest will be infered from the given information.
		margin: 3,
		widgetWidth: 506,
		widgetHeight: 56,
		barWidth: 100,
		barHeight: 50,

  	// callback function when something is selected
		onSelect: function(selection){
			// selection == {index: #, option: "selected option string"};
		},
	})
```
