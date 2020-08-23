const displayMenu = () => {

  const btnUn = document.getElementById("menu").querySelectorAll(".page")[0];
  const screen1 = document.getElementById("Presentation");
  const btnDeux = document.getElementById("menu").querySelectorAll(".page")[1];
  const screen2 = document.getElementById("Installez_vos_outils_de_travail");
  const btnTrois = document.getElementById("menu").querySelectorAll(".page")[2];
  const screen3 = document.getElementById("Qu'est_ce_que_l'arduino?");
  const btnQuatre = document.getElementById("menu").querySelectorAll(".page")[3];
  const screen4 = document.getElementById("Materiel");
  const btnCinq = document.getElementById("menu").querySelectorAll(".page")[4];
  const screen5 = document.getElementById("logiciel");
  const btnSix = document.getElementById("menu").querySelectorAll(".page")[5];
  const screen6 = document.getElementById("La_structure");
  const btnSept = document.getElementById("menu").querySelectorAll(".page")[6];
  const screen7 = document.getElementById("Le_menu_du_logiciel");
  const btnHuit = document.getElementById("menu").querySelectorAll(".page")[7];
  const screen8 = document.getElementById("La_LED_13");
  const btnNeuf = document.getElementById("menu").querySelectorAll(".page")[8];
  const screen9 = document.getElementById("Votre_premier_programme");
  const btnDix = document.getElementById("menu").querySelectorAll(".page")[9];
  const screen10 = document.getElementById("Frequences_et_periode");
  const btnOnze = document.getElementById("menu").querySelectorAll(".page")[10];
  const screen11 = document.getElementById("Sauvegarde_et_transfert_de_votre_programme");
  const btnDouze = document.getElementById("menu").querySelectorAll(".page")[11];
  const screen12 = document.getElementById("En_resumé");
  
  btnUn.addEventListener("click", (event) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnDeux.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + 20,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnTrois.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight - 40,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnQuatre.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight - 60,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnCinq.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight + screen4.offsetHeight - 90,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnSix.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight + screen4.offsetHeight + screen5.offsetHeight - 110,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnSept.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight + screen4.offsetHeight + screen5.offsetHeight + screen6.offsetHeight - 150,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnHuit.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight + screen4.offsetHeight + screen5.offsetHeight + screen6.offsetHeight + screen7.offsetHeight - 190,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnNeuf.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight + screen4.offsetHeight + screen5.offsetHeight + screen6.offsetHeight + screen7.offsetHeight + screen8.offsetHeight - 220,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnDix.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight + screen4.offsetHeight + screen5.offsetHeight + screen6.offsetHeight + screen7.offsetHeight + screen8.offsetHeight + screen9.offsetHeight - 250,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnOnze.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight + screen4.offsetHeight + screen5.offsetHeight + screen6.offsetHeight + screen7.offsetHeight + screen8.offsetHeight + screen9.offsetHeight+ screen10.offsetHeight - 230,
      left: 0,
      behavior: 'smooth'
    });
  });
  btnDouze.addEventListener("click", (event) => {
    window.scrollTo({
      top: screen1.offsetHeight + screen2.offsetHeight + screen3.offsetHeight + screen4.offsetHeight + screen5.offsetHeight + screen6.offsetHeight + screen7.offsetHeight + screen8.offsetHeight + screen9.offsetHeight + screen10.offsetHeight + screen11.offsetHeight,
      left: 0,
      behavior: 'smooth'
    });
  });

  if (window.innerWidth>600) {
    window.onload = function() {
    document.getElementById("main-doc").style.width = ((document.body.clientWidth) - 400) + "px";
    };
    window.onresize = function() {
    document.getElementById("main-doc").style.width = ((document.body.clientWidth) - 400) + "px";
    };
  };
  if (window.innerWidth<600) {
    window.onload = function() {
    document.getElementById("main-doc").style.width = "100%";
    };
    window.onresize = function() {
    document.getElementById("main-doc").style.width = "100%";
    };
  };

  window.onresize = correction;

  function correction(){
    if (window.innerWidth>600) {
        document.getElementById("main-doc").style.width = ((document.body.clientWidth) - 400) + "px";
    };
    if (window.innerWidth<600) {
        document.getElementById("main-doc").style.width = "100%";
    };
  }
}

export { displayMenu };
