import useUserStores from "../../store/user.store.jsx";
import { items } from "./items.js";
import "./Home.css";

const Home = () => {
  const { users, addTask, completeTask, incompleteTask } = useUserStores();
  console.log(users);

  const handleComplete = (id) => {
    completeTask(id);
  };

  const handleIncompleteTask = (id) => {
    incompleteTask(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    if (title && description) {
      addTask({ title, description });
    }
    console.log(addTask)
  };

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
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input className="inputtitle" id="title" name="title" />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <textarea className="description" id="description" name="description"></textarea>
            </div>

            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>

      <div className="itemt">
        <div className="taskitems">
          {items.map((item) => (
            <div className="itask" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="buttons">
                <button onClick={() => item.isComplete ? handleIncompleteTask(item.id) : handleComplete(item.id)}>
                  {item.isComplete ? "Incomplete" : "Complete"}
                </button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
