import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <FlipMove className="results">
      {results.map((item, index) => (
        <Thumbnail key={item.id} data={item} />
      ))}
    </FlipMove>
  );
};

export default Results;
