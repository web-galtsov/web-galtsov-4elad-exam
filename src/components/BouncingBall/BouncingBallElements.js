import styled from 'styled-components';

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
          imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: auto;
  }
`;
export const ImgWrapB = styled.div`
  max-width: 700px;
  min-height: 420px;
  text-align: center;padding: 40px 0;
  height: auto;
  border: 2px #01BF71 double;
  @media screen and (max-width: 768px) {
    height:auto;
  }
`;
