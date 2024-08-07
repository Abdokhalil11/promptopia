import Feed from "./components/Feed/Feed";
import "./home.css";
export default function RootPage() {
  return (
    <section className="home">
      <h1>Discover & Share </h1>
      <br />
      <span className="orange-gradient">AI-Powered Prompts</span>
      <p>
        Promptopia is an open-source AI prompt tool fro modern world to <br />
        discover,create and share creative prompt
      </p>
      <Feed />
    </section>
  );
}
