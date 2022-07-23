


/*const name = ['pepe','marina']
console.log(name)
name.forEach((valor,index)=>{
  console.log(valor,index)
})
*/

//for
/*const name = ['pepe','marina','','','']
for (let i =0; name.length > i; i++){
  console.log(name[i])
}
*/




/*const values =[{n1:100,n2:200},
               {n1:50,n2:18},
               {n1:22,n2:78},
               {n1:30,n2:13},];
for(let i =0; i< values.length; i++)
  {
    console.log(`la suma de ${values[i].n1} y ${values[i].n2}`,values[i].n1+values[i].n2)
  }
        for(let i =0; i< values.length; i++)
        {
          console.log(`la resta de ${values[i].n1} y ${values[i].n2}`,values[i].n1-values[i].n2)  
        }
             for(let i =0; i< values.length; i++)
              {
                console.log(`la division de ${values[i].n1} y ${values[i].n2}`,values[i].n1/values[i].n2)
              }
                  for(let i =0; i< values.length; i++) 
                  {
                    console.log(`la multiplicacion de ${values[i].n1} y ${values[i].n2}`,values[i].n1*values[i].n2)
                  }

/*function suma (){
     let value1 = parseInt(document.getElementById('valor1').value)
     let value2 = parseInt(document.getElementById('valor2').value)
     document.getElementById('resultado').textContent = value1+value2 
    }
   function resta (){
     let value1 = document.getElementById('valor1').value
     let value2 = document.getElementById('valor2').value
     document.getElementById('resultado').textContent = value1-value2    
    }
   function division (){
     let value1 = document.getElementById('valor1').value
     let value2 = document.getElementById('valor2').value
     document.getElementById('resultado').textContent = value1/value2    
    }
   function multiplicacion (){
     let value1 = document.getElementById('valor1').value
     let value2 = document.getElementById('valor2').value
     document.getElementById('resultado').textContent = value1*value2    
    }*/
/*  let value1
  let value2
function operaciones (operaciones){
 

  switch (operaciones) {
      case "+":
          value1 = parseInt(document.getElementById('valor1').value)
          value2 = parseInt(document.getElementById('valor2').value)
          document.getElementById('resultado').textContent = value1+value2                   
          
          break;
          case "-":
              value1 = parseInt(document.getElementById('valor1').value)
              value2 = parseInt(document.getElementById('valor2').value)
              document.getElementById('resultado').textContent = value1-value2                   
              
              break;
              case "/":
                   value1 = parseInt(document.getElementById('valor1').value)
                  value2 = parseInt(document.getElementById('valor2').value)
                  document.getElementById('resultado').textContent = value1/value2                   
                  
                  break;
                  case "*":
                       value1 = parseInt(document.getElementById('valor1').value)
                       value2 = parseInt(document.getElementById('valor2').value)
                      document.getElementById('resultado').textContent = value1*value2                   
                      
                      break;
  
      default:            
      
             document.getElementById('resultado').textContent = "Fallo"
          break;
  } */

let valor

function tasaDeCambio() {

  const value = document.getElementById('inlineFormCustomSelectPref').value
  console.log(value)

  switch (value) {
    case "dolar":
      valor = parseInt(document.getElementById('valor').value)
      document.getElementById('resultado').value = valor * 4408

      break;
    case "euro":
      valor = parseInt(document.getElementById('valor').value)
      document.getElementById('resultado').value = valor * 4501


    default:

      document.getElementById('resultado').textContent = "fallo"
      break;
  }

}
function arrayNombre() {

  const nombrehtml = document.getElementById('nombre').value
  let nombres = ['Alex', 'Andres', 'Paula', 'Camilo', 'Teresa', 'Juan', 'pablo']
  console.log(nombrehtml)

  const resulNombre = nombres.find((nombre) => nombre == nombrehtml)
  console.log(resulNombre)
  if (!resulNombre) {
    alert("Nombre no disponible")
  } else {
    console.log(resulNombre)
    document.getElementById('resultado').value = resulNombre
  }

}

