import { useEffect, useState } from 'react';
import Loading from './Loading'
import Tours from "./Tour";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';

const url="http://localhost:5000/tours"
function App() {
  const [loading,setLoading]=useState(false);
  const[tours,setTour]=useState([]);
  const removeTour=(id)=>{
const updatedTours=tours.filter((tour)=>tour.id!=id);
setTour(updatedTours)
  }
  const fetchTour=async()=>{
    setLoading(true);
    try{
      const response=await fetch(url);
      const tours=await response.json();
      setTour(tours);
      setLoading(false);
    }
    catch(error){
      setLoading(false);
      console.log(error)
    }
  }
  useEffect(()=>{
fetchTour();
  },[])
  if(loading){
    return(
      <div>
        <Loading/>
      </div>
    )
  }
  if(tours.length===0){
    return(
      <div>
        <Card style={{alignItems:"center",color:"cadetblue"}}>

        <h3>No tours remaining for this season</h3>
    
      <button className="btn btn-danger"onClick={()=>fetchTour()}>relaod</button>
        </Card>
     
      </div>
    )
  }
  return (
    <div className="App">
      <Tours Tour={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
