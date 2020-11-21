import React from 'react';

const Skills = ({ skills = Array(4).fill(1) }) => {

  return (
    <>
      {
        skills.length > 0 ?
          (
            <section className='Skills'>
              <h2 className='Skills-title'>Skills</h2>
              <ul className='Skills-list'>
                {
                  skills.map((skill, i) => {
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
          ) :
          null
      }
    </>
  );
};

export default Skills;
