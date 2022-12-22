import { Navigate, Route, Routes as Router } from 'react-router';
import { LayoutPage, CodePage, DecodePage, HomePage } from './pages';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<HomePage />}  />

      <Route path="/app" element={<LayoutPage />}>
        <Route path='code' element={<CodePage />} />

        <Route path='decode' element={<DecodePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  );
}
