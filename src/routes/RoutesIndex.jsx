import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';

function RoutesIndex() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RoutesIndex;