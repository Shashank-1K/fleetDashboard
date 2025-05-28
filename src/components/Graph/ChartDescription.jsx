import React from 'react';
import './ChartDescription.css';

const ChartDescription = ({ chartType }) => {
  const descriptions = {
    bar: {
      title: 'Bar Chart',
      description: 'Represents data with rectangular bars where the length is proportional to the value.',
      useCase: 'Effective for comparing the usage across different days.'
    },
    line: {
      title: 'Line Chart with Gradient Fill',
      description: 'Displays the trend of vehicle usage over time with a smooth line and gradient fill beneath it.',
      useCase: 'Ideal for showing continuous data trends with emphasis on the area under the curve.'
    },
    area: {
      title: 'Area Chart',
      description: 'Similar to the line chart but with the area beneath the line filled, emphasizing the volume of usage.',
      useCase: 'Useful for highlighting the magnitude of usage over time.'
    },
    polar: {
      title: 'Polar Area Chart',
      description: 'Displays data in a circular format, with each segment representing a category.',
      useCase: 'Provides a unique and visually appealing way to represent data, especially for categorical comparisons.'
    },
    radial: {
      title: 'Radial Bar Chart',
      description: 'A circular bar chart where each bar represents a category, with the length of the bar indicating the value.',
      useCase: 'Offers a compact and visually engaging way to display data.'
    },
    combo: {
      title: 'Combo Chart (Line + Bar)',
      description: 'Combines a line chart and a bar chart to represent two different datasets on the same axis.',
      useCase: 'Useful for comparing different types of information, such as actual usage vs. average usage.'
    }
  };

  const info = descriptions[chartType] || descriptions.bar;

  return (
    <div className="chart-description">
      <div className="chart-info">
        <span className="info-icon">ℹ️</span>
        <div className="info-text">
          <p className="info-title">{info.title}</p>
          <p className="info-description">{info.description}</p>
          <p className="info-use-case"><strong>Use Case:</strong> {info.useCase}</p>
        </div>
      </div>
    </div>
  );
};

export default ChartDescription;