var height = document.querySelector(".height")
var kg = document.querySelector(".kg")
var result = document.querySelector(".result")
var save = document.querySelector(".save")
var resultList = document.querySelector(".resultList")
var BMI
var arrd =[

]

var Today=new Date();
var todayNow = Today.getFullYear()+ "/" + (Today.getMonth()+1) + "/" + Today.getDate() 

result.addEventListener("click",function(e){
  e.preventDefault()
  function calc(x,y){
    BMI = y/((x/100)*(x/100))
  }
  calc(height.value,kg.value)
  BMI = BMI.toFixed(2) //小數點後兩位

  if(height.value !== "" && kg.value !== "" ){
    this.innerHTML = "<span>"+ BMI+"</span>" 
  }else{
    alert("你沒輸入身高或體重哦!")
  }

  if(BMI>38){
    this.setAttribute("style","border: solid 4px red;background: none;color:red")
    var span = document.createElement("span")
    span.textContent="過重"
    this.appendChild(span)
  }else if(BMI<38){
    this.setAttribute("style","border: solid 4px #73d573;background: none;color:#73d573")
    var span = document.createElement("span")
    span.textContent="沒有過重"
    this.appendChild(span)

  }


})

var string
var axx=JSON.parse(localStorage.getItem("bmi")) 
arrd = axx || []
print();

save.addEventListener("click",function(e){
  
  function calc(x,y){
    BMI = y/((x/100)*(x/100))
  }
  calc(height.value,kg.value)
  BMI = BMI.toFixed(2)
  var color
  if(BMI>38){
   color = "red"
  }else if(BMI<38){
  color = "green"
  }
    e.preventDefault()

    if(height.value !== "" && kg.value !== "" ){
      arrd.push({BMI:BMI,height:height.value,kg:kg.value,date:todayNow,color:color})
      resultList.innerHTML= ""
      print();
      string = JSON.stringify(arrd)
      localStorage.setItem("bmi",string)
    }else{
      alert("你沒輸入身高或體重哦!")
    }
   
})

function print(){
  for(i=0;i<arrd.length;i++){
    resultList.innerHTML =  resultList.innerHTML + "<li style='border-left: solid 8px "+ arrd[i].color +"'>BMI:<span>" + arrd[i].BMI + "</span>weight:<span>" + arrd[i].kg + "KG</span>height:<span>"+ arrd[i].height + "CM</span>日期:<span>" + arrd[i].date + "</span>"
  }
}





