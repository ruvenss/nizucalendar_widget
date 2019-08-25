var nizucal_ver="0.14";
var nizuapiserver="https://api.nizu.be/calendar/";
var nizuapikey="";
var nizuapiid="";
var nizutheme="red";
var nizucal_selectedyear=0;
var nizucal_selectedmonth=0;
var nizucal_selectedday=0;
var nizucal_selectedhour=12;
var nizucal_selectedmin=0;
var nizucal_today = new Date();
function nizucal_init(){
    nizucal_selectedyear=today.getFullYear();
    nizucal_selectedmonth=String(today.getMonth() + 1).padStart(2, '0');
    nizucal_selectedday=String(today.getDate()).padStart(2, '0');
    nizucal_selectedhour=today.getHours();
    nizucal_selectedmin=today.getMinutes();
}
document.addEventListener("DOMContentLoaded", function(event) { 
    nizucal_init();
});