import Card from "./Card";
import Card2 from "./Card2";
import "../assets/styles/contacto.css";
import '../assets/styles/header.css'

function Contacto() {
  const user = [
    {
      titulo: "Nombre:",
    },
    {
      titulo: "Apellidos:",
    },
    {
      titulo: "Correo:",
    },
    {
      titulo: "Contraseña:",
    },
    {
      titulo: "Confirmar contraseña:",
    },
    {
      titulo: "Dirección:",
    },
    {
      titulo: "Nacionalidad:",
    },
    {
      titulo: "Numero de telefono:",
    }
  ];

  return (
    <div className="containerContact-p">
    <div className="containerContact">
      <h1 className="containerContact-header" >Registro</h1>
      <div className="containerContact-main">
        {user.map((user) => {
          return <Card titulo={user.titulo} />
        })}
        <Card2></Card2>
      </div>
    </div>
    </div>
  );
}

export default Contacto;