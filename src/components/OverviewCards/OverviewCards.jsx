import React from 'react';
import './OverviewCards.css';

const OverviewCards = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="overview-cards">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="card skeleton">
            <div className="card-content skeleton"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!data) return null;

  const cards = [
    { title: 'Total Vehicles', value: data.totalVehicles, color: 'blue' },
    { title: 'Vehicles in Use', value: data.vehiclesInUse, color: 'green' },
    { title: 'Vehicles Idle', value: data.vehiclesIdle, color: 'yellow' },
    { title: 'Vehicles Under Maintenance', value: data.vehiclesUnderMaintenance, color: 'red' }
  ];

  return (
    <div className="overview-cards">
      {cards.map((card, index) => (
        <div key={index} className={`card card-${card.color}`}>
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-value">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;