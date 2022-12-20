import { Navigate, Route, Routes as Router } from 'react-router';
import { HomePage } from './pages';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  );
}
