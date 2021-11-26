import React, {useState} from "react";
import { Button } from "../ButtonElements";
import {
    InfoWrapper,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap, ImgWrap,
} from "../InfoSection/InfoElements";
import { BouncingBallContainer,Column1,Column2, InfoRow } from "./FillThatBallElements";

const FillThatBallElements = ({
                                  lightBg,
                                  imgStart,
                                  topLine,
                                  lightText,
                                  headline,
                                  description,
                                  primary,
                                  darkText,
                                  dark,
                                  dark2,
                                  id,
                              }) => {
    const [jump, setJump] = useState(false);
    const [red, setRed] = useState(false);
    const [blue, setBlue] = useState(false);
    const [green, setGreen] = useState(false);

    function handlerAnimateBounceClick () {
        setJump(!jump);
    }
    function handlerChangeRedClick() {
       setRed(!red);
    }
    function handlerChangeBlueClick() {
        setBlue(!blue);
    }
    function handlerChangeGreenClick() {
        setGreen(!green);
    }

    return (
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
                            <ImgWrap>
                                <div className="ballWrapper">
                                    <div className={`background ${jump ? "jump" : "ball color-background"} ${red ? "red" : "ball"} ${green ? "green" : "ball"} ${blue ?" blue" : "ball"}`}/>
                                    <div className='ballShadow'/>
                                </div>
                            </ImgWrap>
                            <BtnWrap>
                                <Button
                                    onClick={handlerAnimateBounceClick}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >
                                    bounce
                                </Button>
                                <Button style={{backgroundColor: "#FD0605"}}
                                        onClick={handlerChangeRedClick}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                >
                                    red
                                </Button>
                                <Button
                                    onClick={handlerChangeBlueClick}
                                    style={{backgroundColor: "#0602FC"}}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    blue
                                </Button>
                                <Button style={{backgroundColor: "#459F49"}}
                                        onClick={handlerChangeGreenClick}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                >
                                    green
                                </Button>
                            </BtnWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </BouncingBallContainer>
    );
};

export default FillThatBallElements;
