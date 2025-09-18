import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    list: ['React', 'Vite.js', 'Vue.js', 'HTML/CSS'],
    color: 'var(--primary-color)'
  },
  {
    category: 'Backend',
    list: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
    color: 'var(--success-color)'
  },
  {
    category: 'Still Learning',
    list: ['Angular', 'Three.js', 'Framer Motion', 'Kotlin'],
    color: 'var(--info-color)'
  },
  {
    category: 'Design',
    list: ['Figma', 'Adobe XD', 'Photoshop', 'Adobe Illustrator'],
    color: 'var(--accent-color)'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillsData.map((section, index) => (
          <div key={index} className="skills-card">
            <h3 style={{ color: section.color }}>
              <span className="bullet-point" style={{ color: section.color }}>*</span> {section.category}
            </h3>
            <div className="skill-tags">
              {section.list.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;