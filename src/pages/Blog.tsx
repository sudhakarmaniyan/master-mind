export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Education",
      date: "Feb 12, 2026",
      summary: "Explore how Artificial Intelligence is transforming the way we learn and teach in 2026.",
      author: "Admin"
    },
    {
      id: 2,
      title: "Why Master Mind is Scaling Up",
      date: "Feb 10, 2026",
      summary: "A look inside our latest expansion and new technical course offerings.",
      author: "CEO"
    },
    {
      id: 3,
      title: "Student Success Stories",
      date: "Feb 05, 2026",
      summary: "Read about our recent graduates who landed roles at top tech companies.",
      author: "Placement Team"
    }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '2rem auto', width: '100%' }}>
      <div className="glass-panel" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#4A90E2' }}>Company Blog</h1>
        <p>Stay updated with the latest news from Master Mind Learning Solutions.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {blogs.map(blog => (
          <div key={blog.id} className="glass-panel">
            <h2 style={{ color: '#4A90E2' }}>{blog.title}</h2>
            <p style={{ fontSize: '0.8rem', color: '#ccc', marginBottom: '1rem' }}>
              Published on {blog.date} | By {blog.author}
            </p>
            <p style={{ lineHeight: '1.6' }}>{blog.summary}</p>
            <button className="btn-submit" style={{ width: '150px', marginTop: '1rem', padding: '0.5rem' }}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}