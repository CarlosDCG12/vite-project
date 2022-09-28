import Card from "./Card";
import "../assets/styles/contacto.css";
import linkin from "../assets/imgs/imagen1.svg";
import green from "../assets/imgs/imagen2.svg";
import skillet from "../assets/imgs/imagen3.svg";
import three from "../assets/imgs/imagen4.svg";
import red from "../assets/imgs/imagen5.svg"
import '../assets/styles/header.css'

function Contacto() {
  const user = [
    {
      song: "In The End",
      rockBand: "Likin Park",
      album: "Hybrid Theory",
      logo: <img src={linkin}/>
    },
    {
      song: "Boulevard Of Brokens Dreams",
      rockBand: "Green Day",
      album: "American idiot",
      logo: <img src={green}/>
    },
    {
      song: "Monster",
      rockBand: "Skillet",
      album: "Awake",
      logo: <img src={skillet}/>
    },
    {
      song: "Animal I Have Become",
      rockBand: "Three Days Grace",
      album: "One-X",
      logo: <img src={three}/>
    },
    {
      song: "Otherside",
      rockBand: "Red Hot Chili Peppers",
      album: "Californication",
      logo: <img src={red}/>
    }
  ];

  return (
    <div className="containerContact-p">
    <div className="containerContact">
      <h1 className="containerContact-header" >Canciones</h1>
      <div className="containerContact-main">
        <table>
          <tr>
          </tr>
        </table>
        {user.map((user) => {
         return <Card logo={user.logo} song={user.song} rockband={user.rockBand} albuM ={user.album}/>
        })}
      </div>
    </div>
    </div>
  );
}

export default Contacto;