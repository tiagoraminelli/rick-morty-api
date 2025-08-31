
function getUserName(name){
  if(name){
    return <h1>{`Bienvenido a React ${name} que lo disfrutes!!`}</h1>
  }
  else{
    return <h1>{`Bienvenido a React desconocido que lo disfrutes!!`}</h1>
  }
}

export default getUserName;