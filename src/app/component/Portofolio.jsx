import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Memuat...</div>;
  if (!projects || projects.length === 0) return <div>Belum ada proyek.</div>;

  return (
    <section>
      <h2>My Portfolio</h2>
      <div>
        {projects.map(p => (
          <div key={p.id}>{p.title}</div>
        ))}
      </div>
    </section>
  );
}