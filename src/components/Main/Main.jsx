import { Container } from '../../GlobalStyles';
import { MainList, MainStyled } from './Main.styled';
import MainHeader from './MainHeader';
import Card from '../UI/Card';

const Main = ({ items, categories, filterItems }) => {
  return (
    <Container>
      <MainStyled>
        <MainHeader categories={categories} filterItems={filterItems} />
        <MainList>
          {items.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </MainList>
      </MainStyled>
    </Container>
  );
};
export default Main;
