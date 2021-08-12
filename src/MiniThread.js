import "./MiniThread.css";

export default function MiniThread({ number, hex }) {
  return (
    <div className="MiniThread">
      <div
        style={{
          backgroundColor: hex,
        }}
        className="colour"
      ></div>
      <div className="colour-label">{number}</div>
    </div>
  );
}
