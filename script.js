//------variaveis do outorgante---------

let nomeOutorgante;

let nacionalidadeOutorgante;

let estadoCivil_outorgante;

let profissao_outorgante;

let cpf_outorgante;

let email_outorgante;

let endereco_outorgante;

//--------variaveis do outorgado---------------------

let nomeOutorgado;

let nacionalidadeOutorgado;

let estadoCivil_outorgado;

let oab_outorgado;

let email_outorgado;

let endereco_outorgado;

//-------variaveis que conterão os botões-----

let botao_ir_outorgado;

let botao_gerarProcuracao = document.getElementById("gerarProcuracao")

//---------------------

botao_gerarProcuracao.addEventListener('click', gerarProcuracao);

function gerarProcuracao(){

    nomeOutorgante = document.getElementById("nomeOutorgante").value;

    nacionalidadeOutorgante = document.getElementById("nacionalidadeOutorgante").value;
    
    estadoCivil_outorgante = document.getElementById("estadoCivil_outorgante").value;
    
    profissao_outorgante = document.getElementById("profissao_outorgante").value;
    
    cpf_outorgante = document.getElementById("cpf_outorgante").value;
    
    email_outorgante = document.getElementById("email_outorgante").value;
    
    endereco_outorgante = document.getElementById("endereco_outorgante").value;
    //-------------------------------------

    nomeOutorgado = document.getElementById("nomeOutorgado").value;

    nacionalidadeOutorgado = document.getElementById("nacionalidadeOutorgado").value;

    estadoCivil_outorgado = document.getElementById("estadoCivil_outorgado").value;

    oab_outorgado = document.getElementById("oab_outorgado").value;

    email_outorgado = document.getElementById("email_outorgado").value;

    endereco_outorgado = document.getElementById("endereco_outorgado").value;

    //---------------------------------------------

    let campoNome_outorgante = document.getElementById("campoNome_outorgante");
    campoNome_outorgante.innerHTML = nomeOutorgante;

    let campoNacionalidade_outorgante = document.getElementById("campoNacionalidade_outorgante");
    campoNacionalidade_outorgante.innerHTML = nacionalidadeOutorgante;

    let campoEstatusCivil_outorgante = document.getElementById("campoEstatusCivil_outorgante");
    campoEstatusCivil_outorgante.innerHTML = estadoCivil_outorgante;

    let campoCPF_outorgante = document.getElementById("campoCPF_outorgante");
    campoCPF_outorgante.innerHTML = cpf_outorgante;

    let campoEmail_outorgante = document.getElementById("campoEmail_outorgante");
    campoEmail_outorgante.innerHTML = email_outorgante;

    let campoEndereço_outorgante = document.getElementById("campoEndereço_outorgante");
    campoEndereço_outorgante.innerHTML = endereco_outorgante;

    //------------------------------------------

    let campoNome_outorgado = document.getElementById("campoNome_outorgado");
    campoNome_outorgado.innerHTML = nomeOutorgado;

    let campoNacionalidade_outorgado = document.getElementById("campoNacionalidade_outorgado");
    campoNacionalidade_outorgado.innerHTML = nacionalidadeOutorgado;

    let campoEstatusCivil_outorgado = document.getElementById("campoEstatusCivil_outorgado");
    campoEstatusCivil_outorgado.innerHTML = estadoCivil_outorgado;

    let campoOAB_outorgado = document.getElementById("campoOAB_outorgado");
    campoOAB_outorgado.innerHTML = oab_outorgado;

    let campoEmail_outorgado = document.getElementById("campoEmail_outorgado");
    campoEmail_outorgado.innerHTML = email_outorgado;

    let campoEndereço_outorgado = document.getElementById("campoEndereço_outorgado");
    campoEndereço_outorgado.innerHTML = endereco_outorgado;


}



