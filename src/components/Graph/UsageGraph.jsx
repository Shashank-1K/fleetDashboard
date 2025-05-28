import React from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, 
  PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Radar,
  RadialBarChart, RadialBar, ComposedChart,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import './UsageGraph.css';

const UsageGraph = ({ data, loading, chartType }) => {
  if (loading) {
    return (
      <div className="usage-graph-container">
        <div className="skeleton" style={{ height: '300px', width: '100%' }}></div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div className="no-data">No usage data available</div>;
  }

  // Function to render the appropriate chart based on the selected type
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="day" tick={{ fill: 'var(--text-color)' }} />
            <YAxis tick={{ fill: 'var(--text-color)' }} />
            <Tooltip contentStyle={{ 
              backgroundColor: 'var(--card-background)', 
              color: 'var(--text-color)',
              border: '1px solid var(--border-color)'
            }} />
            <defs>
              <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Line 
              type="monotone" 
              dataKey="usage" 
              stroke="var(--primary-color)" 
              strokeWidth={2}
              dot={{ r: 4, fill: 'var(--primary-color)' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        );
      
      case 'area':
        return (
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="day" tick={{ fill: 'var(--text-color)' }} />
            <YAxis tick={{ fill: 'var(--text-color)' }} />
            <Tooltip contentStyle={{ 
              backgroundColor: 'var(--card-background)', 
              color: 'var(--text-color)',
              border: '1px solid var(--border-color)'
            }} />
            <defs>
              <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="usage" 
              stroke="var(--primary-color)" 
              fillOpacity={1} 
              fill="url(#colorUsage)" 
            />
          </AreaChart>
        );
      
      case 'polar':
        // Transform data for polar chart
        const polarData = data.map(item => ({
          subject: item.day,
          A: item.usage,
          fullMark: 100
        }));
        
        return (
          <RadarChart outerRadius={150} width={730} height={300} data={polarData}>
            <PolarGrid stroke="var(--border-color)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-color)' }} />
            <PolarRadiusAxis tick={{ fill: 'var(--text-color)' }} />
            <Radar 
              name="Usage" 
              dataKey="A" 
              stroke="var(--primary-color)" 
              fill="var(--primary-color)" 
              fillOpacity={0.6} 
            />
            <Tooltip contentStyle={{ 
              backgroundColor: 'var(--card-background)', 
              color: 'var(--text-color)',
              border: '1px solid var(--border-color)'
            }} />
            <Legend />
          </RadarChart>
        );
      
      case 'radial':
        // Transform data for radial bar chart
        const radialData = data.map((item, index) => ({
          name: item.day,
          uv: item.usage,
          fill: `hsl(${index * 360 / data.length}, 70%, 50%)`
        }));
        
        return (
          <RadialBarChart 
            width={730} 
            height={300} 
            innerRadius="10%" 
            outerRadius="80%" 
            data={radialData} 
            startAngle={180} 
            endAngle={0}
          >
            <RadialBar 
              minAngle={15} 
              label={{ fill: 'var(--text-color)', position: 'insideStart' }} 
              background 
              clockWise={true} 
              dataKey="uv" 
            />
            <Legend 
              iconSize={10} 
              width={120} 
              height={140} 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              wrapperStyle={{ color: 'var(--text-color)' }}
            />
            <Tooltip contentStyle={{ 
              backgroundColor: 'var(--card-background)', 
              color: 'var(--text-color)',
              border: '1px solid var(--border-color)'
            }} />
          </RadialBarChart>
        );
      
      case 'combo':
        // Calculate average for line chart
        const avgUsage = data.reduce((sum, item) => sum + item.usage, 0) / data.length;
        const comboData = data.map(item => ({
          ...item,
          average: avgUsage
        }));
        
        return (
          <ComposedChart data={comboData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="day" tick={{ fill: 'var(--text-color)' }} />
            <YAxis tick={{ fill: 'var(--text-color)' }} />
            <Tooltip contentStyle={{ 
              backgroundColor: 'var(--card-background)', 
              color: 'var(--text-color)',
              border: '1px solid var(--border-color)'
            }} />
            <Legend wrapperStyle={{ color: 'var(--text-color)' }} />
            <Bar dataKey="usage" fill="var(--primary-color)" name="Daily Usage" />
            <Line 
              type="monotone" 
              dataKey="average" 
              stroke="var(--card-red)" 
              strokeWidth={2}
              name="Average Usage" 
            />
          </ComposedChart>
        );
      
      case 'bar':
      default:
        return (
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: 'var(--text-color)' }}
              axisLine={{ stroke: 'var(--border-color)' }}
            />
            <YAxis 
              tick={{ fill: 'var(--text-color)' }}
              axisLine={{ stroke: 'var(--border-color)' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--card-background)', 
                color: 'var(--text-color)',
                border: '1px solid var(--border-color)'
              }}
            />
            <Bar dataKey="usage" fill="var(--primary-color)" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
    }
  };

  return (
    <div className="usage-graph-container">
      <ResponsiveContainer width="100%" height={400}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default UsageGraph;