import styled from 'styled-components';

export const Title = styled.span`
  color: #383E71;
  font-weight: 400;
  font-size: 4.2rem;
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8rem;
  margin-top: 4rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubTitle = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  color: #989FDB;
  width: 22rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const AsideLogin = styled.aside`
  width: 100%;
  height: 100%;
  position: relative;
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