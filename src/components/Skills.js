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
                <p>These are a few of the technical competencies I've developed so far on my tech journey. I look forward to growing my collection of skills.</p>
            </div>
            <Select
                isMulti
                options={categoryOptions}
                onChange={handleCategoryChange}
                placeholder="Select categories..."
            />
            <div className="skills-content">
                {filteredSkills.map((skill, index) => (
                    <div className={`iconDiv flex ${skill.category === 'tools' ? 'bg-gray-300' : skill.category === 'frontend' ? 'bg-orange-700/35' : 'bg-green-600/55'}`} key={index} data-aos="fade-up" data-aos-duration="500" >
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
