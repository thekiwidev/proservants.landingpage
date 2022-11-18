import "./TextContent.scss";

const TextContent = ({ headText, paraText, btnText }) => {
  return (
    <div>
      {headText}
      {paraText}
      {btnText}
    </div>
  );
};

export default TextContent;
