timeend= new Date(2018, 7, 17, 20, 00);
function time() {
    today = new Date();
today = Math.floor((timeend-today)/1000);
    tsec=today%60; 
  today=Math.floor(today/60); 
  if(tsec<10)tsec='0'+tsec;
    tmin=today%60; 
  today=Math.floor(today/60); 
  if(tmin<10)tmin='0'+tmin;
    thour=today%24; 
  today=Math.floor(today/24);
    timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
    document.getElementById('d').innerHTML=today;
  document.getElementById('h').innerHTML=thour;
  document.getElementById('m').innerHTML=tmin;
  document.getElementById('s').innerHTML=tsec;
    window.setTimeout("time()",1000);
}

time();