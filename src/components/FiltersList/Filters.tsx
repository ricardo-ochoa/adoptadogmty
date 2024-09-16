type FilterType = 'cachorro' | 'hembra' | 'macho';

interface FiltersProps {
    selectedFilter: FilterType;
    setFilter: (filter: FilterType) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedFilter, setFilter }) => {
    const filters = [
        { label: "Cachorros", value: "cachorro", color: "bg-pink-100" },
        { label: "Hembras", value: "hembra", color: "bg-purple-100" },
        { label: "Machos", value: "macho", color: "bg-blue-100" },
    ];

    return (
        <div className="flex space-x-4 justify-center mb-6">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    className={`px-4 py-2 rounded-full ${filter.color} ${selectedFilter === filter.value ? "ring-2 ring-blue-500" : ""}`}
                    onClick={() => setFilter(filter.value as FilterType)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default Filters;
