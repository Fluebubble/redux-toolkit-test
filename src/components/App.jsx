// import { Home } from 'pages/Home';
import { LoginPage, Dashboard, Home } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
