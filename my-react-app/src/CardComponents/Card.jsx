import profilepic from './assets/Profile.jpg'

function Card(){
  return(
    <div className="card">
         <img className="card-image" src={profilepic} alt="profile picture"></img>
         <h2 className="card-title">akinadeDev</h2>
         <p className="card-text">I attend to software engineering services</p>
    </div> 
 );
}
export default Card