
import { SplitScreen } from "./SplitScreen";
import Async from './Async'


const LeftHandComponent =({name})=>{
  return <h1 style={{backgroundColor:"green"}}>{name}</h1>
}

const RightHandComponent =({message})=>{
  return <h1 style={{backgroundColor:"red"}}>{message}</h1>
}

function App() {
  return (
    <>
   <SplitScreen leftWeight={1} rightWeight={3}>
     <LeftHandComponent name="Hello"/>
     <RightHandComponent message="Wassup"/>
    </SplitScreen>
     <Async/>
     </>
  );
}

export default App;
