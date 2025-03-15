import logo from './Baller.jpg';
import bodey from './phone.png';
import './App.css';

function App(props) {
  const name=props.name


  return (
    <div className="App">
      
      <header className="App-header">
          <p>
            baller
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=xFYQQPAOz7Y&ab_channel=EminemMusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lose Yourself
          </a>
          <iframe className='youtube' src="https://www.youtube.com/embed/jQAl4kUFdOg" title="Video offers shocking glimpse into flooded Richmond Water Treatment Plant" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <img src={bodey} className='bodey'/>
        </header>
        <div className="background">
        </div>
    </div>
  );
}

export default App;
