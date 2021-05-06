<template>
  <div class="main">
        <div class="logo"/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="intro"> 
          <blockquote> 
            <h1>Hello World<br/></h1>
      
              I was first exposed to the power of computer science in elementary school. The onjective was creating a webpage 
              with HTML/CSS. In high school I continued this path by taking cs courses to further my understanding of the cs field. Fastforward 
              and now I have a BS in Compuer Science from the University of Texas at El Paso with a minor in Mathematics. This website 
              is an ode to my first webpage created in elementary school. 
              
          </blockquote>
        </div> <br/>

        <div class="contact">
          <h3> Contact Info:</h3>
          <ul>
            <li><a href="https://github.com/JacobpaDILLAA" target="_blank" rel="noopener"> GITHUB: JacobpaDILLAA</a></li>
            <li> EMAIL: Jacobpadilla41@gmail.com  </li>
          </ul>
        </div>
        <!-- TODO:
          
        <div class="news-link"> In here will be the link to news page </div> <br/>
        <div class="Resume"> Here will be a pop up of resume and an option to download </div> <br/> 
        
        -->
  </div>
</template>

<!--limit CSS -->
<style scoped>
  
  /* .sub-body{
    position:absolute;
    left:50%;
    top:50%;
    margin-top:-20px;
    margin-left:-50px;
  } */

.logo{
  border-radius: 25px;
  padding: 20px;
  border: 1px solid rgb(255, 255, 255);
  height: 50px;
  width: 19px;
  background: url(../images/home-button.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: fixed;
  top: 10px;
  right: 50%;
}
.intro{
  text-align: center;
  font-family: Chalkduster, fantasy;
  width: 30rem;
  height: 20rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
}
.intro::before{
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  filter: blur(10px);
  margin: -20px;
}
.contact{
  text-align: center;
  font-family: Chalkduster, fantasy;
  width: 30rem;
  height: 8rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 15px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
}
.contact::before{
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  filter: blur(10px);
  margin: -20px;
}
h3 {
  color: #42b983;
  margin: 40px 0 0;
}
ul {
  color: #42b983;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
