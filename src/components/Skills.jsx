import React from 'react';

const Skills = ({ skills }) => {
  // console.log(skills);
  const data = skills || Array(4).fill(1);; //por que sin esto no funciona.
  // console.log(data);
  return (
    <section className='Skills'>
      <h2 className='Skills-title'>Skills</h2>
      <ul className='Skills-list'>
        {
          data.map((skill, i) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i} className='Skills-item'>
                {skill.name}
                -
                {skill.percentage}
              </li>
            );
          })
        }
      </ul>
    </section>
  );

};

export default Skills;
