import "./RightBar.scss";
import shiledImg from "./assests/shield.svg";
import activeShield from "./assests/activeShield.png";
import passportImg from "./assests/passport.png";
import puzzleImg from "./assests/puzzle.svg";
import physicsImg from "./assests/physics.svg";
import bookImg from "./assests/book.svg";

const SecondData = [
  {
    id: 1,
    img: passportImg,
    label: 150,
  },
  {
    id: 2,
    img: puzzleImg,
    label: 250,
  },
  {
    id: 3,
    img: physicsImg,
    label: 300,
  },
  {
    id: 4,
    img: bookImg,
    label: 300,
  },
];

const RightBar1 = () => {
  const imgs = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <div className="right_1">
      {/* ---------1st PART--------- */}
      <div className="image_grid">
        {imgs.map((index) => (
          
           <div key={index} className="image_container">
            <img src={shiledImg} alt="" />
            <span className="image_number">{index}</span>
          </div>
          
         
        ))}
      </div>

      {/* ---------2nd PART--------- */}

      <div className="box">
        <div className="firstOne">
          <p className="level">Level-1</p>
          <img src={activeShield} alt="" />
          <p className="primary">Primary Level</p>
        </div>

        <div className="lastOne">
          {SecondData.map((item) => (
            <div key={item.id} className="images">
              <img src={item.img} alt="" />
              <p className="label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar1;
