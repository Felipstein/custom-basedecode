import styled from 'styled-components';
import { Slot } from '@radix-ui/react-slot';

export const Container = styled(Slot)`
  text-decoration: none;
  overflow: hidden;
  opacity: 0.6;
  width: 4.4rem;

  &:hover {
    opacity: 1;
    width: fit-content;

    .label-container {
      opacity: 1 !important;
    }
  }

  &:active {
    .abstract-container {
      background-color: ${({ theme }) => theme.colors.white};

      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }

  .abstract-container {
    position: relative;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    font-size: 1.4rem;
    font-weight: 600;

    padding: 0.6rem;
    border-radius: 128px;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray[700]};

    .icon-container {
      display: flex;
    }

    .label-container {
      opacity: 0;
      padding-right: 0.4rem;
    }
  }
`;
