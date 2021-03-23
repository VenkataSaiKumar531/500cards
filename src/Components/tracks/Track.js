import React from 'react';
import {Link  } from "react-router-dom";

const Track =({id,name,email,body})=>{


    return(
        <React.Fragment>
        
               <div className="col-md-6" >

                                   <div className="card mb-4 sshadow p-3 mb-5 bg-primary rounded">

                                        <div className="card-body">
                                            
                                           <h3 style={{color:"white"}}>Name:-{name}</h3>
                                           <h4 style={{color:"pink"}}>User Id {id}</h4>
                                            <p style={{color:"white"}} className="far fa-envelope" >:{email}</p> 
                                            <h6>{body}</h6>
                                            <div className="card-text">
                                            <Link to= {{

                                                pathName:"/More",
                                                state:{
                                                    name:"Sai",
                                                    age:25,
                                                    place:"Annadevarapeta"
                                                }
                                             
                                            }}> Click me once</Link> 

{/* <Link to='/More'> More</Link> */}
                                          
                                            
                                                 
                                            </div>

                                           
                                        

                                        </div>

                                    </div>


               </div>

        </React.Fragment>
    )
}

export default Track;


// {
//     
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   }

// {{
//     pathName:"/More",
//    aboutProps:{
//  name:"Venkata Sai Kumar Injaraput"
// }

// }}


{/* <Link 
              to={{
                pathname: `/hello/${this.state.nextPage}`, 
                query:{thing: 'asdf', another1: 'stuff'}
              }}>
              Home 1
            </Link> */}


            // <Link to='/More'> More</Link>