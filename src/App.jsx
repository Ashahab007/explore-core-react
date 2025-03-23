import "./App.css";

// ! Component and using Props
// Props came from properties

function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Person></Person>
      <Sports></Sports>
      <Pet></Pet>
      <Student></Student>
      <Food></Food>
      <Developer name="Rohim" tech="Javascript"></Developer>
      <Developer name="Kalam" tech="Python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
      <Product prodName="Mobile" model="xiomi" price="15000"></Product>
      <Product prodName="Laptop" model="Lenovo" price="45000"></Product>
      <Employee empName="Sam" id="5903"></Employee>
      <Employee empName="Sanuar"></Employee>
    </>
  );
}

// ?Creating first component
function Person() {
  const age = 17;
  const name = "Jolil";
  return (
    <p>
      I am a person. My name is {name} age is {age}
    </p>
  );
}

// ?Creating second component
function Sports() {
  let sports = "cricket";
  return (
    <div>
      <h3>Cricket</h3>
      <p>I love {sports}</p>
    </div>
  );
}

// ?Creating third component
function Pet() {
  return <p>I love cat</p>;
}

//? Creating fourth component and styling it using App.css
function Student() {
  return (
    <div className="student">
      <h3>Styling Student</h3>
      <p>Name: </p>
      <p>Dept: </p>
      <p>here we use the className student that created in the App.css</p>
    </div>
  );
}

//? Creating fifth component and styling it directly to the component

function Food() {
  const foodStyle = {
    color: "red",
    textAlign: "left",
    border: "2px solid green",
    borderRadius: "10px",
  };
  return <p style={foodStyle}>I love burger</p>;
}

//? Creating sixth component and styling it directly to the component in another way & creating dynamic Developer name using props. For this u have to pass props as a parameter in a function to make it dynamic.
//? Note: Props are readonly i.e they are immutable

function Developer(props) {
  console.log(props);

  return (
    <div
      style={{
        color: "blue",
        border: "2px solid yellow",
        borderRadius: "20px",
      }}
    >
      <h3>Developer</h3>
      <p>Name: {props.name}</p>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

//? Creating seventh component and set the dynamic value

function Product(props) {
  return (
    <div
      style={{
        marginTop: "10px",
        color: "purple",
        border: "2px solid red",
        padding: "5px",
        borderRadius: "10px",
      }}
    >
      <h3>Device</h3>
      <p>Product Name: {props.prodName}</p>
      <p>Model: {props.model} </p>
      <p>Price: {props.price} </p>
    </div>
  );
}

//? Creating eighth component and passing the props as destructure and set the dynamic value

function Employee({ empName, id = 0 }) {
  // যদি কোন component এর destructured value না থাকে সেক্ষেত্রে default value হিসেবে 0 pass করা হয়েছে।
  return (
    <div className="student">
      <h3>Employee</h3>
      <p>Name: {empName}</p>
      <p>Id: {id}</p>
    </div>
  );
}

export default App;
