
import hawai from "./assets/images/hawai.jpg";
const Button = () => {
  return <button className="btn btn-primary">Click me</button>;
};

const Texto = ()=>{
  
  const frutas = ["manzana","pera","piña","mango"];
  
  /**
   * en react debemos utilizar el índice en map porque react necesita saber que elemento se está modificando
   */

  return(
    <>
    <h1> Sí existe un usuario</h1>
    <ul>
      {
        frutas.map((fruta,index)=>(  
          <li key={index}>{fruta}</li>
        ))
      }
    </ul>
    </>
  ) 
  

}

const App = () => {
  const title = "Mi título es una constante";
  const img = {
    link: hawai,
    clase: "img-responsive",
  };
  const classColors = {
    primary:"text-primary",
    info:"text-info",

  }
  const user = false;
  

  return (
    <>
      <h1 className="text-center">
        Hola soy react {title.toLocaleUpperCase()}{" "}
      </h1>
      <img src={img.link} className={img.clase}  />
     {/**
      * <p className= {classColors.primary}{classColors.info}></p> esto es un error, ya que no se puede utilizar dos clases     
      * en una misma etiqueta, para eso se utiliza la interpolación de cadenas de texto, que es la siguiente:
      * <p className= {`${classColors.primary} ${classColors.info}`}></p>
      */ } 
    <p className= {`${classColors.info} ${classColors.primary}`}></p>
      
      <Button />{" "}
      {/**
         *  si se utiliza solo una etiqueta de button, no se incluye más contenido dentro de la etiqueta, para eso tendría
         que utilizar la etiqueta de cierre de Button </Button>
         */}
         {user ? "online":<Texto/>}
         
    </>
  );
};
export default App;


