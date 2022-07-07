import {useState} from 'react'
import Header from './components/Header.js'
import Activities from './components/Activities.js'
function App() {

  const [activities, setActivities] = useState(
    [
        {
            id:1,
            name: 'Reading',
            description: 'Logged amount of reading (limited to books)',
            color: 'blue',
            days:[1,2,3,4,5,6,7]
        },
        {
            id:2,
            name: 'Fitness',
            description: 'Any form of exercise is logged',
            color: 'red',
            days:[1,2,3,4,5,6,7]
        },
        {
            id:3,
            name: 'Programming',
            description: 'Any form of programming is logged',
            color: 'purple',
            days:[1,2,3,4,5,6,7]
        }
    ]
  )
  return (
    <div className="App">
      {/* Header component should be called first - contains Logo, Pfp(add later), and greeting*/}
      <Header/>
      {/* Activities section is next - contains a header (with add button?), and an Activities component?*/}
      <Activities activities={activities}/>
    </div>
  );
}

export default App;
