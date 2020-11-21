import React from 'react';

const Experience = ({ experience = Array(3).fill(1) }) => {

  return (
    <>
      {
        experience.length ?
          (
            <section className='Experience'>
              <h2 className='Experience-title'>Work Experience</h2>
              <ul className='Experience-list'>
                {
                  experience.map((item, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li className='Experience-item' key={i}>
                      <h3>
                        {item.jobTitle}
                      </h3>
                      <div className='Experience-date'>
                        <time>
                          {item.starDate}
                        </time>
                        to
                        <time>
                          {item.endDate}
                        </time>
                      </div>
                      <p className='Experience-company'>
                        {item.company}
                      </p>
                      <p>
                        {item.jobDescription}
                      </p>
                    </li>
                  ))
                }
              </ul>
            </section>
          ) :
          null
      }
    </>
  );
};

export default Experience;
