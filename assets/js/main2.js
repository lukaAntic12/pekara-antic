/*-----------------------MENI-----------------------*/

var menuItems = [
    { text: 'Početna', link: '#hero' },
    { text: 'O nama', link: '#about' },
    { text: 'Usluge', link: '#services' },
    { text: 'Galerija', link: '#portfolio' },
    { text: 'Autor', link: '#team' },
    { text: 'Kontakt', link: '#contact' }
  ];
  
  var navbarlinks;
  
  function generateMenu() {
    var navbar = document.getElementById('navbar');
    var ul = document.createElement('ul');
  
    menuItems.forEach(function (item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.setAttribute('href', item.link);
      a.setAttribute('class', 'nav-link scrollto');
      a.textContent = item.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    navbar.appendChild(ul);
  
    navbarlinks = document.querySelectorAll('#navbar .scrollto');
  }
  
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    let found = false;
  
    if (navbarlinks) {
      navbarlinks.forEach(navbarlink => {
        navbarlink.classList.remove('active');
  
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
  
        if (!found && position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
          found = true;
        }
      });
    }
  };
  
  window.addEventListener('load', function () {
    generateMenu();
    navbarlinksActive();
  });
  
  window.addEventListener('scroll', navbarlinksActive);
  
  $(document).ready(function () {
    $('.mobile-nav-toggle').on('click', function (e) {
      $('#navbar').toggleClass('navbar-mobile');
      $(this).toggleClass('bi-list bi-x');
    });
  });
  

/*-----------------------MENI-----------------------*/


/*-----------------------SLIDER NASLOVNA-----------------------*/

var pocetnaCover=['assets/img/bakery-noun.jpg','assets/img/various-pastries.jpg','assets/img/different-types-of-bread.jpg'];
var currentImageIndex = 0;

function menjaj() {
  document.getElementById("hero").style.backgroundImage = "url('" + pocetnaCover[currentImageIndex] + "')";
  document.getElementById("hero").classList.add("slide-in-left"); 
  currentImageIndex = (currentImageIndex + 1) % pocetnaCover.length;

  setTimeout(function() {
    document.getElementById("hero").classList.remove("slide-in-left");
  }, 500);
}

menjaj();

setInterval(function() {
  menjaj();
}, 5000);

/*-----------------------SLIDER NASLOVNA-----------------------*/

/*-----------------------STRELICA ZA VRH-----------------------*/

let backtotop = document.querySelector('.back-to-top');

if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active');
    } else {
      backtotop.classList.remove('active');
    }
  };

  window.addEventListener('load', toggleBacktotop);
  window.addEventListener('scroll', toggleBacktotop);
}

/*-----------------------STRELICA ZA VRH-----------------------*/

/*-----------------------SLIDER-----------------------*/

$(document).ready(function () {
    $(".plugin").bxSlider({
      mode: "horizontal",
      speed: 1000,
      auto: true,
      pause: 5000,
    });
  });
  
  
/*-----------------------SLIDER-----------------------*/

/*-----------------------TEXT 1-----------------------*/

var tekst = document.querySelector("#text-1");
var delay1 = ['0','0.2','0.4'];
var ikonice = ['cookie-bite','hand-holding-heart','car-alt'];
var naslovi1 = ['UVEK NOVI ARTIKLI','KREIRANO SA LJUBAVLJU','DOSTAVA'];
var opis1 = [
    ['Konstantno pokušavamo da razvijemo dobar program proizvoda te stalno imamo nove artikle u asortimanu.'],
    ['Kod nas se sprema sa ljubavlju. Svaki proizvod je rezultat dugogodišnjeg rada i tradicije.'],
    ['Jer ste vi tako tražili, počeli smo sa uslugom dostave koja je još u razvijanju.'],
];
for(let i=0;i<naslovi1.length;i++){
    tekst.innerHTML+= `
    <div class="icon-box wow fadeInUp" data-wow-delay="${delay1[i]}">
    <div class="icon"><i class="fa fa-${ikonice[i]}"></i></div>
    <h4 class="title"><a href="">${naslovi1[i]}</a></h4>
    <p class="description">${opis1[i]}</p>
    </div>
    `;
}

/*-----------------------TEXT 1-----------------------*/

/*-----------------------BROJAC STATISTIKA-----------------------*/

function counterUp(elem, duration, delay, button){
    var animationStarted = false;

    var value = parseFloat(elem.innerText);
    var starter = 0;
    var steps = duration / delay;
    var step = value / steps;
    elem.innerText = starter;
    function startAnimate(){
        var intId = setInterval(function(){
            if(starter >= value){
            starter = value;
            clearInterval(intId);
        }
        elem.innerText = starter.toFixed(0);
        starter += step;
    }, delay)
}

    document.addEventListener("scroll", function(){
        var windowHeight = window.innerHeight;
        var scrollTop = elem.getBoundingClientRect().top;
        if(scrollTop < 500 && !animationStarted){
            startAnimate();
            animationStarted = true;
        }
    })
}
var elements = document.querySelectorAll(".custom-counter");  
elements.forEach(function(el){
    counterUp(el, 2000, 10);
})

/*-----------------------BROJAC STATISTIKA-----------------------*/

/*-----------------------OBLASTI DELOVANJA-----------------------*/

const data = [
    {
      icon: 'fas fa-bread-slice',
      title: 'Pekarski proizvodi',
      description: 'U ponudi imamo različite vrste hlebova, pita po kojima smo poznati, mrežica kao i drugih pekarskih proizvoda i peciva.',
    },
    {
      icon: 'fas fa-pizza-slice',
      title: 'Pice',
      description: 'U ponudi su kaprićoza, gurmanska i njeguška za one najzahtevnije ljubitelje ovog italijanskog specijaliteta.',
    },
    {
      icon: 'fas fa-birthday-cake',
      title: 'Torte i kolači',
      description: 'Pored klasičnih torti i poslastica za najveće sladokusce u ponudi su i druga slatka rešenja kojima nećete odoleti.',
    },
    {
      icon: 'fas fa-utensils',
      title: 'Kuvana jela',
      description: 'Svakog dana u određenim objektima imate veliki izbor kuvanih jela, roštilja kao i drugih gotovih jela.',
    },
    {
      icon: 'fas fa-mitten',
      title: 'Smrznuti proizvodi',
      description: 'Neki to vole kod kuće, slogan je za naše popularne proizvode koje od sada možete spremati sami kod kuće.',
    },
    {
      icon: 'fas fa-glass-cheers',
      title: 'Sveži sokovi',
      description: 'Izaberite neki od različitih vrsta sokova i pića koja smo pripremili za vas, limunada ili ceđena pomorandža.',
    },
  ];
  
  function generateBoxHTML(boxData) {
    return `
      <div class="col-lg-4 col-md-6" data-aos="zoom-in">
        <div class="box">
          <div class="icon"><i class="${boxData.icon}"></i></div>
          <h4 class="title">${boxData.title}</h4>
          <p class="description">${boxData.description}</p>
        </div>
      </div>
    `;
  }
  
  const boxesContainer = document.getElementById('boxes-container');
  
  data.forEach(boxData => {
    const boxHTML = generateBoxHTML(boxData);
    boxesContainer.innerHTML += boxHTML;
  });
  

/*-----------------------OBLASTI DELOVANJA-----------------------*/

/*-----------------------MENI DUGME-----------------------*/

let p = document.querySelector(".row.text-center > .az-bg-orange");
p.addEventListener("click",function(){
p.parentElement.previousElementSibling.classList.toggle("az-invisible");
if(p.innerText == 'Vidi više') {p.innerText = "Vidi manje"}else
{p.innerText = "Vidi više"};
})

/*-----------------------MENI DUGME-----------------------*/

/*-----------------------GALERIJA SLIKA-----------------------*/

var galerija = document.querySelector("#portfolio-wrapper");
var slikeiAlt = [
['assets/img/bagels.jpg','bagels'],
['assets/img/rolls-with-spice.jpg','rolls'],
['assets/img/pastry-dough-snails.jpg','snails'],
['assets/img/cornbread-with-sesame.jpg','cornbread'],
['assets/img/pizza-pepperoni.jpg','pizza-pepperoni'],
['assets/img/pizza-margarita.jpg','pizza-margarita'],
['assets/img/pizza.jpg','pizza'],
['assets/img/pizza-arugula.jpg','pizza-arugula'],
['assets/img/chocolate-cake-with-hazelnuts.jpg','hazelnuts-cake'],
['assets/img/chocolate-cake.jpg','chocolate-cake'],
['assets/img/chocolate-muffin.jpg','muffin'],
['assets/img/fruit-cake.jpg','fruit-cake'],
];
var slika =['bagels', 'rolls', 'snails', 'cornbread', 'pizza-pepperoni','pizza-margarita','pizza','pizza-arugula', 'hazelnuts-cake', 'chocolate-cake', 'muffin', 'fruit-cake']
for(let i=0;i<slika.length;i++){
galerija.innerHTML+=`
<div class="col-lg-3 col-md-6 portfolio-item">
<img src="${slikeiAlt[i][0]}" alt="${slikeiAlt[i][1]}">
</div>
`;
}

/*-----------------------GALERIJA SLIKA-----------------------*/

/*-----------------------FORMA ZA VALIDIRANJE-----------------------*/

let nizRb = document.querySelectorAll('input[name="tipKontakt"]');

function validateForm() {
  let form = document.forms['contactForm'];
  let passed = true;

  let emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  let nameRegex = new RegExp(/^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,19})+$/);
  let numberRegex = new RegExp(/^\+381\d{9}$/);
  let adresaRegex = new RegExp(/^[A-ZČĆŽŠĐ][A-ZČĆŽŠĐa-zčćžšđ\s?0-9]*(?:\s?[A-ZČĆŽŠĐa-zčćžšđ]+[a-zčćžšđ0-9]*)*$/);

  let selectedTipKontakt = form['tipKontakt'].value;

  function showError(elem, message) {
    elem.classList.add('error');
    if (elem.nextElementSibling) {
      elem.nextElementSibling.innerText = message;
      elem.nextElementSibling.style.display = 'block';
    }
  }

  form.querySelectorAll("input").forEach(function (el) {
    el.classList.remove("error");
  });
  form.querySelector('textarea').classList.remove("error");
  form.querySelectorAll('.validation').forEach(function (el) {
    el.innerText = '';
    el.style.display = "none";
  });


  var adresaMessage = '';
  if (form['adresa'].value === '') {
    adresaMessage = "Morate popuniti ovo polje!";
  } else if (!adresaRegex.test(form['adresa'].value)) {
    adresaMessage = "Adresa mora biti u pravilnom formatu: Višnjička 61a";
  }
  if (adresaMessage) {
    showError(form['adresa'], adresaMessage);
    passed = false;
  }

    let ddlUsluga = form.querySelector('#ddlUsluga');
    if (ddlUsluga.value === '0') {
        showError(ddlUsluga, 'Morate izabrati uslugu!');
        passed = false;
        document.getElementById('productError').innerText = 'Izaberite proizvod!';
        document.getElementById('productError').style.display = 'block';
    } else {
        ddlUsluga.classList.add('validate');
        showError(ddlUsluga, '');
        document.getElementById('productError').innerText = ''; 
        document.getElementById('productError').style.display = 'none';
    }
 
    let slanjeNaKucnuAdresu = document.getElementById("kontaktMail");
  let adresaPolje = document.getElementById("adresaPolje");

  if (slanjeNaKucnuAdresu.checked) {
    if (adresaPolje.style.display !== "none" && form['adresa'].value === '') {
      showError(adresaPolje.querySelector('input'), 'Morate uneti kućnu adresu!');
      passed = false;
    }
  }
  
  
let tipKontakt = form.querySelector('input[name="tipKontakt"]:checked');
let radioErrorElement = form.querySelector('input[name="tipKontakt"][type="radio"]').nextElementSibling;

if (!tipKontakt) {
    showError(radioErrorElement, 'Morate izabrati način kontakta!');
    passed = false;
    document.getElementById('contactMethodError').innerText = 'Morate izabrati način kontakta!';
    document.getElementById('contactMethodError').style.display = 'block';
} else {
   
    tipKontakt.classList.add('validate');
    showError(radioErrorElement, '');
    document.getElementById('contactMethodError').innerText = '';
    document.getElementById('contactMethodError').style.display = 'none';
}
if (tipKontakt.id === 'kontaktSMS') {
        passed = true;
      }

let checkboxes = document.querySelectorAll('#cuvaj input[type="checkbox"]');
let checked = Array.from(checkboxes).some(checkbox => checkbox.checked);


if (!checked) {
    let errorElement = document.getElementById('productError');
    errorElement.innerText = 'Morate izabrati bar jedan proizvod!';
    errorElement.style.display = 'block';
    passed = false;
} else {
  
    let errorElement = document.getElementById('productError');
    errorElement.innerText = '';
    errorElement.style.display = 'none';
}
var nameMessage = '';
if (form['name'].value === '') {
  nameMessage = "Morate popuniti ovo polje!";
} else if (!nameRegex.test(form['name'].value)) {
  nameMessage = "Niste dobro uneli ime i prezime : (Luka Antić)";
}
if (nameMessage) {
  showError(form['name'], nameMessage);
  passed = false;
}

var numberMessage = '';
if (form['number'].value === '') {
  numberMessage = "Morate popuniti ovo polje!";
} else if (!numberRegex.test(form['number'].value)) {
  numberMessage = "Niste dobro uneli broj telefona : (+381696556594)";
}
if (numberMessage) {
  showError(form['number'], numberMessage);
  passed = false;
}

if (selectedTipKontakt !== 'SMS') {
  var emailMessage = '';
  if (form['email'].value === '') {
    emailMessage = "Morate popuniti ovo polje!";
  } else if (!emailRegex.test(form['email'].value)) {
    emailMessage = "Niste dobro uneli email : primer@nesto.com";
  }
  if (emailMessage) {
    showError(form['email'], emailMessage);
    passed = false;
  }
}

    if (passed) {
        document.querySelector("#sendmessage").style.display = 'block';
        form['name'].value = '';
        form['email'].value = '';
        form['number'].value = '';
    
        nizRb.forEach(rb => {
        rb.checked = false;
        });
    
        document.querySelector("#brojSlova").textContent = '0/150';
        
        nizRb.forEach(rb => {
          rb.checked = false;
        });
        document.getElementById("adresaPolje").style.display = "none";
      
        
        form['adresa'].value = '';
        adresaPolje.style.display = "none";
  
    
        checkboxes.forEach(checkbox => checkbox.checked = false);
    
        document.querySelector("#komentar").value = '';
        document.querySelector("#brojSlova").textContent = '0/150';
    
        form.querySelector("#ddlUsluga").value = '0';
    
        prikazCheckBoxova(0);
      }

      form['tipKontakt'].value = selectedTipKontakt;
    
      return false;
    }

document.querySelector("#komentar").addEventListener("keyup", function () {
    document.querySelector("#brojSlova").textContent = `${document.querySelector("#komentar").value.length}/150`;
    
});

/*-----------------------FORMA ZA VALIDIRANJE-----------------------*/



document.getElementById("ddlUsluga").addEventListener("change", function () {
    prikazCheckBoxova(parseInt(this.value));
});

function handleIzborUsluge(selectElement) {
    let izabranaVrednost = parseInt(selectElement.value);
    prikazCheckBoxova(izabranaVrednost);
}


function prikazCheckBoxova(pom) {
    let cuvaj = document.getElementById("cuvaj");


    if (pom === 0) {
        cuvaj.innerHTML = ''; 
        return; 
    }

    cuvaj.innerHTML = ''; 

    switch (pom) {
        case 1: // PEKARSKI PROIZVODI
            brElem = 5;
            prikaziCheckboxOpcije(["Đevrek", "Kiflice", "Pužići", "Pogačice", "Štapići"]);
            break;
        case 2: // PICE
            brElem = 5;
            prikaziCheckboxOpcije(["Peperoni", "Margarita", "Domaća pica", "Italijanska pica", "Kaprićoza"]);
            break;
        case 3: // TORTE I KOLAČI
            brElem = 5;
            prikaziCheckboxOpcije(["Kolač sa lešnicima", "Čokoladni kolač", "Mafin", "Čiz kejk", "Kolač sa jagodama"]);
            break;
        case 4: // KUVANA JELA
            brElem = 5;
            prikaziCheckboxOpcije(["Rižoto sa šargarepom", "Karađorđeva", "Punjene tikvice", "Paelja sa plodovima mora", "Spanać"]);
            break;
        case 5: // SMRZNUTI PROIZVODI
            brElem = 5;
            prikaziCheckboxOpcije(["Mrežica pečenica", "Pita sa mesom", "Pita sa sirom", "Pita sa bundevom", "Pita sa jabukom i vanilom"]);
            break;
        case 6: // SVEŽI SOKOVI
            brElem = 5;
            prikaziCheckboxOpcije(["Limunada", "Sok od jabuke", "Sok od pomorandže", "Sok od borovnice", "Sok od jagode"]);
            break;
        default:
            brElem = 6;
    }

    function prikaziCheckboxOpcije(opcije) {
        for (let i = 0; i < opcije.length; i++) {
            let divObj = document.createElement("div");
            divObj.classList.add("col-12","pt-1");
            let inputCbx = document.createElement("input");
            let idCbx = opcije[i].replace(/\s+/g, '-').toLowerCase();
            inputCbx.setAttribute("id", idCbx);
            inputCbx.setAttribute("type", "checkbox");
            inputCbx.setAttribute("value", `${i}`);
            inputCbx.classList.add("form-check-input", "me-2");
            let lblCbx = document.createElement("label");
            lblCbx.setAttribute("for", idCbx);
            lblCbx.classList.add("form-check-label");
            lblCbx.innerText = opcije[i];
            divObj.appendChild(inputCbx);
            divObj.appendChild(lblCbx);
            cuvaj.appendChild(divObj);

            if (i == 2) {

            }
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
  nizRb.forEach(function (rb) {
    rb.addEventListener("change", function () {
      handleRadioChange();
    });
  });

  handleRadioChange();
});

function handleRadioChange() {
  let slanjeNaKucnuAdresu = document.getElementById("kontaktMail");
  let adresaPolje = document.getElementById("adresaPolje");
  

  if (slanjeNaKucnuAdresu.checked) {
    adresaPolje.style.display = "block";
    email.removeAttribute('disabled');
  } else {
    adresaPolje.style.display = "none";
    email.setAttribute('disabled', 'true');
    email.value = '';

  }
}