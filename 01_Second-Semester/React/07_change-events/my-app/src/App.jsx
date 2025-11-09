import "./assets/css/style.css";

// Create root Component
const App = () => {
  function handleChange(event) {
    event.preventDefault();
    console.log("value: ", event.target.value);
  }

  return (
    <section className="form__container">
      <form action="" className="form">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your phone" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default App;
