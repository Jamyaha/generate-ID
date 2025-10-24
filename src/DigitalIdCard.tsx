import React, { useState } from 'react';
import './DigitalIdCard.css';

interface Student {
  stuid: string;
  name: string;
  diningDollars: string;
  classification: string;
  photoUrl?: string;
  qrCodeUrl?: string; // optional QR code image
}

const TSULogo = 'https://www.tnstate.edu/publications/images/Logo_BlueOnWhite_2170w.png';
const PHOTO_PLACEHOLDER = 'https://via.placeholder.com/120.png?text=Photo';
const QR_PLACEHOLDER = 'https://via.placeholder.com/80.png?text=QR'; // filler QR code

const DigitalIdCard: React.FC<{ student: Student }> = ({ student }) => {
  const [photoError, setPhotoError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const photoSrc = !photoError && student.photoUrl ? student.photoUrl : PHOTO_PLACEHOLDER;
  const qrSrc = student.qrCodeUrl || QR_PLACEHOLDER; // use filler QR if none provided

  return (
    <div className="tsu-id-card">
      {/* Header with TSU logo and background */}
      <div className="tsu-card-header">
        {!logoError && <img src={TSULogo} alt="TSU Logo" className="tsu-logo" onError={() => setLogoError(true)} />}
      </div>

      {/* Circular student photo */}
      <div className="tsu-photo-container">
        <img src={photoSrc} alt="student" onError={() => setPhotoError(true)} className="tsu-student-photo" />
      </div>

      {/* Student name & role */}
      <div className="tsu-student-info">
        <div className="tsu-student-name">{student.name}</div>
        <div className="tsu-student-role">Student</div>
      </div>

      {/* Account balances */}
      <div className="tsu-student-balances">
        <div>
          <div className="balance-label">DINING DOLLARS</div>
          <div className="balance-value">${student.diningDollars}</div>
        </div>
        <div>
          <div className="balance-label">T-NUMBER</div>
          <div className="balance-value">{student.stuid}</div>
        </div>
        <div>
          <div className="balance-label">CLASSIFICATION</div>
          <div className="balance-value">{student.classification}</div>
        </div>
      </div>

      {/* Filler QR Code */}
      <div className="tsu-qr-container">
        <img
          src={student.qrCodeUrl || 'https://via.placeholder.com/80.png?text=QR'}
          alt="QR Code"
          style={{ width: '100%', height: '100%' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80.png?text=QR';
        }}
      />
    </div>
  </div>
  );
};

export default DigitalIdCard;

