# Fleet Overview Dashboard

A **responsive dashboard** for monitoring vehicle fleet status and usage, built with **React.js** and integrated with a mock backend API.

---

## Features

- Overview cards displaying real-time fleet statistics fetched from backend:
  - Total Vehicles
  - Vehicles in Use
  - Vehicles Idle
  - Vehicles Under Maintenance
- Interactive vehicle usage graph with multiple visualization options:
  - Line Chart with Gradient Fill (Smooth Trend)
  - Area Chart (Emphasizing Volume)
  - Bar Chart (Vertical/Horizontal)
  - Polar Area Chart (Circular Representation)
  - Radial Bar Chart (Circular Progress)
  - Combo Chart (Line + Bar)
- Selectable time ranges for vehicle usage data (7, 15, 30 days)
- Dark/light theme toggle for better user experience
- Responsive design optimized for desktop and mobile devices
- Loading spinners and error handling during data fetch
- Data is fetched dynamically from a mock backend service

---

## Tech Stack

- **React.js** – UI development
- **Recharts** – Data visualization library
- **Axios** – HTTP client for API calls
- **JSON Server** – Mock backend API server
- **CSS (with variables)** – Styling and theming

---

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js) or yarn

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/fleetDashboard.git
   cd fleetDashboard
   
2. Install dependencies:

   ```bash
   npm install
   
3. Start the mock API server:

   ```bash
   npm run server

  This starts json-server at http://localhost:3001 serving mock fleet data from server/db.json.

4. In a new terminal, start the React development server:

   ```bash
   npm start
   
  The app will be available at http://localhost:3000


Backend Setup
  The project uses JSON Server to simulate a backend API.
  
  Mock data is stored in server/db.json.
  
  To update or extend the backend data, simply edit this JSON file.
  
  The frontend fetches data from http://localhost:3001.
