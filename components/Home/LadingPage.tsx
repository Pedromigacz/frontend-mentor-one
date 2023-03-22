import styled from 'styled-components';
import Image from 'next/image';
import {
  HeadingLarge,
  PrimaryButton,
  SectionInnerContainer,
} from '../shared/styled';
import PhoneImage from '../../public/Phone.png';

const LadingPage = (): JSX.Element => {
  return (
    <Section>
      <PurpleContainer>
        <SectionInnerContainer>
          <CustomHeadingLarge>
            Data <strong>tailored</strong> to your needs.
          </CustomHeadingLarge>
          <CustomPrimaryButton>Learn more</CustomPrimaryButton>
          <ImageContainer>
            <Image src={PhoneImage} alt='phone illustration' />
          </ImageContainer>
        </SectionInnerContainer>
      </PurpleContainer>
    </Section>
  );
};

const Section = styled.section`
  background-color: var(--ghost-white);
`;

const PurpleContainer = styled.div`
  background-color: var(--dark-purple);
`;

const CustomHeadingLarge = styled(HeadingLarge)`
  max-width: 635px;
  color: white;
  text-align: center;
  margin: 0 auto;
  padding-top: 5px;
  margin-bottom: 38px;

  strong {
    text-decoration: underline 3px solid var(--eucalyptus);
    text-underline-offset: 10px;
  }
`;

const CustomPrimaryButton = styled(PrimaryButton)`
  margin: 0 auto 50px auto;
  display: block;
`;

const ImageContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  img {
    /* margin: 0 auto;
    display: block; */
    margin-bottom: -233px;
  }
`;

export default LadingPage;
