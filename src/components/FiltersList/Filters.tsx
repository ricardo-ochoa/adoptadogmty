import { FilterType } from "@/lib/types";
import Image from "next/image";

interface FiltersProps {
    selectedFilter: FilterType;
    setFilter: (filter: FilterType) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedFilter, setFilter }) => {
    const filters = [
        { label: "Cachorros", value: "cachorro", color: "bg-blue-100", icon: "/cachorros.svg" },
        { label: "Hembras", value: "hembra", color: "bg-pink-100", icon: "/hembras.svg" },
        { label: "Machos", value: "macho", color: "bg-purple-100", icon: "/machos.svg" },
        { label: "Gatitos", value: "gatito", color: "bg-orange-100", icon: "/machos-gatos.svg" },
        { label: "Gatitas", value: "gatita", color: "bg-yellow-100", icon: "/Hembras-gatos.svg" },
    ];

    return (
        <div className="mb-6">
            <div className="flex space-x-4 justify-start overflow-x-auto md:justify-center sm:overflow-visible scrollbar-hide p-2">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        className={`min-w-fit flex items-center px-2 py-2 rounded-full ${filter.color} ${selectedFilter === filter.value ? "ring-2 ring-teal-300" : ""
                            }`}
                        onClick={() => setFilter(filter.value as FilterType)}
                    >
                        <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
                            <Image src={filter.icon} alt={filter.label} width={28} height={28} />
                        </div>
                        <p className="mx-2 w-fit">{filter.label}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filters;
