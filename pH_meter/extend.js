
		var a ;
		
		function allowDrop(ev){
			ev.preventDefault();
		};
		
		function drag(ev){
			ev.dataTransfer.setData("text", ev.target.id);
			
			if(ev.target.id == "ph_meter_icon"){
				a = 1;
				
			} else if(ev.target.id == "ph_ui_icon"){
				a = 2;
			
			}
		};
		
		function drop(ev){
			ev.preventDefault();
			var data = ev.dataTransfer.getData("text");
			ev.target.appendChild(document.getElementById(data));
			
			if (a == 1){
				after_drop_ph_meter();
				
				
			} else if (a == 2){
				after_drop_ph_ui();
				document.getElementById('parent_ph_meter').appendChild(document.getElementById('ph_meter_icon'));
				document.getElementById('ph_meter_value').style.display = "none";
			}
		};
		
		function after_drop_ph_meter(){
			document.getElementById("ph_main").src="pH_meter.gif";
			setTimeout(function(){ document.getElementById('ph_meter_value').style.display = "block"; }, 1000);
			document.getElementById('parent_ph_ui').appendChild(document.getElementById('ph_ui_icon'));
		};
		