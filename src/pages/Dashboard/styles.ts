import styled from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  margin-top: 80px;
  max-width: 450px;

  font-size: 48px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  max-width: 715px;
  margin-top: 40px;

  input {
    flex: 1;
    height: 70px;

    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: ${({ hasError }) =>
      hasError ? '2px solid #c53030' : '2px solid white'};
    border-right: none;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    background-color: ${({ hasError }) => (hasError ? '#c53030' : '#04d361')};

    border-radius: 0 5px 5px 0;

    color: white;
    font-weight: bold;

    transition: filter 200ms;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const Error = styled.span<FormProps>`
  opacity: ${({ hasError }) => (hasError ? '1' : '0')};
  display: block;
  margin-top: 8px;

  font-size: 16px;
  color: #c53030;
`;

export const Repositories = styled.div`
  max-width: 715px;
  margin-top: 80px;

  a {
    width: 100%;

    padding: 24px;
    border-radius: 5px;
    background-color: white;

    display: flex;
    align-items: center;

    transition: transform 200ms;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;

      flex-shrink: 0;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;
