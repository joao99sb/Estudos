import React,{useState} from 'react'

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
    
    if(novo == ''){
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