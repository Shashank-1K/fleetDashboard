import { useState, useEffect } from 'react';
import { fetchFleetSummary, fetchUsageData } from '../services/api';

const useFleetData = (timeRange) => {
  const [summary, setSummary] = useState(null);
  const [usageData, setUsageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [summaryData, usage] = await Promise.all([
          fetchFleetSummary(),
          fetchUsageData(timeRange)
        ]);
        setSummary(summaryData);
        setUsageData(usage);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeRange]);

  return { summary, usageData, loading, error };
};

export default useFleetData;