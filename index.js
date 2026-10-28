(async() => {
const database = require ('./db');
const Produto = require ('./produto');
const Usuario = require('./usuario');

try {
    const resultado =await database.sync();
    console.log(resultado);
    const resultadoCreate= await Produto.create({
        nome: 'teclado',
        preco:15,
        descricao: 'um teclado de alta qualidade'
    })

    console.log(resultadoCreate);
    }catch (error){
    console.log(error);
}
})();