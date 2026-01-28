import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "test@email.com"
    }
  });

  const onSubmit = async (data) => {
    try{
      await new Promise((resolve) => setTimeout(resolve, 1000))
      throw new Error()
      console.log(data);
    }
    catch(err){
      setError("root", {
        message: "This email is already taken"
      })
    }

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          Email
          <input
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address"
              }
            })}
            type="email"
            id="email"
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          Password
          <input
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password cannot be less than 8 characters"
              },
              validate: (value) => value.includes("2") || "Password must contain the number 2",
            })}
            type="password"
            id="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <button type="submit" disabled={isSubmitting}>{isSubmitting? "Loading...": "Submit"}</button>
        {errors.root && <p>{errors.root.message}</p>}

      </form>
    </div>
  );
};

export default App;
