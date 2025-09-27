import "./Box.css";

// const box = {
//     width: 100,
//     color: "red",
//     backgroundColor: "blue",
//     padding: "60px 20px"
// }

export const Box = ({type}) => {
  return (
    // inline styles

    // 1
    // <div style={{ width:100, color:"red", backgroundColor:"blue", padding:"60px 20px"}}>
    //     Box
    // </div>

    // 2
    // <div style={box}>
    //   Box
    // </div>

    // vanila css

    // 1 standart
    // <div className="box">Box</div>

    // 2 small,medium,large
    <div className={`box box-${type}`}>Box</div>
  );
};
