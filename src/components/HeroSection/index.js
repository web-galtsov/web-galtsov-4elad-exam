import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Where does it come from?</HeroH1>
        <HeroP>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
