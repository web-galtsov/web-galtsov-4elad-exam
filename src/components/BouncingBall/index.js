import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import {
    InfoWrapper,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
} from '../InfoSection/InfoElements';
import { BouncingBallContainer,Column1,Column2, InfoRow,ImgWrapB } from "./BouncingBallElements";
const BouncingBall = ({
                         lightBg,
                         imgStart,
                         topLine,
                         lightText,
                         headline,
                         description,
                         buttonLabel,
                         primary,
                         darkText,
                         dark,
                         dark2,
                         id,
                     }) => {
    const [isStartAnime, setIsStartAnime] = useState(false);
    const [reset, setReset] = useState(false);

    const startAnimation = () => {
        setIsStartAnime(false);
        setReset(true);
    };

    React.useEffect(() => {
        if (!isStartAnime && reset) setIsStartAnime(true);
    }, [isStartAnime, reset]);
     return (
        <>
            <BouncingBallContainer lightBg={lightBg}  id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapB>
                                <div className="container">
                                    {isStartAnime ? <div className="logo"/>:  <div className="logoFalse"/>}
                                </div>
                            </ImgWrapB>
                            <BtnWrap>
                                <Button
                                    onClick={startAnimation}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </BouncingBallContainer>
        </>
    );
};

export default BouncingBall;
