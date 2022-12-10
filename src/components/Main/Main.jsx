import { Container } from '../../GlobalStyles';
import { MainList, MainStyled } from './Main.styled';
import MainHeader from './MainHeader';
import content from '../../content.js';
import Card from '../UI/Card';

const Main = () => {
  const { shopItems } = content;

  return (
    <Container>
      <MainStyled>
        <MainHeader />
        <MainList>
          {shopItems.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </MainList>
      </MainStyled>
    </Container>
  );
};
export default Main;
