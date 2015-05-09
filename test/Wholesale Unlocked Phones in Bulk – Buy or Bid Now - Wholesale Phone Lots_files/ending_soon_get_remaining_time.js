function getEndingTotalRow() // retrun total row existing
{
	var count=0;
	var i =1;
	currentObj = document.getElementById("rm_b"+i);
	
	
	while (currentObj) 
	{
		count++;
		i++;
		currentObj = document.getElementById("rm_b"+i);
	}
	count=++count;		
	return count;
	//alert(count);
}

function getEndingTimeCallback()
{
	var totalRow=	getEndingTotalRow() ;
	//alert('total'+totalRow)
	if ( typeof getEndingTimeCallback.serverDate == 'undefined' )
	{
		getEndingTimeCallback.serverDate=document.getElementById('cr_tm_inv').value;
		var now = new Date(getEndingTimeCallback.serverDate);
	}
	else
	{
		var now = new Date(getEndingTimeCallback.serverDate);
		now.setSeconds(now.getSeconds()+1);
		getEndingTimeCallback.serverDate=now;
	}
	//	alert('total'+totalRow)
	for(i=1;i<totalRow;i++)
	{
		getEndingTimeMain('rm_b'+i, 'rm_b_inv_'+i,now);
	}
	newtime =setTimeout("getEndingTimeCallback()", 1000);
	
}


function getEndingTimeMain(objId,objInv,now) 
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

function getEndingTimerCallback()
{
	//alert('hi');
	
	if ( typeof getEndingTimerCallback.serverDate == 'undefined' )
	{
		getEndingTimerCallback.serverDate=document.getElementById('cr_tm_inv_det').value;
		var now = new Date(getEndingTimerCallback.serverDate);
	}
	else
	{
		var now = new Date(getEndingTimerCallback.serverDate);
		now.setSeconds(now.getSeconds()+1);
		getEndingTimerCallback.serverDate=now;
	}
	
	getEndingTimer('rm_bdet', 'rm_b_inv_det',now);
	
	newtime =setTimeout("getEndingTimerCallback()", 1000);
	
}









function getEndingTimer(objId,objInv,now) 
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
