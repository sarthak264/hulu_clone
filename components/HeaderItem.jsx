const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="header_item">
      <Icon className="header_item_icon" />
      <p className="header_item_name">{title}</p>
    </div>
  );
};

export default HeaderItem;
