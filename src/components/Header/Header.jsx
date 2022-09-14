const Header = ({ title, btnContent }) => {
  return (
    <header
      style={{
        backgroundColor: 'pink',
      }}
    >
      {btnContent ? <button>=</button> : null}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
