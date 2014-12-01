function OptionBar (options) {
	var js = this;
	if (options.containerId == undefined){
   		console.error("no containerId set for options widget");
   		return;
   	}

	if (options.options == undefined) options.options = ["1", "2", "3", "4"];
	
	if (options.margin == undefined) options.margin = 3;
	

	// set default bar/widget size if not given
	if (options.barWidth == undefined){
		if (options.widgetWidth == undefined){
			options.barWidth = 100;
			options.widgetWidth = options.barWidth*options.options.length + options.margin*2;
		} else {
			options.barWidth = (options.widgetWidth-options.margin*2)/options.options.length;
		}
	}
	if (options.widgetWidth == undefined){
		options.widgetWidth = options.barWidth*options.options.length + options.margin*2;
	}

	if (options.barHeight == undefined){
		if (options.widgetHeight == undefined){
			options.barHeight = 50;
			options.widgetHeight = options.barHeight + options.margin*2;
		} else {
			options.barHeight = (options.widgetHeight-options.margin*2);
		}
	}
	if (options.widgetHeight == undefined){
		options.widgetHeight = options.barHeight + options.margin*2;
	}


	if (options.selected == undefined) options.selected = 0;
	if (options.textColor == undefined) options.textColor = '#000';

	if (options.barColor == undefined) options.barColor = '#99F'
	

    js.options = options;

    

    // init background
    var backgroundString = '';

    if (js.options.backgroundImageUrls != undefined){
    	backgroundString = 'background-image: url('+js.options.backgroundImageUrls[js.options.selected]+'); ';


    } else if (js.options.backgroundImageUrl != undefined){
    	backgroundString = 'background-image: url('+js.options.backgroundImageUrl+'); ';
    
	} else {
    	if (js.options.backgroundColor == undefined){
    		js.options.backgroundColor = '#CCF';
    	}
    	backgroundString = 'background-color:'+js.options.backgroundColor+'; ';
    }

    var noSelectCSS = '-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; ';


    // init widget background div
	var widgetDiv = $('<div id='+js.options.id+' '+
		'style="width:'+js.options.widgetWidth+'px; height:'+this.options.widgetHeight+'px; '+
		noSelectCSS+
		backgroundString +

		// 'margin:100px; '+
		' "> </div>');


	// init bar div
	var barX = this.options.selected*this.options.barWidth + this.options.margin;

	var barDiv = $('<div id='+this.options.id+'_bar '+
		'style="width:'+this.options.barWidth+'px; height:'+this.options.barHeight+'px; '+
		noSelectCSS+
		'position:absolute; '+
		'margin-left:'+barX+'px; '+
		'margin-top:'+this.options.margin+'px; '+
		'background-color:'+this.options.barColor+'; '+
		' "> </div>');

	widgetDiv.append(barDiv);
	$("#"+this.options.containerId).append(widgetDiv);

	// function for switching selected option
	this.switchOption = function (i){
		return function(){
			if (js.options.toggle != undefined && js.options.toggle == true){
				if (js.options.selected == 0) i = 1;
				else i = 0;
			}

			js.options.selected = i;

			var barX = js.options.selected*js.options.barWidth + js.options.margin;
			$('#'+js.options.id+'_bar').css('margin-left', ''+barX+'px');

			if (js.options.backgroundImageUrls != undefined){
				$('#'+js.options.id).css('background-image', 'url('+js.options.backgroundImageUrls[js.options.selected]+')');
			}



			if (js.options.onSelect != undefined){
				js.options.onSelect({index: i, option: js.options.options[i]});
			}
		};
	}

	for (var i = 0; i < options.options.length; i++){
		var _id = this.options.id+'_options_'+options.options[i];

		var optionDiv = $('<div id='+_id+' '+
			'style="margin-left:'+(i==0?this.options.margin:0)+'px; '+
			'margin-top:'+(this.options.margin)+'px; '+
			'width:'+this.options.barWidth+'px; height:'+this.options.barHeight+'px; '+
			'position:relative; '+
			'display:inline-block; '+
			'float:left; '+
			' "><p style="text-align:center; cursor:default; color:'+js.options.textColor+'; ">'+options.options[i]+'</p></div>');
		
		
		optionDiv.click(js.switchOption(i));
		

		widgetDiv.append(optionDiv);
	}
 
	this.getSelection = function(){
		return {index: js.options.selected, option: js.options.options[js.options.selected]};
	}

}