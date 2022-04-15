let button = document.getElementById('botao') //pegou o id do botao
let input = document.getElementById('texto') //pegou id da caixa de texto






let macaco = function(){
  let result = document.getElementById('resultado') //perguntar como enviar o formulario apertando enter 
  //how to submit pressing enter
  let text = input.value;
  input.value = '';

  //https://www.codegrepper.com/code-examples/javascript/how+to+play+audio+onclick+in+html
  //tutorial how to put sound on click.
  //check with teacher the command

  
  //codigo do projeto inicial.
  const pigLatin = (word) => {
   let acertar = word.toLowerCase().trim();
   let position = positionFirstVowel(acertar);
   let newWord = acertar;
 
   if (position == 0) {
     newWord = acertar + "yay";
     return newWord;
   } else if (position > 0) {
     let part1 = acertar.substring(0, position);
     let part2 = acertar.substring(position);
     //substring se usa para separar a palavra, tem q colocar as 2 partes, onde comeca e termina
     //ex: "Hello"  text.substring(1, 4) ; resultado "ell"
     newWord = part2 + part1 + "ay";
     return newWord;
   } else if ((position == -1)) {
     newWord = acertar + "ay";
     return newWord;
   }
 
   //se a primeira letra for vogal, colocar "yay" no final da palavra. ex: eletanteyay
   //se comecar comecar com consoante, pega a primeira letra, coloca no final e coloca AY, EX: BARCO = ARCOBAY
   //se nao tiver vogal nenhuma coloca AY no final ex  PST, PSTAY
   //pegar as consoantes iniciais,mover para o final e adicionar AY, EX: STRING = INGSTRAY
 };
 
 // the first function called in the program to get an input from the user
 // to run the function use the command: node main.js
 // to close it ctrl + C
 const getPrompt = () => {
   rl.question('word ', (answer) => {
     console.log( pigLatin(answer) );
     getPrompt();
   });
 }

 let positionFirstVowel = (acertar) => {
   let aIdx = acertar.indexOf("a");
   let eIdx = acertar.indexOf("e");
   let iIdx = acertar.indexOf("i");
   let oIdx = acertar.indexOf("o");
   let uIdx = acertar.indexOf("u");
   let len = acertar.length;
 
   let answer = -1;
 
   if (aIdx == -1) {
   } else if (aIdx != -1 && answer == -1) {
     answer = aIdx;
   }
   if (eIdx == -1) {
   } else if (eIdx != -1 && answer == -1) {
     answer = eIdx;
   } else if (eIdx != -1 && answer >= eIdx) {
     answer = eIdx;
   }
 
   if (iIdx == -1) {
   } else if (iIdx != -1 && answer == -1) {
     answer = iIdx;
   } else if (iIdx != -1 && answer >= iIdx) {
     answer = iIdx;
   }
 
   if (oIdx == -1) {
   } else if (oIdx !== -1 && answer == -1) {
     answer = oIdx;
   } else if (oIdx !== -1 && answer >= oIdx) {
     answer = oIdx;
   }
 
   if (uIdx == -1) {
   } else if (uIdx !== -1 && answer == -1) {
     answer = uIdx;
   } else if (uIdx !== -1 && answer >= uIdx) {
     answer = uIdx;
   }
   return answer;
 };
 //duvida com relacao a isso. depois perguntar pro robert
 let convertida = pigLatin(text)
 resultado.innerText = convertida

}
input.addEventListener('keyup', function(e){
  sound.currentTime = 0;
      sound.play()
  if (e.keyCode == 13){
    macaco()
  }  
})

button.addEventListener('click', macaco)
let sound = new Audio("pig.mp3"); 
  button.addEventListener('click',()=>{
      sound.currentTime = 0;
      sound.play();
  });