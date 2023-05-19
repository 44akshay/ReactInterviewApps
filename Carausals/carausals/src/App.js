import { useEffect } from "react";
import "./index.css";

export default function App() {
  let box = null;
  useEffect(() => {
    box = document.querySelector(".prodcont");
  }, []);
  const prevbtn = () => {
    const width = box.clientWidth - 300;
    box.scrollLeft = box.scrollLeft - width;
  };
  const nxtbtn = () => {
    const width = box.clientWidth - 300;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <div className="app">
      <button onClick={prevbtn}>{"<"}</button>
      <div className="prodcont">
        <div className="prod">1</div>
        <div className="prod">2</div>
        <div className="prod">3</div>
        <div className="prod">4</div>
        <div className="prod">5</div>
        <div className="prod">6</div>
        <div className="prod">7</div>
        <div className="prod">8</div>
        <div className="prod">9</div>
        <div className="prod">10</div>
        <div className="prod">11</div>
        <div className="prod">12</div>
        <div className="prod">13</div>
        <div className="prod">14</div>
        <div className="prod">15</div>
        <div className="prod">17</div>
        <div className="prod">18</div>
        <div className="prod">19</div>
        <div className="prod">20</div>
      </div>
      <button onClick={nxtbtn}>{">"}</button>
    </div>
  );
}
