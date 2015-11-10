TK103 = {
	availableMethods:function(){
		return ['ping','alarm','login'];
		/*
    switch(parts.cmd){
    case "BP05":
        parts.action="login_request";   
        break;
    case "BR00":
        parts.action="ping";
        break;
    case "BO01":
        parts.action="alarm";
        break;
    default:
        parts.action="other";
    }*/
	},
	pingMessage:function(device_uid){
		device_uid = device_uid.substr(0,12);
/*
										CMD  0      6 7          17         26 27 28     33      39      45        53 54
		'('+device_uid+'BR00 140607 A 1902.0719N  09812.895  4  W  073.3  232411  144.56  00000000  L  0001B3CC)';
		
           0 "date"          		: str.substr(0,6),
           6 "availability"  		: str.substr(6,1),
           7 "latitude"  hr.min : functions.minute_to_decimal(parseFloat(str.substr(7,9)),str.substr(16,1)),
          17 "longitude"        : functions.minute_to_decimal(parseFloat(str.substr(17,9)),str.substr(27,1)),
          28 "speed"         		: parseFloat(str.substr(28,5)),
          33 "time"          		: str.substr(33,6),
          39 "orientation"   		: str.substr(39,6),
          45 "io_state"      		: str.substr(45,8),
          53 "mile_post" 				: str.substr(53,1),
          54 "mile_data" 				: parseInt(str.substr(54,8),16)
		*/
			return '('+device_uid+'BR00140607A1902.0719N09812.8954W073.3232411144.5600000000L0001B3CC)';
	},
	loginMessage:function(device_uid){
		device_uid = device_uid.substr(0,12);
		return '('+device_uid+'BP05000012341234123140607A1902.0719N09812.8954W019.2230104172.3900000000L00019C2C)';
	},
	alarmMessage:function(device_uid){
		/*
		switch(alarm_code.toString()){
    case "0":
        alarm = {"code":"power_off","msg":"Vehicle Power Off"};
        break;
    case "1":
        alarm = {"code":"accident","msg":"The vehicle suffers an acciden"};
        break;
    case "2":
        alarm = {"code":"sos","msg":"Driver sends a S.O.S."};
        break;
    case "3":
        alarm = {"code":"alarming","msg":"The alarm of the vehicle is activated"};
        break;
    case "4":
        alarm = {"code":"low_speed","msg":"Vehicle is below the min speed setted"};
        break;
    case "5":
        alarm = {"code":"overspeed","msg":"Vehicle is over the max speed setted"};
        break;
    case "6":
        alarm = {"code":"gep_fence","msg":"Out of geo fence"};
        break;
    }
		*/
		device_uid = device_uid.substr(0,12);
		return '('+device_uid+'BO012140607A1902.0719N09812.8954W000.0223705211.9610000000L000176A0)';
	},
	checkLoginResponse:function(response,device_uid){
		if(response == '('+device_uid+'AP05)')return true;
		return false;
	}
}