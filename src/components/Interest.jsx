import React from 'react';

const Interest = ({ interest }) => {
  // console.log(interest);
  const data = interest || Array(4).fill(1);; //por que sin esto no funciona.
  // console.log(data);
  return (
    <section className='Interest'>
      <h2 className='Interest-title'>Interest</h2>
      <ul className='Interest-list'>
        {
          data.map((item, i) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i} className='Interest-item'>
                {item}
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

export default Interest;
