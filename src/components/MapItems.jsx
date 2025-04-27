function MapItems({
  data,
  activeIndex,
  setActiveIndex,
  renderContent,
  baseClass = "",
  activeClass = "active",
  Element = "div",
}) {
  return (
    <>
      {data.map((item, index) => {
        const Tag = Element;
        const isActive = index === activeIndex;
        const className = `${baseClass} ${isActive ? activeClass : ""}`.trim();
        return (
          <Tag
            key={index}
            className={className}
            onClick={() => setActiveIndex(index)}
          >
            {renderContent(item, index)}
          </Tag>
        );
      })}
    </>
  );
}

export default MapItems;
