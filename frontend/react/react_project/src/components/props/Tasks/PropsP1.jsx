import PropsP1C1 from "./PropsP1C1";

let PropsP1 = () => {
  let a = "10";
  let b = "20";
  let c = [10, 20, 30, 40];
  return (
    <div>
      <PropsP1C1 a="10"></PropsP1C1>
    </div>
  );
};
export default PropsP1;

// PropsP1    a = "10"
// PropsP1C1 {a = "10"}
// PropsP1C1C1 {props : {a = "10"}}
// PropsP1C1C1C1 {props : {props : {a = "10"}}}
// PropsP1C1C1C1C1 console.log(?) //10


//? props.props.props.props.a