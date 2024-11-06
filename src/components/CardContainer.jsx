import { useState } from 'react';
import PropTypes from 'prop-types';

const CardContainer = ({ children }) => {
  const [layout, setLayout] = useState('column');


  const handleLayoutChange = (event) => {
    setLayout(event.target.value);
  };

  return (
    <div>
      {}
      <select value={layout} onChange={handleLayoutChange}>
        <option value="column">Columnas</option>
        <option value="row">Filas</option>
      </select>

      {}
      <div
        style={{
          display: 'flex',
          flexDirection: layout,
          gap: '1rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        {children}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
    children: PropTypes.node.isRequired
  };

export default CardContainer;
