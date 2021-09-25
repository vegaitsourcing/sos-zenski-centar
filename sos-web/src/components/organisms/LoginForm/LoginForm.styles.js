import styled from 'styled-components';
import { Container } from '../../layout/Container';
import { Button } from '../../molecules/Button/Button';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
  padding: 50px;

  svg {
    margin-bottom: 20px;
  }

  h1 {
    position: relative;
    margin-bottom: 40px;

    &::after {
      content: '';
      position: absolute;
      top: calc(100% + 20px);
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      width: 47px;
      background-color: #57415f;
    }
  }

  p {
    margin-bottom: 20px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  margin: 20px auto 0;
`;
