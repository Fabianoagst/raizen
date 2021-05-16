//----------------------------------------------------BOTÃO DO MENU
var menuButton = document.querySelector('.setaBaixo')
var menu = document.querySelector('.menu')
var abrirTutor = document.querySelector('.tutor')
var btnAgendar = document.querySelectorAll('.btnTutorAba')
var fechar = document.querySelector('.fechar img')

var tutor = {  
    foto: 'src="assets/images/fotoPerfil.png"',
    nome: 'NOME DO DISSEMINADOR',
    area: '#RH #Comportamento #Pessoas',
    nota: '4,8',
    descricao: 'Qui earum corrupti ut natus sint quo consequatur doloremque.',
}
var lista = [];

menuButton.addEventListener('click', function(){
    menu.classList.toggle('active')
})

//---------------------------INFORMAÇÕES DO TUTOR. (BOTÃO PARA ABRIR A TELA DE AGENDAMENTO)

function apresentacao(){
    document.querySelector('.tutorAba').classList.toggle('active')
}

//-------------------------------------------FUNÇÃO QUE CHAMA OS TUTORES DA LISTA INICIAL

function mostrarTutores(){
    for(let i = 0; i < 8; i++){
        lista.push(tutor)
    }
    
    lista.map(tutor =>
        document.querySelector('.tutores').innerHTML += `
        <div class="tutor" onclick="apresentacao()">
        <img class="fotoPerfilLista"` + tutor.foto + `>
        <div class="nomeTutorLista">` + tutor.nome + `</div>
        <div class="areaTutorLista">` + tutor.area + `</div>
        <img src="assets/images/estrela.svg" class="favoritoTutorLista">
        <div class="notaTutorLista">` + tutor.nota + `</div>
        <!--Aba para agendar com o tutor-->
        <div class="tutorAba">
        <div class="nomeTutorAba">` + tutor.nome + `</div>
        <div class="areaTutorAba">` + tutor.area + `</div>
        <div class="descricaoTutorAba">` + tutor.descricao + `</div>
        <div class="divBtnTutorAba">
        <button class="btnTutorAba" onclick="abrirAgenda()">AGENDAR</button>
        </div>
        </div>
        </div>
        `
    )
}
 
//-------------------------------------------ADICIONANDO MAIS DISSEMINADORES A LISTA
  
function carregarMais(){
    for(let i = 0; i < 4; i++){
        lista.push(tutor)
    }

    document.querySelector('.tutores').innerHTML = ""
    
    lista.map(tutor =>
        document.querySelector('.tutores').innerHTML += `
        <div class="tutor" onclick="apresentacao()">
        <img class="fotoPerfilLista" ` + tutor.foto + `>
        <div class="nomeTutorLista">` + tutor.nome + `</div>
        <div class="areaTutorLista">` + tutor.area + `</div>
        <img src="assets/images/estrela.svg" class="favoritoTutorLista">
        <div class="notaTutorLista">` + tutor.nota + `</div>
        <!--Aba para agendar com o tutor-->
        <div class="tutorAba">
        <div class="nomeTutorAba">` + tutor.nome + `</div>
        <div class="areaTutorAba">` + tutor.area + `</div>
        <div class="descricaoTutorAba">` + tutor.descricao + `</div>
        <div class="divBtnTutorAba">
        <button class="btnTutorAba" onclick="abrirAgenda()">AGENDAR</button>
        </div>
        </div>
        </div>
        `
        )
    }  

//-------------------------------------------------TELA DE AGENDAMENTO 

function abrirAgenda(){ 
    document.querySelector('.containerAgenda').classList.toggle('active')
    window.location.href="#agendar"
}

fechar.addEventListener('click',function () {
    document.querySelector('.containerAgenda').classList.toggle('active')
})



