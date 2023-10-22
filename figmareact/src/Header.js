function Header(props) {
  return (
    <div className="header">
      <div className="large-text">О нас<br/>Проекты<br/>Материалы<br/>Отзывы</div>
      <div className="large-text">{props.phone}</div>
    </div>
  );
}

export default Header;
