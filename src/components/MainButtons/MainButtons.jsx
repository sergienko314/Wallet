const MainButtons = ({ changePageHandler }) => (
  <>
    <button
      type="button"
      onClick={() => {
        changePageHandler('deduction');
      }}
    >
      Deduction
    </button>
    <button
      type="button"
      onClick={() => {
        changePageHandler('income');
      }}
    >
      Income
    </button>
  </>
);
export default MainButtons;
