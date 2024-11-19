import  { useState } from 'react';
import { 
  Button, 
  TextField, 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Container, 
  Box,
  IconButton,
  InputAdornment
} from '@mui/material';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { styled } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import PetsIcon from '@mui/icons-material/Pets';
import AccountCircle from '@mui/icons-material/AccountCircle';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const GradientBackground = styled('div')({
  minHeight: '100vh',
  background: 'linear-gradient(to bottom right, #e0c3fc, #8ec5fc)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});   

const AnimatedPawPrint = styled(PetsIcon)({
  textColor: 'red',
  animation: 'bounce 2s infinite',
  '@keyframes bounce': {
    '0%, 100%': { transform: 'translateY(10)' },
    '50%': { transform: 'translateY(-10px)' },
  },
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Handle login logic here   
  //   console.log('Login attempted with:', email, password);
  // };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <GradientBackground>
      <Container component="main" maxWidth="xs">
        <Card sx={{ mt: 8, mb: 8, borderRadius: 2, boxShadow: 3, backgroundColor:"#FEAE6F" }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <AnimatedPawPrint sx={{ m: 1, fontSize: 40, color: '#1E3E62' }} />
              <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                Mascotas Login
              </Typography>
              <form   style={{  width: '100%' }}>
                <TextField
                // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  placeholder='cuidatumascota@gmail.com'
                  value={email}
                  sx={{backgroundColor: 'transparent'}}
                  onChange={(e) => setEmail(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">
                                <Person2OutlinedIcon />
                              </InputAdornment>
                    },
                  }}
                />

                <TextField
                // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  placeholder='********'
                  onChange={(e) => setPassword(e.target.value)}
                  slotProps={{

                     input: {
                      startAdornment: (
                      <InputAdornment position="start">
                                <LockIcon />
                              </InputAdornment>
                      ),
                      endAdornment: (  
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>),
                    },

                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#1E3E62', mt: 3, mb: 2 }}
                  startIcon={<AccountCircle />}
                >
                  Iniciar sesión
                </Button>
              </form>

            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              ¿No tienes una cuenta? <a href="#" style={{ color: 'inherit', fontWeight: 'bold' }}>click aqui</a>
            </Typography>
          </CardActions>
        </Card>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap:5, width: '100%', alignItems:"center"}}>
          {[...Array(3)].map((_, index) => (
            <AnimatedPawPrint key={index} sx={{ color: '#1E3E62', fontSize: 30, animationDelay: `${index * 0.5}s` }} />
          ))}
        </Box>
      </Container>
    </GradientBackground>
  );
}