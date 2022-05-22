var btn_din = document.getElementById('btDin')
var btn_Cred = document.getElementById('btnCred')
var btn_Deb = document.getElementById('btDeb')

var divForm = document.getElementById('form')

var paragraf = document.getElementById('titulo')


btn_din.onclick = function() {

    paragraf.innerHtml = 'Error'

    btn_Din.remove()
    btn_Cred.remove()
    btn_Deb.remove()
}