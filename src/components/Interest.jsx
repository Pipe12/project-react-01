import React from 'react';

const Interest = ({ interest = Array(4).fill(1) }) => {

  return (
    <>
      {
        interest.length > 0 ?
          (
            <section className='Interest'>
              <h2 className='Interest-title'>Interest</h2>
              <ul className='Interest-list'>
                {
                  interest.map((item, i) => {
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
          ) :
          null
      }
    </>
  );

};

export default Interest;
