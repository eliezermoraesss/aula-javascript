
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    //window.open("https://digitalinnovation.one/");
    window.location.href = "https://www.oficinadanet.com.br/redirect.php?tipo=postout&urlout=http%3A%2F%2Fburymewithmymoney.com%2F";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por me obedecer";
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*var validar = 0; // variável GLOBAL
function validaIdade(idade){
    var validar; // variável LOCAL
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
console.log(validar);*/


/*function soma(n1, n2){
    return n1 + n2;
}*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 30));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*var d = new Date();
alert(d.getFullYear());
alert(d.getMonth() + 1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/
/*var count;
for(count = 0; count <= 5; count++){
    alert(count)
}*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};*/

/* var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}
console.log(idade);*/

/* var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.reverse());
//console.log(lista.join(" | "));
//console.log(lista[0]);
//console.log(lista.toString()[0])
//alert(lista)

//var nome = "Eliezer Moraes";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));