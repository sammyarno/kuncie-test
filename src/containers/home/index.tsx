import { ChangeEvent, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetchClasses from '../../hooks/useFetchClasses';

import './styles.scss';

const Home = () => {
  const [search, setSearch] = useState('');
  const { data } = useFetchClasses();
  const navigate = useNavigate();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClassClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, id: number) => {
    e.preventDefault();
    navigate(`/detail/${id}`);
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
            <div key={item.id} className="class p-2 mb-3" onClick={(e) => handleClassClick(e, item.id)} role="presentation">
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

export default Home;
