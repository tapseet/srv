<script src='http://code.jquery.com/jquery-1.11.0.min.js' type='text/javascript'/>
<script type='text/javascript'>
//<![CDATA[
$(document).ready(function()
{
   

if($("#herf").attr("href")!="http://www.tapseet.com" )
 {
   window.location.href="http://www.tapseet.com";
 }
  if($("#herf").html()!= 'SWEUP'){
   window.location.href="http://www.tapseet.com";

  }
if($("#herf").css('display')== 'none'){
   window.location.href="http://www.tapseet.com";

  }

    });
function removeHtmlTag(strx,chop){if(strx.indexOf("<")!=-1){var s = strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);}}strx = s.join("");}chop = (chop < strx.length-1) ? chop : strx.length-2; while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;strx = strx.substring(0,chop-1);return strx+'[...]';}function createSummaryAndThumb(pID){var div = document.getElementById(pID);var imgtag = "";var img = div.getElementsByTagName("img");var summ = summary_noimg;if(img.length>=1) { imgtag = '<span style="float:left; height: 180px;  margin-right: 15px; margin-top:4px; "><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>'; summ = summary_img; } var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>'; div.innerHTML =summary; }
//]]>
</script> 
