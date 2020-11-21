import React from 'react';

const Academic = ({ Academic = Array(2).fill(1) }) => {

  return (
    <>
      {
        Academic.length > 0 ?
          (
            <section className='Academic'>
              <h2 className='Academic-title'>
                Education
              </h2>
              <ul className='Academic-list'>
                {
                  Academic.map((item, i) => (
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
          ) :
          null
      }
    </>
  );
};

export default Academic;
