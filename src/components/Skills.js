import React, { useState } from 'react';
import Select from 'react-select';
import { Icon } from '@iconify/react';
import skills from '../data/skillsData';

const categoryOptions = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'tools', label: 'Tools' },
];

const Skills = ({ darkMode }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (selectedOptions) => {
        setSelectedCategories(selectedOptions);
    };

    const filteredSkills = skills.filter(skill => 
        selectedCategories.length === 0 || selectedCategories.some(option => option.value === skill.category)
    );

    // Dynamic styles based on darkMode prop
    const selectStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: darkMode ? '#262626' : '#fff',
            borderColor: state.isFocused 
                ? 'var(--button-selected)' 
                : darkMode ? '#404040' : '#e5e5e5',
            boxShadow: state.isFocused ? '0 0 0 2px var(--button-selected)' : null,
            '&:hover': {
                borderColor: 'var(--button-selected)',
            },
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: darkMode ? '#262626' : '#fff',
            border: darkMode ? '1px solid #404040' : '1px solid #e5e5e5',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected 
                ? darkMode ? 'var(--button-color)' : 'var(--button-color)'
                : state.isFocused 
                    ? darkMode ? '#404040' : '#f5f5f5'
                    : 'transparent',
            color: state.isSelected 
                ? '#fff' 
                : darkMode ? '#e5e5e5' : '#171717',
            '&:active': {
                backgroundColor: '#525A5E',
            },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: darkMode ? '#404040' : '#e5e5e5',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: darkMode ? '#e5e5e5' : '#171717',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: darkMode ? '#a3a3a3' : '#525252',
            '&:hover': {
                backgroundColor: 'var(--button-selected)',
                color: '#fff',
            },
        }),
        placeholder: (provided) => ({
            ...provided,
            color: darkMode ? '#a3a3a3' : '#737373',
        }),
        input: (provided) => ({
            ...provided,
            color: darkMode ? '#e5e5e5' : '#171717',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: darkMode ? '#e5e5e5' : '#171717',
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: darkMode ? '#404040' : '#e5e5e5',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: darkMode ? '#a3a3a3' : '#737373',
            '&:hover': {
                color: darkMode ? '#e5e5e5' : '#171717',
            },
        }),
        clearIndicator: (provided) => ({
            ...provided,
            color: darkMode ? '#a3a3a3' : '#737373',
            '&:hover': {
                color: darkMode ? '#e5e5e5' : '#171717',
            },
        }),
    };

    return (
        <div className="container">
            <div className="section-title" data-aos="fade-up" data-aos-duration="1500">
                <h2 className=''>Skills</h2>
                <p data-aos="fade-up" data-aos-duration="1000">These are the technical skills I've cultivated along my journey. I'm eager to keep building on this foundation and mastering new technologies.</p>
            </div>
            <Select
                isMulti
                options={categoryOptions}
                onChange={handleCategoryChange}
                placeholder="Select categories..."
                isSearchable={false}
                styles={selectStyles}
            />
            <div className="skills-content">
                {filteredSkills.map((skill, index) => {
                    // Check if icon is from Iconify (contains colon) or Devicon
                    const isIconify = skill.icon.includes(':');
                    
                    return (
                        <div className={`iconDiv flex shadow-lg tooltip tooltip-top items-center ${skill.category === 'tools' ? 'bg-zinc-400/20' : skill.category === 'frontend' ? 'bg-orange-300/20 dark:bg-orange-300/20' : 'bg-green-300/20 dark:bg-green-300/20'}`} key={index} data-aos="fade-up" data-aos-duration="500" data-tip={skill.tooltip}>
                            {isIconify ? (
                                <Icon icon={skill.icon} className="icon" />
                            ) : (
                                <i className={`${skill.icon} icon`}></i>
                            )}
                            <div className="progress">
                                <span className="skill">{skill.name}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills;
