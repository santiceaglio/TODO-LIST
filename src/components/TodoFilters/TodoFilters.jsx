import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "../Todo/TodoFilters.components"

const TodoFilters = () => {
    return (
        <FiltersContainer>
            <ItemsLeft />
            <FilterButtonContainer>
                <FilterButton action={() => { }} active="All" filter="All" />
                <FilterButton action={() => { }} active="All" filter="Active" />
                <FilterButton action={() => { }} active="All" filter="Completed" />
            </FilterButtonContainer>

            {/* <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in"> */}
                <img className= "h-8 w-8 cursor-pointer transition-all duration-300 ease-in self-end" src="./trash-icon.svg" alt="Trash Icon" />
            {/* </button> */}
        </FiltersContainer>
    )
}
export { TodoFilters }