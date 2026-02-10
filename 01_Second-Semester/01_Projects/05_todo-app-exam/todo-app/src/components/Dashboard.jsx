import { getUser } from "./Auth";
import { useEffect, useState } from "react";
import api from "./Auth";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const user = getUser();
  const username = user?.name;

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [taskCreate, setTaskCreate] = useState(false);

  const [createError, setCreateError] = useState("");
  const [createLoading, setCreateLoading] = useState(false);

  const [viewDesc, setViewDesc] = useState(null)

  // Track the todo being edited
  const [editModalTodo, setEditModalTodo] = useState(null);

  // Fetch todos on mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        let todoData;
        const res = await api.get("/tasks");
        if (res.data.data.length > 0) {
          todoData = res.data.data.filter((todo) => todo.owner === username);
        }

        setTodos(todoData);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Edit todo
  const editATodo = async (id, updated) => {
    try {
      await api.put(`/tasks/${id}`, updated);

      // Update local state
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...updated } : t)),
      );

      setEditModalTodo(null); // close modal
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this todo?",
    );
    if (!confirmed) return;

    try {
      await api.delete(`/tasks/${id}`);
      setTodos((prev) => prev.filter((t) => t.id !== id));
      alert("Todo deleted");
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  // Modal Component
  const EditTodo = ({ data }) => {
    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="bg-zinc-900 rounded-xl w-full max-w-md p-6 relative shadow-lg shadow-blue-500/20">
          <button
            onClick={() => setEditModalTodo(null)}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition"
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold text-white mb-4">Edit Todo</h2>

          <div className="flex flex-col gap-4">
            <label className="flex flex-col text-zinc-300">
              Task Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
              />
            </label>

            <label className="flex flex-col text-zinc-300">
              Task Description
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
              />
            </label>

            <button
              onClick={() => editATodo(data.id, { name, description })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition shadow-md shadow-blue-500/20 mt-2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Create a Task
  function CreateTask() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("TODO");

    async function postTask(e) {
      e.preventDefault();
      if (name === "") {
        setCreateError("Name Cannot be Empty");
        return;
      }
      if (description === "") {
        setCreateError("Description Cannot be Empty");
        return;
      }

      setCreateLoading(true);

      try {
        const { data } = await axios.post("https://api.oluwasetemi.dev/tasks", {
          name,
          description,
          status,
          owner: username,
        });

        console.log(data);

        setCreateLoading(false);

        // redirect
        window.location.href = "/dashboard";
      } catch (error) {
        console.error(error.response?.data || error.message);
        setCreateError(error.message);
        setCreateLoading(false);
      }
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="bg-zinc-900 rounded-xl w-full max-w-md p-6 relative shadow-lg shadow-blue-500/20">
          <button
            onClick={() => setTaskCreate(false)}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition"
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold text-white mb-4">Edit Todo</h2>

          <form className="flex flex-col gap-4" onSubmit={postTask}>
            <label className="flex flex-col text-zinc-300">
              Task Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
              />
            </label>

            <label className="flex flex-col text-zinc-300">
              Task Description
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
              />
            </label>

            <div className="flex flex-col">
              Status
              <label>
                <input
                  type="radio"
                  name="status"
                  value="TODO"
                  checked={status === "TODO"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none"
                />{" "}
                TODO
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="IN PROGRESS"
                  checked={status === "IN PROGRESS"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none"
                />{" "}
                IN PROGRESS
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="DONE"
                  checked={status === "DONE"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none"
                />{" "}
                DONE
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="CANCELLED"
                  checked={status === "CANCELLED"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none"
                />{" "}
                CANCELLED
              </label>
            </div>

            {createError ? (
              <div className="text-red-500 text-xs">{createError}</div>
            ) : null}

            <button
              type="submit"
              className="bg-green-600 cursor-pointer text-white font-medium py-2 rounded-lg transition shadow-md shadow-blue-500/20 mt-2"
            >
              {createLoading ? "Loading..." : "Create Task"}
            </button>
          </form>
        </div>
      </div>
    );
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
        <div className="flex gap-3 mb-6">
          <input
            type="search"
            placeholder="Search tasks..."
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition shadow-md shadow-blue-500/20">
            Show Completed
          </button>
        </div>

        {/* Todo List */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 shadow-lg">
          <div className="p-4 border-b border-zinc-800 flex justify-between">
            <h2 className="text-lg font-semibold">Your Todos</h2>
            <button
              className="bg-green-500 p-2 rounded-md cursor-pointer"
              disabled={createLoading ? true : false}
              onClick={() => setTaskCreate(true)}
            >
              Create a Task
            </button>
          </div>

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
                  <div>
                    <div className="font-medium text-white">{todo.name}</div>
                    <button onClick={()=> setViewDesc(viewDesc === todo.id? null : todo.id)} className="text-sm cursor-pointer text-blue-500 hover:text-blue-400">
                      View Description
                    </button>
                    
                    {viewDesc === todo.id? <div className="w-full bg-gray-400">{todo.description}</div>: null}
                  </div>

                  {/* Right Side Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setEditModalTodo(todo)}
                      className="px-4 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-lg text-sm transition"
                    >
                      Edit
                    </button>
                    <div
                      className={`todo-status status-${todo.status.toLowerCase()}`}
                    >
                      {todo.status}
                    </div>

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

      {/* Edit Modal */}
      {editModalTodo && <EditTodo data={editModalTodo} />}
      {taskCreate ? <CreateTask /> : null}
    </div>
  );
};

export default Dashboard;
