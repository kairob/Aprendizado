const idade = 19
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
  console.log(`Não Vota`);
}else if(idade < 16 || idade > 65){
  console.log('Seu voto é OPCIONAL')

}else {
  console.log('Voto é Obrigatorio')  
}