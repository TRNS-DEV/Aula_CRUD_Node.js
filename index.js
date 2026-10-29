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
    
        const resultadoCreate= await Usuario.create({
        nome:'Gilmar'
        endereço: 'Rua das Rosas'
        telefone:'80028922'
    })

    console.log(resultadoCreate);

    const produtos =await Produto.findAll();
    console.log(produto);
    const produto= await Produto.findByPk(1);
    console.log(produto);

    produto.nome ='mouse Top';

const resultadoSave= await produto.save();
console.log(resultadoSave);

const deleteItem= await Produto.findByPk(1);
produto.destroy();
    }catch (error){
    console.log(error);
}
})();
