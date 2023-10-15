
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loaderCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loaderCoffees);


  return (
    <>

      <h1 className='text-5xl text-purple-600
      font-bold'>Coffee Stores Hot coffee: {coffees.length}</h1>
      <div className='md:grid grid-cols-2 gap-6 my-20'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
