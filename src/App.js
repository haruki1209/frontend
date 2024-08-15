import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SeminarForm from './components/SeminarForm';
import ConfirmationPage from './components/ConfirmationPage';
import SuccessPage from './components/SuccessPage';  // SuccessPage をインポート

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SeminarForm />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/success" element={<SuccessPage />} />  {/* /success のルートを追加 */}
    </Routes>
  );
};

export default App;
