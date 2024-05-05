import { useState } from 'react';
import BodyContainer from '../../Common/BodyContainer/BodyContainer';

const ProgressBar = () => {
  return (
    <div className="h-full pt-[80px]">
      <BodyContainer heading="List of Recipes" whiteHeading rootClassName={'h-full'}>
        <div className="flex pb-[110px] pt-[20px]"></div>
      </BodyContainer>
    </div>
  );
};

export default ProgressBar;
