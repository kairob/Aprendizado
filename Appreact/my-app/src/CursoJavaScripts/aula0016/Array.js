let valores= [1,9,6,8,7,5]
console.log(valores)
valores.push(7)
valores.sort()
console.log(valores)
for(let pos = 0; pos < valores.length;pos ++){
  console.log(`posição ${pos} valor ${valores[pos]}`)  
}