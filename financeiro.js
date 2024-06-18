import prompt from "prompt-sync";
let ler = prompt()

export function depositar(saldo){
    console.log('quanto voce deseja depositar')
    let depo = Number(ler());
    let soma = saldo +depo
    return soma ;

}

export function sacar(saldo){
    console.log('quanto voce deseja sacar')
    let menos =Number(ler())
    let sub = menos - saldo
    return sub ;
}

export function exibir(e){
    let s = Number(ler())
    console.log('seu saldo agr e de '
         + s)
    
    return s ;

}