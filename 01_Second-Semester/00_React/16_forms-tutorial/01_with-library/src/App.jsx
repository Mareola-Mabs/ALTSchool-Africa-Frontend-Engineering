import { useForm } from 'react-hook-form';
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const App = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "test@email.com"
    },
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    try{
      await new Promise((resolve) => setTimeout(resolve, 1000))
      throw new Error()
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
            {...register("email")}
            type="email"
            id="email"
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          Password
          <input
            {...register("password")}
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
