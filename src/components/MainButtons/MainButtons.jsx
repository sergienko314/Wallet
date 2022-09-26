// import { Link } from 'react-router-dom';
import { Wrapper, Button } from './MainButtons.styled';
const MainButtons = ({ changePageHandler }) => (
  <Wrapper>
    <Button
      to="/history/deduction"
      // onClick={() => {
      //   changePageHandler('deduction');
      // }}
    >
      Deduction
    </Button>
    <Button
      to="/history/income"
      // onClick={() => {
      //   changePageHandler('income');
      // }}
    >
      Income
    </Button>
  </Wrapper>
);
export default MainButtons;
