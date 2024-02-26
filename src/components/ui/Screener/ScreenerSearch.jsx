import { Input } from "antd";

const Search = Input.Search;

const ScreenerSearch = ({ onSearch, ...props }) => {
  return (
    <div {...props}>
      <Search
        placeholder="Enter Title"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default ScreenerSearch;
