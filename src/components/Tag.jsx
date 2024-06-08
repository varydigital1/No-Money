import "./Tag.css";
const Tag = ({ tagName, selectTag,selectd}) => {
const tagStyle = {
 HTML: {backgroundColor:"#fda821"},
 CSS: {backgroundColor: "#15d4c8"},
 JavaScript: {backgroundColor: "#ffd12c"},
 React: {backgroundColor: "#4cdafc"},
 default: {backgroundColor: "#f9f9f9"}
}

  return ( 
  <button type="button" style={selectd ? tagStyle[tagName] : tagStyle.default} className="tag"
      onClick={() => selectTag(tagName)}
      >{tagName}
      </button>
  );
}

export default Tag;

