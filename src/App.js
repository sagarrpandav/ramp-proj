import {MyComponent} from "./components/MyComponent";

function App() {
    return (
        <div style={{textAlign: 'center'}}>
            <h3>Input is False</h3>
            <MyComponent input={false}/>
            <h3>Input is Array</h3>
            <MyComponent input={['asv', 'dsds']}/>
            <h3>Input is other than false and array</h3>
            <MyComponent input="dsdd"/>
        </div>
    );
}

export default App;
