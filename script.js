function changerCouleur(){
  let couleur = document.querySelector("#inputCouleur").value;
  document.querySelector("#box").style.backgroundColor=couleur;
}

function changerLargeur(){
  let largeur = document.querySelector("#inputLargeur").value;
  let largeurFinale = 400 + Number(largeur)+"px";
  document.querySelector("#box").style.width= largeurFinale;
}

function changerRadius(){
  let radius = document.querySelector("#inputRadius").value + "px";
  document.querySelector("#box").style.borderRadius= radius;
}

function changerCaractere(){
  if (document.querySelector("#TimesNewRoman").checked){
  document.querySelector("#texte").style.fontFamily= "Times New Roman";
  }
  if (document.querySelector("#Arial").checked){
  document.querySelector("#texte").style.fontFamily= "Arial";
  }

  if (document.querySelector("#CourierNew").checked){
  document.querySelector("#texte").style.fontFamily= "Courier New";
  }
}