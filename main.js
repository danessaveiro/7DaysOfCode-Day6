alert("Que bom que você veio! Vamos continuar montando nossa lista de compras? Agora você pode remover algum item, caso precisar. Vamos continuar?");

let hortifruti = [];
let frios = [];
let congelados = [];
let doces = [];
let bebidas = [];
let higienePessoal = [];
let limpeza = [];
let outros = [];

let perguntaUm = "sim";
let perguntaDois = "";
let perguntaTres = "";

while(perguntaUm != "não") {

    if(hortifruti.length === 0 && frios.length === 0 && congelados.length === 0 && doces.length === 0 && bebidas.length === 0 && higienePessoal.length === 0 && limpeza.length === 0 && outros.length === 0) {
        perguntaUm = prompt("Deseja adicionar algum item à sua lista de compras? Digite sim ou não.");
    } else {
        perguntaUm = prompt("Deseja adicionar mais algum item à sua lista de compras ou remover? Digite sim, não ou remover.");
    }

    while(perguntaUm != "sim" && perguntaUm != "não" && perguntaUm != "remover") {
        alert(`Operação não reconhecida.`);
        perguntaUm = prompt("Deseja adicionar algum item à sua lista de compras? Digite sim ou não.");
    }

    if(perguntaUm === "não") {
        break;
    }

    if (perguntaUm === "sim") {
        perguntaDois = prompt("Qual item deseja inserir?");
        perguntaTres = prompt(`Em qual categoria deseja adicionar ${perguntaDois}? Hortifruti, Frios, Congelados, Doces, Bebidas, Higiene Pessoal, Limpeza ou outros?`);
        
        if (perguntaTres === "Hortifruti") {
            hortifruti.push(perguntaDois);
        } else if (perguntaTres === "Frios") {
            frios.push(perguntaDois);
        } else if (perguntaTres === "Congelados") {
            congelados.push(perguntaDois);
        } else if (perguntaTres === "Doces") {
            doces.push(perguntaDois);
        } else if (perguntaTres === "Bebidas") {
            bebidas.push(perguntaDois);
        } else if (perguntaTres === "Higiene Pessoal") {
            higienePessoal.push(perguntaDois);
        } else if (perguntaTres === "Limpeza") {
            limpeza.push(perguntaDois);
        } else {
            outros.push(perguntaDois);
        }
    } else if (perguntaUm === "não") {
        break;
    } else if (perguntaUm === "remover") {
        if(hortifruti.length === 0 && frios.length === 0 && congelados.length === 0 && doces.length === 0 && bebidas.length === 0 && higienePessoal.length === 0 && limpeza.length === 0 && outros.length === 0) {
            alert(`A lista está vazia.`);
        } else {
            remover = prompt(`Essa é a sua lista de compras:\n Hortifruti: ${hortifruti}\n Frios: ${frios}\n Congelados: ${congelados}\n Doces: ${doces}\n Bebidas: ${bebidas}\n Higiene Pessoal: ${higienePessoal}\n Limpeza: ${limpeza}\n Outros: ${outros}`);
            if (hortifruti.indexOf(remover) != -1) {
                hortifruti.splice(hortifruti.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (frios.indexOf(remover) != -1) {
                frios.splice (frios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (congelados.indexOf(remover) != -1) {
                congelados.splice (congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (doces.indexOf(remover) != -1) {
                doces.splice (doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (bebidas.indexOf(remover) != -1) {
                bebidas.splice (bebidas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (higienePessoal.indexOf(remover) != -1) {
                higienePessoal.splice (higienePessoal.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (limpeza.indexOf(remover) != -1) {
                limpeza.splice (limpeza.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if (outros.indexOf(remover) != -1) {
                outros.splice (outros.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else {
                alert(`Não foi possível encontrar o item ${remover} na lista.`);
            }
        }
    } else {
        alert("Resposta inválida!");
    }
}

alert(`Essa é a sua lista de compras:\n Hortifruti: ${hortifruti}\n Frios: ${frios}\n Congelados: ${congelados}\n Doces: ${doces}\n Bebidas: ${bebidas}\n Higiene Pessoal: ${higienePessoal}\n Limpeza: ${limpeza}\n Outros: ${outros}`);

alert("Agora é só salvar e ir às compras! =)");
