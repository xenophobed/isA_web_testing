'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SocialPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { 
        name: 'Web Testing Pro', 
        username: 'webtestpro', 
        avatar: 'https://via.placeholder.com/40x40?text=WT', 
        verified: true 
      },
      content: 'Just discovered an amazing new automation framework that handles dynamic content like a dream! 🚀 The way it handles async operations is incredible. #WebAutomation #Testing #TechTwitter',
      timestamp: '2h',
      likes: 245,
      retweets: 67,
      comments: 12,
      views: 3456,
      image: null
    },
    {
      id: 2,
      user: { 
        name: 'DevCommunity', 
        username: 'devcommunity', 
        avatar: 'https://via.placeholder.com/40x40?text=DC', 
        verified: false 
      },
      content: '🧵 THREAD: Web scraping best practices in 2024\n\n1/ Always respect robots.txt - it\'s not just a suggestion\n2/ Implement proper rate limiting to avoid getting blocked\n3/ Handle errors gracefully with retry mechanisms\n4/ Use rotating proxies for large-scale operations\n\nWhat would you add? 👇',
      timestamp: '4h',
      likes: 189,
      retweets: 89,
      comments: 23,
      views: 5678,
      image: null
    },
    {
      id: 3,
      user: { 
        name: 'Search Algorithm Expert', 
        username: 'searchexpert', 
        avatar: 'https://via.placeholder.com/40x40?text=SE', 
        verified: true 
      },
      content: 'BREAKING: New search algorithm update is live! 📈\n\nOur testing shows:\n• 30% improvement in relevance scoring\n• Better handling of natural language queries  \n• Faster indexing of new content\n\nTime to update your SEO strategies!',
      timestamp: '6h',
      likes: 567,
      retweets: 234,
      comments: 45,
      views: 8901,
      image: 'https://via.placeholder.com/500x280?text=Search+Algorithm+Chart'
    },
    {
      id: 4,
      user: { 
        name: 'QA Engineer', 
        username: 'qaengineer', 
        avatar: 'https://via.placeholder.com/40x40?text=QA', 
        verified: false 
      },
      content: 'Hot take: Manual testing will never be fully replaced by automation. 🔥\n\nAutomation is great for:\n✅ Regression testing\n✅ Load testing\n✅ Repetitive tasks\n\nBut manual testing excels at:\n🧠 Exploratory testing\n🎨 UX validation\n🐛 Edge case discovery\n\nThoughts?',
      timestamp: '8h',
      likes: 423,
      retweets: 156,
      comments: 78,
      views: 6789,
      image: null
    }
  ])
  const [newTweet, setNewTweet] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1000)
  }

  const handleTweet = () => {
    if (newTweet.trim()) {
      const tweet = {
        id: posts.length + 1,
        user: { 
          name: 'Test User', 
          username: 'testuser', 
          avatar: 'https://via.placeholder.com/40x40?text=TU', 
          verified: false 
        },
        content: newTweet,
        timestamp: 'now',
        likes: 0,
        retweets: 0,
        comments: 0,
        views: 0,
        image: null
      }
      setPosts([tweet, ...posts])
      setNewTweet('')
    }
  }

  const LoginForm = () => (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Image/Branding */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
        <div className="text-white text-6xl font-bold">
          🐦
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-sm w-full">
          {/* Logo */}
          <div className="text-white text-4xl font-bold mb-8 text-center">
            🐦 TestTwitter
          </div>

          <div className="text-white mb-8">
            <h1 className="text-3xl font-bold mb-4">Happening now</h1>
            <h2 className="text-xl">Join TestTwitter today.</h2>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full bg-white text-black font-medium py-2 px-4 rounded-full hover:bg-gray-100 transition-colors">
              <span className="mr-2">🔍</span>
              Sign up with Google
            </button>
            <button className="w-full bg-white text-black font-medium py-2 px-4 rounded-full hover:bg-gray-100 transition-colors">
              <span className="mr-2">📱</span>
              Sign up with Apple
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">or</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Phone, email, or username"
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                data-testid="username-input"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                data-testid="password-input"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-600 transition-colors"
              data-testid="login-button"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-gray-400 text-sm text-center">
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>

          <div className="mt-8 text-gray-400 text-sm">
            <p>Don't have an account? 
              <a href="#" className="text-blue-500 hover:underline ml-1">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const TwitterFeed = () => (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto flex">
        {/* Left Sidebar */}
        <div className="w-64 px-4 py-4 fixed h-full">
          <div className="space-y-2">
            {/* Logo */}
            <div className="text-2xl font-bold mb-8 px-3">
              🐦 TestTwitter
            </div>

            {/* Navigation */}
            <div className="space-y-1">
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <span>🏠</span>
                <span className="font-bold">Home</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <span>🔍</span>
                <span>Explore</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <span>🔔</span>
                <span>Notifications</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <span>✉️</span>
                <span>Messages</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <span>🔖</span>
                <span>Bookmarks</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <span>👤</span>
                <span>Profile</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <span>⚙️</span>
                <span>More</span>
              </a>
            </div>

            {/* Tweet Button */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full mt-8">
              Tweet
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 mt-8 cursor-pointer">
              <img
                src="https://via.placeholder.com/40x40?text=TU"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="font-bold">Test User</div>
                <div className="text-gray-500 text-sm">@testuser</div>
              </div>
              <span className="text-gray-500">•••</span>
            </div>

            {/* Logout */}
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="text-gray-500 hover:text-white text-sm mt-4 px-3"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 border-x border-gray-800">
          {/* Header */}
          <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-800 p-4">
            <h1 className="text-xl font-bold">Home</h1>
          </div>

          {/* Tweet Composer */}
          <div className="border-b border-gray-800 p-4">
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/48x48?text=TU"
                alt="Your avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <textarea
                  value={newTweet}
                  onChange={(e) => setNewTweet(e.target.value)}
                  placeholder="What's happening?"
                  className="w-full bg-transparent text-xl placeholder-gray-500 resize-none outline-none"
                  rows={3}
                  data-testid="post-textarea"
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-4 text-blue-500">
                    <button className="hover:bg-gray-900 p-2 rounded-full">📷</button>
                    <button className="hover:bg-gray-900 p-2 rounded-full">🎥</button>
                    <button className="hover:bg-gray-900 p-2 rounded-full">📊</button>
                    <button className="hover:bg-gray-900 p-2 rounded-full">😀</button>
                    <button className="hover:bg-gray-900 p-2 rounded-full">📅</button>
                    <button className="hover:bg-gray-900 p-2 rounded-full">📍</button>
                  </div>
                  <button
                    onClick={handleTweet}
                    disabled={!newTweet.trim()}
                    className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-2 rounded-full"
                    data-testid="post-button"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div>
            {posts.map((post) => (
              <article key={post.id} className="border-b border-gray-800 p-4 hover:bg-gray-950 transition-colors cursor-pointer" data-testid="social-post">
                <div className="flex space-x-3">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      <h3 className="font-bold hover:underline">{post.user.name}</h3>
                      {post.user.verified && <span className="text-blue-500">✓</span>}
                      <span className="text-gray-500">@{post.user.username}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{post.timestamp}</span>
                    </div>
                    
                    <div className="mt-2">
                      <p className="text-white leading-relaxed whitespace-pre-line">{post.content}</p>
                      
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Tweet content"
                          className="mt-3 rounded-2xl max-w-full border border-gray-700"
                        />
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4 max-w-md text-gray-500">
                      <button className="flex items-center space-x-2 hover:text-blue-500 group" data-testid="comment-button">
                        <div className="p-2 rounded-full group-hover:bg-blue-900/20">
                          <span>💬</span>
                        </div>
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-green-500 group" data-testid="share-button">
                        <div className="p-2 rounded-full group-hover:bg-green-900/20">
                          <span>🔄</span>
                        </div>
                        <span className="text-sm">{post.retweets}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-red-500 group" data-testid="like-button">
                        <div className="p-2 rounded-full group-hover:bg-red-900/20">
                          <span>❤️</span>
                        </div>
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-blue-500 group">
                        <div className="p-2 rounded-full group-hover:bg-blue-900/20">
                          <span>📊</span>
                        </div>
                        <span className="text-sm">{post.views}</span>
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-800">
                        <span>🔗</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-4">
          {/* Search Bar */}
          <div className="bg-gray-900 rounded-full p-3 mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-gray-500">🔍</span>
              <input
                type="text"
                placeholder="Search TestTwitter"
                className="bg-transparent outline-none flex-1 text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* What's happening */}
          <div className="bg-gray-900 rounded-2xl p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">What's happening</h2>
            <div className="space-y-3">
              <div className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                <p className="text-gray-500 text-sm">Trending in Technology</p>
                <p className="font-bold">#WebAutomation</p>
                <p className="text-gray-500 text-sm">15.2K Tweets</p>
              </div>
              <div className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                <p className="text-gray-500 text-sm">Trending in Programming</p>
                <p className="font-bold">#JavaScript</p>
                <p className="text-gray-500 text-sm">42.1K Tweets</p>
              </div>
              <div className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                <p className="text-gray-500 text-sm">Trending in Testing</p>
                <p className="font-bold">#QA</p>
                <p className="text-gray-500 text-sm">8.7K Tweets</p>
              </div>
            </div>
          </div>

          {/* Who to follow */}
          <div className="bg-gray-900 rounded-2xl p-4">
            <h2 className="text-xl font-bold mb-4">Who to follow</h2>
            <div className="space-y-3">
              {['Selenium', 'Playwright', 'Cypress'].map((account) => (
                <div key={account} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://via.placeholder.com/40x40?text=${account[0]}`}
                      alt={account}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-bold">{account}</p>
                      <p className="text-gray-500 text-sm">@{account.toLowerCase()}</p>
                    </div>
                  </div>
                  <button className="bg-white text-black font-bold px-4 py-1 rounded-full text-sm hover:bg-gray-200">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
      
      {!isLoggedIn ? <LoginForm /> : <TwitterFeed />}
    </div>
  )
}