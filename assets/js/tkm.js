// kullanici secimler

const paper = document.querySelector('.paper-box');
const rock = document.querySelector('.rock-box');
const makas = document.querySelector('.makas-box');

//  kullanıcı sonuc secimleri
const indexPage = document.querySelector('.user-choose-inner');
const resultPaper = document.querySelector('.user-results-paper');
const resultMakas = document.querySelector('.user-results-makas');
const resultRock = document.querySelector('.user-results-rock');
const refreshBtn = document.querySelector('.playAgain');

// sacma sapan
const winText = document.querySelector('.winTxt');
let score = document.querySelector('.scoretxt');
let scoreValue = 0;
const infoTxt = document.querySelector('.results-txt');
const resultsPagetxt= document.querySelector('.results-container');

// pc secimler
const resultPcRock = document.querySelector('.pc-results-rock');
const resultPcMakas = document.querySelector('.pc-results-makas');
const resultPcPaper = document.querySelector('.pc-results-paper');

refreshBtn.addEventListener('click', cleanAll);
paper.addEventListener('click',calculatePaper);
rock.addEventListener('click', calculateRock);
makas.addEventListener('click', calculateMakas);


function cleanAll() {
  resultPaper.classList.remove('show');
  resultMakas.classList.remove('show');
  resultRock.classList.remove('show');
  resultPcRock.classList.remove('show');
  resultPcMakas.classList.remove('show');
  resultPcPaper.classList.remove('show');
  winText.innerHTML = '';
  infoTxt.classList.remove('show');
  indexPage.classList.remove('hidden');
  refreshBtn.classList.remove('block');  
}


function calculatePaper(){
infoTxt.classList.toggle('show');
indexPage.classList.toggle('hidden');
resultPaper.classList.toggle('show');
let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random()*3));
if(bilgisayarHamlesi == 'taş'){
  resultPcRock.classList.toggle('show');
  refreshBtn.classList.add('block');
  winText.innerHTML= 'Kazandınız';
  scoreValue ++;
  score.innerHTML = scoreValue;
} else if(bilgisayarHamlesi == 'makas'){
  resultPcMakas.classList.toggle('show');
  refreshBtn.classList.add('block');
  winText.innerHTML= 'Kaybettiniz';
} else {
  resultPcPaper.classList.toggle('show');
  refreshBtn.classList.add('block');
  winText.innerHTML= 'Berabere Kaldınız';
}
}

function calculateRock(){
  infoTxt.classList.toggle('show');
  indexPage.classList.toggle('hidden');
 resultRock.classList.toggle('show');
let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random()*3));
if(bilgisayarHamlesi == 'makas'){
  resultPcMakas.classList.toggle('show');
  refreshBtn.classList.add('block');
  winText.innerHTML= 'Kazandınız';
  scoreValue ++;
  score.innerHTML = scoreValue;
} else if(bilgisayarHamlesi == 'kağıt'){
  resultPcPaper.classList.toggle('show');
  refreshBtn.classList.add('block');
  winText.innerHTML= 'Kaybettiniz';
} else {
  resultPcRock.classList.toggle('show');
  refreshBtn.classList.add('block');
  winText.innerHTML= 'Berabere Kaldınız';
}
}

function calculateMakas(){
infoTxt.classList.toggle('show');
indexPage.classList.toggle('hidden');
resultMakas.classList.toggle('show');
let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random()*3));
if(bilgisayarHamlesi == 'kağıt'){
  resultPcPaper.classList.toggle('show');
  refreshBtn.classList.add('block');
  winText.innerHTML= 'Kazandınız';
  scoreValue ++;
  score.innerHTML = scoreValue;
} else if(bilgisayarHamlesi == 'taş'){
  resultPcRock.classList.toggle('show');
  refreshBtn.classList.add('block');
  winText.innerHTML= 'Kaybettiniz';
} else {
  resultPcMakas.classList.toggle('show');
  refreshBtn.classList.add('block');
  winText.innerHTML= 'Berabere Kaldınız';
}
}

