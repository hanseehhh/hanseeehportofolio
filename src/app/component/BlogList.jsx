import { useState, useEffect } from 'react';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Memuat...</div>;
  if (!blogs || blogs.length === 0) return <div>Belum ada blog.</div>;

  return (
    <section>
      <h2>Latest Blogs</h2>
      <div>
        {blogs.map(b => (
          <div key={b.id}>{b.title}</div>
        ))}
      </div>
    </section>
  );
}