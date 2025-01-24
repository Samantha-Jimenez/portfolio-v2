import React, { useState } from 'react';
import Select from 'react-select';
import skills from '../data/skillsData';

const categoryOptions = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'tools', label: 'Tools' },
];

const Skills = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (selectedOptions) => {
        setSelectedCategories(selectedOptions);
    };

    const filteredSkills = skills.filter(skill => 
        selectedCategories.length === 0 || selectedCategories.some(option => option.value === skill.category)
    );

    return (
        <div className="container">
            <div className="section-title" data-aos="fade-up" data-aos-duration="1500">
                <h2>Skills</h2>
                <p>These are the technical skills I’ve cultivated along my journey. I’m eager to keep building on this foundation and mastering new technologies.</p>
            </div>
            <Select
                isMulti
                options={categoryOptions}
                onChange={handleCategoryChange}
                placeholder="Select categories..."
                isSearchable={false}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        boxShadow: state.isFocused ? '0 0 0 2px var(--button-selected)' : null,
                        borderColor: state.isFocused ? 'var(--button-selected)' : provided.borderColor,
                        '&:hover': {
                            borderColor: 'var(--button-selected)',
                        },
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected ? 'rgba(178, 204, 62, 0.8)' : state.isFocused ? 'rgba(178, 204, 62, 0.15)' : provided.backgroundColor,
                        color: state.isFocused ? '#000' : provided.color,
                        '&:active': {
                            backgroundColor: 'rgba(178, 204, 62, 0.8)',
                        },
                    }),
                }}
            />
            <div className="skills-content">
                {filteredSkills.map((skill, index) => (
                    <div className={`iconDiv flex bg-white shadow-lg border ${skill.category === 'tools' ? 'border-gray-400' : skill.category === 'frontend' ? 'border-orange-700/40' : 'border-green-600/60'}`} key={index} data-aos="fade-up" data-aos-duration="500" >
                        <i className={`${skill.icon} icon`}></i>
                        <div className="progress">
                            <span className="skill">{skill.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;
