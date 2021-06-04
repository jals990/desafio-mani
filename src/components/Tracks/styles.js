import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 50vw;
  padding-top: 36px;
  overflow-y: scroll;
  background: var(--white);
  
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px){
    width: 500px;
  }

  @media (max-width: 426px){
    width: 100%;
  }

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
      height: 120px;
      align-items: center;
      justify-content: space-between;
      list-style-type: none;
      background: var(--white);
      padding: 5px 15px 5px 0px;
      border-radius: 5px;
      -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 14px;

      @media (max-width: 426px){
        width: 400px;
      }

      @media (max-width: 376px){
        width: 360px;
      }

      @media (max-width: 321px){
        width: 301px;
        height: 85px;
      }

      img {
        background: var(--white);
        height: 120px;
        width: 120px;
        margin-right: 15px;

        @media (max-width: 321px){
          height: 85px;
          width: 85px;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;
      }

      strong {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
      }

      .combo-btn {
          display: flex;
          width: 3em;
          place-items: center;

          button{
            padding: 5px;
            font-size: 1.725em;
            border: none;
            background: none;

            img {
              width: 1em !important;
              height: 1em !important;
              margin: 0;
            }

            @media (max-width: 321px){
              font-size: 1.225em;
            }
          }

          div {
            margin-left: 3px;
          }
        }
    }
  }

  ::-webkit-scrollbar { 
    display: none;
  }
`;
