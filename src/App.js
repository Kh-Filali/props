import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const handleName = (name) => alert(name);

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "60%",
          borderRadius: "15px",
          padding: "15px",
         
        }}
      >
        <Profile
          fullName={"Filali Khaldoun"}
          profession={ "Full Stack Developer"}
          bio="A Full Stack Developer "
          handleName={handleName}
        >
          <img
            src="/kh.jpg"
            alt="kh"
            style={{ borderRadius: "200px", width: "200px",   }}
          />
        </Profile>
      </div>
    </div>
  );
}

export default App;