import styled from 'styled-components';

export const Container = styled.div`
  .logo-container {
    width: fit-content;
    margin: auto;
    margin-top: 3.2rem;
  }

  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;

    margin-top: 4.4rem;
    margin-bottom: 2.8rem;
  }

  .floating-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;

    position: fixed;
    left: 4.8rem;
    bottom: 4.0rem
  }
`;
