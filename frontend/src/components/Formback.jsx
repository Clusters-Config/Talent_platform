import React from 'react';
import styled from 'styled-components';

const Formback = ({ children }) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: radial-gradient(
    circle at 50% 50%,
    #0000 0,
    #0000 2px,
    hsl(0 0 4%) 2px
  );
  background-size: 8px 8px;
  animation: hi 150s linear infinite;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    backdrop-filter: blur(1em) brightness(6);
    background-image: radial-gradient(
      circle at 50% 50%,
      #0000 0,
      #0000 2px,
      hsl(0 0 4%) 2px
    );
    background-size: 8px 8px;
  }

  @keyframes hi {
    0% {
      background-position:
        0px 220px,
        3px 220px,
        151.5px 337.5px,
        25px 24px,
        28px 24px,
        176.5px 150px,
        50px 16px,
        53px 16px,
        201.5px 91px,
        75px 224px,
        78px 224px,
        226.5px 350.5px,
        100px 19px,
        103px 19px,
        251.5px 121px,
        125px 120px,
        128px 120px,
        276.5px 187px,
        150px 31px,
        153px 31px,
        301.5px 120.5px,
        175px 235px,
        178px 235px,
        326.5px 384.5px,
        200px 121px,
        203px 121px,
        351.5px 228.5px,
        225px 224px,
        228px 224px,
        376.5px 364.5px,
        250px 26px,
        253px 26px,
        401.5px 105px,
        275px 75px,
        278px 75px,
        426.5px 180px;
    }

    to {
      background-position:
        0px 6800px,
        3px 6800px,
        151.5px 6917.5px,
        25px 13632px,
        28px 13632px,
        176.5px 13758px,
        50px 5416px,
        53px 5416px,
        201.5px 5491px,
        75px 17175px,
        78px 17175px,
        226.5px 17301.5px,
        100px 5119px,
        103px 5119px,
        251.5px 5221px,
        125px 8428px,
        128px 8428px,
        276.5px 8495px,
        150px 9876px,
        153px 9876px,
        301.5px 9965.5px,
        175px 13391px,
        178px 13391px,
        326.5px 13540.5px,
        200px 14741px,
        203px 14741px,
        351.5px 14848.5px,
        225px 18770px,
        228px 18770px,
        376.5px 18910.5px,
        250px 5082px,
        253px 5082px,
        401.5px 5161px,
        275px 6375px,
        278px 6375px,
        426.5px 6480px;
    }
  }
`;

export default Formback;