import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PokeballTableRow from '../components/PokeballTableRow';

interface Pokemon {
  id: number;
  name: string;
  life: number;
}

const Pokeball: React.FC = () => {
  const [pokeball, setPokeball] = useState<Pokemon[]>([]);

  useEffect(() => {
    const response = JSON.parse(String(sessionStorage.getItem('pokeball')));
    setPokeball(response);
  }, []);

  function makeTable() {
    if (!pokeball || pokeball.length === 0)
      return (
        <tr>
          <td colSpan={3} style={{ textAlign: 'center' }}>
            Pokebola esta vazia!
          </td>
        </tr>
      );

    return pokeball.map((pokemon, index) => (
      <PokeballTableRow key={index} id={pokemon.id} name={pokemon.name} />
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
      <h3>Pokebola</h3>
      <table
        className="table table-striped table-sm table-bordered"
        style={{ marginTop: 20, width: '50%' }}
      >
        <thead className="thead-dark">
          <tr>
            <th style={{ textAlign: 'center', width: '20%' }}>ID</th>
            <th>Nome</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{makeTable()}</tbody>
        <tfoot>
          <tr>
            <td colSpan={3} style={{ textAlign: 'center' }}>
              <Link to="/pokedex" className="btn btn-secondary">
                Pokedex
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Pokeball;
