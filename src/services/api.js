import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchFleetSummary = async () => {
  try {
    const response = await axios.get(`${API_URL}/fleetSummary`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fleet summary:', error);
    throw error;
  }
};

export const fetchUsageData = async (range) => {
  const endpoint = range === '7' ? 'weeklyUsage' : 
                  range === '15' ? 'biweeklyUsage' : 'monthlyUsage';
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${range} day usage data:`, error);
    throw error;
  }
};