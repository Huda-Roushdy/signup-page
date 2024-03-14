import SignupCard from "../../components/SignupCard/signup";
import './SignupPage.css';
const SignupPage = ()=>{
    return(
        <div className='Signuplayout row'>
        <div className='desc col-lg-6'>
    
          
          <div className="content col-md-7 m-auto" >
            <div className='logoDiv'>
            <img src="./street suite logo-04 1.svg" />
            </div>
          <h3>Hello! <br />
          Let's get started with <br />
          your 14 Day <span className='highlight'>FREE Trial</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum vel deserunt debitis, tenetur molestiae veniam ad perspiciatis aperiam, exercitationem.</p>
          </div>
    
    
        </div>
        <div className=' col-lg-6'>
          <div className='col-md-11 testCenter '>
            <SignupCard/>
    
        </div>
        </div>
       
      </div>

    )
}

export default SignupPage