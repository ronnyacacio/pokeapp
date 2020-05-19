import React, { useState, useEffect } from 'react';

import api from '../services/api';
import PokedexTableRow from '../components/PokedexTableRow';

interface Pokemon {
  name: string;
  url: string;
}

interface PokeResponse {
  count: number;
  results: Pokemon[];
}

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState(
    Number(sessionStorage.getItem('offset'))
  );

  useEffect(() => {
    async function loadPokemons() {
      try {
        const response = await api.get<PokeResponse>('pokemon', {
          params: {
            offset,
            limit: 20,
          },
        });
        setPokemons(response.data.results);
        setCount(response.data.count);
      } catch (err) {
        console.log(err);
      }
    }
    loadPokemons();
  }, [offset]);

  function backPage() {
    if (offset >= 20) {
      setOffset(offset - 20);
      sessionStorage.setItem(
        'offset',
        String(Number(sessionStorage.getItem('offset')) - 20)
      );
    }
  }

  function nextPage() {
    setOffset(offset + 20);
    sessionStorage.setItem(
      'offset',
      String(Number(sessionStorage.getItem('offset')) + 20)
    );
  }

  function makeTable() {
    return pokemons.map((pokemon, index) => (
      <PokedexTableRow key={index} pokemon={pokemon} />
    ));
  }

  return (
    <div
      style={{
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h3>Pokédex</h3> ({count})
      <table
        className="table table-striped table-sm table-bordered"
        style={{ marginTop: 20, width: '80%' }}
      >
        <thead className="thead-dark">
          <tr>
            <th style={{ textAlign: 'center', width: '20%' }}>ID</th>
            <th>Nome</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>{makeTable()}</tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <button className="btn btn-secondary" onClick={backPage}>
                Anterior
              </button>
              <button
                className="btn btn-secondary"
                onClick={nextPage}
                style={{ marginLeft: 20 }}
              >
                Próximo
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Pokedex;
