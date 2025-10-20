import React from 'react';
import DigitalIdCard from './DigitalIdCard';

const student = {
  stuid: '12345',
  name: 'Jamyaha Cleckley',
  college: 'Tennessee State University',
  gender: 'Female',
  dob: '01/01/2000',
  photoUrl: 'https://i.postimg.cc/4dRvz9Bp/IMG-9161.jpg',
};

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
      <DigitalIdCard student={student} />
    </div>
  );
}

export default App;
