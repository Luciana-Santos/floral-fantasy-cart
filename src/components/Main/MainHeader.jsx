import { MainHeaderStyled } from './MainHeader.styled';
import content from '../../content.js';

const MainHeader = () => {
  const { filterItems } = content;

  return (
    <MainHeaderStyled>
      {filterItems.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </MainHeaderStyled>
  );
};
export default MainHeader;
