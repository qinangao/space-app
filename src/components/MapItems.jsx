function MapItems({
  data,
  activeIndex,
  setActiveIndex,
  renderContent,
  activeClass = "active",
  Element = "div",
}) {
  return (
    <>
      {data.map((item, index) => {
        const Tag = Element;
        return (
          <Tag
            key={index}
            className={index === activeIndex ? activeClass : ""}
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
