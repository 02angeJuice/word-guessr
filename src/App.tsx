import WordGuessr from './WordGuessr'
import BookStoreList from './playground/BookStoreDemo/BookStoreList'
import Counter from './playground/Counter'
import FetchAPI from './playground/FetchAPI'
import StudentGrading from './playground/StudentGrading/StudentGrading'
import Calculate from './playground/Calculator/Calculate'
import BlogPost from './playground/react-hook-form/BlogPost'

function App() {
  return (
    <div className="p-16 mt-10 grid grid-cols-1 gap-8">
      <div className="grid-item">
        <BlogPost />
        {/* <StudentGrading /> */}
        {/* <Calculate /> */}
      </div>
    </div>
  )
}

export default App
