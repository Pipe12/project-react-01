import React from 'react';

const Languages = ({ languages }) => {
  // console.log(languages);
  const data = languages || Array(2).fill(1);; //por que sin esto no funciona.
  // console.log(data);
  return (
    <section className='Languages'>
      <h2 className='Languages-title'>Languages</h2>
      <ul className='Languages-list'>
        {
          data.map((language, i) => {
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
  );
}


export default Languages;
