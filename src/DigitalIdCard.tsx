import React, { useState } from 'react';

interface Student {
  stuid: string;
  name: string;
  college: string;
  gender: string;
  dob: string;
  age?: string;
  bloodgroup: string;
  photoUrl?: string;
}

const TSULogo =
  'https://www.tnstate.edu/publications/images/Logo_BlueOnWhite_2170w.png'; // public logo
const PHOTO_PLACEHOLDER = 'https://via.placeholder.com/120x120.png?text=Photo';

const DigitalIdCard: React.FC<{ student: Student }> = ({ student }) => {
  const [photoError, setPhotoError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Use Google Chart API for QR image (no extra packages)
  const qrData = `T-Number:${student.stuid}`;
  const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=${encodeURIComponent(
    qrData
  )}`;

  const photoSrc =
    !photoError && student.photoUrl ? student.photoUrl : PHOTO_PLACEHOLDER;

  return (
    <div
      style={{
        width: '360px',
        height: '220px',
        borderRadius: '12px',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
        border: '1px solid #ddd',
        position: 'relative',
        background: '#fff',
      }}
    >
      {/* colored header stripe */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '18px',
          backgroundColor: '#003366', // TSU-dark
        }}
      />

      {/* left: photo + college */}
      <div
        style={{
          width: '36%',
          padding: '20px 25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#f5f7fb',
        }}
      >
        <img
          src={photoSrc}
          alt="student"
          onError={() => setPhotoError(true)}
          style={{
            width: '100%',
            height: '118px',
            objectFit: 'cover',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />
        <div
          style={{
            marginTop: '8px',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '12px',
            color: '#002244',
          }}
        >
          {student.college}
        </div>
      </div>

      {/* right: info + QR + TSU logo */}
      <div
        style={{
          width: '64%',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* TSU logo (top-right) */}
        {!logoError && (
          <img
            src={TSULogo}
            alt="TSU logo"
            onError={() => setLogoError(true)}
            style={{
              width: '48px',
              position: 'absolute',
              top: '8px',
              right: '8px',
              objectFit: 'contain',
            }}
          />
        )}

        <div style={{ paddingRight: '8px' }}>
          <div
            style={{ fontSize: '16px', fontWeight: 800, marginBottom: '6px' }}
          >
            {student.name}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '8px',
              fontSize: '13px',
            }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>ID</div>
              <div>{student.stuid}</div>
            </div>

            <div>
              <div style={{ fontWeight: 700 }}>Gender</div>
              <div>{student.gender}</div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '8px',
              marginTop: '8px',
              fontSize: '13px',
            }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>DOB</div>
              <div>{student.dob}</div>
            </div>

            <div>
              <div style={{ fontWeight: 700 }}>Blood</div>
              <div>{student.bloodgroup}</div>
            </div>
          </div>
        </div>

        {/* QR code bottom-right */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <img
            src={qrUrl}
            alt="QR code"
            style={{ width: 64, height: 64, borderRadius: 4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalIdCard;
