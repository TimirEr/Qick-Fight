import "/src/style.css"
import React from 'react'


export default 
function AboutView(props){

    function jumpToEmailACB(email){
        window.location.href = `mailto:${email}`;
    }
 
    return(
<div className="about">
    <div className="aboutUs">
        <h1>About us</h1>
        <p>The Lion Does Not Turn Around When the Small Dog Barks</p>
        <p>Interaction Programmering and the Dynamic Web DH2642 project</p>
    </div>

    <h2 className="team">Our Team</h2>
    
    <div className="row">
        <div className="column">
            <div className="card">
                <img src="src/assets/salah.jpg" alt="alexP" className="image"/>
                <div className="person">
                    <h2>Salahudin Salah</h2>
                    <p className="title">Developer</p>
                    <p>Jesus eller Nunez? Ni skämtar!!!</p>
                    <p>sasalah@kth.se</p>
                    <p><button onClick={() => jumpToEmailACB("sasalah@kth.se")} className="button">Contact</button></p>
                </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
                <img src="src/assets/aliK.jpg" alt="ali" className="image"/>
                <div className="person">
                    <h2>Ali Kazimov</h2>
                    <p className="title">Developer</p>
                    <p>Ni är inte redo för min comeback!</p>
                    <p>kazimov@kth.se</p>
                    <p><button onClick={() => jumpToEmailACB("kazimov@kth.se")} className="button">Contact</button></p>
                </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
                <img src="src/assets/ziangw.jpg" alt="ziang" className="image"/>
                <div className="person">
                    <h2>Ziang Wang</h2>
                    <p className="title">Developer</p>
                    <p>Onana DIN MAMMA!</p>
                    <p>ziangw@kth.se</p>
                    <p><button onClick={() => jumpToEmailACB("ziangw@kth.se")} className="button">Contact</button></p>
                </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
                <img src="src/assets/ratimir.jpg" alt="ratimir" className="image"/>
                <div className="person">
                    <h2>Ratimir Ernman</h2>
                    <p className="title">Developer</p>
                    <p>Academic victim</p>
                    <p>ernman@kth.se</p>
                    <p><button onClick={() => jumpToEmailACB("ernman@kth.se")} className="button">Contact</button></p>
                </div>
            </div>
        </div>
    </div>

</div>
    
    
    
    
    
    

    


    );
}

 