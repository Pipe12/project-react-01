import React from 'react';

const Profile = ({ Profile }) => (
  <section className='Profile'>
    <h2 className='Profile-title'>Profile</h2>
    <p className='Profile-desc'>
      {Profile}
    </p>
  </section>
);

export default Profile;
