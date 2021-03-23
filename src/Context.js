import React,{Component} from 'react';
import axios from 'axios';

const Context= React.createContext();

export class Provider extends Component{

     state={
         comments:[]
     }

     componentDidMount()
     {
       axios.get('https://jsonplaceholder.typicode.com/comments')
       .then((a)=>{
           
           this.setState({
               comments:a.data
           })
       })
       .catch((e)=>{
           console.log(e);
       })
     }

    render()
    {
        return(

    <Context.Provider value={this.state}>
        {
         this.props.children
        }
    </Context.Provider>


        )
    }


}

export const Consumer= Context.Consumer;