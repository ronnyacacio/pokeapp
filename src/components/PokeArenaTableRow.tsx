import React from 'react';

interface Props {
  id: number;
  index: number;
  changeSelected: Function;
}

const PokeArenaTableRow: React.FC<Props> = ({ id, index, changeSelected }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <button
      className="btn btn-outline-light"
      style={{ padding: 0, margin: 0, borderRadius: 0, border: 'none' }}
      onClick={() => changeSelected(index)}
    >
      <img src={imgUrl} alt={String(id)} />
    </button>
  );
};

export default PokeArenaTableRow;
