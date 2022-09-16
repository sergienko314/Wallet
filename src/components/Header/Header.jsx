import { HeaderStyled, Button } from './Header.styled';
import sprite from '../../assets/icons/sprite.svg';
console.log(sprite);
const Header = ({ title, btnContent, changePageHandler }) => {
  return (
    <HeaderStyled>
      {btnContent ? (
        <Button
          onClick={() => {
            changePageHandler('main');
          }}
        >
          <svg>
            <use href={sprite + '#icon-arrow-left2'}></use>
          </svg>
        </Button>
      ) : null}
      <h1>{title}</h1>
    </HeaderStyled>
  );
};

export default Header;
