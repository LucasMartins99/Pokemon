import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 18px;
  }
`;
export const SubmitButton = styled.button`
  background-color: #000;
  border: 0;
  padding: 0 15px;
  margin-left: 5px;
  border-radius: 4px;
`;
export const Historic = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
  }
  button {
    font-weight: bold;
    border: 0;
    border-radius: 6px;
    transition: background 0.2;
    background: #4888f5;
    color: #fff;
    height: 30px;
    &:hover {
      background: ${darken(0.03, '#4888f5')};
    }
  }
  a {
    color: #7159c1;
    text-decoration: none;
  }
`;
