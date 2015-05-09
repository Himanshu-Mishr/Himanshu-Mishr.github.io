
// ---------------------  FUNCTION USE IN MAM USER SECTION SELL PAGE ---------------------------------------//
function validation_sell(fSize){


	// check if user select the buyer to pay the shipping and item is not a digital
	 if (document.mysellform.pay_exp[0].checked && document.mysellform.digital_goods[1].checked) //
	 {

	 	if(document.getElementById('shipping_cost').value=='')
		{
		alert("Please enter shipping cost");
	   	document.getElementById('shipping_cost').focus();
	 	return false;
		}
		if(document.getElementById('shipping_term').value=='')
		{
		alert("Please enter shipping terms");
	   	document.getElementById('shipping_term').focus();
	 	return false;
		}
	  	if(document.getElementById('quantity').value=='')
		{
		alert("Please enter a quantity");
	   	document.getElementById('quantity').focus();
	 	return false;
		}
		if(parseFloat(document.getElementById('quantity').value)<10)
		{
		alert("Please enter a minimum quantity of 10 items.");
	   	document.getElementById('quantity').focus();
	 	return false;
	 	}
	 }

	 if(document.mysellform.reserve_Price[0].checked) {
		 if(document.getElementById('txt_reserve_Price').value=='')
		{
		alert("Please enter reserve price");
	   	document.getElementById('txt_reserve_Price').focus();
	 	return false;
		}
		else
		{
			var start_price=roundNumber(document.getElementById('start_price').value,0);
			 var res_price=roundNumber(document.getElementById('txt_reserve_Price').value,0);



			if( parseFloat(res_price) < parseFloat(start_price) || parseFloat(res_price) == parseFloat(start_price))
			{
				alert("Reserve price should be greater then start price!");
				document.getElementById('txt_reserve_Price').focus();
	 			return false;
			}
		}
	}
	else
	{
		var res_price=0;
	}
	if(document.mysellform.buy_now[0].checked) {

		if(document.getElementById('txt_buy_now_Price').value=='')
		{
		alert("Please enter buy now price");
	   	document.getElementById('txt_buy_now_Price').focus();
	 	return false;
		}
		// else
		// {
		// 	 var buy_now_price=roundNumber(document.getElementById('txt_buy_now_Price').value,0);
		// 	 var startPrice=roundNumber(document.getElementById('start_price').value,0);
		// 	//alert('buynow='+buy_now_price +'resprice='+ res_price +'start='+startPrice);
		// 	if(parseFloat(buy_now_price)<parseFloat(startPrice) || parseFloat(buy_now_price)==parseFloat(startPrice))
		// 	{
		// 		alert("Buy now price should be greater then start price!");
		// 		document.getElementById('txt_buy_now_Price').focus();
	 // 			return false;
		// 	}

		// 	if(parseFloat(buy_now_price) < parseFloat(res_price) || parseFloat(buy_now_price) == parseFloat(res_price))
		// 	{
		// 		alert("Buy now price should be greater then reserve price!");
		// 		document.getElementById('txt_buy_now_Price').focus();
	 // 			return false;
		// 	}
		// }
	}


	if(document.getElementById('item_title').value==''){
		alert('Please enter auction title!');
		document.getElementById('item_title').focus();
	return false;
	}
		if(document.getElementById('category').value=='0'){
			alert("Please select category");
	  		document.getElementById('category').focus();
			return false;
		}
	if(document.getElementById('start_price').value==''){
		alert("Please enter starting price");
		document.getElementById('start_price').focus();
	return false;
	}
	var start_price=document.getElementById('start_price').value;
	if (isNaN(start_price))
	{
		document.getElementById('start_price').focus();
		alert("Please enter a valid start price");
		return false;
	}
	if(start_price<0)
	{
		document.getElementById('start_price').focus();
		alert("Please enter a valid start price");
		return false;
	}
	if(document.getElementById('duration_day').value=='')
	{
		alert("Please enter duration of auction");
		document.getElementById('duration_day').focus();
	    return false;
	}
	var d_days=document.getElementById('duration_day');

	if(d_days<0)
	{
		document.getElementById('duration_day').focus();
		alert("Please enter a valid duration days neg");
		return false;
	}
	if(document.getElementById('shipping_cost').value!='')
	{
		var sh_cost=document.getElementById('shipping_cost');

		if(sh_cost<0)
		{
			document.getElementById('shipping_cost').focus();
			alert("Please enter a valid shipping cost");
			return false;
		}
	}


	//-------------------- check the image uploaded size-------------------------------------------
		var input, file;
		var _validFileExtensions = [".jpg", ".jpeg", ".png"];
        var blnValid=false;

	    if (typeof window.FileReader !== 'function')
	    {
	        alert("The file API isn't supported on this browser yet.");
	        return;
	    }

	    input = document.getElementById('default_image');
	    if (input)
	     {
	      if (!input.files)
		   {
		       // alert("This browser doesn't seem to support the `files` property of file inputs.");
		   }
		    else if (!input.files[0])
		    {
		       // alert("Please select a file before clicking 'Load'");
		    }
		    else
		    {

			    file = input.files[0];
				var size=file.size;
				var inkb=size/1024;
				sFileName=file.name;

				if (size > (fSize*1024))
				{
					alert("Your default image is too large. Please reduce your image below "+fSize+" KB!");
					return false;
				}
				else
				{
					for (var j = 0; j < _validFileExtensions.length; j++)
					{
			           var sCurExtension = _validFileExtensions[j];
			           if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase())
			           	{
			              blnValid = true;
			              break;
			            }
			        }
			        if(blnValid==false)
			        {
			        	alert("Default image  is invalid, allowed extensions are: GIF,JPG,PNG!");
					    return false;
			        }
				}
			}
		 }

		 input1 = document.getElementById('add_image1');
	    if (input1)
	     {
	      if (!input1.files)
		   {
		      //  alert("This browser doesn't seem to support the `files` property of file inputs.");
		   }
		    else if (!input1.files[0])
		    {
		      //  alert("Please select a file before clicking 'Load'");
		    }
		    else
		    {

			    file = input1.files[0];
				var size=file.size;
				var inkb=size/1024;
				sFileName=file.name;

				if (size > (fSize*1024))
				{
					alert("Your additional image-1 is too large. Please reduce your image below "+fSize+" KB!");
					return false;
				}
				else
				{
					for (var j = 0; j < _validFileExtensions.length; j++)
					{
			           var sCurExtension = _validFileExtensions[j];
			           if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase())
			           	{
			              blnValid = true;
			              break;
			            }
			        }
			        if(blnValid==false)
			        {
			        	alert("Additional image-1  is invalid, allowed extensions are: GIF,JPG,PNG!");
					    return false;
			        }
				}
			}
		 }

		 input2= document.getElementById('add_image2');
	    if (input2)
	     {
	     	var blnValid=false;
	      if (!input2.files)
		   {
		       // alert("This browser doesn't seem to support the `files` property of file inputs.");
		   }
		    else if (!input2.files[0])
		    {
		      //  alert("Please select a file before clicking 'Load'");
		    }
		    else
		    {

			    file = input2.files[0];
				var size=file.size;
				var inkb=size/1024;
				sFileName=file.name;

				if (size > (fSize*1024))
				{
					alert("Your additional image-2 is too large. Please reduce your image below "+fSize+" KB!");
					return false;
				}
				else
				{
					for (var j = 0; j < _validFileExtensions.length; j++)
					{
			           var sCurExtension = _validFileExtensions[j];
			           if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase())
			           	{
			              blnValid = true;
			              break;
			            }
			        }
			        if(blnValid==false)
			        {
			        	alert("Additional image-2  is invalid, allowed extensions are: GIF,JPG,PNG!");
					    return false;
			        }
				}
			}
		 }

		 input3 = document.getElementById('add_image3');
	    if (input3)
	     {
	     	var blnValid=false;
	      if (!input3.files)
		   {
		       // alert("This browser doesn't seem to support the `files` property of file inputs.");
		   }
		    else if (!input3.files[0])
		    {
		       // alert("Please select a file before clicking 'Load'");
		    }
		    else
		    {

			    file = input3.files[0];
				var size=file.size;
				var inkb=size/1024;
				sFileName=file.name;

				if (size > (fSize*1024))
				{
					alert("Your additional image-3 is too large. Please reduce your image below "+fSize+" KB!");
					return false;
				}
				else
				{
					for (var j = 0; j < _validFileExtensions.length; j++)
					{
			           var sCurExtension = _validFileExtensions[j];
			           if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase())
			           	{
			              blnValid = true;
			              break;
			            }
			        }
			        if(blnValid==false)
			        {
			        	alert("Additional image-3  is invalid, allowed extensions are: GIF,JPG,PNG!");
					    return false;
			        }
				}
			}
		 }
		 input4 = document.getElementById('add_image4');
	    if (input4)
	     {
	     	var blnValid=false;
	      if (!input4.files)
		   {
		       // alert("This browser doesn't seem to support the `files` property of file inputs.");
		   }
		    else if (!input4.files[0])
		    {
		       // alert("Please select a file before clicking 'Load'");
		    }
		    else
		    {

			    file = input4.files[0];
				var size=file.size;
				var inkb=size/1024;
				sFileName=file.name;

				if (size > (fSize*1024))
				{
					alert("Your additional image-4 is too large. Please reduce your image below "+fSize+" KB!");
					return false;
				}
				else
				{
					for (var j = 0; j < _validFileExtensions.length; j++)
					{
			           var sCurExtension = _validFileExtensions[j];
			           if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase())
			           	{
			              blnValid = true;
			              break;
			            }
			        }
			        if(blnValid==false)
			        {
			        	alert("Additional image-4  is invalid, allowed extensions are: GIF,JPG,PNG!");
					    return false;
			        }
				}
			}
		 }

		 input5 = document.getElementById('add_image5');
	    if (input5)
	     {
	     	var blnValid=false;
	      if (!input5.files)
		   {
		       // alert("This browser doesn't seem to support the `files` property of file inputs.");
		   }
		    else if (!input5.files[0])
		    {
		       // alert("Please select a file before clicking 'Load'");
		    }
		    else
		    {

			    file = input5.files[0];
				var size=file.size;
				var inkb=size/1024;
				sFileName=file.name;

				if (size > (fSize*1024))
				{
					alert("Your additional image-5 is too large. Please reduce your image below "+fSize+" KB!");
					return false;
				}
				else
				{
					for (var j = 0; j < _validFileExtensions.length; j++)
					{
			           var sCurExtension = _validFileExtensions[j];
			           if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase())
			           	{
			              blnValid = true;
			              break;
			            }
			        }
			        if(blnValid==false)
			        {
			        	alert("Additional image-5  is invalid, allowed extensions are: GIF,JPG,PNG");
					    return false;
			        }
				}
			}
		 }
	//--------------------  End of check the image uploaded size-------------------------------------------


}

function removeShippingDiv()
{
		document.getElementById('mam_shipping_div').style.display='none';
}
function getShippingDiv()
{
		document.getElementById('mam_shipping_div').style.display='block';
}


function getButton()
{

 	document.getElementById('reserve_price').style.display='table-row';
 	document.getElementById('buy_now').style.display='table-row';
 	document.getElementById('no_reserve_Price').checked=true;
	document.getElementById('yes_reserve_Price').checked=false;
	document.getElementById('no_buy_now').checked=true;
	document.getElementById('yes_buy_now').checked=false;

}
function removeButton()
{

	document.getElementById('reserve_price').style.display='none';
 	document.getElementById('buy_now').style.display='none';
 	document.getElementById('txt_buy_now_Price').value="";
 	document.getElementById('txt_reserve_Price').value="";
 	document.getElementById('div_reserve_Price').style.display='none';
 	document.getElementById('div_buy_now_Price').style.display='none';
 	document.getElementById('no_reserve_Price').checked=true;
	document.getElementById('yes_reserve_Price').checked=false;
	document.getElementById('no_buy_now').checked=true;
	document.getElementById('yes_buy_now').checked=false;

}
function getPriceButtonReserve()
{


 	document.getElementById('div_reserve_Price').style.display='table-row';


}
function removeButtonReserve()
{

	document.getElementById('div_reserve_Price').style.display='none';
	document.getElementById('txt_reserve_Price').value="";


}
function getPriceButtonBuy()
{

 	document.getElementById('div_buy_now_Price').style.display='table-row';

}
function removeButtonBuy()
{

	document.getElementById('div_buy_now_Price').style.display='none';
	document.getElementById('txt_buy_now_Price').value="";

}
function getButtonEdit()
{

 	document.getElementById('reserve_price').style.display='table-row';
 	document.getElementById('buy_now').style.display='table-row';
 	document.getElementById('reserve_no').checked=true;
	document.getElementById('reserve_yes').checked=false;
	document.getElementById('buy_no').checked=true;
	document.getElementById('buy_yes').checked=false;

}
function removeButtonEdit()
{
	document.getElementById('reserve_no').checked=true;
	document.getElementById('reserve_yes').checked=false;
	document.getElementById('buy_no').checked=true;
	document.getElementById('buy_yes').checked=false;
	document.getElementById('reserve_price').style.display='none';
 	document.getElementById('buy_now').style.display='none';
 	document.getElementById('txt_buy_now_Price').value="";
 	document.getElementById('txt_reserve_Price').value="";
 	document.getElementById('div_reserve_Price').style.display='none';
 	document.getElementById('div_buy_now_Price').style.display='none';

}
function checkval()
{
	 if (document.mysellform.pay_exp[0].checked)
    {
    	alert('checked 0');
    }
     if (document.mysellform.pay_exp[1].checked)
    {
    	alert('checked 1');
    }


}
function valid_search()
{

	if(document.getElementById('category').value=='0'){
		alert("Please select category");
		document.getElementById('category').focus();
	return false;
	}
}
function valid_comment()
{

	if(document.getElementById('auction_comment').value==''){

		alert("Please Enter comments.");
		document.getElementById('auction_comment').focus();
	return false;
	}
}
function valid_search_tag()
{

	if(document.getElementById('tag').value==''){
		alert("Please enter tag.");
		document.getElementById('tag').focus();
	return false;
	}
}
function checkValidPrice()
{

	if(document.getElementById('bid_price').value=='')
	{
		alert("Please enter bid.");
		document.getElementById('bid_price').focus();
	    return false;
	}
	var bid_price=document.getElementById('bid_price').value;
	if (isNaN(bid_price))
	{
		document.getElementById('bid_price').focus();
		alert("please enter a valid bid");
		return false;
	}
	if(bid_price<0)
	{
		document.getElementById('bid_price').focus();
		alert("please enter a valid bid");
		return false;
	}

}
//--------------------function for email template user  section-------------------------------------------------------
function delete_mam_emails()
{
if (confirm("Are you sure you want to Delete?"))
{
 var loc=window.location.href;
 if(loc.search("Action")>-1)
 {
 index=loc.indexOf("Action")
 loc=loc.substring(0,index-1);
 }
 document.getElementById("mode").value="delete";
document.action=loc;
document.frmdelmessages.submit();
}
} // End delete_dsp_emails()


//--------------------- Check  image validation for setting page------------------------------------------------

	function validateImage(fSize)
	{

		var input, file;
		var _validFileExtensions = [".jpg", ".jpeg", ".png"];
        var blnValid=false;

	    if (typeof window.FileReader !== 'function')
	    {
	       // alert("The file API isn't supported on this browser yet.");
	        return;
	    }

	    input = document.getElementById('user_image');
	    if (input)
	     {
	      if (!input.files)
		   {
		       // alert("This browser doesn't seem to support the `files` property of file inputs.");
		   }
		    else if (!input.files[0])
		    {
		       // alert("Please select a file before clicking 'Load'");
		    }
		    else
		    {

			    file = input.files[0];
				var size=file.size;
				var inkb=size/1024;
				sFileName=file.name;

				if (size > (fSize*1024))
				{
					alert("Your image is too large. Please reduce your image below "+fSize+" KB!");
					return false;
				}
				else
				{
					for (var j = 0; j < _validFileExtensions.length; j++)
					{
			           var sCurExtension = _validFileExtensions[j];
			           if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase())
			           	{
			              blnValid = true;
			              break;
			            }
			        }
			        if(blnValid==false)
			        {
			        	alert("Image is invalid, allowed extensions are: GIF,JPG,PNG!");
					    return false;
			        }
				}
			}
		 }

 }

 function checkme()
 {
 	alert('hi');
 }

 function roundNumber(number, decimals)
 { // Arguments: number to round, number of decimal places
	var newnumber = new Number(number+'').toFixed(parseInt(decimals));
	return  parseFloat(newnumber); // Output the result to the form field (change for your purposes)
 }

   function SetOneCheckBox(obj)
	{
	  var objCheckBoxes = document.getElementsByName('auction_feedback[]');
	  if(!objCheckBoxes) {
	    return;
	  }

	  // set the check value for all check boxes
	  for(var i = 0; i < 3; i++) {

	    objCheckBoxes[i].checked = false;
	  }
	  obj.checked = true;
	}

//--------------------- End of validation ----------------------------------------------------------------------









