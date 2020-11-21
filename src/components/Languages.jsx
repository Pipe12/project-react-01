import React from 'react';

const Languages = ({ languages = Array(2).fill(1) }) => {

  return (
    <>
      {
        languages.length > 0 ?
          (
            <section className='Languages'>
              <h2 className='Languages-title'>Languages</h2>
              <ul className='Languages-list'>
                {
                  languages.map((language, i) => {
                    return (
                      // eslint-disable-next-line react/no-array-index-key
                      <li key={i} className='Languages-item'>
                        {language.name}
                        -
                        {language.percentage}
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

export default Languages;
