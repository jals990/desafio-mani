import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw; 
  height: 200px;
  background: var(--text-title);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px){
    width: 500px;
  }

  @media (max-width: 426px){
    width: 100%;
  }
  

  form > button{
    background: var(--yellow);
    &:nth-child(2){
      background: var(--green);
    }
  }

  @media (max-width: 376px){
    form > button {
      width: 90px;
      margin: 0 3px;
    }
    form > input {
      width: 90px;
      margin: 0 3px;
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
    margin: 0 12px;
  }

  > div {
    height: 70px;
    margin: 24px 0;
    
    img {
      width: 200px;
      margin: 0 12px;
    }

    @media (max-width: 426px){
      img {
        width: 45%;
        margin: 0 6px;
      }
    }

  }

`;
