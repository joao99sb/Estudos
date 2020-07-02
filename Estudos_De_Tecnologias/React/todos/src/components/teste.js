import React,{useState} from 'react'
import propTypes from 'prop-types'


export default function NewIncident(){

    const [novo,setNovo]=useState('') 
    const  [tech,setTech]=useState([
        'node',
        'express'
    ])

    
    

    function seila(e){
        e.preventDefault()
        setNovo(e.target.value)
        
    }

    function adicionar(e){
        e.preventDefault()
        
        if(novo == '' ){
           return alert('favort inserir algum valor')
        }
        let apoio = [...tech, novo]
        setTech(apoio) 
        setNovo('')
    
    }

    function deletar(x){
        let apoio = tech.filter(t => t!== x)
        setTech(apoio)
    }



    return(
        
    
        <>
            <form onSubmit={adicionar}>

                <ul> 
                    {tech.map(i => <li key={i}>
                        {i}
                        <button onClick={() => deletar(i)}>delete</button>
                        </li>
                    )} 
                    <input type="text" onChange={seila} value={novo} /> 
                </ul>  
                <button type="submit">adicionar</button>
            </form>
        </> 
        
    )
}