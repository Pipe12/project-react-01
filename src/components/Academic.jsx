import React from 'react';

const Academic = ({ Academic }) => {
  // console.log(Academic);
  const data = Academic || Array(2).fill(1);; //por que sin esto no funciona.
  // console.log(data);
  return (
    <section className='Academic'>
      <h2 className='Academic-title'>
        Education
      </h2>
      <ul className='Academic-list'>
        {
          data.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className='Academic-item' key={i}>
              <h3>
                {item.degree}
              </h3>
              <div className='Academic-date'>
                <time>{item.startDate}</time>
                to
                <time>{item.endDate}</time>
              </div>
              <p className='Academic-institution'>
                {item.institution}
              </p>
              <p className='Academic-descroption'>
                {item.description}
              </p>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Academic;
