import {MyComponent} from "./components/MyComponent";

function App() {
    return (
        <div style={{textAlign: 'center'}}>
            <h3>Input is False</h3>
            <MyComponent input={false}/>
            <h3>Input is Array</h3>
            <MyComponent input={['Item1', 'Item2', 'Item3', 'Item4']}/>
            <h3>Input is other than false and array</h3>
            <MyComponent input='Some other input'/>
        </div>
    );
}

export default App;
