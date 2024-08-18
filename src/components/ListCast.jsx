import {useState, useEffect} from 'react';

export default () => {
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
      gap: '1rem',
      margin: '1rem 0'
    }}>

      {cast.map((member) => (
        <a key={member.id} data-tooltip={member.name} >
          <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        </a>
      ))}
    </div>
  )
}