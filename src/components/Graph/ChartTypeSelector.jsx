import React from 'react';
import './ChartTypeSelector.css';

const ChartTypeSelector = ({ selectedType, onTypeChange }) => {
  const chartTypes = [
    { id: 'bar', name: 'Bar Chart' },
    { id: 'line', name: 'Line Chart with Gradient Fill' },
    { id: 'area', name: 'Area Chart' },
    { id: 'polar', name: 'Polar Area Chart' },
    { id: 'radial', name: 'Radial Bar Chart' },
    { id: 'combo', name: 'Combo Chart (Line + Bar)' }
  ];

  return (
    <div className="chart-type-selector">
      <label htmlFor="chart-type">Chart Type:</label>
      <select 
        id="chart-type" 
        value={selectedType} 
        onChange={(e) => onTypeChange(e.target.value)}
      >
        {chartTypes.map(type => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChartTypeSelector;