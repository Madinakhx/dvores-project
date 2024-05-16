import React from 'react';
import "./index.css"
import school from '../../assets/logo/2024-05-16 15.53.26 2.jpg';
import About from "../About";


function Index(props) {
    return (
        <div className="content">
             <div className="text">
<p>Angren shahar sport qo‘mitasi tarkibida 4 ta sport maktabi faoliyat olib borgan (futbolga ixtisoslashtirilgan sport maktabi, o‘yin va yengil atletika sport maktabi, boks sport maktabi, yakka turlar sport maktabi).
    2004-yil Obliq sport majmuasi qurilib faoliyatini boshlagan.
    2013-yil birlashish natijasida Angren shahar xalq talimi bo‘limiga qarshli Angren shahar bolalar va o‘smirlar sport maktabi va Angren shahar 4-sonli bolalar va o‘smirlar sport maktabi tashkil etildi
    2020-yil 20-dekabrdan Angren shahri 2-son sport maktabi tashkil etildi.</p>
                 <button className={"textbtn"}>Batafsil</button>
             </div>
             <div className="photo">
                 <img src={school} alt=""/>
             </div>
            <About/>
        </div>
    );
}

export default Index;