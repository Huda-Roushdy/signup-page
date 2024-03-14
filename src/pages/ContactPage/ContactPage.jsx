import { Button } from 'react-bootstrap';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import './ContactPage.css';
const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    min-height:30%;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#53ACFF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
const ContactPage = ()=>{
    

return(
    <div className='Msglayout'>
        <div className='forBG row'>
        <div className="col-lg-6" >
            <div className='col-lg-8 descPart m-auto'>
                <div >
                <h5 className='highlight d-inline-block'>Say Hi To Street Suite</h5>
                <h1>Contact Us</h1>
                <p>Want to get in touch? We’re all ears, Let us <br /> know how we can help!</p>
                
                <div className="btns col-lg-5">
                <Button className='forbtn'>Yes, Lets Chat!</Button>
                <Button className='forbtn '>I Prefer to leave a message</Button>
                </div>
                
                <h3>Can’t Talk Right now?</h3>
                <div style={{display:"flex",justifyContent:'space-between'}}>
                    <div>
                    <h4>Catch us on </h4>
                <p>Sunday through Thursday</p>
                    </div>
                    <div className='col-lg-6'>
                    <h4>Between</h4>
                    <p>9-5 EST</p>
                </div>
                </div>
                <h4>Reach Us On</h4>
                
                <div className='containContactWays'>
                <div className='contactWays'>
                <img src="./mail.svg" />
                <span>stsuite@gmail.com</span>
                </div>
                <div className='contactWays'>
                <img src="./phone.svg"/>
                <span>+02  015698564</span>
                </div>
                </div>
                
                </div>
            </div>
            </div>
            <div className="col-lg-6">
                <div className="col-lg-8 forBorder m-auto">
                    <div className="formPart formBGMsg">
                        <div className='inForm'>
                        <div className='col-lg-9 m-auto'>
                            <div>
                            <h3>Welcome to <span className='highlight'>Street Suite!</span></h3>
                        <p style={{paddingBottom:'2rem'}}>Send Us a Message!</p>
                                    <FormControl className="gap-4">
            <div>
            <FormLabel required className='mb-1 labelfont'
            sx={{
            "& .MuiFormLabel-asterisk":{
                color:'white'
            }
            }}>Full Name</FormLabel>
            <Input
                name="fullname"
                type="text"
                placeholder="Enter your full name"
            />
            </div>

            <div>
            <FormLabel required className='mb-1 labelfont' sx={{
            "& .MuiFormLabel-asterisk":{
                color:'white'
            }
            }}>Email</FormLabel>
            <Input
                name="email"
                type="email"
                placeholder="Enter your email"
            />
            </div>

            <div>
            <FormLabel className='mb-1 labelfont'sx={{
            "& .MuiFormLabel-asterisk":{
                color:'white'
            }
            }}>Message</FormLabel>

            <TextareaAutosize aria-label="empty textarea" placeholder="......" />
            </div>
               

            </FormControl>
            <div className='btnContainer'> 
    <button type="button" className='btnColor'>Submit</button>
    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)

}

export default ContactPage