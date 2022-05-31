import React from 'react'
import { Card } from 'react-bootstrap'
import Tourr from './Tourr'
function Tour(props) {
  return (
  <>
  
    <Card style={{alignItems:"center",backgroundColor:"cadetblue"}}><b><h2 style={{color:"coral"}} >Our Tour</h2></b></Card>
    <br/>
    <div>{
props.Tour.map((tour)=>{
    return(
        <Tourr key={tour.id} {...tour} removeTour={props.removeTour}/>
    )
})
}
    </div>
</>
  )
}

export default Tour