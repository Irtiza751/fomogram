import { Button, Card, Code } from "ui";

function App() {
  return (
    <div className="container">
      <h1 className="text-lg font-bold">Hello, world</h1>
      <Card title="Hell, world" href="/">
        Hi, there! guys hope you're doing great!!!
      </Card>
      <Code>const hello = "Hello, world"</Code>
      <Button>Press Me!</Button>
    </div>
  );
}

export default App;
