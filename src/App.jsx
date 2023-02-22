import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Ferreira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="João Ferreira"
            content="Illo porro facilis illum earum tenetur voluptas modi aut sed eum soluta hic provident, fuga officiis nobis corrupti praesentium natus necessitatibus assumenda?"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
