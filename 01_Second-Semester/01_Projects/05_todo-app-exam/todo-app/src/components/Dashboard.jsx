import { getUser } from "./Auth";
import { useEffect, useState } from "react";
import api from "./Auth";
import { Link, NavLink } from "react-router-dom";

const Dashboard = () => {
  const user = getUser();
  const username = user?.name;

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await api.get("/tasks");

        setTodos(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.error(err);
        return <>Error Fetching Tasks</>;
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  async function deleteTodo(todoId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this todo?",
    );

      if (!confirmed) return;

  try {

    await api.delete(`/tasks/${todoId}`);

    alert("Task Deleted")

    setTodos(prev =>
      prev.filter(todo => todo.id !== todoId)
    );

  } catch (err) {
    console.error(err);
    alert("Delete Not Successful")
  }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-blue-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-zinc-800 bg-black/40 backdrop-blur">
        <h1 className="text-xl font-semibold text-blue-500">Todo Dashboard</h1>

        <div className="text-zinc-300">
          Welcome, <span className="text-white font-medium">{username}</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Search */}
        <form className="flex gap-3 mb-6">
          <input
            type="search"
            placeholder="Search tasks..."
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />

          <button
            type="submit"
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition shadow-md shadow-blue-500/20"
          >
            Search
          </button>
        </form>

        {/* Todo List */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 shadow-lg">
          <div className="p-4 border-b border-zinc-800">
            <h2 className="text-lg font-semibold">Your Todos</h2>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="p-6 text-zinc-400">Loading todos...</div>
          ) : todos.length === 0 ? (
            <div className="p-6 text-zinc-400">No todos found</div>
          ) : (
            <div className="divide-y divide-zinc-800">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex justify-between items-center p-4 hover:bg-zinc-800/40 transition"
                >
                  {/* Left Side */}
                  <div>
                    <div className="font-medium text-white">{todo.name}</div>

                    <Link
                      to={`/todos/${todo.id}`}
                      className="text-sm text-blue-500 hover:text-blue-400"
                    >
                      View Description
                    </Link>
                  </div>

                  {/* Right Side Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => editTodo(todo)}
                      className="px-4 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-lg text-sm transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="px-4 py-2 cursor-pointer bg-red-600 hover:bg-red-700 rounded-lg text-sm transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
