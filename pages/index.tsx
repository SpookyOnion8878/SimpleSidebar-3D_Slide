// pages/index.tsx
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "20px" }}>
        <h1>Welcome to Next.js!</h1>
        <p>This is the main content of the page.</p>
      </div>
    </div>
  );
};

export default Home;
