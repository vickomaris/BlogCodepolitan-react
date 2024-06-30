import posts from '../post.json';
import Article from '../components/Article';
import { useState } from 'react';
function Homepage() {
  const [search, setSearch] = useState('');
  const changeSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        cari artikel : <input onChange={changeSearch}></input>
      </div>
      <small> Ditemukan 0 data dengan pencarian kata {search}</small>
      {posts.map(({ title, tags, content }, index) => {
        <Article {...{ title, tags, content }} key={index} />;
      })}
    </>
  );
}

export default Homepage;
