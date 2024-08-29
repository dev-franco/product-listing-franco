import { Select } from "antd";
import './Filter.scss';

interface FilterProps {
    categories: string[];
    onCategoryChange: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, onCategoryChange }) => {
    
    const handleFilterCategoryChange = (value: string) => {
        onCategoryChange(value);
    };
    
    return (
        <div className="ww-filter-wrapper">
            { categories && ( categories.length ?? 0 ) > 0 && (
                <Select onChange={e => handleFilterCategoryChange(e)} placeholder="Select a category"
>
                    <Select.Option value="">All categories</Select.Option>
                {categories.map(category => (
                    <Select.Option key={category} value={category}>{category}</Select.Option>
                ))}
                </Select>
            )}
        </div>
    );
};

export default Filter;
