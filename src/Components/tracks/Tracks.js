import React,{Component} from 'react';

import {Consumer} from '../../Context';
import Track from './Track';

export class Tracks extends Component
{
    render()
    {
        return(


               <React.Fragment>
                   <Consumer>
                       {

                        (value)=>{

                            const {comments}= value;

                   

                            if(comments==="undefined")
                            {

                                
                                return <h2>Sad!! no data found , I am sandeep chowdary</h2>
                            }
                            else{

                                return(
                                    <React.Fragment>
                                            <h3 style={{textDecorationLine: "underline"}} className="text-center mb-4" > Top selected comments are  I am sandeep chowdary {comments.length} </h3>
                                    <div className="row">

                                    {
                                        comments.map(({id,name,email,body})=>{
                                            return(
                                                <>
                                                <Track key={id} id={id} name={name} email={email} body={body}/>
                                                </>
                                            )
                                        })
                                    }
                                     

                                    </div>


                                </React.Fragment>
                                )
                                
                            }
                        }                           
                       }

                   </Consumer>
                </React.Fragment>


        )
    }
}

