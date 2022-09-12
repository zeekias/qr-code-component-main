import Qrcode from "../qrCode/Qrcode";
import { Container, Content, LineBalls } from "./styles";
export default function MainContainer() {
  
  return (
    <Container>
      <Content>
        <Qrcode />
      </Content>
    </Container>
  );
}
