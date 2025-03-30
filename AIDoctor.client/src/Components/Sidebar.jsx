import Logo from "../assets/logo";
import "../Styles/Sidebar.css";
export default function Sidebar() {

const icon="a";
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <div className="logo">
          <Logo/>
        </div>
        <h1 className="title">Chat Bot</h1>
      </div>
      <button className="chat-generator">Chat Generator</button>
      <nav className="menu">
        {[
          { name: "Feedback", count: 16 },
          { name: "Prompt Library", count: 18 },
          { name: "My Saves", count: 10 },
          { name: "Favorite", count: 13 },
          { name: "History", count: 15 },
          { name: "Statistics" },
          { name: "Settings" },
          { name: "Log Out" },
        ].map((item) => (
          <div key={item.name} className="menu-item">
            <span>{item.name}</span>
           
          </div>
        ))}
      </nav>
      <div className="bottom-section">
        <div className="toggle-mode"></div>
        <div className="user-info">
          <div className="avatar"></div>
          <div>
            <p className="user-name">Adam Williams</p>
            <p className="email">info@gmail.com</p>
          </div>
          <span className="badge">Basic</span>
        </div>
        <button className="upgrade">Upgrade to pro</button>
      </div>
    </aside>
  );
}
