import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Landing from './pages/landing';


export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <Header />

      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </div>
  );
};
