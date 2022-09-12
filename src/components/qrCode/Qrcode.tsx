import { ImageContainer, QrcodeContainer, TextContainer } from "./styles";
import img from "../../assets/images/image-qr-code.png";
export default function Qrcode() {
  return (
    <QrcodeContainer>
      <ImageContainer>
        <img src={img} alt="qrCode" />
      </ImageContainer>
      <TextContainer>
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
      </TextContainer>
    </QrcodeContainer>
  );
}
