import { useEffect } from 'react';

function Tetris(props) {
  const iBlock = [0, 0]
  const tetris = [
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
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ];
  const keyEvent = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        // this.directionBar('bar2Direct', -10)
        console.log('arrowLeft');
        break;
      case 'ArrowRight':
        // this.directionBar('bar2Direct', 10)
        console.log('arrowRight');
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', keyEvent);
    // TODO: iBlock 그리기
  }, []);

  return (
    <div>
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
  )
}

export default Tetris;