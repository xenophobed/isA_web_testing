'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SocialPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [activeTab, setActiveTab] = useState('login')
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: 'TechReviewer', avatar: 'https://via.placeholder.com/40x40?text=TR', verified: true },
      content: 'Just tested the new automation framework. Amazing results! 🚀 #WebTesting #Automation',
      timestamp: '2h',
      likes: 245,
      comments: 12,
      shares: 8,
      image: 'https://via.placeholder.com/500x300?text=Testing+Framework'
    },
    {
      id: 2,
      user: { name: 'DevCommunity', avatar: 'https://via.placeholder.com/40x40?text=DC', verified: false },
      content: 'Web crawling best practices thread 🧵 \n\n1. Respect robots.txt\n2. Use proper delays\n3. Handle errors gracefully\n\nWhat would you add?',
      timestamp: '4h',
      likes: 156,
      comments: 23,
      shares: 15
    },
    {
      id: 3,
      user: { name: 'SearchExpert', avatar: 'https://via.placeholder.com/40x40?text=SE', verified: true },
      content: 'New search algorithm update is live! Testing shows 30% improvement in relevance scoring.',
      timestamp: '6h',
      likes: 89,
      comments: 7,
      shares: 4
    }
  ])
  const [newPost, setNewPost] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login process
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1000)
  }

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        user: { name: 'TestUser', avatar: 'https://via.placeholder.com/40x40?text=TU', verified: false },
        content: newPost,
        timestamp: 'now',
        likes: 0,
        comments: 0,
        shares: 0
      }
      setPosts([post, ...posts])
      setNewPost('')
    }
  }

  const LoginForm = () => (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">TestSocial</h1>
        <p className="text-gray-600 mt-2">Connect with the testing community</p>
      </div>

      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-2 px-4 text-center border-b-2 ${
            activeTab === 'login' ? 'border-blue-500 text-blue-600' : 'border-gray-200 text-gray-600'
          }`}
        >
          Log In
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={`flex-1 py-2 px-4 text-center border-b-2 ${
            activeTab === 'signup' ? 'border-blue-500 text-blue-600' : 'border-gray-200 text-gray-600'
          }`}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Username or email"
            value={loginForm.username}
            onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="password-input"
            required
          />
        </div>

        {/* CAPTCHA Simulation */}
        <div className="bg-gray-100 p-3 rounded border">
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="captcha" className="w-4 h-4" data-testid="captcha-checkbox" />
            <label htmlFor="captcha" className="text-sm text-gray-700">
              I'm not a robot
            </label>
            <div className="text-2xl">🤖</div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          data-testid="login-button"
        >
          {activeTab === 'login' ? 'Log In' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <a href="#" className="text-blue-600 hover:underline text-sm">Forgot password?</a>
      </div>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span>Google</span>
          </button>
          <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </div>
  )

  const SocialFeed = () => (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Home</h1>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Post Composer */}
      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="flex space-x-3">
          <img
            src="https://via.placeholder.com/40x40?text=TU"
            alt="Your avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's happening in testing?"
              className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              data-testid="post-textarea"
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex space-x-4 text-gray-500">
                <button className="hover:text-blue-500">📷</button>
                <button className="hover:text-blue-500">🎥</button>
                <button className="hover:text-blue-500">📊</button>
                <button className="hover:text-blue-500">😀</button>
              </div>
              <button
                onClick={handlePost}
                disabled={!newPost.trim()}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="post-button"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow p-6" data-testid="social-post">
            <div className="flex items-start space-x-3">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-1">
                  <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                  {post.user.verified && <span className="text-blue-500">✓</span>}
                  <span className="text-gray-500 text-sm">• {post.timestamp}</span>
                </div>
                
                <p className="mt-2 text-gray-700 whitespace-pre-line">{post.content}</p>
                
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post content"
                    className="mt-3 rounded-lg max-w-full h-auto"
                  />
                )}

                <div className="flex items-center justify-between mt-4 text-gray-500">
                  <button className="flex items-center space-x-2 hover:text-red-500 transition-colors" data-testid="like-button">
                    <span>❤️</span>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors" data-testid="comment-button">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-green-500 transition-colors" data-testid="share-button">
                    <span>🔄</span>
                    <span>{post.shares}</span>
                  </button>
                  <button className="hover:text-gray-700 transition-colors">
                    <span>🔗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <div className="text-center mb-8">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        {!isLoggedIn ? <LoginForm /> : <SocialFeed />}
      </div>
    </div>
  )
}