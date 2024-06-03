
function Card(){
  const imageUrl = './src/assets/profile.jpg';
  return(
    <div className="card">
         <img className="card-image" src={imageUrl} alt="profile picture"></img>
         <h2 className="card-title">akinadeDev</h2>
         <p className="card-text">I attend to software engineering services</p>
    </div> 
 );
}
export default Card


