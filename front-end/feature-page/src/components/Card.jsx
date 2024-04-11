import img1 from './images/expense.jpg';
import img2 from './images/img4.jpg';
import img3 from './images/img5.jpg';
import img4 from './images/weather.jpg';
import img5 from './images/number.jpg';
function Card(){
  return(
    <div>
      <div className='container'>
     <div className='card'>
      <img src={img1} alt="loading" className='card-img' />
    </div>
    <div className='content'>
      <h1 className='h1-card'>Expense Calculator</h1>
      
      <div className='p-card'>Pack your bags, we're off on an adventure! Our itinerary feature not only plans your journey but also calculates expenses with precision</div>
    </div>

    <div className='card'>
      <img src={img2} alt="loading" className='card-img' />
    </div>
    <div className='content'>
      <h1 className='h1-card'>Movie Trail</h1>
      <p className='p-card'>Pack your bags, we're off on an adventure! Our itinerary feature not only plans your journey but also calculates expenses with precision</p>
    </div>

    <div className='card'>
      <img src={img3} alt="loading" className='card-img' />
    </div>
    <div className='content'>
      <h1 className='h1-card'>Add Places</h1>
      <p className='p-card'>Explore the world, one destination at a time. Add new places effortlessly with our intuitive itinerary planner</p>
    </div>
    </div> 

    <div className='mini-container'>
     <div className='card'>
      <img src={img4} alt="loading" className='card-img' />
    </div>
    <div className='content'>
      <h1 className='h1-mini'>Weather Changes</h1>
      <p className='p-mini'>Plan your adventures with ease,
With weather forecasts, never miss a breeze</p>
    </div>

    <div className='card'>
      <img src={img5} alt="loading" className='card-img' />
    </div>
    <div className='content'>
      <h1 className='h1-mini'>Emergency Contact</h1>
      <p className='p-mini'>Stay safe wherever you roam,
Emergency contacts bring you home</p>
    </div>
   </div>
  </div> 
  );
};
export default Card; 
