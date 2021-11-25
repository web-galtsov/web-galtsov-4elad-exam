import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 860px;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  height: auto;
`;

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
  height: 300px;
  position: relative;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  max-width: 1000px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.div`
  max-width: 1000px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  padding: 15px;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content:center;
  padding: 15px 20px;
  @media screen and (max-width: 768px) {
    display: grid;
    padding: 10px 20px;
    justify-content:center;
    text-align: center;
  }
`;

export const ImgWrap = styled.div`
  max-width: 700px;
  height: 315px;
  text-align: center;padding: 40px 0;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;
