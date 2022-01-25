import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Form from './components/form/Form';
import Post from "./components/post/Post";


const App = () => {
  return (
    <div>
      <Intro />
      <About/>
      <Post />
      <Form />
    </div>
  );
};

export default App;