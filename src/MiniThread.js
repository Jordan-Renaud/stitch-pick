import "./MiniThread.css";

export default function MiniThread({ number, hex, onClick }) {
  return (
    <button className="MiniThread" onClick={() => onClick(number)}>
      <div
        style={{
          backgroundColor: hex,
        }}
        className="colour"
      ></div>
      <div className="colour-label">{number}</div>
    </button>
  );
}
