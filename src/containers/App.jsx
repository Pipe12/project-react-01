import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import '../styles/components/App.styl';

const API = 'http://localhost:3000/data';

function useData(_API) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(_API).then(response => setState(response));
  }, []);
  return state;
}
const App = () => {

  const resumeData = useData(API);

  return (
    <>
      <Header {...resumeData}>
        <About {...resumeData} />
      </Header>
      <Profile {...resumeData} />
      <Experience {...resumeData} />
      <Academic {...resumeData} />
      <Skills {...resumeData} />
      <Interest {...resumeData} />
      <Languages {...resumeData} />
    </>
  );
};

export default App;
