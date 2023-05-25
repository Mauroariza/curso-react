const Button = () => {
  return <button className="btn btn-primary">Click me</button>;
};

const App = () => {
  const title = "Mi título es una constante";
  const img = {
    link: "https://picsum.photos/id/237/200/300",
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
         {user ? "online":"offline"}
    </>
  );
};
export default App;
