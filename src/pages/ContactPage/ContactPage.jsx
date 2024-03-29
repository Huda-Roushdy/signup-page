import { Button } from 'react-bootstrap';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import './ContactPage.css';
import FormComponent from '../../components/FormComponent';

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
                            <FormComponent purpose='Send Us a Message!' label1='Full Name' label2='Email' label3='Message' btnTxt='Submit' needCheckbox={false} textArea={true}/>
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