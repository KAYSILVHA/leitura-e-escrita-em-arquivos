const fs = require('fs')

//leitura de arquiuvos sincrono
// console.log('antes de ler');

// const a = fs.readFileSync('a.txt').toString();
// console.log(a)

// console.log('depois de ler')

//leitura de arquiuvos assincrono
console.log('antes de ler');

fs.readFile('a.txt', (erro, data)=>{
  if(erro){
    console.log(erro);
  }else{
    console.log(data.toString());
  }
})

console.log('depois de ler')