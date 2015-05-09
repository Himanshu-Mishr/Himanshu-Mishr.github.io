	function getCoundownCallback()
	{
	
	 if ( typeof getCoundownCallback.serverDate == 'undefined' )
		{
		getCoundownCallback.serverDate=document.getElementById('cr_tm_inv_f').value;
		var now = new Date(getCoundownCallback.serverDate);
		//alert(now);
		}
	else
		{
			var now = new Date(getCoundownCallback.serverDate);
			now.setSeconds(now.getSeconds()+1);
			getCoundownCallback.serverDate=now;
		}
	  
		getTime('rm_f', 'rm_inv_f',now);
		 
		newtime =setTimeout("getCoundownCallback()", 1000);
		
	}


	function getTime(objId,objInv,now) 
	{
	
	date=document.getElementById(objInv).value;
	
	y2k = new Date(date);
	//alert(now);
	
	if(y2k<=now)
	{
	diff = (now - y2k);
	days = diff / 1000 / 60 / 60 / 24;
	daysRound = Math.floor(days);
	hours = diff / 1000 / 60 / 60 - (24 * daysRound);
	hoursRound = Math.floor(hours);
	minutes = diff / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
	minutesRound = Math.floor(minutes);
	seconds = diff / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
 
    secondsRound = Math.round(seconds);
	sec = (secondsRound == 1) ? " Second" : " Seconds";
	min = (minutesRound == 1) ? " Minute" : " Minutes ";
	hr = (hoursRound == 1) ? " Hour" : " Hours ";
	dy = (daysRound == 1)  ? " Day" : " Days ";
	
	

	var result="";
	//alert(daysRound+' '+hoursRound);
			if(daysRound>0)
			{
			//alert(daysRound);
				result= daysRound+' '+dy;
			}
			else if(hoursRound>0)
			{
			//alert('hr');
				result= hoursRound+' '+hr;
			}
			else if(minutesRound>0)
			{
				result= minutesRound+' '+min;
			}
			else if(secondsRound>0)
			{
				result= secondsRound+' '+sec;
			}
		//alert('re'+result);	
	document.getElementById(objId).innerHTML=result;
	}
	else
	{
	//alert('het');
	diff = (y2k - now);
	days = diff / 1000 / 60 / 60 / 24;
	daysRound = Math.floor(days);
	hours = diff / 1000 / 60 / 60 - (24 * daysRound);
	hoursRound = Math.floor(hours);
	minutes = diff / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
	minutesRound = Math.floor(minutes);
    seconds = diff / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
 
    secondsRound = Math.round(seconds);
	sec = (secondsRound == 1) ? " second." : " Seconds";
	min = (minutesRound == 1) ? " Minute" : " Minutes ";
	hr = (hoursRound == 1) ? " Hour" : " Hours ";
	dy = (daysRound == 1)  ? " Day" : " Days ";
	
	
	document.getElementById(objId).innerHTML=' <div style="float:left;" class="days">  <span class="mam_auction_time_span">'+daysRound+'</span><span class="mam_auction_time_span1"><strong>'+dy+'</strong></span> </div> <div style="float:left;" class="hour"> <span class="mam_auction_time_span">'+hoursRound+'</span> <span class="mam_auction_time_span1"><strong>'+hr+'</strong></span>  </div><br/><div style="float:left;" class="min"> <span class="mam_auction_time_span">'+minutesRound+'</span><span class="mam_auction_time_span1"><strong>'+min+'</strong></span></div><div style="float:left;" class="sec"><span class="mam_auction_time_span">'+seconds+'</span> <span class="mam_auction_time_span1"><strong>'+sec+'</strong></span></div>';
	
	//document.getElementById(objId).innerHTML='<table  cellpadding="3" cellspacing="0"><tr><td style="border-bottom:none;" >			 <table  cellspacing="0"><tr><td align="center" style="border-bottom:none;font-size:16px;padding-top: 0px;padding-bottom:0px ">'+daysRound+' 		</td></tr><tr><td style="border-bottom:none;font-size:10px;padding-top: 0px;padding-bottom: 0px ">			 		<strong>'+dy+'</strong></td></tr> </table>  </td><td style="border-bottom:none;"> <table  cellspacing="0">	<tr><td align="center"  style="border-bottom:none;font-size:16px;padding-top: 0px;padding-bottom:0px ">'+hoursRound+'</td></tr><tr><td style="border-bottom:none;font-size:10px;padding-top: 0px;padding-bottom: 0px ">   <strong> '+hr+'</strong></td></tr> </table></td><td style="border-bottom:none;">			 <table  cellspacing="0"><tr><td align="center"  style="border-bottom:none;font-size:16px;padding-top: 0px;padding-bottom:0px ">'+ minutesRound +'</td></tr> <tr><td style="border-bottom:none;font-size:10px;padding-top: 0px;padding-bottom: 0px "><strong> '+ min +'</strong>		 </td></tr> </table></td>	<td style="border-bottom:none;"><table  cellspacing="0">		 	<tr><td align="center"  style="border-bottom:none;font-size:16px;padding-top: 0px;padding-bottom:0px ">'+secondsRound+'</td></tr><tr><td style="border-bottom:none;font-size:10px;padding-top: 0px;padding-bottom: 0px "> <strong>'+sec+'</strong></td></tr> </table></td></tr></table>    ';
	}
	
	 
	}
