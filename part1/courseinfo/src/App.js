const App = () => {
  //Constant
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

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
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      </div>
    );
  }

  function Total(props) {
    let sum = 0;
    props.parts.forEach(function (num) {
      console.log(num);
      sum += num.exercises; // equivalent to: sum = sum + num;
    });

    return <p>Number of exercises {sum}</p>;
  }

  //Main funtion
  return (
    <div>
      <Headers course={course.name} />
      <br></br>
      <Content parts={course.parts} />
      <br></br>
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
