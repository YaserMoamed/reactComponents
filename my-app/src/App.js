import React from 'react';
import Contact from './components/Contact';
function App() {
  const users = [
    {
      id: 1,
      name: 'Hilda Rogers',
      online: true,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      id: 2,
      name: 'Tina Hart',
      online: true,
      avatar: 'https://randomuser.me/api/portraits/women/58.jpg',
    },
    {
      id: 3,
      name: 'Owen Mitchell',
      online: true,
      avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
    },
  ];
  return (
    <div className="App">
      {users.map(user => (
        <Contact name={user.name} online={user.online} avatar={user.avatar} />
      ))}
    </div>
  );
}

export default App;
