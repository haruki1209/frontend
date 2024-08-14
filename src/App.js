import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeminarForm from './components/SeminarForm';
import ConfirmationPage from './components/ConfirmationPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeminarForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
