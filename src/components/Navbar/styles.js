import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw; 
  min-height: 200px;
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

`;
