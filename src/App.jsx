import './App.css';
import SignupCard from './components/SignupCard/signup';

function App() {

  return (
  <div className='layout row'>
    <div className='desc col-md-6'>

      
      <div className="content col-md-7 m-auto" style={{position:'relative'}}>
        <div style={{position:'absolute',left:'-2rem',top:'-6rem'}} >
        <img src="./street suite logo-04 1.svg" />
        </div>
      <h3>Hello! <br />
      Let's get started with <br />
      your 14 Day <span className='highlight'>FREE Trial</span></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum vel deserunt debitis, tenetur molestiae veniam ad perspiciatis aperiam, exercitationem.</p>
      </div>


    </div>
    <div className=' col-md-6'>
      <div className='col-md-11 testCenter '>
        <SignupCard/>

    </div>

    
      


    </div>

   
  </div>
  )
}

export default App
