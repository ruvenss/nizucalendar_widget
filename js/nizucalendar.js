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
var nuzucal_choosedestination=false;
function nizucal_init(){
    nizucal_selectedyear=nizucal_today.getFullYear();
    nizucal_selectedmonth=String(nizucal_today.getMonth() + 1).padStart(2, '0');
    nizucal_selectedday=String(nizucal_today.getDate()).padStart(2, '0');
    nizucal_selectedhour=nizucal_today.getHours();
    nizucal_selectedmin=nizucal_today.getMinutes();
    nizucal_render();
}
function nizucal_render(){
    console.log("rendering");
    var nizucalendar = document.getElementsByClassName("nizucalendar");
    console.log("render completed");
}
document.addEventListener("DOMContentLoaded", function(event) { 
    nizucal_init();
});