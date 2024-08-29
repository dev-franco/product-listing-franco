import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import './Search.scss';


interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <Input 
      onChange={handleSearchChange} 
      placeholder="Search for product name" 
      suffix={<SearchOutlined className="ww-search-input-icon" />} 
    />
  );
};

export default Search;
