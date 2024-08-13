import useUserStores from "../../store/user.store.jsx";
import "./Home.css";
import { useState, useEffect } from "react";
import { useFormik } from "formik";

const Home = () => {
  const { users, completeTask, incompleteTask } = useUserStores();
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3005/task/");
      const data = await response.json();
      setTask(data.data);
      console.log(data)
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleComplete = (id) => {
    completeTask(id);
  };

  const handleIncompleteTask = (id) => {
    incompleteTask(id);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3005/task/${id}`, {
        method: "DELETE",
      });
      setTask(task.filter((item) => item.id !== id));
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:3005/task/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const newTask = await response.json();
      setTask([...task, newTask]);
      alert("Item added");
    } catch (e) {
      console.error(e.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      Title: "",
      Description: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div>
      {users ? (
        <>
          <h2>Welcome, {users.name}</h2>
        </>
      ) : (
        <h2>Please log in</h2>
      )}
      <div className="hero">
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                className="inputtitle"
                id="title"
                name="Title"
                value={formik.values.Title}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <textarea
                className="description"
                id="description"
                name="Description"
                value={formik.values.Description}
                onChange={formik.handleChange}
              ></textarea>
            </div>

            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>

      <div className="itemt">
        <div className="taskitems">
          {task.map((task) => (
            <div className="itask" key={task.id}>
              <h2>{task.Title}</h2>
              <p>{task.Description}</p>
              <div className="buttons">
                <button
                  onClick={() =>
                    task.isComplete
                      ? handleIncompleteTask(task.id)
                      : handleComplete(task.id)
                  }
                >
                  {task.isComplete ? "Incomplete" : "Complete"}
                </button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
