import React from 'react';
import DigitalIdCard from './DigitalIdCard';
import QRCodeImage from './assets/download.png'; 
import UniversityStrip from './assets/tsu.jpg';

const student = {
  stuid: 'T00647864',
  name: 'Jamyaha Cleckley',
  diningDollars: '200.00',
  classification: 'Senior',
  photoUrl: 'https://i.postimg.cc/4dRvz9Bp/IMG-9161.jpg',
  qrCodeUrl: QRCodeImage,
};

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
      <DigitalIdCard student={student} />
    </div>
  );
}

export default App;


