import { depositar, sacar, exibir } from "./financeiro.js"; 
import prompt from "prompt-sync";
let ler = prompt()


  export function menu(n1,n2, n3 ){


    let continuar = true
        while(continuar == true){
        console.log(`Escolha uma dessas opcoes abaixo
        1.Depositar
        2.sacar
        3.vizualisar saldo`)

        let n = Number(ler())

     

     if(n == 1){
        console.log('informe seu saldo atual')
        let n2 = Number(ler())
        let d = depositar(n2)
        console.log('seu saldo e agora de ' + d)
     }
     else if(n == 2){
        console.log('informe seu saldo atual')
        let n2 = Number(ler())
        let s = sacar(n2)
        console.log('seu saldo e de ' + s)
     }
     else if(n == 3){
        let e = exibir()
        console.log('')
        
             }
        break

    }
   }


