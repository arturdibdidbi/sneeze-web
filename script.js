
document.addEventListener('DOMContentLoaded', function() {
 
const header = document.querySelector('.header-container');

const sections = document.querySelectorAll('section');

const dops = document.querySelectorAll('.dop');


document.addEventListener("click", function(e) {
    if (
        e.target.classList.contains("btn-cta") ||
        e.target.classList.contains("btn-important")
    ) {
        window.location.href = "contact2.html";
    }
});





function scrollHeader() {
    if (window.pageYOffset > 0) {
        header.classList.add("min");
    } else {
        header.classList.remove("min");
    }
}

const hdu = document.querySelector(".btn-principal")

const hdn = document.querySelector("header nav")

const bar = document.querySelector(".bar")

const menuImp = document.querySelector(".menu-imp")

const menuIc = document.getElementById("menuIcon")

document.addEventListener("scroll", scrollHeader);

  const menuIc1 = document.querySelector(".menu-icon span:nth-child(1)")
  const menuIc2 = document.querySelector(".menu-icon span:nth-child(2)")
  const menuIc3 = document.querySelector(".menu-icon span:nth-child(3)")

menuIc.addEventListener("click", () => {
  if( menuIc.classList.contains("active")){
    menuIc.classList.remove("active");
    menuImp.classList.remove("active");
   menuImp.style.opacity = "0"
   menuImp.style.display = "none"
    }
  else{
    menuIc.classList.toggle("active");
       menuImp.classList.toggle("active");
      menuImp.style.opacity = "1"
      menuImp.style.display = "flex"
  }
 
  });



function updateSection(index) {
    sections.forEach((s, i) => { s.classList.toggle("active-2", i === index)});
    dops.forEach((d, i) => d.classList.toggle("active-2", i === index));
    
}

const observer = new IntersectionObserver((entries) => {      
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = [... sections].indexOf(entry.target); 
            updateSection(index);
        }
    });
}, { threshold: 0.4 });


function getHeaderHeight() {
  const header = document.querySelector("header");
  return header.offsetHeight;
}



sections.forEach(section => observer.observe(section));

dops.forEach((dop, i) => {
  dop.addEventListener("click", () => {

    const headerHeight = getHeaderHeight();

  
    let targetPosition;

    if (i === 0) {
      
      targetPosition = sections[i].offsetTop - headerHeight;
    } else {
      targetPosition = sections[i].offsetTop;
    }

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });
});

const scroll = document.getElementById("scr");

const serv = document.querySelector(".container-services");  

scroll.addEventListener("click", () => {
  window.scrollTo({
    top: serv.offsetTop,
    behavior: "smooth",
})

})

const red = document.getElementById("redserv");
red.addEventListener("click", (e) => {
    if( window.location.pathname !== "/index.html"){
        e.preventDefault();
    window.location.href = "index.html#servicos";
}

else { e.preventDefault();
    window.scrollTo({
       
        top: serv.offsetTop,
        behavior: "smooth",
    })
}
 

})


console.log(sections.length, dops.length);

const textb = document.querySelector(".bumper-p") ;

const imagb = document.querySelector(".bumper .glow-container .img-services img") ;

const titleb = document.querySelector(".bumper-h1") ;

const libp = document.querySelectorAll(".description") ;

const libd = document.querySelectorAll(".adjust-3") ;

const btnb = document.querySelectorAll(".block button") ;

const data = { "left-top": { title: "Loja Virtual",
          text: `Desenvolvemos lojas virtuais completas e otimizadas pensadas <br> 
          para oferecer uma experiência de compra fluida e maximizar as suas vendas online.`,
          img: "imgs/LOJA-VIRTUAL.png",
            subt: {
             t1: `     
                 Tecnologia robusta
             `,
              t2: `     
              Experiência de compra
             `,
             t3: `     
               Foco em vendas
             `

            },

          dcp: {
                 d1: `Criamos lojas virtuais com estrutura sólida, seguras e preparadas para escalar conforme o seu negócio cresce.`,

                 d2: `Desenvolvemos interfaces intuitivas que facilitam a navegação e incentivam a compra.`,

                 d3: `Cada detalhe da loja é pensado para aumentar a taxa de conversão e maximizar resultados.`
          },
           
          ck: {


                 c1: ` <img src="imgs/check_icon.png"> Plataformas confiáveis e seguras<br>
                        <br>
                       <img src="imgs/check_icon.png"> Integrações com pagamentos e envios<br>
                       <br>
                       <img src="imgs/check_icon.png"> Estrutura pronta para crescimento`,
             
                       


                 c2: `<img src="imgs/check_icon.png">Navegação simples e fluida<br>
                 <br>
                      <img src="imgs/check_icon.png">Processo de checkout otimizado<br>
                      <br>
                       <img src="imgs/check_icon.png">Design pensado para conversão`, 



                 c3: `<img src="imgs/check_icon.png">Estratégias para aumentar vendas<br>
                      <br>
                      <img src="imgs/check_icon.png">Otimização da jornada do cliente<br>
                      <br>
                       <img src="imgs/check_icon.png">Performance rápida e eficiente`
          }
                        },

            "left-bottom": { title: "Criação de sites",
          text: `Desenvolvemos websites que se destacam, <br>
          transmitindo a identidade da sua marca e
          otimizados para uma experiência de utilizador de excelência.`,
          img: "imgs/cds.png",
                
          subt: {
             t1: `     
                 Tecnologia de ponta
             `,
              t2: `     
               Design exclusivo
             `,
             t3: `     
               Foco em otimização
             `

            },

          dcp: {
                 d1: `Utilizamos as melhores tecnologias do mercado para garantir performance, segurança e
              escalabilidade. Desenvolvemos sites com WordPress e também com código personalizado
              em
              HTML, CSS e JavaScript, oferecendo flexibilidade total para atender qualquer
              necessidade
              — desde projetos simples até soluções mais avançadas.<br>`,
                 d2: `Cada projeto é único — e o seu site também deve ser. Criamos designs personalizados
              que
              refletem a identidade da sua marca e são pensados estrategicamente para atrair,
              envolver
              e converter visitantes em clientes.<br>
              <br>`,

                 d3: `Mais do que um site bonito, entregamos um site que gera resultados. Aplicamos
              técnicas
              avançadas de SEO, otimização de velocidade e estratégias de conversão para garantir
              que
              o seu site tenha visibilidade e desempenho.<br>
              <br>`
          },
           
          ck: {
                 c1: `<img src="imgs/check_icon.png"> Estrutura moderna e otimizada<br>
              <br>
              <img src="imgs/check_icon.png"> Alta performance e carregamento rápido<br>
              <br>
              <img src="imgs/check_icon.png"> Código limpo e preparado para SEO`,

                 c2: `<img src="imgs/check_icon.png"> Layout 100% personalizado<br>
              <br>
              <img src="imgs/check_icon.png"> Experiência do utilizador intuitiva<br>
              <br>
              <img src="imgs/check_icon.png"> Design focado em conversão`, 

                 c3: ` <img src="imgs/check_icon.png"> Otimização para motores de busca (SEO)<br>
              <br>
              <img src="imgs/check_icon.png"> Estrutura pensada para gerar leads e vendas<br>
              <br>
              <img src="imgs/check_icon.png"> Performance otimizada para máxima velocidade`
          }
                        },
          "right-top": { title: "Design gráfico",
          text: `Criamos identidades visuais que se destacam,<br>
  transmitindo a essência da sua marca com criatividade estratégica
  e uma comunicação visual clara e impactante.`,
          img: "imgs/DESIGN.png",
 subt: {
             t1: `     
                  Criatividade estratégica
             `,
              t2: `     
               Design exclusivo
             `,
             t3: `     
               Foco em impacto
             `

            },
          dcp: {
                 d1: `Desenvolvemos soluções visuais que fortalecem a 
            identidade da sua marca e criam uma presença marcante.
             Cada elemento é pensado para comunicar com clareza e gerar reconhecimento.`,
                 d2: `Cada projeto é construído de raiz para refletir a 
                 essência do seu negócio e destacar-se da concorrência.`,

                 d3: `Mais do que estética, criamos design com propósito — pensado para atrair 
                 atenção e gerar conexão com o público.`
          },
           
          ck: {
                 c1: `<img src="imgs/check_icon.png"> Identidade visual consistente<br>
                       <br>
                       <img src="imgs/check_icon.png"> Design moderno e alinhado com o mercado<br>
                       <br>
                       <img src="imgs/check_icon.png"> Comunicação visual clara e impactante`,

                 c2: `<img src="imgs/check_icon.png"> Estratégia visual orientada para branding<br>
                      <br>
                      <img src="imgs/check_icon.png"> Elementos que aumentam reconhecimento<br>
                      <br>
                      <img src="imgs/check_icon.png"> Comunicação focada em resultados`, 

                 c3: `<img src="imgs/check_icon.png"> Conceitos visuais únicos<br>
                       <br>
                      <img src="imgs/check_icon.png"> Personalização total da marca<br>
                      <br>
                      <img src="imgs/check_icon.png"> Design adaptado ao seu público`
          }
                        },
            "right-bottom": { title: "Consultoria SEO",
          text: `Otimizamos a sua presença digital com estratégias de SEO eficazes,<br>
  aumentando a visibilidade nos motores de busca e atraindo
  tráfego qualificado para o seu negócio.`,
          img: "imgs/SEO.png",

 subt: {
             t1: `     
                 Estratégia avançada
             `,
              t2: `     
               Otimização técnica
             `,
             t3: `     
               Foco em impacto
             `

            },

          dcp: {
                 d1: `
                   Aplicamos técnicas atualizadas de SEO para posicionar o seu website nos melhores resultados dos motores de busca.
 `,
                 d2: `Ajustamos todos os fatores internos do seu website para melhorar desempenho e indexação.`,
                               
                 d3: `Foco em resultados
O objetivo é claro: mais tráfego qualificado e mais conversões para o seu negócio.`
          },
           
          ck: {
                 c1: ` <img src="imgs/check_icon.png"> Análise completa do seu site<br>
                       <br>
                    <img src="imgs/check_icon.png"> Estudo de palavras-chave estratégicas<br>
                     <br>
                    <img src="imgs/check_icon.png">  Planeamento orientado para crescimento`,
                c2: ` <img src="imgs/check_icon.png">SEO on-page otimizado<br>
                <br>
                      <img src="imgs/check_icon.png"> Estrutura técnica eficiente<br>
                      <br>
                      <img src="imgs/check_icon.png"> Correção de erros que afetam ranking`, 

                c3: ` <img src="imgs/check_icon.png">Navegação simples e fluida<br>
                <br>
                      <img src="imgs/check_icon.png">Processo de checkout otimizado<br>
                      <br>
                      <img src="imgs/check_icon.png">Design pensado para conversão`
          }
                        },
               
            "center-bottom": { title: "Manutenção",
          text: `Garantimos o funcionamento contínuo do seu website,<br>
  com atualizações, segurança e desempenho otimizados
  para manter o seu negócio sempre ativo e eficiente.`,
          img: "imgs/gear-svgrepo-com.png",
             subt: {
             t1: `     
                 Gestão contínua
             `,
              t2: `     
               Segurança e estabilidade
             `,
             t3: `     
              
               Foco em performance
             `
              
            },           

          dcp: { 
                 d1: `Cuidamos do seu website para garantir que tudo funcione corretamente, sem falhas ou interrupções.`,

                 d2: `
                       Mantemos o seu site protegido contra ameaças e sempre atualizado.`,

                 d3: `Garantimos que o seu site continue rápido, eficiente e <br>alinhado com as melhores práticas.`
          },
           
          ck: {
                 c1: `<img src="imgs/check_icon.png">
                                                     Monitorização constante<br>
                <br>
                      <img src="imgs/check_icon.png">Correção de erros e bugs<br>
                      <br>
                      <img src="imgs/check_icon.png">Suporte técnico contínuo`,

                 c2: `<img src="imgs/check_icon.png">Atualizações regulares<br>
                <br>
                      <img src="imgs/check_icon.png">Proteção contra vulnerabilidades<br>
                      <br>
                      <img src="imgs/check_icon.png">Backups de segurança`, 

                 c3: `<img src="imgs/check_icon.png">Otimização contínua de velocidade<br>
                <br>
                      <img src="imgs/check_icon.png">Melhorias de desempenho<br>
                      <br>
                      <img src="imgs/check_icon.png">Ajustes para manter resultados`
          }
                        }  

                 }    

        


   btnb.forEach(button => {
    button.addEventListener("click", () => {

    const key = [...button.closest(".block").classList].find(c => data[c])

    console.log(key);

     const datac = data[key]
     console.log(datac);
       localStorage.setItem(
       "serviceData",
        JSON.stringify(datac));  


         window.location.href = "info.html"
})



})




})

