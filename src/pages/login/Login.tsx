import { useState } from "react";
import { Box, Button, Card, CardActions, CardContent, CircularProgress, TextField, Typography } from "@mui/material";
import * as yup from 'yup';

import { useAuthContext } from "../../shared/contexts";
import FlexBox from "../../shared/components/divs/flexBox";
import { StorageService } from "../../shared/services/storage/storageService";


const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
})


export const Login: React.FC = () => {

  const { login } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmitLogin = () => {
    setIsLoading(true);
    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then(dadosValidados => {
        login(dadosValidados.email, dadosValidados.password)
          .then((data) => {
            setIsLoading(false);
            if (data.errors?.length > 0) {
              setPasswordError(data.errors[0])
            }
          });
      })
      .catch((errors: yup.ValidationError) => {
        setIsLoading(false);

        errors.inner.forEach(error => {
          if (error.path == 'email') {
            setEmailError(error.message);
          } else if (error.path == 'password') {
            setPasswordError(error.message);
          }
        });
      });
  };

  //anotação:  then() ====> é como se fosse um await


  function handleConsole() {
    const storage = new StorageService();
    console.log(storage.getToken());
  };

  return (
    <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center'>

      <Card>
        <CardContent>
          <Box display='flex' flexDirection='column' gap={2} width={250}>
            <Typography variant='h6' align='center'>Identifique-se</Typography>

            <TextField
              fullWidth
              type='email'
              label='Email'
              value={email}
              disabled={isLoading}
              error={!!emailError}
              helperText={emailError}
              onKeyDown={() => setEmailError('')}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label='Senha'
              type='password'
              value={password}
              disabled={isLoading}
              error={!!passwordError}
              helperText={passwordError}
              onKeyDown={() => setPasswordError('')}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
        </CardContent>

        <CardActions>
          <Box width='100%' display='flex' justifyContent='center'>

            <Button
              variant="contained"
              disabled={isLoading}
              onClick={handleSubmitLogin}
              endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
            >
              Entrar
            </Button >

          </Box>

          <FlexBox>
            <Button
              onClick={handleConsole}
            >
              console.log
            </Button>
          </FlexBox>
        </CardActions>
      </Card>
    </Box>
  );

};

