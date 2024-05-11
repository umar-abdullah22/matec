import Error404 from '@components/Error404';
import Home from '@components/Home';
import Upload from '@components/Upload';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
