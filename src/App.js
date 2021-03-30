import "./styles.css";

var username = "iamzmr";
var userLoggedIn = true;
export default function App() {
  function getUserMessage() {
    if (userLoggedIn) {
      return (
        <small>
          <em>{username}</em>
        </small>
      );
    }
    return "user";
  }

  return (
    <div className="App">
      <h1>Welcome {getUserMessage()}</h1>
    </div>
  );
}
