import { Card, Code } from "ui";
import "./index.css";

function App() {
  return (
    <>
      <h1>Hello, world</h1>
      <Card title="Hell, world" href="#">
        Hi, there! guys hope you're doing great!!!
      </Card>
      <Code className="bg-slate-700">const hello = "Hello, world"</Code>
    </>
  );
}

export default App;
