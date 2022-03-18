import { ChangeEvent, useState, VFC } from 'react';

import useFetchClasses from '../../hooks/useFetchClasses';

import './styles.scss';

const App: VFC = () => {
  const [search, setSearch] = useState('');
  const { data } = useFetchClasses();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(
    (item) => item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="home page">
      <div className="search-container mb-4">
        <input type="text" placeholder="type class name.." className="search px-3 py-2" onChange={handleSearchChange} />
      </div>
      <div className="class-container mb-4 px-2">
        {
          filteredData.map((item) => (
            <div key={item.id} className="class p-2 mb-3">
              <p className="title">
                {item.name}
              </p>
              <p className="description">{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
