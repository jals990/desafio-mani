import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 230px);
  width: 500px;
  padding-top: 36px;
  overflow-y: scroll;
  background: var(--white);
  
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;

    center {
      position: absolute;
      top: 50%;
    }
    
    li {
      display: flex;
      width: 480px;
      height: 85px;
      align-items: center;
      justify-content: space-between;
      list-style-type: none;
      background: var(--white);
      padding: 5px 15px 5px 0px;
      border-radius: 5px;
      -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 14px;

      img {
        background: var(--white);
        height: 85px;
        width: 85px;
        margin-right: 15px;
      }

      strong {
        width: 230px;
        display: inline-block;
        align-self: center;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
      }

      .combo-btn {
        display: flex;
        button{
          padding: 10px;
          font-size: 1.5em;
        }
      }
    }
  }

  ::-webkit-scrollbar { 
    display: none;
  }
`;
