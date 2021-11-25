import styled from 'styled-components';

export const StringsAndCallsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #001a0f;
  background: -webkit-linear-gradient(to left, #01BF71, #007345);
  padding: 50px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 0;
  }
`;

export const StringsAndCallsWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 16px;
  padding: 0 20px 50px;
`;
export const StringsAndCallsCard = styled.div`
  width: 100%;
  display: flex;
  li {
    text-align: left;
    color: #fff;
    font-size: 0.95rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px 60px;
    width: 100%;}
  @media screen and (max-width: 780px) {
    ul {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 12px;
  }
`;
export const StringsAndCallsH1 = styled.h1`
  font-size: 2.0rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    text-align: center;
    padding: 10px;
  }
`;
export const Subtitle = styled.div`
     max-width: 1200px;
     width: 100%;
     margin-bottom: 40px;
     font-size: 15px;
     line-height: 30px;
  text-align: center;
     color:  #fff;
  padding: 10px 20px;
`;
