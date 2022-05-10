import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/Register';

const EmptyComponent = () => { };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="register" />} />
        <Route path="/register/" element={<RegisterPage />}>
          <Route path=":step" element={<EmptyComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
