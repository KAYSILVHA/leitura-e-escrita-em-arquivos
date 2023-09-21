const fsPromises = require('fs/promises')

  (async function(){
    const arquivoJson = await fsPromises.readFile('./teste.json');
    const pessoas = JSON.parse(arquivoJson)
    console.log(arquivoJson.toString());

    pessoas.push({
      nome:'Guido',
      idade: 31
    });

    const arrayJson = JSON.stringify(pessoas)
    console.log(arrayJson)
  })();
