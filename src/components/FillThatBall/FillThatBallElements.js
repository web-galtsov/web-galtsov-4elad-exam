import styled from 'styled-components';


export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
 
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
   margin-bottom: 15px;
   padding: 0 15px;
   grid-area: col2; 
   position: relative;
`;

export const BouncingBallContainer = styled.div`
  height: 800px;
  /*height: auto;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(225 225 225 / 48%) !important;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: auto;
  }
 /* @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
  */
`;

