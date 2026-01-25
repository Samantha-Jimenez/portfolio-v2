import React, { useState } from 'react';
import Select from 'react-select';
import { Icon } from '@iconify/react';
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
                <h2 className=''>Skills</h2>
                <p data-aos="fade-up" data-aos-duration="1000">These are the technical skills I've cultivated along my journey. I'm eager to keep building on this foundation and mastering new technologies.</p>
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
                        boxShadow: state.isFocused ? '0 0 0 2px var(--light-button-selected)' : null,
                        borderColor: state.isFocused ? 'var(--light-button-selected)' : provided.borderColor,
                        '&:hover': {
                            borderColor: 'var(--light-button-selected)',
                        },
                        '@media (prefers-color-scheme: dark)': {
                            boxShadow: state.isFocused ? '0 0 0 2px var(--dark-button-selected)' : null,
                            borderColor: state.isFocused ? 'var(--dark-button-selected)' : provided.borderColor,
                            '&:hover': {
                                borderColor: 'var(--dark-button-selected)',
                            },
                        }
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected 
                            ? 'var(--light-background-and-text-primary)' 
                            : state.isFocused 
                                ? 'var(--light-background-and-text-primary)' 
                                : provided.backgroundColor,
                        color: state.isFocused ? '#000' : provided.color,
                        '&:active': {
                            backgroundColor: 'var(--light-menu-text-unselected)',
                        },
                        '@media (prefers-color-scheme: dark)': {
                            backgroundColor: state.isSelected 
                                ? 'var(--dark-year-text)' 
                                : state.isFocused 
                                    ? 'var(--dark-p-text)' 
                                    : provided.backgroundColor,
                            color: state.isFocused ? '#000' : 'var(--dark-p-subtext)',
                            '&:active': {
                                backgroundColor: 'var(--dark-menu-text-unselected)',
                            },
                        }
                    }),
                }}
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
