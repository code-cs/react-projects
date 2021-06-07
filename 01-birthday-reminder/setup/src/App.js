import React, { useState } from 'react';
import data from './data';
import List from './List';

// {
//   id: 1,
//   name: 'Bertie Yates',
//   age: 29,
//   image:
//     'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
// },
function App() {
  const [people, setPeople] = useState(data);
 
  return <main>
    <section className='container'>
      <h3> {people.length} birthday today!</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}> Clear All</button>
    </section>
  </main>;
}

export default App;
