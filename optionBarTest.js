
$(document).ready(function() {

	var colorTest = new OptionBar({
    	id: 'colorTest',
    	containerId: 'colorTestDiv',
    	options: ['1','2','3','4'],
		selected: 2,
	});

    var iosSwitchTest = new OptionBar({
    	id: 'iosSwitchTest',
    	containerId: 'iosTestDiv',
    	options: ['',''],
    	widgetWidth: 102,
    	widgetHeight: 62,
    	margin: 3,
    	barWidth: 49,
    	backgroundImageUrl:'switch_on.png',
		backgroundImageUrls: ['switch_off.png', 'switch_on.png'],
		barColor: 'none',
		toggle: true,
	});


    var margin = 3;
	var callbackExample = new OptionBar({
		id: 'callbackExample',
		containerId: 'callbackExampleDiv',
		options: ['I do nothing...', 'I have a callback!', 'I do nothing...'],
		margin: margin,
		widgetWidth: 500,
		widgetHeight: 50,
		backgroundColor: '#777',
		barColor: '#000',
		textColor: '#FFF',

		onSelect: function(selection){
			if (selection.index == 1){
				alert("HELLO THERE");
			}
		},
	})
	
	
	console.log(colorTest.getSelection());
	
});