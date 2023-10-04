function exibirCard() {
    const card = document.getElementById("meuCard");

    if (card.style.display === "none" || card.style.display === "") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}
function exibirCard2() {
    const card = document.getElementById("meuCard2");

    if (card.style.display === "none" || card.style.display === "") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}


  // Referencie o objeto JSON
  const dadosJSON = {
    "dados1": {
        "pessoa1": {
            "nome": "João",
            "idade": 30,
            "cidade": "São Paulo"
        },
        "pessoa2": {
            "nome": "Maria",
            "idade": 25,
            "cidade": "Rio de Janeiro"
        },
        "pessoa3": {
            "nome": "Carlos",
            "idade": 35,
            "cidade": "Belo Horizonte"
        },
        "pessoa4": {
            "nome": "Carlos",
            "idade": 35,
            "cidade": "Belo Horizonte"
        }
    },
    "dados2": {
        "pessoa1": {
            "nome": "João",
            "idade": 30,
            "cidade": "São Paulo"
        },
        "pessoa2": {
            "nome": "Maria",
            "idade": 25,
            "cidade": "Rio de Janeiro"
        },
        "pessoa3": {
            "nome": "Carlos",
            "idade": 35,
            "cidade": "Belo Horizonte"
        },
        "pessoa4": {
            "nome": "Carlos",
            "idade": 35,
            "cidade": "Belo Horizonte"
        }
    }
};

 // Converta o objeto JSON para uma string JSON
 const jsonString = JSON.stringify(dados);

 // Exiba a string JSON no console para uso posterior
 console.log(jsonString);
