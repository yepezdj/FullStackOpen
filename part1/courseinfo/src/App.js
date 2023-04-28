const App = () => {
  //Constant
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  function Headers(props) {
    return <h1>{props.course}</h1>;
  }

  function Part(props) {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    );
  }

  //Content calls Part
  function Content(props) {
    return (
      <div>
        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.p3.part3} exercises={props.p3.exercises3} />
      </div>
    );
  }

  function Total(props) {
    return (
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    );
  }

  //Main funtion
  return (
    <div>
      <Headers course={course} />
      <br></br>
      {/* p3 is sent as an object */}
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        p3={{ part3: part3, exercises3: exercises3 }}
      />
      <br></br>
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
