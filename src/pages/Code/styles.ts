import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  margin: auto;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;

    margin-bottom: 5.6rem;

    .input-group .actions {
      display: flex;
      justify-content: end;
      gap: 1.6rem;

      .app-button {
        min-width: fit-content;
      }
    }
  }

  .footer-container {
    text-align: center;
    margin: 5.6rem 0 3.2rem 0;
  }
`;
