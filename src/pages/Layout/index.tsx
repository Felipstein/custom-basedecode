import { Navigate, useLocation } from 'react-router-dom';

export function Layout() {
  const location = useLocation();

  if(location.pathname.split('/').filter((path) => path).length === 1) {
    return <Navigate to="/app/code" />;
  }

  return (
    <h1>Layout Page</h1>
  );
}
