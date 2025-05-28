const API_BASE = 'https://api.jsonbin.io/v3/b';

export const fetchFleetSummary = async () => {
  try {
    const res = await fetch(`${API_BASE}/6836f5128561e97a501c8a33`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log("working Fetching");
    console.log(data);
    return data.record;  // actual JSON content inside "record"
  } catch (error) {
    console.error('Error fetching fleet summary dff:', error);
    throw error;
  }
};

export const fetchUsageData = async (range) => {
  const endpoint = range === '7' ? '6836f46d8a456b7966a6674d' : 
                   range === '15' ? '6836f4da8a456b7966a66791' : '6836f4f98a456b7966a6679c';
  try {
    const res = await fetch(`${API_BASE}/${endpoint}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.record;
  } catch (error) {
    console.error(`Error fetching ${range} day usage data:`, error);
    throw error;
  }
};
