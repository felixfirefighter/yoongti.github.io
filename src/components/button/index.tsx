



import React from 'react';
import './index.scss';

interface IButton {
  text: string;
  onClick(): void;
}

const Button: React.FC<IButton> = ({ text, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
