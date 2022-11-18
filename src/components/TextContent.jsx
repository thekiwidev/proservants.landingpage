import "./TextContent.scss";

const TextContent = ({ headText, paraText, btnText }) => {
  return (
    <div className="text-content">
      {headText}
      {paraText}
      {btnText}
    </div>
  );
};

export default TextContent;
