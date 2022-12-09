import { Container } from '../../GlobalStyles';
import { MainStyled } from './Main.styled';
import MainHeader from './MainHeader';

const Main = () => {
  return (
    <Container>
      <MainStyled>
        <MainHeader />
        Main
      </MainStyled>
    </Container>
  );
};
export default Main;
