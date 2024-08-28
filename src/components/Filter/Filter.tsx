interface FilterProps {
    categories: string[];
    onCategoryChange: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, onCategoryChange }) => {
    
    const handleFilterCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onCategoryChange(e.target.value);
    };
    
    return (
        <div>
        { categories && ( categories.length ?? 0 ) > 0 && (
            <select onChange={e => handleFilterCategoryChange(e)}>
            <option value="">All categories</option>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
            </select>
        )}
        </div>
    );
};

export default Filter;
