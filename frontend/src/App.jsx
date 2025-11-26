import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import DatePicker from './components/DatePicker';
import { getTodayApod, getApodByDate } from './services/api';

const Home = () => {
  const [today, setToday] = useState(null);
  const [searchedApod, setSearchedApod] = useState(null);

  useEffect(() => {
    getTodayApod().then(setToday).catch(console.error);
  }, []);

  const handleDateSelect = async (date) => {
    try {
      const data = await getApodByDate(date);
      setSearchedApod(data);
    } catch (error) {
      console.error("Failed to fetch date", error);
    }
  };

  return (
    <>
      <Hero data={searchedApod || today} />

      <div className="flex flex-col items-center my-12 gap-6">
        <h2 className="text-2xl text-space-100/80">Time Travel</h2>
        <DatePicker onDateSelect={handleDateSelect} />
      </div>

      <div className="mt-12">
        <h2 className="text-3xl text-white mb-6">Recent Discoveries</h2>
        <Gallery />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
