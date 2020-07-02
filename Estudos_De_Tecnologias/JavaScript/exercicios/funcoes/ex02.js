function trian(x,y,z){
    if(x+y<z||x+z<y||z+y<x){
        console.log('impossivel formar uma triangulo');
        
    }else if(x+y==z||x+z==y||y+z==x){
        console.log('é uma reta');
                
    }
    else if(x==y&&y==z){
        console.log('triagulo é equilatero');
        
    }else if(y==x||x==z||y==z){
        console.log('triangulo isoceles');
        
    }else{
        console.log('triangulo escaleno ');
        
    }
}
trian(4,4,4)
