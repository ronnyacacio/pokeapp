import React from 'react';

interface Props {
  id: string;
  name: string;
}

const PokeballTableRow: React.FC<Props> = ({ id, name }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <tr>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{id}</td>
      <td
        style={{
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      >
        <span style={{ textTransform: 'capitalize' }}>{name}</span>
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <img src={imgUrl} alt={name} />
      </td>
    </tr>
  );
};

export default PokeballTableRow;
