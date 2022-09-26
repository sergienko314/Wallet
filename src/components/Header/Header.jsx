import { HeaderStyled, Button, ButtonHeaderLink } from './Header.styled';
import sprite from '../../assets/icons/sprite.svg';


console.log(sprite);
const Header = ({ title, changePageHandler, to }) => {
  return (
    <HeaderStyled>
      {changePageHandler ? (
        <Button
          onClick={() => {
            changePageHandler();
          }}
        >
          <svg>
            <use href={sprite + '#icon-arrow-left2'}></use>
          </svg>
        </Button>
      ) : to? <ButtonHeaderLink to={to}>
          <svg>
            <use href={sprite + '#icon-arrow-left2'}></use>
          </svg>
      </ButtonHeaderLink>: null}
      <h1>{title}</h1>
    </HeaderStyled>
  );
};

export default Header;
