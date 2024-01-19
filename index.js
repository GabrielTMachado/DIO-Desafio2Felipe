function WD(defeat, win){
let saldo = defeat % win;

return saldo;
}

let D = 16;
let W = 23;
let classificacao;
let saldoDeWD = WD(D, W);

switch(true){
    case W < 10:
      classificacao = "Ferro";
      break;
    case W >= 11 && W <= 20:
      classificacao = "Bronze";
      break;
    case W >= 21 && W <= 50:
      classificacao = "Prata";
      break;
    case W >= 51 && W <= 80:
      classificacao = "Ouro";
      break;
    case W >= 81 && W <= 90:
      classificacao = "Diamante";
      break;
    case W >= 91 && W <= 100:
      classificacao = "Lendário";
      break;
    case W >= 101:
      classificacao = "Imortal";
      break;
}

console.log("O Herói tem de saldo de " + saldoDeWD +  " está no nível de " + classificacao);