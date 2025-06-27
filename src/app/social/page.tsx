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
        avatar: 'https://via.placeholder.com/40x40/1da1f2/ffffff?text=WT', 
        verified: true 
      },
      content: 'Just discovered an amazing new automation framework that handles dynamic content like a dream! 🚀 The way it handles async operations is incredible.\n\n#WebAutomation #Testing #TechTwitter',
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
        avatar: 'https://via.placeholder.com/40x40/1da1f2/ffffff?text=DC', 
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
        avatar: 'https://via.placeholder.com/40x40/1da1f2/ffffff?text=SE', 
        verified: true 
      },
      content: 'BREAKING: New search algorithm update is live! 📈\n\nOur testing shows:\n• 30% improvement in relevance scoring\n• Better handling of natural language queries  \n• Faster indexing of new content\n\nTime to update your SEO strategies!',
      timestamp: '6h',
      likes: 567,
      retweets: 234,
      comments: 45,
      views: 8901,
      image: 'https://via.placeholder.com/506x253/f0f0f0/333333?text=Search+Algorithm+Chart'
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
          avatar: 'https://via.placeholder.com/40x40/1da1f2/ffffff?text=TU', 
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
    <div className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen">
        {/* Left Side - Hero Image */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"></div>
          <div className="relative z-10 text-white text-center">
            <svg viewBox="0 0 24 24" className="w-80 h-80 mx-auto mb-8" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <h1 className="text-6xl font-black mb-4">Happening now</h1>
            <h2 className="text-3xl font-bold">Join today.</h2>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
          <div className="max-w-sm w-full">
            {/* Logo for small screens */}
            <div className="lg:hidden text-center mb-8">
              <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-white" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>

            <div className="text-white mb-8">
              <h1 className="text-4xl lg:text-6xl font-black mb-4 lg:mb-8">Happening now</h1>
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">Join today.</h2>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full bg-white text-black font-bold py-3 px-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </button>
              <button className="w-full bg-white text-black font-bold py-3 px-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Sign up with Apple
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-500">or</span>
              </div>
            </div>

            <button className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-600 transition-colors mb-6">
              Create account
            </button>

            <p className="text-xs text-gray-500 mb-8">
              By signing up, you agree to the <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>, including <a href="#" className="text-blue-500 hover:underline">Cookie Use</a>.
            </p>

            <div className="text-white">
              <h3 className="text-lg font-bold mb-4">Already have an account?</h3>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Phone, email, or username"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
                    className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    data-testid="password-input"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-3 px-4 rounded-full hover:bg-gray-200 transition-colors"
                  data-testid="login-button"
                >
                  Sign in
                </button>
              </form>

              <div className="mt-6 space-y-3 text-sm">
                <a href="#" className="block text-blue-500 hover:underline">Forgot password?</a>
                <p className="text-gray-500">
                  Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const TwitterFeed = () => (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto flex">
        {/* Left Sidebar */}
        <div className="w-64 xl:w-80 px-4 py-4 fixed h-full border-r border-gray-800">
          <div className="space-y-2">
            {/* Logo */}
            <div className="p-3 mb-8">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>

            {/* Navigation */}
            <div className="space-y-1">
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl font-bold">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.895.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.062l1.588-11.25.734.396c.151.082.315.12.475.12.37 0 .715-.19.895-.525.262-.486.081-1.092-.405-1.356zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"/>
                </svg>
                <span className="hidden xl:block">Home</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
                </svg>
                <span className="hidden xl:block">Explore</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.234l-1.141-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"/>
                </svg>
                <span className="hidden xl:block">Notifications</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v.511l8 3.981 8-3.981v-.511c0-.276-.224-.5-.5-.5h-15zm15.5 5.017l-8 3.982-8-3.982v8.483c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.483z"/>
                </svg>
                <span className="hidden xl:block">Messages</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/>
                </svg>
                <span className="hidden xl:block">Bookmarks</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"/>
                </svg>
                <span className="hidden xl:block">Profile</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="5" cy="12" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="19" cy="12" r="2"/>
                </svg>
                <span className="hidden xl:block">More</span>
              </a>
            </div>

            {/* Tweet Button */}
            <button className="w-full xl:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full mt-8">
              <span className="hidden xl:block">Tweet</span>
              <svg className="w-6 h-6 xl:hidden" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3.03-6.78C12.48 9.26 13.22 8.63 14 8.17V11z"/>
              </svg>
            </button>

            {/* User Profile */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 cursor-pointer">
                <img
                  src="https://via.placeholder.com/40x40/1da1f2/ffffff?text=TU"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 hidden xl:block">
                  <div className="font-bold">Test User</div>
                  <div className="text-gray-500 text-sm">@testuser</div>
                </div>
                <svg className="w-5 h-5 text-gray-500 hidden xl:block" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="5" cy="12" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="19" cy="12" r="2"/>
                </svg>
              </div>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="w-full text-left text-gray-500 hover:text-white text-sm mt-2 px-3"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 xl:ml-80 border-x border-gray-800">
          {/* Header */}
          <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-800 p-4">
            <h1 className="text-xl font-bold">Home</h1>
          </div>

          {/* Tweet Composer */}
          <div className="border-b border-gray-800 p-4">
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/48x48/1da1f2/ffffff?text=TU"
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
                    <button className="hover:bg-gray-900 p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"/>
                      </svg>
                    </button>
                    <button className="hover:bg-gray-900 p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-2.5-3.5c-.828 0-1.5-.672-1.5-1.5S14.672 4 15.5 4s1.5.672 1.5 1.5S16.328 7 15.5 7zM8.5 7C7.672 7 7 6.328 7 5.5S7.672 4 8.5 4s1.5.672 1.5 1.5S9.328 7 8.5 7zm0 3.5c-.828 0-1.5-.672-1.5-1.5S7.672 7.5 8.5 7.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm3 0c-.828 0-1.5-.672-1.5-1.5S10.672 7.5 11.5 7.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
                      </svg>
                    </button>
                    <button className="hover:bg-gray-900 p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM6 11c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM6 17c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM12 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM12 11c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM12 17c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM18 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM18 11c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM18 17c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2z"/>
                      </svg>
                    </button>
                    <button className="hover:bg-gray-900 p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm0-6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm4 12.2c1.5-.9 2.7-2.2 3.4-3.8.4-.9.6-1.9.6-2.9 0-3.9-3.1-7-7-7s-7 3.1-7 7c0 1 .2 2 .6 2.9.7 1.6 1.9 2.9 3.4 3.8V21c0 .6.4 1 1 1s1-.4 1-1v-2.8c.3.1.7.1 1 .1s.7 0 1-.1V21c0 .6.4 1 1 1s1-.4 1-1v-2.8z"/>
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={handleTweet}
                    disabled={!newTweet.trim()}
                    className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-2 rounded-full transition-colors"
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
              <article key={post.id} className="border-b border-gray-800 p-4 hover:bg-gray-950/50 transition-colors cursor-pointer" data-testid="social-post">
                <div className="flex space-x-3">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      <h3 className="font-bold hover:underline cursor-pointer">{post.user.name}</h3>
                      {post.user.verified && (
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                        </svg>
                      )}
                      <span className="text-gray-500">@{post.user.username}</span>
                      <span className="text-gray-500">·</span>
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
                      <button className="flex items-center space-x-2 hover:text-blue-500 group transition-colors" data-testid="comment-button">
                        <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/>
                          </svg>
                        </div>
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-green-500 group transition-colors" data-testid="share-button">
                        <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                          </svg>
                        </div>
                        <span className="text-sm">{post.retweets}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-red-500 group transition-colors" data-testid="like-button">
                        <div className="p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>
                          </svg>
                        </div>
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-blue-500 group transition-colors">
                        <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/>
                          </svg>
                        </div>
                        <span className="text-sm">{post.views}</span>
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-80 p-4">
          {/* Search Bar */}
          <div className="bg-gray-900 rounded-full p-3 mb-4 sticky top-4">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
              </svg>
              <input
                type="text"
                placeholder="Search Twitter"
                className="bg-transparent outline-none flex-1 text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* What's happening */}
          <div className="bg-gray-900 rounded-2xl p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">What's happening</h2>
            <div className="space-y-3">
              <div className="hover:bg-gray-800 p-3 rounded-xl cursor-pointer transition-colors">
                <p className="text-gray-500 text-sm">Trending in Technology</p>
                <p className="font-bold">#WebAutomation</p>
                <p className="text-gray-500 text-sm">15.2K Tweets</p>
              </div>
              <div className="hover:bg-gray-800 p-3 rounded-xl cursor-pointer transition-colors">
                <p className="text-gray-500 text-sm">Trending in Programming</p>
                <p className="font-bold">#JavaScript</p>
                <p className="text-gray-500 text-sm">42.1K Tweets</p>
              </div>
              <div className="hover:bg-gray-800 p-3 rounded-xl cursor-pointer transition-colors">
                <p className="text-gray-500 text-sm">Trending in Testing</p>
                <p className="font-bold">#QA</p>
                <p className="text-gray-500 text-sm">8.7K Tweets</p>
              </div>
              <button className="text-blue-500 hover:underline text-sm">Show more</button>
            </div>
          </div>

          {/* Who to follow */}
          <div className="bg-gray-900 rounded-2xl p-4">
            <h2 className="text-xl font-bold mb-4">Who to follow</h2>
            <div className="space-y-3">
              {['Selenium', 'Playwright', 'Cypress'].map((account) => (
                <div key={account} className="flex items-center justify-between hover:bg-gray-800 p-3 rounded-xl cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://via.placeholder.com/40x40/1da1f2/ffffff?text=${account[0]}`}
                      alt={account}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-bold">{account}</p>
                      <p className="text-gray-500 text-sm">@{account.toLowerCase()}</p>
                    </div>
                  </div>
                  <button className="bg-white text-black font-bold px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors">
                    Follow
                  </button>
                </div>
              ))}
              <button className="text-blue-500 hover:underline text-sm">Show more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" className="text-blue-500 hover:underline text-sm bg-black/50 px-3 py-1 rounded">
          ← Back to Home
        </Link>
      </div>
      
      {!isLoggedIn ? <LoginForm /> : <TwitterFeed />}
    </div>
  )
}