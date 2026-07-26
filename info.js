


document.addEventListener("DOMContentLoaded", () =>   {

const textb = document.querySelector(".bumper-p") ;

const img = document.querySelector(" .img-services") ;

const titleb = document.querySelector(".bumper-h1") ;

const libp = document.querySelectorAll(" .description") ;

const libd = document.querySelectorAll(".adjust-3") ;

const btnb = document.querySelectorAll(".block button") ;

const t4 = document.querySelectorAll(".bumper h4")

document.querySelector(".exit-btn").addEventListener("click", () => {
    window.location.href = "index.html";
    console.log("exit");
});
 
const data = JSON.parse(  localStorage.getItem("serviceData") );

if(data){
  titleb.innerHTML = data.title;
  img.src = data.img;
  libp[0].innerHTML = data.dcp.d1
  libp[1].innerHTML = data.dcp.d2
  libp[2].innerHTML = data.dcp.d3
  textb.innerHTML = data.text;
  libd[0].innerHTML = data.ck.c1;
  libd[1].innerHTML = data.ck.c2;
  libd[2].innerHTML = data.ck.c3;
  t4[0].innerHTML = data.subt.t1
  t4[1].innerHTML = data.subt.t2
  t4[2].innerHTML = data.subt.t3

  if( data.title === "Design gráfico" || data.title === "Consultoria SEO"){
    
    data.img.style.marginBottom = "3% !important"

  }

}



else{  console.log("ERROR")     }

})