import React from 'react';
import './ProgressLine.css';

type ProgressLineProps = {
  totalSteps: number;
  currentStep: number;
};

const ProgressLine: React.FC<ProgressLineProps> = ({ totalSteps, currentStep }) => {
  const stepWidth = 100 / totalSteps;
  const progressWidth = stepWidth * currentStep;

  return (
    <div className="progress-line-container">
      <div
        className="progress-line-filled"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressLine;