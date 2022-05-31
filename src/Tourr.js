import React, { useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap';

function Tourr({image,name,id,info,price,removeTour}) {
    const [readMore,setReadmore]=useState(false);
  return (
    <div>
        <Card  style={{alignItems:"center",color:"cadetblue"}}>
<img src={image} alt='no image'/>
<h4>{name}</h4>
<h4>{readMore?info:`${info.substring(0,100)}...`}</h4>
<button className="btn btn-primary" style={{width:"110px"}} onClick={()=>setReadmore(!readMore)}><h6>{readMore?"showLess":"showMore"}</h6></button>

price:{price}
<button className="btn btn-success" style={{width:"160px"}} onClick={()=>removeTour(id)}>Not intrested</button>
        </Card>
    </div>
  )
}

export default Tourr