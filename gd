

let items = document.querySelectorAll('.slider .item');
let active = 3;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}


    
    <section class="container-slider" id="section">

      <div class="slider">
        <div class="item">
          <h1>Slide 1</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic iure enim, rem accusamus odit
          nemo aspernatur consequuntur vero in veniam fugiat, consectetur officiis voluptatum quidem libero.
          Sed, dignissimos exercitationem, animi a repellendus tempora recusandae qui consequatur, itaque
          deleniti nobis.
        </div>
        <div class="item">
          <h1>Slide 2</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni
          adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias
          dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe
          facilis cumque! Voluptate, cumque.
        </div>
        <div class="item">
          <h1>Slide 3</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni
          adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias
          dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe
          facilis cumque! Voluptate, cumque.
        </div>
        <div class="item ">
          <h1>Slide 1</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni
          adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias
          dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe
          facilis cumque! Voluptate, cumque.
        </div>
        <div class="item ">
          <h1>Slide 1</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni
          adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias
          dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe
          facilis cumque! Voluptate, cumque.
        </div>
        <div class="item ">
          <h1>Slide 1</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni
          adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias
          dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe
          facilis cumque! Voluptate, cumque.
        </div>
        <div class="item ">
          <h1>Slide 1</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni
          adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias
          dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe
          facilis cumque! Voluptate, cumque.
        </div>
        <div class="item ">
          <h1>Slide 1</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni
          adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias
          dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe
          facilis cumque! Voluptate, cumque.
        </div>
        <div class="item ">
          <h1>Slide 1</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni
          adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias
          dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe
          facilis cumque! Voluptate, cumque.
        </div>
        <button id="next">></button>
        <button id="prev">l</button>
      </div>

      </div>
    </section>
