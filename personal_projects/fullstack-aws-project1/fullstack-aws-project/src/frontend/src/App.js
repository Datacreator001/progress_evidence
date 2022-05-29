
import './App.css';
import {Button,Radio} from "antd";

function App() {
  return (
    <div className="App">
    <Button type="primary">Button</Button>
      <Radio.Group value= "large" >
        <Radio.Button value="large">Large</Radio.Button>
        <br/>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default App;
