(function() { 
		checkcookie();
	})();
	
/* check if cookie exists */
function checkcookie() {
  var checkcookie=getCookie("hideDiv");
  if(checkcookie == "true") {
      document.getElementById("message-cookie").style.display = "none";
  }
}

/* set cookie true for one month*/
function SetCookieAndHideDiv(){
	 setCookie('hideDiv','true', 1);
	 document.getElementById("message-cookie").style.display = "none";
}

/* set cookie name, value and expires */
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  
}

/* get cookie name */
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
} 
