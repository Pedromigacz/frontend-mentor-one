import styled from 'styled-components';

// components

export const HeadingLarge = styled.h1`
  font-family: 'Fraunces 144pt';
  font-weight: 600;
  font-size: 80px;
  line-height: 80px;
`;

export const HeadingMedium = styled.h2`
  font-family: 'Fraunces 144pt';
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
`;

export const HeadingSmall = styled.h3`
  font-family: 'Fraunces 144pt';
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
`;

export const BodyText = styled.p`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
`;

export const PrimaryButton = styled.button`
  color: var(--dark-purple);
  background-color: var(--eucalyptus);

  padding: 15px 25px 14px 25px;

  /* body text styles */
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;

  transition: 200ms;

  outline: 2px solid var(--eucalyptus);
  outline-offset: -2px;

  :hover {
    background-color: transparent;
    color: var(--eucalyptus);
  }
`;

export const SecondaryButton = styled.button`
  color: white;

  /* body text styles */
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;

  transition: 200ms;

  border-bottom: 3px solid var(--eucalyptus);

  :hover {
    color: var(--eucalyptus);
  }
`;
