import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  h1 {
    margin-top: 80px;
    max-width: 450px;

    font-size: 48px;
    line-height: 56px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 715px;

  display: flex;

  input {
    flex: 1;
    height: 70px;

    padding: 0 24px;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    background-color: #04d361;
    border-radius: 0 5px 5px 0;

    color: white;
    font-weight: bold;

    transition: background 200ms;

    &:hover {
      background-color: ${shade(0.08, '#04d361')};
    }
  }
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

      flex-shrink: none;
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
