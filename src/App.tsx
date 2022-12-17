import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/themes/default';
import GlobalStyle from './styles/global';
import { Logo } from './components/Logo';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Logo />
    </ThemeProvider>
  );
}
