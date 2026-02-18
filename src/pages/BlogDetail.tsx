
import { useParams, Link } from 'react-router-dom';

export default function BlogDetail() {
  const { id } = useParams();

  // Blog Database
  const blogDatabase = {
    "1": {
      title: "How to Land Your First Dev Job in 2024",
      category: "Career Advice",
      date: "Oct 15, 2023",
      author: "Master Minds Team",
      // UPDATED IMAGE HERE 👇
      image: "/blog-img.png",
      content: (
        <>
          <p className="mb-6">Landing your first job in the tech industry can feel daunting, especially when every entry-level position seems to ask for 3 years of experience. However, with the right strategy, it is absolutely achievable.</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Build a Standout Portfolio</h3>
          <p className="mb-6">Your resume tells them what you know, but your portfolio proves it. Don't just list tutorials you've followed. Build two or three solid, unique projects that solve a real problem. Ensure your code is clean and pushed to GitHub with a great ReadMe file.</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Master the Fundamentals</h3>
          <p className="mb-6">Frameworks like React and Next.js are great, but hiring managers want to know that you understand core JavaScript, HTML, and CSS under the hood. Prepare heavily for data structure and algorithm questions.</p>
          <p className="mb-6">Remember, consistency is key. Keep building, keep learning, and don't get discouraged by rejections!</p>
        </>
      )
    },
    "2": {
      title: "Beginner's Guide to AWS: Where to Start in 2024",
      category: "Cloud Computing",
      date: "Oct 12, 2023",
      author: "Jake Nackos",
      // UPDATED IMAGE HERE 👇
      image: "/blog-img1.png",
      content: (
        <>
          <p className="mb-6">Amazon Web Services (AWS) is a massive ecosystem. When you first open the console, seeing over 200 services can make you want to close the tab immediately. Here is the best way to start.</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Start with the "Big Three"</h3>
          <p className="mb-6"><strong>1. IAM (Identity and Access Management):</strong> Before you build anything, you need to understand security. Learn how to create users, roles, and policies.</p>
          <p className="mb-6"><strong>2. EC2 (Elastic Compute Cloud):</strong> This is simply renting a virtual computer in the cloud. Learn how to spin up a Linux server and SSH into it.</p>
          <p className="mb-6"><strong>3. S3 (Simple Storage Service):</strong> This is where you store files (like images, videos, or backups) in the cloud.</p>
        </>
      )
    },
    "3": {
      title: "Data Science Roadmap: Skills Need to Get Hired",
      category: "Data Science",
      date: "Oct 12, 2023",
      author: "Viola",
      // UPDATED IMAGE HERE 👇
      image: "/blog-img2.png",
      content: (
        <>
          <p className="mb-6">Data Science remains one of the most lucrative and exciting fields in tech. But what should you actually study to get hired?</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 1: Python and SQL</h3>
          <p className="mb-6">Python is the undisputed king of data science. You need to be extremely comfortable with libraries like Pandas (for manipulating data) and NumPy (for numerical calculations). SQL is just as critical—you need to know how to query databases to get the data you want to analyze.</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 2: Machine Learning</h3>
          <p className="mb-6">Once you can clean and visualize data, you need to learn how to predict the future. Start with Scikit-Learn to master Linear Regression, Decision Trees, and Random Forests.</p>
        </>
      )
    }
  };

  const post = blogDatabase[id as keyof typeof blogDatabase];

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-[#008bdc] hover:underline">Go back to blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans pb-24">
      {/* Article Header Image */}
      <div className="w-full h-[300px] md:h-[450px] bg-gray-100">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/1200x400/e2e8f0/64748b?text=Blog+Header' }}
        />
      </div>

      {/* Article Content Container */}
      <div className="max-w-[800px] mx-auto px-6 -mt-20 relative z-10">
        {/* Title Card */}
        <div className="bg-white p-8 md:p-12 rounded-[30px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] mb-12 border border-gray-100">
          <span className="text-[#f47529] font-bold text-sm tracking-wider uppercase mb-3 block">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm font-medium border-t border-gray-100 pt-6">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>

        {/* The Actual Text */}
        <div className="text-gray-600 text-[18px] leading-[1.8]">
          {post.content}
        </div>

        {/* Back Button */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link to="/blog" className="text-[#008bdc] font-bold hover:underline flex items-center gap-2">
            ← Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}