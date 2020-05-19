import React, { useState, useEffect, useCallback } from 'react';

import PokeArenaTableRow from '../components/PokeArenaTableRow';
import arena from '../assets/battle.png';

interface Pokemon {
  id: number;
  name: string;
  life: number;
}

const PokeArena: React.FC = () => {
  const teamRocket = [
    { id: 24, name: 'arbok', life: 100 },
    { id: 52, name: 'meowth', life: 100 },
    { id: 110, name: 'weezing', life: 100 },
    { id: 112, name: 'rhydon', life: 100 },
  ];

  const [pokeball, setPokeball] = useState<Pokemon[]>([]);
  // const [challengers, setChallengers] = useState(teamRocket);
  const challengers = teamRocket;
  const [selected, setSelected] = useState(0);
  const [challenger, setChallenger] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const pokeball: Pokemon[] = JSON.parse(
      String(sessionStorage.getItem('pokeball'))
    );
    setPokeball(pokeball);
    setMessage('A batalha vai começar!');
  }, []);

  const changePokeballSelected = useCallback((index: number) => {
    setSelected(index);
  }, []);

  const changeChallengerSelected = useCallback((index: number) => {
    setChallenger(index);
  }, []);

  function renderPokeball() {
    return pokeball.map((pokemon: Pokemon, index) => (
      <PokeArenaTableRow
        key={index}
        id={pokemon.id}
        changeSelected={changePokeballSelected}
        index={index}
      />
    ));
  }

  function renderChallengers() {
    return challengers.map((pokemon: Pokemon, index) => (
      <PokeArenaTableRow
        key={index}
        id={pokemon.id}
        changeSelected={changeChallengerSelected}
        index={index}
      />
    ));
  }

  function renderArena() {
    if (!pokeball || pokeball.length === 0) return;

    let selectedPokemon = pokeball[selected];
    let challengerPokemon = challengers[challenger];

    const imgUrlSelected = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${selectedPokemon.id}.png`;
    const imgUrlChallenger = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${challengerPokemon.id}.png`;

    return (
      <>
        <div
          className="row"
          style={{ background: `url(${arena}) no-repeat center center` }}
        >
          <div className="col-12">
            <div className="row">
              <div className="col-12 text-right">
                <span style={{ textTransform: 'capitalize' }}>
                  <b>
                    {challengerPokemon.name} ({challengerPokemon.life}/100)
                  </b>
                </span>
                <img src={imgUrlChallenger} alt={challengerPokemon.name} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-left">
                <img src={imgUrlSelected} alt={selectedPokemon.name} />
                <span style={{ textTransform: 'capitalize' }}>
                  <b>
                    {selectedPokemon.name} ({selectedPokemon.life}/100)
                  </b>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center" style={{ padding: '0.5em' }}>
            <button className="btn btn-secondary">Atacar</button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div
              className="alert alert-warning"
              role="alert"
              style={{ textTransform: 'uppercase' }}
            >
              {message}
            </div>
          </div>
        </div>
      </>
    );
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
      <h3>Batalha Pokémon</h3>
      <div
        className="container"
        style={{
          width: '70%',
          marginTop: '1em',
          border: '1px solid #cecece',
        }}
      >
        <div className="row">
          <div className="col-2" style={{ padding: '0.5em' }}>
            {renderPokeball()}
          </div>
          <div
            className="col-8"
            style={{
              borderLeft: '1px solid #cecece',
              borderRight: '1px solid #cecece',
              paddingTop: '2em',
            }}
          >
            {renderArena()}
          </div>
          <div className="col-2" style={{ padding: '0.5em' }}>
            {renderChallengers()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeArena;
