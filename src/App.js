function App() {
  const tetris = [
    [true, true, true, false, false, false, false, false, false, false],
    [false, true, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ];
  return (
    <div className="App">
      <h1>Tetris</h1>
      <table className="playBoard">
        <tbody>
        {tetris.map((gridY, i) => (
          <tr key={i}>
            <td className="extra"></td>
            {gridY.map((gridX, j) => (
            <td key={j} className={gridX ? 'fill' : 'empty'}>{gridX}</td>
            ))}
            <td className="extra"></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
