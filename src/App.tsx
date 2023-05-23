import WordGuessr from './WordGuessr'
import BookStore from './playground/BookStoreDemo/BookStore'
import Counter from './playground/Counter'
import FetchAPI from './playground/FetchAPI'
import StudentGrading from './playground/StudentGrading/StudentGrading'
import Calculate from './playground/Calculator/Calculate'
import BlogPost from './playground/react-hook-form/BlogPost'
import FetchGithubProfile from './playground/FetchGithubProfile/GithubProfile'
import Todo from './playground/react-router-dom/Todo'

function App() {
  return (
    <div className="p-16 mt-10 grid grid-cols-1 gap-8">
      {/* <BlogPost /> */}
      {/* <StudentGrading /> */}
      {/* <Calculate /> */}
      {/* <BookStore /> */}
      {/* <FetchGithubProfile /> */}
      <Todo />
    </div>
  )
}

export default App
