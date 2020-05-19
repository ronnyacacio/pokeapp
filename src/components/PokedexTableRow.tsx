import React from 'react';

interface Pokemon {
  name: string;
  url: string;
}

interface Props {
  pokemon: Pokemon;
}

const PokedexTableRow: React.FC<Props> = ({ pokemon }) => {
  function getPokemonIdByURL(url: string) {
    const tokens = url.split('/');
    return Number(tokens[tokens.length - 2]);
  }

  const id = getPokemonIdByURL(pokemon.url);
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  function capturePokemon(id: number, name: string) {
    let pokeball = JSON.parse(String(sessionStorage.getItem('pokeball')));

    if (!pokeball) pokeball = [];
    if (pokeball.length === 4) {
      alert('Capacidade da pokebola atingida!');
      return;
    }

    for (let i = 0; i < pokeball.length; i++) {
      const element = pokeball[i];
      if (id === element.id) {
        alert('Pokemon já capturado!');
        return;
      }
    }

    pokeball.push({ id, name, life: 100 });
    sessionStorage.setItem('pokeball', JSON.stringify(pokeball));
    alert('Pokemon capturado com sucesso!');
  }

  return (
    <tr>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{id}</td>
      <td
        style={{
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      >
        <span style={{ textTransform: 'capitalize' }}>{pokemon.name}</span>
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <img src={imgUrl} alt={pokemon.name} />
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <button className="btn btn-primary">Informações</button>
        <button
          className="btn btn-danger"
          onClick={() => capturePokemon(id, pokemon.name)}
          style={{ marginLeft: 20 }}
        >
          Capturar
        </button>
      </td>
    </tr>
  );
};

export default PokedexTableRow;
