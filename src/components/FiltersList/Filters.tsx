import { FilterType } from "@/lib/types";
import Image from "next/image";

interface FiltersProps {
    selectedFilter: FilterType;
    setFilter: (filter: FilterType) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedFilter, setFilter }) => {
    const filters = [
        { label: "Cachorros", value: "cachorro", color: "bg-red-100", ring: "ring-red-200", icon: "/cachorros.svg" },
        { label: "Hembras", value: "hembra", color: "bg-pink-200", ring: "ring-pink-200", icon: "/hembras.svg" },
        { label: "Machos", value: "macho", color: "bg-indigo-200", ring: "ring-indigo-200", icon: "/machos.svg" },
        { label: "Gatitos", value: "gatito", color: "bg-orange-200", ring: "ring-orange-200", icon: "/machos-gatos.svg" },
        { label: "Gatitas", value: "gatita", color: "bg-yellow-200", ring: "ring-yellow-200", icon: "/Hembras-gatos.svg" },
    ];

    return (
        <div className="mb-6">
            <div className="flex space-x-2 justify-start overflow-x-auto md:justify-center sm:overflow-visible scrollbar-hide p-1">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        className={`min-w-fit flex items-center px-2 py-2 rounded-full ${filter.color} 
                        ${selectedFilter === filter.value ? `ring-2 ${filter.ring}` : ""}`}
                        onClick={() => setFilter(filter.value as FilterType)}
                    >
                        <div className="rounded-full bg-white w-11 h-11 flex items-center justify-center">
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
