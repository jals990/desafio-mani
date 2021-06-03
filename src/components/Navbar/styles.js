import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;  
  height: 200px;
  background: var(--text-title);
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 120px;
    margin: 0 12px;
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
