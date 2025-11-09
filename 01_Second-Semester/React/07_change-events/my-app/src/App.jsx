import "./assets/css/style.css";

function handleChange(event) {
  event.preventDefault();
  console.log("value: ", event.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  const { name, email, tel } = e.target.elements

  console.log(name.value, email.value, tel.value)
}

// Create root Component
const App = () => {
  return (
    <section className="form__container">
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          name="name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Enter your email"
          name="email"
          required
        />
        <input
          type="number"
          className="phone"
          placeholder="Enter your phone"
          name="tel"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default App;
