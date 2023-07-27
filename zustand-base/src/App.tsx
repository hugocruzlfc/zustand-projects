import useCounterStore from "./store/counterStore";
import { shallow } from "zustand/shallow";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { count, title, increment, posts, getPosts, clearStore, multiply } =
    useCounterStore((state) => state, shallow);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      {count}
      <button onClick={() => increment(10)}>increment by 10</button>
      <button onClick={clearStore}>Clear Store</button>
      <button onClick={() => multiply(2)}>multiply x 2</button>
      <hr />
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
