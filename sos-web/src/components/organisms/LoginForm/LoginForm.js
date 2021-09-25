import { useState } from 'react';
import { Input } from '../../molecules/Input/Input';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import {
  StyledContainer,
  StyledLogo,
  StyledForm,
  StyledButtonHolder,
} from './LoginForm.styles';
import { useFetch } from '../../../hooks/useFetch';
import { Loader } from '../../atoms/Loader/Loader';
import { Button } from '../../molecules/Button/Button';
import { useHistory } from 'react-router';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { sendRequest, isLoading } = useFetch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    sendRequest('http://localhost:5000/api/Users/login', 'POST', {}, form)
      .then((response) => {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('email', response.email);
        history.push('/');
      })
      .catch((e) => {
        alert(e);
      });
  };

  const handleChange = ({ target }) => {
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <>
      <StyledContainer>
        <StyledLogo />
        <Heading type="h1" color="purple" textAlign="center">
          Dobrodošli!
        </Heading>
        <Paragraph type="medium" color="grey" textAlign="center">
          Unesite Vaše podate kako bi pristupili SOS aplikaciji.
        </Paragraph>
        <StyledForm>
          <Input
            label="Email*"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={form.email}
            disabled={isLoading}
            required
          />
          <Input
            label="Password*"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={form.password}
            disabled={isLoading}
            required
          />
          <StyledButtonHolder>
            {isLoading ? (
              <Loader />
            ) : (
              <Button type="submit" onClick={handleSubmit}>
                Prijavi se!
              </Button>
            )}
          </StyledButtonHolder>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default LoginForm;
