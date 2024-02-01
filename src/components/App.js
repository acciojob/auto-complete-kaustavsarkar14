
import React,{useState} from 'react';
const allfruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
import './../styles/App.css';

const App = () => {
  const [fruits, setFruits] = useState(allfruits)
  const [search, setSearch] = useState('')
  const handleSearch=(e)=>{
    setFruits(fruits.filter(el=>el.toLowerCase().includes(e.target.value.toLowerCase())))
    setSearch(e.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <input type="text" value={search} onChange={handleSearch} />
      <ul>
      {
        fruits.map(el=><li>{el}</li>)
      }
      </ul>
    </div>
  )
}

export default App
