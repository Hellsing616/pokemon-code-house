let pokemonDigitado =0;

var meuObjeto = {     
  nameID:'',
  typeID: '',
  imageUrlID: ''
};
  
  
  function entrar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
  
    // Codificar os valores para evitar problemas com caracteres especiais
    var nomeCodificado = encodeURIComponent(nome);
    var senhaCodificada = encodeURIComponent(senha);
  
    // Redirecionar para a página de boas-vindas incluindo os valores na URL
    window.location.href = 'perfil.html?nome=' + nomeCodificado + '&senha=' + senhaCodificada;
  }
     
    async function buscaPokemonPorNumero() {

      pokemonDigitado =  document.getElementById("nomeDigitado")
      

        try {      

            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonDigitado.value);
            const data = await response.json();
            nome = data.name;
            type = data.types[0].type.name;
            imageUrl = data.sprites.front_default;

            nameID.innerHTML  = nome;
            typeID.innerHTML  = type;
            const imageHtml = `<img src="${imageUrl}" width="300" height="300" alt="Imagem do Pokémon #${pokemonDigitado}">`;
            document.getElementById('pokemonImageContainer').innerHTML = imageHtml;
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    }

    function exibirImagemSelecionada() {
      var seletor = document.getElementById("seletorImagem");
      var imagemSelecionada = seletor.options[seletor.selectedIndex].value;

      var divImagem = document.getElementById("imagemSelecionada");
      divImagem.innerHTML =`<img src="${imagemSelecionada}" width="300" height="300" alt="Imagem do Pokémon #${pokemonDigitado}">`;
  }