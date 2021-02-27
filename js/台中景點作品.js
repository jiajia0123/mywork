container = document.querySelector('.container .row')
block =document.querySelectorAll('.container .block')
sel =document.querySelector('#sel')

//印出預設東區的資料
for(i=0;i<records.length;i++){
  if(records[i].鄉鎮市區 == "東區"){
   areablock =document.createElement('div');
   areablock.setAttribute("class","col-md-6");
   areablock.setAttribute("data-num",i);
   areablock.innerHTML = "<div class='bigaree'><div class='section1'><div class='titBig'>"+ records[i].名稱 +"</div><div class='titsmall'>"+records[i].鄉鎮市區+"</div></div><div class='section2'><ul><li class='opentime'>"+records[i].簡述+"</li><li class='add'>"+records[i].地址+"</li><li class='tel'>"+ records[i].電話+"</li></ul></div></div>"
   container.appendChild(areablock);
  }
  
}

//selcet帶入區域資料
for(i=0;i<districts.length;i++){
    sel.innerHTML= sel.innerHTML + "<option value='"+ districts[i].name +"'>"+  districts[i].name +"</option>"
}

//下拉選單change時觸發listA行為
sel.addEventListener("change",listA)



//listA行為
function listA(e){
    container.innerHTML=""
    h2.textContent=e.target.value
    var areablock

    for(i=0;i<records.length;i++){
        if(records[i].鄉鎮市區 == e.target.value){
         areablock =document.createElement('div');
         areablock.setAttribute("class","col-md-6");
         areablock.setAttribute("data-num",i);
         areablock.innerHTML = "<div class='bigaree'><div class='section1'><div class='titBig'>"+ records[i].名稱 +"</div><div class='titsmall'>"+records[i].鄉鎮市區+"</div></div><div class='section2'><ul><li class='opentime'>"+records[i].簡述+"</li><li class='add'>"+records[i].地址+"</li><li class='tel'>"+ records[i].電話+"</li></ul></div></div>"
         container.appendChild(areablock);
        }
        
     }
     if(container.innerHTML == ""){
        container.textContent="本區無資料"
    }
   

}






