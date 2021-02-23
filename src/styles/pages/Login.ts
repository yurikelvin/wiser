import styled from 'styled-components';

export const Title = styled.span`
  color: #383E71;
  font-weight: 400;
  font-size: 4.2rem;
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  z-index: 10;
  background: transparent;
  min-width: fit-content;
  height: 100%;
  flex-shrink: 0;
  @media (max-width: 767px) {
    width: 100%;
    position: absolute;
    padding-left: 2vw;
    padding-top: 0vh;
    z-index: 100;
    margin-top: -35vh;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
  }
`

export const InnerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10vw;
  padding-top: 4rem;
  padding-right: 2vw;
  z-index: 10;
  background: #FAF5FF;
  min-width: 420px;
  flex-shrink: 0;
  @media (max-width: 767px) {
    width: 100%;
    padding-top: 4vh;
    z-index: 100;
    width: 100%;
    padding-bottom: 2vh;
    margin-right: 6vw;
    margin-left: 6vw;
    padding-left: 5vw;
    margin-bottom: 30vh;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    min-width: 0;
    flex-shrink: 1;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const SubTitle = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  color: #989FDB;
  width: 22rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    font-size: 0.750rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const AsideLogin = styled.aside`
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 290px;
  @media (max-width: 767px) {
    min-height: 376px;
  }
`

export const ContentContainerLayout = styled.div`
  height: 100%;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    position: static;
    z-index: 100;
  }
`

export const ContentContainerLayer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #130525;
  z-index: 1;
`

export const LoginLogoLayer = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  transform: rotate(-180deg);
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
`

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://s3-alpha-sig.figma.com/img/da71/def9/a4b7bbf328760a46b71373be48960a50?Expires=1615161600&Signature=BOQqCCMqF0APIkzRF0x4VBaqmFMKG6n4vsDpkhDlso2SmBUxX6UTjDn04S1Q445ty8cXI0wDQhvdW7gGsyMVaeSksU76wYFIZ0gY8f9sxmY7xqhCrlWAqjSbLVq~6orwWA-6ZlYX8lwVrPSExwHslDJ~1Krktnge9IvHcU1LVDfX-33wA1hMta7yIiSaLLWlCQlU~Q18NTgM1DTl0UD11dDQMT8anBXH~7V6K4KyLuNMHt3yEAzEwzv2ui8wZvNx-NL1g9WhtkI8Oes1D8DqK0zcFtGKfBZ1GIExyJQ9Liq1CgnTqm17vqnwrmajbi0OtajLlzzwoHoa6kFcyxrTiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position:relative;
  z-index: 1;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #989FDB;
  width: 16rem;
  margin-top: 2rem;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 0.750rem;
    width: 12rem;
  }
`

export const Link = styled.a`
  color: #AF5AC1;

`