
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, User, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const categories = ['All', 'Development', 'Hosting', 'Design', 'SEO', 'Tutorials'];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Web Development Trends in 2024',
      excerpt: 'Discover the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      content: 'The web development landscape is constantly evolving...',
      author: 'Rajesh Kumar',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Development',
      featured: true,
      tags: ['React', 'AI', 'PWA', 'Trends']
    },
    {
      id: 2,
      title: 'How to Choose the Right Hosting Plan for Your Website',
      excerpt: 'A comprehensive guide to selecting the perfect hosting solution based on your specific needs and budget.',
      content: 'Choosing the right hosting plan is crucial...',
      author: 'Priya Sharma',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Hosting',
      featured: false,
      tags: ['Hosting', 'Guide', 'Performance']
    },
    {
      id: 3,
      title: 'SEO Best Practices for Modern Websites',
      excerpt: 'Boost your website\'s visibility with these proven SEO strategies and techniques for 2024.',
      content: 'Search engine optimization has evolved...',
      author: 'Amit Patel',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'SEO',
      featured: false,
      tags: ['SEO', 'Marketing', 'Optimization']
    },
    {
      id: 4,
      title: 'Building Responsive Websites with Modern CSS',
      excerpt: 'Learn how to create beautiful, responsive designs using CSS Grid, Flexbox, and modern layout techniques.',
      content: 'Responsive design is no longer optional...',
      author: 'Sneha Gupta',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Design',
      featured: true,
      tags: ['CSS', 'Responsive', 'Design']
    },
    {
      id: 5,
      title: 'Getting Started with React Hooks',
      excerpt: 'A beginner-friendly guide to understanding and implementing React Hooks in your projects.',
      content: 'React Hooks revolutionized how we write...',
      author: 'Vikram Singh',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Tutorials',
      featured: false,
      tags: ['React', 'Hooks', 'JavaScript']
    },
    {
      id: 6,
      title: 'Website Security: Essential Tips for 2024',
      excerpt: 'Protect your website and users with these essential security measures and best practices.',
      content: 'Website security should be a top priority...',
      author: 'Anita Reddy',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Development',
      featured: false,
      tags: ['Security', 'SSL', 'Protection']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold">Tech Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in web development, hosting, and digital technology.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && !searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    Featured Post
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button onClick={handleFeatureClick} className="group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="relative">
                  <img  
                    className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg" 
                    alt={`Featured blog post: ${featuredPost.title}`}
                   src="https://images.unsplash.com/photo-1698945298361-365595d400eb" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border"
            >
              <img  
                className="w-full h-48 object-cover" 
                alt={`Blog post: ${post.title}`}
               src="https://images.unsplash.com/photo-1699885960867-56d5f5262d38" />
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" onClick={handleFeatureClick} className="group">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="space-y-4">
              <div className="text-6xl">📝</div>
              <h3 className="text-2xl font-bold">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center border border-border"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter and never miss the latest tech insights, tutorials, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={handleFeatureClick}>Subscribe</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
