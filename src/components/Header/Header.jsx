const Header = ({ title, btnContent, changePageHandler }) => {
  return (
    <header
      style={{
        backgroundColor: 'pink',
      }}
    >
      {btnContent ? (
        <button
          onClick={() => {
            changePageHandler('main');
          }}
        >
          {btnContent}
        </button>
      ) : null}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
