import { MainHeaderStyled } from './MainHeader.styled';

const MainHeader = ({ categories, filterItems }) => {
  return (
    <MainHeaderStyled>
      {categories.map((category, i) => (
        <li key={i} onClick={() => filterItems(category)}>
          {category}
        </li>
      ))}
    </MainHeaderStyled>
  );
};
export default MainHeader;
