gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container-strategy");
const sections = gsap.utils.toArray(".sec3");

if (!container || sections.length === 0) {
  console.error("Container ou seções não encontrados!");
} else {
  console.log("Seções encontradas:", sections.length);
}

let startValue;
let endValue;

function createAnimation() {

  // mata animação anterior
  if (scrollTween) {
    scrollTween.scrollTrigger.kill();
    scrollTween.kill();
  }
}
function size() {

if (window.innerWidth <= 1400 && window.innerWidth > 730 ) {
startValue = "+=1000";
endValue = "+=6000";
 console.log("MENOR");
}

else if (window.innerWidth <= 741) {
startValue = "+=2100";
endValue = "+=2150";
 console.log("MENOR");
}

else  {

startValue = "+=400";
endValue = "+=3000";
  console.log("Maior");
}


} 

size();



const scrollTween = gsap.to(container, {
  xPercent:  -200 * (sections.length - 1 ) ,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: true,
    start: startValue,
    end: endValue ,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    markers: true
  }
});

window.addEventListener("resize", () => {

  size();

  scrollTween.scrollTrigger.vars.start = startValue;
  scrollTween.scrollTrigger.vars.end = endValue;

  ScrollTrigger.refresh();

});



scrollTween.invalidate();
scrollTween.scrollTrigger.refresh();

console.log("ScrollTrigger configurado");
size()
