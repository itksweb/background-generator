const App = () => {
  const [color1, setColor1] = React.useState("#00ff00");
  const [color2, setColor2] = React.useState("#ff0000");

  const grad = {
    background: `linear-gradient(to right , ${color1}, ${color2})`,
  };

  return (
    <div style={grad} className="app">
      <h1>Background Generator</h1>
      <div className="">
        <input
          type="color"
          id="color1"
          name="color1"
          value={color1}
          onInput={(e) => setColor1(e.target.value)}
        />
        <input
          type="color"
          id="color2"
          name="color2"
          value={color2}
          onInput={(e) => setColor2(e.target.value)}
        />
      </div>
      <h2>Current CSS Background</h2>
      <h3>{grad.background}</h3>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
