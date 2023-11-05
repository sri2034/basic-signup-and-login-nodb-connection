import { useState } from 'react';
import logo from '../logo.svg'
import { Box , TextField,Button,styled,Typography} from '@mui/material';

const Component = styled(Box)`
width: 400px;
margin:auto ;
box-shadow: 5px 2px 5px 2px rgb(0 0 0 /0.6 );

`;

const Image = styled('img')(
 {width :150,
  margin:'auto',
  display: 'flex',
  padding:50

 }
);

const Wrapper = styled(Box)`
padding : 25px 35px;
display: flex;
flex : 1;
flex-direction:column;
& > div , & > button , & > p{
 margin-top: 20px;
} 
`;

const LoginButton = styled(Button)`
text-transform : none;
background:'orange';
color: #fff;
height: 40px;
border-radius: 5px;
`;

const SigninButton = styled(Button)`
text-transform : none;
background:'';
color: #2874f0;
height: 40px;
border-radius: 5px;
box-shadow: 0 2px 5px 0 rgb(0 0 0 /20%);
`;

const Text = styled(Typography)`
color:#0000FF;
font-size: 16px;
`
const Login = ()  => {

 const [account,toggleAccount] = useState('login');

 const toogleSignup = () =>{
  account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
 }
 return(
  
  <Component>
   <Box>
    <Image src={logo} alt="logo"  />
    {
          account === 'login' ? 
          <Wrapper> 
            <TextField label="Enter Name" variant="standard" />
            <TextField label="Enter Password" variant="standard" />
            <LoginButton variant= "contained"> Login</LoginButton>
            <Text style={{textAlign:'center'}}>OR</Text>
            <SigninButton onClick={() => toogleSignup()}> create an account</SigninButton>
          </Wrapper>
         :
    <Wrapper> 
      <TextField label="Enter Your Name" variant="standard" />
      <TextField label="Enter User Name" variant="standard" />
      <TextField label="Enter New Password" variant="standard" />
      <SigninButton > SignUp</SigninButton>
      <Text style={{textAlign:'center'}}>OR</Text>
      <LoginButton variant= "contained" onClick={() => toogleSignup()}> Aready have an account</LoginButton>
    </Wrapper>
}
    </Box>

  </Component>
 )
}

export default Login;