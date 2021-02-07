const Folder = ({ imageSet, title, subTitle, date }) => {
  return (
    <>
      <div className="folder__images">
        {imageSet.map((item, index) => {
          return (
            <div key={index} className={`img__col img__${index}`}>
              <img src={item} alt={title} />
            </div>
          );
        })}
      </div>
      <h3>{title}</h3>
      <p>
        <span>Shared by</span>
        <span className="orange">{subTitle}</span>
        <span>on</span>
        <span className="orange">{date}</span>
      </p>
    </>
  );
};

export default Folder;
