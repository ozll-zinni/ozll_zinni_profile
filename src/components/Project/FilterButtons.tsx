import React from 'react';
import styled from 'styled-components';

const FilterList = styled.div`
    display: flex;
    gap: 0.8rem;
    padding-bottom: 2.8rem;
`;

const FilterButton = styled.button<{ $isSelected: boolean }>`
    font-family: var(--font-default-eng);
    padding: 0.5rem 0.8rem;
    background-color: ${(props) => (props.$isSelected ? '#f5f5f5' : 'transparent')};
    color: ${(props) => (props.$isSelected ? '#111' : 'var(--font-gray-color)')};
    cursor: pointer;
    font-size: var(--font-text);
    font-weight: var(--font-weight-default);
    transition: all 0.3s ease;

    &:hover {
        border-color: #111;
    }
`;

interface Project {
    techs: string[];
}

interface ContentData {
    [key: string]: Project[];
}

interface FilterButtonsProps {
    activeTab: string;
    contentData: ContentData;
    techFilters: string[];
    selectedTechs: string[];
    setSelectedTechs: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
    activeTab,
    contentData,
    techFilters,
    selectedTechs,
    setSelectedTechs,
}) => {
    const availableTechs =
        activeTab && contentData[activeTab]
            ? Array.from(new Set(contentData[activeTab].flatMap((project) => project.techs)))
            : [];

    const toggleTech = (tech: string) => {
        setSelectedTechs((prev) => {
            const techIndex = prev.indexOf(tech);
            if (techIndex === -1) return [...prev, tech];
            const newTechs = [...prev];
            newTechs.splice(techIndex, 1);
            return newTechs;
        });
    };

    return (
        <FilterList>
            {availableTechs.length === 1 ? (
                <FilterButton $isSelected={true} onClick={() => {}}>
                    {availableTechs[0]}
                </FilterButton>
            ) : (
                techFilters
                    .filter((tech) => availableTechs.includes(tech))
                    .map((tech) => (
                        <FilterButton
                            key={tech}
                            $isSelected={selectedTechs.includes(tech)}
                            onClick={() => toggleTech(tech)}
                        >
                            {tech}
                        </FilterButton>
                    ))
            )}
        </FilterList>
    );
};

export default FilterButtons;
