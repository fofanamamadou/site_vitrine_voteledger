import React from 'react';
import { ConfigProvider } from 'antd';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Ant Design custom theme configuration
const themeConfig = {
  token: {
    colorPrimary: '#0B3C5D', // Institution blue
    colorInfo: '#00A8A8',    // Tech turquoise
    fontFamily: "'Inter', sans-serif",
    borderRadius: 8,
    colorTextBase: '#1A1A1A',
  },
  components: {
    Button: {
      colorPrimary: '#00A8A8',
      colorPrimaryHover: '#008b8b',
      colorPrimaryActive: '#006c6c',
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <div className="app-container">
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
