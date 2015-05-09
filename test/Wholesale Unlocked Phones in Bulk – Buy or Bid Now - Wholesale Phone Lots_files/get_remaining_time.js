

function getTotalRow() // retrun total row existing
{
	var count=0;
	var i =1;
	currentObj = document.getElementById("rm_"+i);
	
	
	while (currentObj) 
	{
		count++;
		i++;
		currentObj = document.getElementById("rm_"+i);
	}
	count=++count;		
	return count;
	//alert(count);
}

function getTimeCallback()
{
	var totalRow=	getTotalRow() ;
	//alert('total'+totalRow)
	if ( typeof getTimeCallback.serverDate == 'undefined' )
	{
		getTimeCallback.serverDate=document.getElementById('cr_tm_inv').value;
		var now = new Date(getTimeCallback.serverDate);
	}
	else
	{
		var now = new Date(getTimeCallback.serverDate);
		now.setSeconds(now.getSeconds()+1);
		getTimeCallback.serverDate=now;
	}
	//	alert('total'+totalRow)
	for(i=1;i<totalRow;i++)
	{
		getTimeMain('rm_'+i, 'rm_inv_'+i,now);
	}
	newtime =setTimeout("getTimeCallback()", 1000);
	
}


function getTimeMain(objId,objInv,now) 
{
	//	console.log('asdasdasdassssssssssssss');
	//alert('sdfsf');
	date=document.getElementById(objInv).value;
	
	y2k = new Date(date);
	//	alert(now);
	
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
		sec = (secondsRound == 1) ? " Second." : " Seconds";
		min = (minutesRound == 1) ? " Minute" : " Minutes ";
		hr = (hoursRound == 1) ? " Hour" : " Hours ";
		dy = (daysRound == 1)  ? " Day" : " Days ";
		
		
		document.getElementById(objId).innerHTML=' <div style="float:left;" class="days">  <span class="mam_auction_time_span">'+daysRound+'</span><span class="mam_auction_time_span1"><strong>'+dy+'</strong></span> </div> <div style="float:left;" class="hour"> <span class="mam_auction_time_span">'+hoursRound+'</span> <span class="mam_auction_time_span1"><strong>'+hr+'</strong></span>  </div><div style="float:left;" class="min"> <span class="mam_auction_time_span">'+minutesRound+'</span><span class="mam_auction_time_span1"><strong>'+min+'</strong></span></div><div style="float:left;" class="sec"><span class="mam_auction_time_span">'+seconds+'</span> <span class="mam_auction_time_span1"><strong>'+sec+'</strong></span></div>';
		
		
	}
	
	
}

// ----------------------------------Remaining time for Auction Detail page ----------------------------

function getTimerCallback()
{
	//alert('hi');
	
	if ( typeof getTimerCallback.serverDate == 'undefined' )
	{
		getTimerCallback.serverDate=document.getElementById('cr_tm_inv_det').value;
		var now = new Date(getTimerCallback.serverDate);
	}
	else
	{
		var now = new Date(getTimerCallback.serverDate);
		now.setSeconds(now.getSeconds()+1);
		getTimerCallback.serverDate=now;
	}
	
	getTimer('rm_det', 'rm_inv_det',now);
	
	newtime =setTimeout("getTimerCallback()", 1000);
	
}









function getTimer(objId,objInv,now) 
{
	
	date=document.getElementById(objInv).value;
	//alert(date);
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
		
		
		
		document.getElementById(objId).innerHTML=' <div style="float:left;" class="days">  <span class="mam_auction_time_span">'+daysRound+'</span><span class="mam_auction_time_span1"><strong>'+dy+'</strong></span> </div> <div style="float:left;" class="hour"> <span class="mam_auction_time_span">'+hoursRound+'</span> <span class="mam_auction_time_span1"><strong>'+hr+'</strong></span>  </div><div style="float:left;" class="min"> <span class="mam_auction_time_span">'+minutesRound+'</span><span class="mam_auction_time_span1"><strong>'+min+'</strong></span></div><div style="float:left;" class="sec"><span class="mam_auction_time_span">'+seconds+'</span> <span class="mam_auction_time_span1"><strong>'+sec+'</strong></span></div>';

	}
	
	
}	


function call()
{
	alert('hi');
}
