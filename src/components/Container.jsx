import ComponentA from "./ComponentA";
import ComponentC from "./ComponentC";

const Container = ({ color }) => {
  return (
    <div>
      {/* <ComponentC /> */}
      <ComponentA />
      <div
        style={{
          backgroundColor: `${color}`,
          width: "200px",
          height: "200px",
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
};

export default Container;
