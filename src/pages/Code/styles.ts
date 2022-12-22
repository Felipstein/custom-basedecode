import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  margin: auto;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;

    .input-group .actions {
      display: flex;
      gap: 1.6rem;

      .app-button {
        min-width: fit-content;
      }
    }
  }
`;
