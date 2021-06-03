import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;  
  height: 200px;
  background: var(--text-title);
  display: flex;
  flex-direction: column;
  align-items: center;

  form > button{
    background: var(--yellow);
    &:nth-child(2){
      background: var(--green);
    }
  }

  button {
    width: 120px;
    margin: 0 12px;
    color: var(--dark);
    border: none;
    border-radius: 4px;
    padding: 4px;
  }

  input{
    border: none;
    border-radius: 4px;
    padding: 4px;
  }

  > div {
    height: 70px;
    margin: 24px 0;
    
    img {
      width: 200px;
      margin: 0 12px;
    }
  }

`;
