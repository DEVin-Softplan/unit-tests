import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Calculadora, Foruns, Login } from '../components';
import { PrivateRoute } from './PrivateRoute';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/calculadora"
        element={
          <PrivateRoute>
            <Calculadora />
          </PrivateRoute>
        }
      />
      <Route
        path="/foruns"
        element={
          <PrivateRoute>
            <Foruns />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/calculadora" />} />
    </Routes>
  </BrowserRouter>
);
