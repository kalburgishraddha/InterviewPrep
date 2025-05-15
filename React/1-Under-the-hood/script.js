function Counter() {
    const [count,setCount] = React.useState(0);
    const increment = () => {
        setCount(count+1);
    }
    /*return React.createElement(
        "div",
        null,
        React.createElement("p",null,"Count is 0"),
        React.createElement("button",{onClick:increment},"Increment")
    )*/

        return (
            <div>
                <p>Count is 0</p>
                <button onClick={increment}>Increment</button>
            </div>
        )
}

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(React.createElement(Counter));