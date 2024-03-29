    var values = [0, 10, 20, 30, 40, 50];
    
    var data_entry_ph_color = [
        "#ee1c25", //0
        "#f26724", //1
        "#f8c611", //2
        "#f5ed1c", //3
        "#b5d333", //4
        "#84c341", //5
        "#4db749", //6
        "#33a94b", //7
        "#22b46b", //8
        "#0ab8b6", //9
        "#4690cd", //10
        "#3853a4", //11
        "#5a51a2", //12
        "#63459d", //13
        "#462c83"  //14
        ];
    
    //First 50 - HEAD
    //note : using array multiple dimension
    //       combine with 'if' statement
    //       [A, B, C, D, pH(integer), pH(real_data), degree]
    var data_entry_first = [
        [10, 0, 0, 0, 1 , 1.0  , 27],
        [0, 10, 0, 0, 13, 13.0 , 27],
        [0, 0, 10, 0, 0 , 0.70 , 27],
        [0, 0, 0, 10, 13, 13.30, 27]
        ];
    
    //Second 25 - HEAD
    //note : using array multiple dimension
    //       combine with 'if' statement
    //       [A, B, C, D, pH(integer), pH(real_data), degree]
    var data_entry_second = [
        [10, 50, 0, 0, 12, 12.80, 28],
        [10, 40, 0, 0, 12, 12.78, 28],
        [10, 30, 0, 0, 12, 12.70, 28.5],
        [10, 20, 0, 0, 12, 12.52, 29],
        [10, 10, 0, 0, 7 , 7.00 , 30],
        [20, 50, 0,	0, 12, 12.63, 28],
        [20, 40, 0,	0, 12, 12.52, 28],
        [20, 30, 0,	0, 12, 12.30, 29],
        [20, 20, 0,	0, 7 , 7.00 , 30],
        [20, 10, 0,	0, 1 , 1.48 , 29],
        [30, 50, 0,	0, 12, 12.40, 28],
        [30, 40, 0,	0, 12, 12.15, 28.5],
        [30, 30, 0,	0, 7 , 7.00 , 30],
        [30, 20, 0,	0, 1 , 1.70 , 29],
        [30, 10, 0,	0, 1 , 1.30 , 28.5],
        [40, 50, 0,	0, 12, 12.04, 28.5],
        [40, 40, 0,	0, 7 , 7.00 , 30],
        [40, 30, 0,	0, 1 , 1.85 , 28.5],
        [40, 20, 0,	0, 1 , 1.48 , 28],
        [40, 10, 0,	0, 1 , 1.22 , 28],
        [50, 50, 0,	0, 7 , 7.00 , 30],
        [50, 40, 0,	0, 1 , 1.95 , 29],
        [50, 30, 0,	0, 1 , 1.60 , 28],
        [50, 20, 0,	0, 1 , 1.38 , 28],
        [50, 10, 0,	0, 1 , 1.17 , 28]
        ];
    
    //Third 25 - HEAD
    //note : using array multiple dimension
    //       combine with 'if' statement
    //       [A, B, C, D, pH(integer), pH(real_data), degree]
    var data_entry_third = [
        [10, 0, 0, 50, 13, 13.18, 28],
        [10, 0, 0, 40, 13, 13.15, 28],
        [10, 0, 0, 30, 13, 13.10, 28.5],
        [10, 0, 0, 20, 13, 13.00, 29],
        [10, 0, 0, 10, 12, 12.70, 30],
        [20, 0, 0, 50, 13, 13.06, 28],
        [20, 0, 0, 40, 13, 13.00, 28.5],
        [20, 0, 0, 30, 12, 12.60, 29],
        [20, 0, 0, 20, 12, 12.40, 29],
        [20, 0, 0, 10, 7 , 7.00 , 30],
        [30, 0, 0, 50, 13, 13.94, 28.5],
        [30, 0, 0, 40, 12, 12.85, 29],
        [30, 0, 0, 30, 12, 12.70, 29],
        [30, 0, 0, 20, 12, 12.30, 29],
        [30, 0, 0, 10, 12, 12.40, 29],
        [40, 0, 0, 50, 12, 12.82, 29],
        [40, 0, 0, 40, 12, 12.70, 28.5],
        [40, 0, 0, 30, 12, 12.45, 29],
        [40, 0, 0, 20, 7 , 7.00 , 30],
        [40, 0, 0, 10, 1 , 1.40 , 28],
        [50, 0, 0, 50, 12, 12.70, 28.5],
        [50, 0, 0, 40, 12, 12.52, 29],
        [50, 0, 0, 30, 12, 12.09, 28.5],
        [50, 0, 0, 20, 1 , 1.85 , 28],
        [50, 0, 0, 10, 1 , 1.30 , 28]
        ];
    
    //Forth 25 - HEAD
    //note : using array multiple dimension
    //       combine with 'if' statement
    //       [A, B, C, D, pH(integer), pH(real_data), degree]
    var data_entry_forth = [
        [0, 10, 50, 0, 0, 0.82, 28],
        [0, 10, 40, 0, 0, 0.85, 28],
        [0, 10, 30, 0, 0, 0.90, 28.5],
        [0, 10, 20, 0, 1, 1.00, 29],
        [0, 10, 10, 0, 1, 1.30, 29.5],
        [0, 20, 50, 0, 0, 0.96, 28.5],
        [0, 20, 40, 0, 1, 1.00, 28.5],
        [0, 20, 30, 0, 1, 1.10, 28.5],
        [0, 20, 20, 0, 1, 1.30, 29],
        [0, 20, 10, 0, 7, 7.00, 30],
        [0, 30, 50, 0, 1, 1.06, 28],
        [0, 30, 40, 0, 1, 1.20, 28],
        [0, 30, 30, 0, 1, 1.30, 28.5],
        [0, 30, 20, 0, 1, 1.70, 29.5],
        [0, 30, 10, 0, 12, 12.40, 29],
        [0, 40, 50, 0, 1, 1.00, 28],
        [0, 40, 40, 0, 1, 1.30, 28.5],
        [0, 40, 30, 0, 1, 1.55, 29],
        [0, 40, 20, 0, 7, 7.00, 30],
        [0, 40, 10, 0, 12, 12.06, 29.5],
        [0, 50, 50, 0, 1, 1.30, 28],
        [0, 50, 40, 0, 1, 1.48, 28],
        [0, 50, 30, 0, 1, 1.91, 29.5],
        [0, 50, 20, 0, 12, 12.15, 29],
        [0, 50, 10, 0, 12, 12.70, 28.5]
        ];
        
    //Fifth 25 - HEAD
    //note : using array multiple dimension
    //       combine with 'if' statement
    //       [A, B, C, D, pH(integer), pH(real_data), degree]
    var data_entry_fifth = [
        [0, 0, 10, 50, 13, 13.11, 29],
        [0, 0, 10, 40, 13, 13.08, 29],
        [0, 0, 10, 30, 13, 13.00, 29],
        [0, 0, 10, 20, 12, 12.83, 31],
        [0, 0, 10, 10, 7, 7.00, 33],
        [0, 0, 20, 50, 12, 12.93, 29],
        [0, 0, 20, 40, 12, 12.83, 30],
        [0, 0, 20, 30, 12, 12.60, 30],
        [0, 0, 20, 20, 7, 7.00, 33],
        [0, 0, 20, 10, 1, 1.17, 31],
        [0, 0, 30, 50, 12, 12.70, 29],
        [0, 0, 30, 40, 12, 12.45, 31],
        [0, 0, 30, 30, 7, 7.00, 33],
        [0, 0, 30, 20, 1, 1.40, 30],
        [0, 0, 30, 10, 1, 1.00, 29],
        [0, 0, 40, 50, 12, 12.35, 29],
        [0, 0, 40, 40, 7, 7.00, 33],
        [0, 0, 40, 30, 1, 1.55, 31],
        [0, 0, 40, 20, 1, 1.17, 30],
        [0, 0, 40, 10, 0, 0.92, 29],
        [0, 0, 50, 50, 7, 7.00, 33],
        [0, 0, 50, 40, 1, 1.65, 31],
        [0, 0, 50, 30, 1, 1.30, 29],
        [0, 0, 50, 20, 1, 1.07, 29],
        [0, 0, 50, 10, 0, 0.87, 29]
        ];

    var slide1 = document.getElementById("slider1");
    var slide2 = document.getElementById("slider2");
    var slide3 = document.getElementById("slider3");
    var slide4 = document.getElementById("slider4");
    
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    var result3 = document.getElementById("result3");
    var result4 = document.getElementById("result4");
    
    result1.innerHTML = slide1.value;
    result2.innerHTML = slide2.value;
    result3.innerHTML = slide3.value;
    result4.innerHTML = slide4.value;
    
    var data_color         = document.getElementById("color");
    var data_ph_number     = document.getElementById("ph_number");
    var data_degree_number = document.getElementById("degree_number");
    var data_ph_color      = document.getElementById("ph_color");
    var data_adding        = document.getElementById("adding");
    
    var animation_beaker  = document.getElementById("beaker_main");
    var addition_variable;
    
    //slider-1
    slide1.oninput = function() {
        result1.innerHTML = slide1.value;
    };
    
    //slider-2
    slide2.oninput = function() {
        result2.innerHTML = slide2.value;
    };
    
    //slider-3
    slide3.oninput = function() {
        result3.innerHTML = slide3.value;
    };
    
    //slider-4
    slide4.oninput = function() {
        result4.innerHTML = slide4.value;
    };
    
    function reset_process(){
        document.getElementById('parent_ph_meter').appendChild(document.getElementById('ph_meter_icon'));
        document.getElementById('parent_ph_ui').appendChild(document.getElementById('ph_ui_icon'));
        document.getElementById("ph_main").src="blank.png";
        document.getElementById("thermo").src="blank.png";
        document.getElementById('ph_meter_value').style.display = "none";
        
    };
    
    //button-click
    function click_process(){
        
        //make draggable images
        document.getElementById('ph_meter_icon').setAttribute('draggable', true);
        document.getElementById('ph_meter_icon').setAttribute('ondragstart', 'drag(event)');
        document.getElementById('ph_ui_icon').setAttribute('draggable', true);
        document.getElementById('ph_ui_icon').setAttribute('ondragstart', 'drag(event)');
        
        if (slide1.value != 0 && slide2.value == 0 && slide3.value == 0 && slide4.value ==0){
            first_statement();
            note_hide();
            
        } else if (slide1.value == 0 && slide2.value != 0 && slide3.value == 0 && slide4.value ==0){
            first_statement();
            note_hide();
            
        } else if (slide1.value == 0 && slide2.value == 0 && slide3.value != 0 && slide4.value ==0){
            first_statement();
            note_hide();
            
        } else if (slide1.value == 0 && slide2.value == 0 && slide3.value == 0 && slide4.value !=0){
            first_statement();
            note_hide();
            
        } else if (slide1.value != 0 && slide2.value != 0 && slide3.value == 0 && slide4.value ==0){
            second_statement();
            note_hide();
            
        } else if (slide1.value != 0 && slide2.value == 0 && slide3.value == 0 && slide4.value !=0){
            third_statement();
            note_hide();
            
        } else if (slide1.value == 0 && slide2.value != 0 && slide3.value != 0 && slide4.value ==0){
            forth_statement();
            note_hide();
            
        } else if (slide1.value == 0 && slide2.value == 0 && slide3.value != 0 && slide4.value !=0){
            fifth_statement();
            note_hide();
            
        } else if (slide1.value == 0 && slide2.value == 0 && slide3.value == 0 && slide4.value ==0){
            document.getElementById("thermo").src="blank.png";
            document.getElementById("note").innerHTML = "*Silahkan pilih larutan terlebih dahulu";
            document.getElementById("note").style.display = "block";
            else_statement();
            document.getElementById("beaker_main").src="beaker_base.png";
            
        } else if (slide1.value != 0 && slide2.value == 0 && slide3.value != 0 && slide4.value ==0){
            document.getElementById("thermo").src="blank.png";
            document.getElementById("note").innerHTML = "*Maaf data belum tersedia";
            document.getElementById("note").style.display = "block";
            else_statement();
            
        } else if (slide1.value == 0 && slide2.value != 0 && slide3.value == 0 && slide4.value !=0){
            document.getElementById("thermo").src="blank.png";
            document.getElementById("note").innerHTML = "*Maaf data belum tersedia";
            document.getElementById("note").style.display = "block";
            else_statement();
            
        } else if (slide1.value != 0 && slide2.value != 0 && slide3.value != 0 && slide4.value ==0){
            document.getElementById("thermo").src="blank.png";
            document.getElementById("note").innerHTML = "*Maaf data belum tersedia";
            document.getElementById("note").style.display = "block";
            else_statement();
            
        } else if (slide1.value != 0 && slide2.value != 0 && slide3.value == 0 && slide4.value !=0){
            document.getElementById("thermo").src="blank.png";
            document.getElementById("note").innerHTML = "*Maaf data belum tersedia";
            document.getElementById("note").style.display = "block";
            else_statement();
            
        } else if (slide1.value != 0 && slide2.value == 0 && slide3.value != 0 && slide4.value !=0){
            document.getElementById("thermo").src="blank.png";
            document.getElementById("note").innerHTML = "*Maaf data belum tersedia";
            document.getElementById("note").style.display = "block";
            else_statement();
            
        } else if (slide1.value == 0 && slide2.value != 0 && slide3.value != 0 && slide4.value !=0){
            document.getElementById("thermo").src="blank.png";
            document.getElementById("note").innerHTML = "*Maaf data belum tersedia";
            document.getElementById("note").style.display = "block";
            else_statement();
            
        } else if (slide1.value != 0 && slide2.value != 0 && slide3.value != 0 && slide4.value !=0){
            document.getElementById("thermo").src="blank.png";
            document.getElementById("note").innerHTML = "*Maaf data belum tersedia";
            document.getElementById("note").style.display = "block";
            else_statement();
            
        } else {
            else_statement();
        
        }
        
        ph_color_statement();
        liquid_pouring_statement();
        reset_process();
        thermometer_statement();
        
        document.getElementById('ph_meter_value').innerHTML = data_ph_number.innerHTML;
        
    };
    
    function note_hide(){
        document.getElementById("note").style.display = "none";
    };
    
    function thermometer_statement(){
    
        document.getElementById('thermo').src="blank.png";
    
        if (degree_number.innerHTML == 27){
            setTimeout(function(){ document.getElementById('thermo').src="thermo_27.gif"; }, 1700);
            
        } else if (degree_number.innerHTML == 28){
            setTimeout(function(){ document.getElementById('thermo').src="thermo_28.gif"; }, 1700);
            
        } else if (degree_number.innerHTML == 28.5){
            setTimeout(function(){ document.getElementById('thermo').src="thermo_28-5.gif"; }, 1700);
            
        } else if (degree_number.innerHTML == 29){
            setTimeout(function(){ document.getElementById('thermo').src="thermo_29.gif"; }, 1700);
            
        } else if (degree_number.innerHTML == 29.5){
            setTimeout(function(){ document.getElementById('thermo').src="thermo_29-5.gif"; }, 1700);
            
        } else if (degree_number.innerHTML == 30){
            setTimeout(function(){ document.getElementById('thermo').src="thermo_30.gif"; }, 1700);
            
        } else if (degree_number.innerHTML == 31){
            setTimeout(function(){ document.getElementById('thermo').src="thermo_31.gif"; }, 1700);
            
        } else if (degree_number.innerHTML == 33){
            setTimeout(function(){ document.getElementById('thermo').src="thermo_33.gif"; }, 1700);
            
        }
    };
    
    //Universal_Indicator - FUNCTION
    function after_drop_ph_ui(){
    
    addition_variable = Number(slide1.value) + Number(slide2.value) + Number(slide3.value) + Number(slide4.value);
        
        if (addition_variable == 10){
            document.getElementById("ph_main").src="UI_10.gif";
            after_drop_ph_ui_second();
            
        } else if (addition_variable == 20){
            document.getElementById("ph_main").src="UI_20.gif";
            after_drop_ph_ui_second();
            
        } else if (addition_variable == 30){
            document.getElementById("ph_main").src="UI_30.gif";
            after_drop_ph_ui_second();
            
        } else if (addition_variable == 40){
            document.getElementById("ph_main").src="UI_40.gif";
            after_drop_ph_ui_second();
            
        } else if (addition_variable == 50){
            document.getElementById("ph_main").src="UI_50.gif";
            after_drop_ph_ui_second();
            
        } else if (addition_variable == 60){
            document.getElementById("ph_main").src="UI_60.gif";
            after_drop_ph_ui_second();
            
        } else if (addition_variable == 70){
            document.getElementById("ph_main").src="UI_70.gif";
            after_drop_ph_ui_second();
            
        } else if (addition_variable == 80){
            document.getElementById("ph_main").src="UI_80.gif";
            after_drop_ph_ui_second();
            
        } else if (addition_variable == 90){
            document.getElementById("ph_main").src="UI_90.gif";
            after_drop_ph_ui_second();
            
        } else if (addition_variable == 100){
            document.getElementById("ph_main").src="UI_100.gif";
            after_drop_ph_ui_second();
            
        }
    };
    
    function after_drop_ph_ui_second(){
        setTimeout(function(){ document.getElementById('ph_main').src="pH_scale.gif"; }, 1500);
        after_drop_ph_ui_third();
    };
    
    function after_drop_ph_ui_third(){
    
        if (data_color.innerHTML == 0){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_0.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 1){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_1.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 2){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_2.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 3){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_3.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 4){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_4.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 5){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_5.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 6){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_6.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 7){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_7.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 8){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_8.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 9){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_9.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 10){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_10.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 11){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_11.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 12){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_12.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 13){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_13.gif"; }, 7500);
            
        } else if (data_color.innerHTML == 14){
            setTimeout(function(){ document.getElementById('ph_main').src="pH_scale_next_14.gif"; }, 7500);
            
        }
        
    };
    
    //liquid_pouring - FUNCTION
    function liquid_pouring_statement(){
    
    addition_variable = Number(slide1.value) + Number(slide2.value) + Number(slide3.value) + Number(slide4.value);
    
        if (addition_variable == 10){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_10.gif";
            
        } else if (addition_variable == 20){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_20.gif";
            
        } else if (addition_variable == 30){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_30.gif";
            
        } else if (addition_variable == 40){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_40.gif";
            
        } else if (addition_variable == 50){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_50.gif";
            
        } else if (addition_variable == 60){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_60.gif";
            
        } else if (addition_variable == 70){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_70.gif";
            
        } else if (addition_variable == 80){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_80.gif";
            
        } else if (addition_variable == 90){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_90.gif";
            
        } else if (addition_variable == 100){
            data_adding.innerHTML      = addition_variable;
            document.getElementById("beaker_main").src="pH_100.gif";
            
        }
    };
    
    //pH COLOR - FUNCTION
    function ph_color_statement(){
    
        var real_num = data_color.innerHTML
        
        if (data_color.innerHTML == real_num){
            data_ph_color.style.backgroundColor = data_entry_ph_color[real_num];
        }
        
    };
    
    //ALL DATA - FUNCTION
    //First 50 - STATEMENT
    function first_statement(){
        
        if (slide1.value != 0 && slide2.value == 0 && slide3.value == 0 && slide4.value ==0){
        
            data_color.innerHTML         = data_entry_first[0][4];
            data_ph_number.innerHTML     = data_entry_first[0][5];
            data_degree_number.innerHTML = data_entry_first[0][6];
        
        } else if (slide1.value == 0 && slide2.value != 0 && slide3.value == 0 && slide4.value ==0){ 
        
            data_color.innerHTML         = data_entry_first[1][4];
            data_ph_number.innerHTML     = data_entry_first[1][5];
            data_degree_number.innerHTML = data_entry_first[1][6];
        
        } else if (slide1.value == 0 && slide2.value == 0 && slide3.value != 0 && slide4.value ==0){ 
        
            data_color.innerHTML         = data_entry_first[2][4];
            data_ph_number.innerHTML     = data_entry_first[2][5];
            data_degree_number.innerHTML = data_entry_first[2][6];
        
        } else if (slide1.value == 0 && slide2.value == 0 && slide3.value == 0 && slide4.value !=0){ 
        
            data_color.innerHTML         = data_entry_first[3][4];
            data_ph_number.innerHTML     = data_entry_first[3][5];
            data_degree_number.innerHTML = data_entry_first[3][6];
        
        }
    };
    
    //ALL DATA - FUNCTION
    //Second 25 - STATEMENT
    function second_statement(){
        
        if (slide1.value == 10 && slide2.value == 50){
        
            data_color.innerHTML         = data_entry_second[0][4];
            data_ph_number.innerHTML     = data_entry_second[0][5];
            data_degree_number.innerHTML = data_entry_second[0][6];
        
        } else if (slide1.value == 10 && slide2.value == 40){
        
            data_color.innerHTML         = data_entry_second[1][4];
            data_ph_number.innerHTML     = data_entry_second[1][5];
            data_degree_number.innerHTML = data_entry_second[1][6];
        
        } else if (slide1.value == 10 && slide2.value == 30){
        
            data_color.innerHTML         = data_entry_second[2][4];
            data_ph_number.innerHTML     = data_entry_second[2][5];
            data_degree_number.innerHTML = data_entry_second[2][6];
        
        } else if (slide1.value == 10 && slide2.value == 20){
        
            data_color.innerHTML         = data_entry_second[3][4];
            data_ph_number.innerHTML     = data_entry_second[3][5];
            data_degree_number.innerHTML = data_entry_second[3][6];
        
        } else if (slide1.value == 10 && slide2.value == 10){
        
            data_color.innerHTML         = data_entry_second[4][4];
            data_ph_number.innerHTML     = data_entry_second[4][5];
            data_degree_number.innerHTML = data_entry_second[4][6];
        
        } else if (slide1.value == 20 && slide2.value == 50){
        
            data_color.innerHTML         = data_entry_second[5][4];
            data_ph_number.innerHTML     = data_entry_second[5][5];
            data_degree_number.innerHTML = data_entry_second[5][6];
        
        } else if (slide1.value == 20 && slide2.value == 40){
        
            data_color.innerHTML         = data_entry_second[6][4];
            data_ph_number.innerHTML     = data_entry_second[6][5];
            data_degree_number.innerHTML = data_entry_second[6][6];
        
        } else if (slide1.value == 20 && slide2.value == 30){
        
            data_color.innerHTML         = data_entry_second[7][4];
            data_ph_number.innerHTML     = data_entry_second[7][5];
            data_degree_number.innerHTML = data_entry_second[7][6];
        
        } else if (slide1.value == 20 && slide2.value == 20){
        
            data_color.innerHTML         = data_entry_second[8][4];
            data_ph_number.innerHTML     = data_entry_second[8][5];
            data_degree_number.innerHTML = data_entry_second[8][6];
        
        } else if (slide1.value == 20 && slide2.value == 10){
        
            data_color.innerHTML         = data_entry_second[9][4];
            data_ph_number.innerHTML     = data_entry_second[9][5];
            data_degree_number.innerHTML = data_entry_second[9][6];
        
        } else if (slide1.value == 30 && slide2.value == 50){
        
            data_color.innerHTML         = data_entry_second[10][4];
            data_ph_number.innerHTML     = data_entry_second[10][5];
            data_degree_number.innerHTML = data_entry_second[10][6];
        
        } else if (slide1.value == 30 && slide2.value == 40){
        
            data_color.innerHTML         = data_entry_second[11][4];
            data_ph_number.innerHTML     = data_entry_second[11][5];
            data_degree_number.innerHTML = data_entry_second[11][6];
        
        } else if (slide1.value == 30 && slide2.value == 30){
        
            data_color.innerHTML         = data_entry_second[12][4];
            data_ph_number.innerHTML     = data_entry_second[12][5];
            data_degree_number.innerHTML = data_entry_second[12][6];
        
        } else if (slide1.value == 30 && slide2.value == 20){
        
            data_color.innerHTML         = data_entry_second[13][4];
            data_ph_number.innerHTML     = data_entry_second[13][5];
            data_degree_number.innerHTML = data_entry_second[13][6];
        
        } else if (slide1.value == 30 && slide2.value == 10){
        
            data_color.innerHTML         = data_entry_second[14][4];
            data_ph_number.innerHTML     = data_entry_second[14][5];
            data_degree_number.innerHTML = data_entry_second[14][6];
        
        } else if (slide1.value == 40 && slide2.value == 50){
        
            data_color.innerHTML         = data_entry_second[15][4];
            data_ph_number.innerHTML     = data_entry_second[15][5];
            data_degree_number.innerHTML = data_entry_second[15][6];
        
        } else if (slide1.value == 40 && slide2.value == 40){
        
            data_color.innerHTML         = data_entry_second[16][4];
            data_ph_number.innerHTML     = data_entry_second[16][5];
            data_degree_number.innerHTML = data_entry_second[16][6];
        
        } else if (slide1.value == 40 && slide2.value == 30){
        
            data_color.innerHTML         = data_entry_second[17][4];
            data_ph_number.innerHTML     = data_entry_second[17][5];
            data_degree_number.innerHTML = data_entry_second[17][6];
        
        } else if (slide1.value == 40 && slide2.value == 20){
        
            data_color.innerHTML         = data_entry_second[18][4];
            data_ph_number.innerHTML     = data_entry_second[18][5];
            data_degree_number.innerHTML = data_entry_second[18][6];
        
        } else if (slide1.value == 40 && slide2.value == 10){
        
            data_color.innerHTML         = data_entry_second[19][4];
            data_ph_number.innerHTML     = data_entry_second[19][5];
            data_degree_number.innerHTML = data_entry_second[19][6];
        
        } else if (slide1.value == 50 && slide2.value == 50){
        
            data_color.innerHTML         = data_entry_second[20][4];
            data_ph_number.innerHTML     = data_entry_second[20][5];
            data_degree_number.innerHTML = data_entry_second[20][6];
        
        } else if (slide1.value == 50 && slide2.value == 40){
        
            data_color.innerHTML         = data_entry_second[21][4];
            data_ph_number.innerHTML     = data_entry_second[21][5];
            data_degree_number.innerHTML = data_entry_second[21][6];
        
        } else if (slide1.value == 50 && slide2.value == 30){
        
            data_color.innerHTML         = data_entry_second[22][4];
            data_ph_number.innerHTML     = data_entry_second[22][5];
            data_degree_number.innerHTML = data_entry_second[22][6];
        
        } else if (slide1.value == 50 && slide2.value == 20){
        
            data_color.innerHTML         = data_entry_second[23][4];
            data_ph_number.innerHTML     = data_entry_second[23][5];
            data_degree_number.innerHTML = data_entry_second[23][6];
        
        } else if (slide1.value == 50 && slide2.value == 10){
        
            data_color.innerHTML         = data_entry_second[24][4];
            data_ph_number.innerHTML     = data_entry_second[24][5];
            data_degree_number.innerHTML = data_entry_second[24][6];
        
        }
    };
    
    //ALL DATA - FUNCTION
    //Third 25 - STATEMENT
    function third_statement(){
        
        if (slide1.value == 10 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_third[0][4];
            data_ph_number.innerHTML     = data_entry_third[0][5];
            data_degree_number.innerHTML = data_entry_third[0][6];
        
        } else if (slide1.value == 10 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_third[1][4];
            data_ph_number.innerHTML     = data_entry_third[1][5];
            data_degree_number.innerHTML = data_entry_third[1][6];
        
        } else if (slide1.value == 10 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_third[2][4];
            data_ph_number.innerHTML     = data_entry_third[2][5];
            data_degree_number.innerHTML = data_entry_third[2][6];
        
        } else if (slide1.value == 10 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_third[3][4];
            data_ph_number.innerHTML     = data_entry_third[3][5];
            data_degree_number.innerHTML = data_entry_third[3][6];
        
        } else if (slide1.value == 10 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_third[4][4];
            data_ph_number.innerHTML     = data_entry_third[4][5];
            data_degree_number.innerHTML = data_entry_third[4][6];
        
        } else if (slide1.value == 20 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_third[5][4];
            data_ph_number.innerHTML     = data_entry_third[5][5];
            data_degree_number.innerHTML = data_entry_third[5][6];
        
        } else if (slide1.value == 20 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_third[6][4];
            data_ph_number.innerHTML     = data_entry_third[6][5];
            data_degree_number.innerHTML = data_entry_third[6][6];
        
        } else if (slide1.value == 20 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_third[7][4];
            data_ph_number.innerHTML     = data_entry_third[7][5];
            data_degree_number.innerHTML = data_entry_third[7][6];
        
        } else if (slide1.value == 20 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_third[8][4];
            data_ph_number.innerHTML     = data_entry_third[8][5];
            data_degree_number.innerHTML = data_entry_third[8][6];
        
        } else if (slide1.value == 20 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_third[9][4];
            data_ph_number.innerHTML     = data_entry_third[9][5];
            data_degree_number.innerHTML = data_entry_third[9][6];
        
        } else if (slide1.value == 30 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_third[10][4];
            data_ph_number.innerHTML     = data_entry_third[10][5];
            data_degree_number.innerHTML = data_entry_third[10][6];
        
        } else if (slide1.value == 30 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_third[11][4];
            data_ph_number.innerHTML     = data_entry_third[11][5];
            data_degree_number.innerHTML = data_entry_third[11][6];
        
        } else if (slide1.value == 30 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_third[12][4];
            data_ph_number.innerHTML     = data_entry_third[12][5];
            data_degree_number.innerHTML = data_entry_third[12][6];
        
        } else if (slide1.value == 30 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_third[13][4];
            data_ph_number.innerHTML     = data_entry_third[13][5];
            data_degree_number.innerHTML = data_entry_third[13][6];
        
        } else if (slide1.value == 30 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_third[14][4];
            data_ph_number.innerHTML     = data_entry_third[14][5];
            data_degree_number.innerHTML = data_entry_third[14][6];
        
        } else if (slide1.value == 40 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_third[15][4];
            data_ph_number.innerHTML     = data_entry_third[15][5];
            data_degree_number.innerHTML = data_entry_third[15][6];
        
        } else if (slide1.value == 40 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_third[16][4];
            data_ph_number.innerHTML     = data_entry_third[16][5];
            data_degree_number.innerHTML = data_entry_third[16][6];
        
        } else if (slide1.value == 40 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_third[17][4];
            data_ph_number.innerHTML     = data_entry_third[17][5];
            data_degree_number.innerHTML = data_entry_third[17][6];
        
        } else if (slide1.value == 40 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_third[18][4];
            data_ph_number.innerHTML     = data_entry_third[18][5];
            data_degree_number.innerHTML = data_entry_third[18][6];
        
        } else if (slide1.value == 40 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_third[19][4];
            data_ph_number.innerHTML     = data_entry_third[19][5];
            data_degree_number.innerHTML = data_entry_third[19][6];
        
        } else if (slide1.value == 50 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_third[20][4];
            data_ph_number.innerHTML     = data_entry_third[20][5];
            data_degree_number.innerHTML = data_entry_third[20][6];
        
        } else if (slide1.value == 50 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_third[21][4];
            data_ph_number.innerHTML     = data_entry_third[21][5];
            data_degree_number.innerHTML = data_entry_third[21][6];
        
        } else if (slide1.value == 50 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_third[22][4];
            data_ph_number.innerHTML     = data_entry_third[22][5];
            data_degree_number.innerHTML = data_entry_third[22][6];
        
        } else if (slide1.value == 50 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_third[23][4];
            data_ph_number.innerHTML     = data_entry_third[23][5];
            data_degree_number.innerHTML = data_entry_third[23][6];
        
        } else if (slide1.value == 50 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_third[24][4];
            data_ph_number.innerHTML     = data_entry_third[24][5];
            data_degree_number.innerHTML = data_entry_third[24][6];
        
        }
    };
    
    //ALL DATA - FUNCTION
    //Forth 25 - STATEMENT
    function forth_statement(){
        
        if (slide2.value == 10 && slide3.value == 50){
        
            data_color.innerHTML         = data_entry_forth[0][4];
            data_ph_number.innerHTML     = data_entry_forth[0][5];
            data_degree_number.innerHTML = data_entry_forth[0][6];
        
        } else if (slide2.value == 10 && slide3.value == 40){
        
            data_color.innerHTML         = data_entry_forth[1][4];
            data_ph_number.innerHTML     = data_entry_forth[1][5];
            data_degree_number.innerHTML = data_entry_forth[1][6];
        
        } else if (slide2.value == 10 && slide3.value == 30){
        
            data_color.innerHTML         = data_entry_forth[2][4];
            data_ph_number.innerHTML     = data_entry_forth[2][5];
            data_degree_number.innerHTML = data_entry_forth[2][6];
        
        } else if (slide2.value == 10 && slide3.value == 20){
        
            data_color.innerHTML         = data_entry_forth[3][4];
            data_ph_number.innerHTML     = data_entry_forth[3][5];
            data_degree_number.innerHTML = data_entry_forth[3][6];
        
        } else if (slide2.value == 10 && slide3.value == 10){
        
            data_color.innerHTML         = data_entry_forth[4][4];
            data_ph_number.innerHTML     = data_entry_forth[4][5];
            data_degree_number.innerHTML = data_entry_forth[4][6];
        
        } else if (slide2.value == 20 && slide3.value == 50){
        
            data_color.innerHTML         = data_entry_forth[5][4];
            data_ph_number.innerHTML     = data_entry_forth[5][5];
            data_degree_number.innerHTML = data_entry_forth[5][6];
        
        } else if (slide2.value == 20 && slide3.value == 40){
        
            data_color.innerHTML         = data_entry_forth[6][4];
            data_ph_number.innerHTML     = data_entry_forth[6][5];
            data_degree_number.innerHTML = data_entry_forth[6][6];
        
        } else if (slide2.value == 20 && slide3.value == 30){
        
            data_color.innerHTML         = data_entry_forth[7][4];
            data_ph_number.innerHTML     = data_entry_forth[7][5];
            data_degree_number.innerHTML = data_entry_forth[7][6];
        
        } else if (slide2.value == 20 && slide3.value == 20){
        
            data_color.innerHTML         = data_entry_forth[8][4];
            data_ph_number.innerHTML     = data_entry_forth[8][5];
            data_degree_number.innerHTML = data_entry_forth[8][6];
        
        } else if (slide2.value == 20 && slide3.value == 10){
        
            data_color.innerHTML         = data_entry_forth[9][4];
            data_ph_number.innerHTML     = data_entry_forth[9][5];
            data_degree_number.innerHTML = data_entry_forth[9][6];
        
        } else if (slide2.value == 30 && slide3.value == 50){
        
            data_color.innerHTML         = data_entry_forth[10][4];
            data_ph_number.innerHTML     = data_entry_forth[10][5];
            data_degree_number.innerHTML = data_entry_forth[10][6];
        
        } else if (slide2.value == 30 && slide3.value == 40){
        
            data_color.innerHTML         = data_entry_forth[11][4];
            data_ph_number.innerHTML     = data_entry_forth[11][5];
            data_degree_number.innerHTML = data_entry_forth[11][6];
        
        } else if (slide2.value == 30 && slide3.value == 30){
        
            data_color.innerHTML         = data_entry_forth[12][4];
            data_ph_number.innerHTML     = data_entry_forth[12][5];
            data_degree_number.innerHTML = data_entry_forth[12][6];
        
        } else if (slide2.value == 30 && slide3.value == 20){
        
            data_color.innerHTML         = data_entry_forth[13][4];
            data_ph_number.innerHTML     = data_entry_forth[13][5];
            data_degree_number.innerHTML = data_entry_forth[13][6];
        
        } else if (slide2.value == 30 && slide3.value == 10){
        
            data_color.innerHTML         = data_entry_forth[14][4];
            data_ph_number.innerHTML     = data_entry_forth[14][5];
            data_degree_number.innerHTML = data_entry_forth[14][6];
        
        } else if (slide2.value == 40 && slide3.value == 50){
        
            data_color.innerHTML         = data_entry_forth[15][4];
            data_ph_number.innerHTML     = data_entry_forth[15][5];
            data_degree_number.innerHTML = data_entry_forth[15][6];
        
        } else if (slide2.value == 40 && slide3.value == 40){
        
            data_color.innerHTML         = data_entry_forth[16][4];
            data_ph_number.innerHTML     = data_entry_forth[16][5];
            data_degree_number.innerHTML = data_entry_forth[16][6];
        
        } else if (slide2.value == 40 && slide3.value == 30){
        
            data_color.innerHTML         = data_entry_forth[17][4];
            data_ph_number.innerHTML     = data_entry_forth[17][5];
            data_degree_number.innerHTML = data_entry_forth[17][6];
        
        } else if (slide2.value == 40 && slide3.value == 20){
        
            data_color.innerHTML         = data_entry_forth[18][4];
            data_ph_number.innerHTML     = data_entry_forth[18][5];
            data_degree_number.innerHTML = data_entry_forth[18][6];
        
        } else if (slide2.value == 40 && slide3.value == 10){
        
            data_color.innerHTML         = data_entry_forth[19][4];
            data_ph_number.innerHTML     = data_entry_forth[19][5];
            data_degree_number.innerHTML = data_entry_forth[19][6];
        
        } else if (slide2.value == 50 && slide3.value == 50){
        
            data_color.innerHTML         = data_entry_forth[20][4];
            data_ph_number.innerHTML     = data_entry_forth[20][5];
            data_degree_number.innerHTML = data_entry_forth[20][6];
        
        } else if (slide2.value == 50 && slide3.value == 40){
        
            data_color.innerHTML         = data_entry_forth[21][4];
            data_ph_number.innerHTML     = data_entry_forth[21][5];
            data_degree_number.innerHTML = data_entry_forth[21][6];
        
        } else if (slide2.value == 50 && slide3.value == 30){
        
            data_color.innerHTML         = data_entry_forth[22][4];
            data_ph_number.innerHTML     = data_entry_forth[22][5];
            data_degree_number.innerHTML = data_entry_forth[22][6];
        
        } else if (slide2.value == 50 && slide3.value == 20){
        
            data_color.innerHTML         = data_entry_forth[23][4];
            data_ph_number.innerHTML     = data_entry_forth[23][5];
            data_degree_number.innerHTML = data_entry_forth[23][6];
        
        } else if (slide2.value == 50 && slide3.value == 10){
        
            data_color.innerHTML         = data_entry_forth[24][4];
            data_ph_number.innerHTML     = data_entry_forth[24][5];
            data_degree_number.innerHTML = data_entry_forth[24][6];
        
        }
    };
    
    //ALL DATA - FUNCTION
    //Fifth 25 - STATEMENT
    function fifth_statement(){
        
        if (slide3.value == 10 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_fifth[0][4];
            data_ph_number.innerHTML     = data_entry_fifth[0][5];
            data_degree_number.innerHTML = data_entry_fifth[0][6];
        
        } else if (slide3.value == 10 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_fifth[1][4];
            data_ph_number.innerHTML     = data_entry_fifth[1][5];
            data_degree_number.innerHTML = data_entry_fifth[1][6];
        
        } else if (slide3.value == 10 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_fifth[2][4];
            data_ph_number.innerHTML     = data_entry_fifth[2][5];
            data_degree_number.innerHTML = data_entry_fifth[2][6];
        
        } else if (slide3.value == 10 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_fifth[3][4];
            data_ph_number.innerHTML     = data_entry_fifth[3][5];
            data_degree_number.innerHTML = data_entry_fifth[3][6];
        
        } else if (slide3.value == 10 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_fifth[4][4];
            data_ph_number.innerHTML     = data_entry_fifth[4][5];
            data_degree_number.innerHTML = data_entry_fifth[4][6];
        
        } else if (slide3.value == 20 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_fifth[5][4];
            data_ph_number.innerHTML     = data_entry_fifth[5][5];
            data_degree_number.innerHTML = data_entry_fifth[5][6];
        
        } else if (slide3.value == 20 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_fifth[6][4];
            data_ph_number.innerHTML     = data_entry_fifth[6][5];
            data_degree_number.innerHTML = data_entry_fifth[6][6];
        
        } else if (slide3.value == 20 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_fifth[7][4];
            data_ph_number.innerHTML     = data_entry_fifth[7][5];
            data_degree_number.innerHTML = data_entry_fifth[7][6];
        
        } else if (slide3.value == 20 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_fifth[8][4];
            data_ph_number.innerHTML     = data_entry_fifth[8][5];
            data_degree_number.innerHTML = data_entry_fifth[8][6];
        
        } else if (slide3.value == 20 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_fifth[9][4];
            data_ph_number.innerHTML     = data_entry_fifth[9][5];
            data_degree_number.innerHTML = data_entry_fifth[9][6];
        
        } else if (slide3.value == 30 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_fifth[10][4];
            data_ph_number.innerHTML     = data_entry_fifth[10][5];
            data_degree_number.innerHTML = data_entry_fifth[10][6];
        
        } else if (slide3.value == 30 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_fifth[11][4];
            data_ph_number.innerHTML     = data_entry_fifth[11][5];
            data_degree_number.innerHTML = data_entry_fifth[11][6];
        
        } else if (slide3.value == 30 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_fifth[12][4];
            data_ph_number.innerHTML     = data_entry_fifth[12][5];
            data_degree_number.innerHTML = data_entry_fifth[12][6];
        
        } else if (slide3.value == 30 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_fifth[13][4];
            data_ph_number.innerHTML     = data_entry_fifth[13][5];
            data_degree_number.innerHTML = data_entry_fifth[13][6];
        
        } else if (slide3.value == 30 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_fifth[14][4];
            data_ph_number.innerHTML     = data_entry_fifth[14][5];
            data_degree_number.innerHTML = data_entry_fifth[14][6];
        
        } else if (slide3.value == 40 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_fifth[15][4];
            data_ph_number.innerHTML     = data_entry_fifth[15][5];
            data_degree_number.innerHTML = data_entry_fifth[15][6];
        
        } else if (slide3.value == 40 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_fifth[16][4];
            data_ph_number.innerHTML     = data_entry_fifth[16][5];
            data_degree_number.innerHTML = data_entry_fifth[16][6];
        
        } else if (slide3.value == 40 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_fifth[17][4];
            data_ph_number.innerHTML     = data_entry_fifth[17][5];
            data_degree_number.innerHTML = data_entry_fifth[17][6];
        
        } else if (slide3.value == 40 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_fifth[18][4];
            data_ph_number.innerHTML     = data_entry_fifth[18][5];
            data_degree_number.innerHTML = data_entry_fifth[18][6];
        
        } else if (slide3.value == 40 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_fifth[19][4];
            data_ph_number.innerHTML     = data_entry_fifth[19][5];
            data_degree_number.innerHTML = data_entry_fifth[19][6];
        
        } else if (slide3.value == 50 && slide4.value == 50){
        
            data_color.innerHTML         = data_entry_fifth[20][4];
            data_ph_number.innerHTML     = data_entry_fifth[20][5];
            data_degree_number.innerHTML = data_entry_fifth[20][6];
        
        } else if (slide3.value == 50 && slide4.value == 40){
        
            data_color.innerHTML         = data_entry_fifth[21][4];
            data_ph_number.innerHTML     = data_entry_fifth[21][5];
            data_degree_number.innerHTML = data_entry_fifth[21][6];
        
        } else if (slide3.value == 50 && slide4.value == 30){
        
            data_color.innerHTML         = data_entry_fifth[22][4];
            data_ph_number.innerHTML     = data_entry_fifth[22][5];
            data_degree_number.innerHTML = data_entry_fifth[22][6];
        
        } else if (slide3.value == 50 && slide4.value == 20){
        
            data_color.innerHTML         = data_entry_fifth[23][4];
            data_ph_number.innerHTML     = data_entry_fifth[23][5];
            data_degree_number.innerHTML = data_entry_fifth[23][6];
        
        } else if (slide3.value == 50 && slide4.value == 10){
        
            data_color.innerHTML         = data_entry_fifth[24][4];
            data_ph_number.innerHTML     = data_entry_fifth[24][5];
            data_degree_number.innerHTML = data_entry_fifth[24][6];
        
        }
    };
    
    //Else - STATEMENT
    function else_statement(){
    
        data_ph_number.innerHTML     = "";
        data_degree_number.innerHTML = "";
        document.getElementById('ph_meter_icon').setAttribute('draggable', false);
        document.getElementById('ph_meter_icon').setAttribute('ondragstart', '');
        document.getElementById('ph_ui_icon').setAttribute('draggable', false);
        document.getElementById('ph_ui_icon').setAttribute('ondragstart', '');
    };
    
    function false_statement(){
        return false;
    };