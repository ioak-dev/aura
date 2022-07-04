import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import './style.scss';
import auraWhiteSmall from '../../images/aura_white_small.svg';
import auraWhiteText from '../../images/aura_white_text.svg';
import auraBlackSmall from '../../images/aura_black_small.svg';
import auraBlackText from '../../images/aura_black_text.svg';
import auraBlack from '../../images/aura_black.svg';

interface Props {
  variant: 'full' | 'short';
}

const Logo = (props: Props) => {
  const authorization = useSelector((state: any) => state.authorization);

  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  return (
    <div className="logo">
      <div className="logo--image">
        {profile.theme === 'theme_light' && (
          <img src={auraWhiteSmall} alt="Fortuna logo" />
        )}
        {profile.theme !== 'theme_light' && (
          <img src={auraWhiteSmall} alt="Fortuna logo" />
        )}
      </div>
      {props.variant === 'full' && (
        <div className="logo--text">
          <img src={auraWhiteText} alt="Fortuna logo" />
        </div>
      )}
    </div>
  );
};

export default Logo;
