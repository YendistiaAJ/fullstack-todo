import "../App.css";
import TodoList from "./TodoList";
import AppLogo from "../assets/app-logo.png";
import UserProfile from "../assets/user-profile.png";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <img src={AppLogo} alt="App Logo" />
                My Todo List
              </li>
              <li>
                <img src={UserProfile} alt="User Profile" />
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <TodoList />
        </main>
      </div>
    </>
  );
}

export default App;
