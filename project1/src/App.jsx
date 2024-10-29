import "./App.css";
import profile from "./assets/profile.png";
import Button from "./button.jsx"

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="image_container">
            <img src={profile} alt="Profile" />
          </div>
          <div>
            <h3>Jessica Randall</h3>
            <p className="country">London, United States</p>
          </div>
          <p className="proffesion">"Front-end developer and avid reader."</p>

          <div className="button_container">
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
