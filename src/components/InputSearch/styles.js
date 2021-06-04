import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: relative;
    top: 35%;
    right: 7%;
    cursor: pointer;
    transform: translate(0, -50%);
  }

  input {
    width: 80%;
    height: 30px;
    padding: 5px;
    padding-right: 50px;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    border: none;
  }
`;