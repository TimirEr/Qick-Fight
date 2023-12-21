import "/src/style.css"
import React from 'react'


export default 
function AboutView(props){

    function jumpToEmailACB(email){
        window.location.href = `mailto:${email}`;
    }
 
    return(
<div className="about">
   
<br />
<h2> Group 36 </h2>
<br />
<div className="about_row">

<div className=" about_per1">
    <h4>Salahudin Salah</h4><br />
    <img src="src/assets/salah.jpg" alt="salah" className="about_image"/>
    <p>Developer</p>
    <p>sasalah@kth.se</p><br />
    <p><button onClick={() => jumpToEmailACB("kazimov@kth.se")} >Contact</button></p>
</div>

<div className=" about_per2">
    <h4>Ali Kazimov</h4><br />
    <img src="src/assets/aliK.jpg" alt="aliK" className="about_image"/>
    <p>Developer</p>
    <p>kazimov@kth.se</p><br />
    <p><button onClick={() => jumpToEmailACB("kazimov@kth.se")} >Contact</button></p>


</div>

<div className=" about_per3">
    {/*<div className="about_per3_image"> akskaksakks</div>*/}
    
    <h4>Ziang Wang</h4><br />
    <img src="src/assets/ziangw.jpg" alt="ziangw" className="about_image"/>
    <p>Group Leader & Developer</p>
    <p>ziangw@kth.se</p><br />
    <p><button onClick={() => jumpToEmailACB("kazimov@kth.se")} >Contact</button></p>

</div>

<div className=" about_per4">
    <h4>Ratimir Ernman</h4><br />
    <img src="src/assets/ratimir.jpg" alt="ratimir" className="about_image"/>
    <p>Co Leader & Developer</p>
    <p>ernman@kth.se</p><br />
    <p><button onClick={() => jumpToEmailACB("kazimov@kth.se")} >Contact</button></p>
    
</div>
</div>

</div>

    );
}

 