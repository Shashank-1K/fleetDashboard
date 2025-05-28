import React, { useState } from 'react';
import OverviewCards from '../OverviewCards/OverviewCards';
import UsageGraph from '../Graph/UsageGraph';
import ChartTypeSelector from '../Graph/ChartTypeSelector';
import ChartDescription from '../Graph/ChartDescription';
import useFleetData from '../../hooks/useFleetData';
import './Dashboard.css';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('7'); // '7', '15', or '30' days
  const [chartType, setChartType] = useState('bar'); // Default chart type
  const { summary, usageData, loading, error } = useFleetData(timeRange);

  return (
    <div className="dashboard">
      <div className="container">
        <h1 className="dashboard-title">Fleet Overview</h1>
        
        <OverviewCards data={summary} loading={loading} />
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="graph-section">
          <div className="graph-header">
            <h2 className="graph-title">Vehicle Usage Over the Last {timeRange} Days</h2>
            <div className="graph-controls">
              <ChartTypeSelector 
                selectedType={chartType} 
                onTypeChange={setChartType} 
              />
              <div className="range-selector">
                <button 
                  className={`range-button ${timeRange === '7' ? 'active' : ''}`} 
                  onClick={() => setTimeRange('7')}
                >
                  7 Days
                </button>
                <button 
                  className={`range-button ${timeRange === '15' ? 'active' : ''}`} 
                  onClick={() => setTimeRange('15')}
                >
                  15 Days
                </button>
                <button 
                  className={`range-button ${timeRange === '30' ? 'active' : ''}`} 
                  onClick={() => setTimeRange('30')}
                >
                  30 Days
                </button>
              </div>
            </div>
          </div>
          
          <ChartDescription chartType={chartType} />
          
          <UsageGraph 
            data={usageData} 
            loading={loading} 
            chartType={chartType} 
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;