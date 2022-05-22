var btn_Din = document.getElementById('btDin');

var titulo_forma = document.getElementById('titulo');

var btn_Cred = document.getElementById('btCred');
var btn_Deb = document.getElementById('btDeb');

var divForm = document.getElementById('form')

var returnhtml


btn_Din.onclick = function() {
    deletar()
    divForm.innerHTML = "<div class='pagamento'><input type='image' src='../../home/Icons-More/438062.png' class ='imagecartao'/> <h1 style='font-size: 30px; margin-top:10px;'>Aproxime ou insira o cartao</h1><div class='btPadrao'><input type='button' value='Cancelar' id='Cancelar'/></div></div>"
        //<input type='button' value='Cancelar' class='.btPadrao'/>
        /*var bt = document.createElement("input")
        bt.setAttribute('type', 'button')
        bt.setAttribute('value', 'cancelar')
        bt.setAttribute('class', '.teste')
        divForm.appendChild(bt)*/
    let Cancelar = document.getElementById('Cancelar');

    Cancelar.onclick = function() {
        location.reload();
    }


}

btn_Cred.onclick = function() {
    deletar()
    divForm.innerHTML = "<div class='pagamento'><input type='image' src='../../home/Icons-More/png-transparent-automated-teller-machine-bank-atm-card-credit-card-money-bank-angle-rectangle-business.png' class ='imagecartao'/> <h1 style='font-size: 30px; margin-top:10px;'>Insira as notas no caixa</h1><div class='btPadrao'><input type='button' value='Cancelar' id='Cancelar'/></div></div>"

    let Cancelar = document.getElementById('Cancelar');

    Cancelar.onclick = function() {
        location.reload();
    }
}

btn_Deb.onclick = function() {
    deletar()
    divForm.innerHTML = "<div class='pagamento'><input type='image' src='../../home/Icons-More/438062.png' class ='imagecartao'/> <h1 style='font-size: 30px; margin-top:10px;'>Aproxime ou insira o cartao</h1><div class='btPadrao'><input type='button' value='Cancelar' id='Cancelar'/></div></div>"

    let Cancelar = document.getElementById('Cancelar');

    Cancelar.onclick = function() {
        location.reload();
    }
}



function deletar() {
    titulo_forma.remove();
    btn_Din.remove();
    btn_Cred.remove();
    btn_Deb.remove();
}