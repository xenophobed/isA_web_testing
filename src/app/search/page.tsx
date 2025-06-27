'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const mockResults = [
    { 
      id: 1, 
      title: 'Web Automation Testing - Best Practices Guide', 
      url: 'https://automation-testing.com/best-practices', 
      displayUrl: 'automation-testing.com › best-practices',
      description: 'Learn comprehensive web automation testing techniques including Selenium, Playwright, and Cypress. Discover best practices for reliable test automation and understand the key principles for building robust automated test suites that scale.',
      date: 'Dec 15, 2024'
    },
    { 
      id: 2, 
      title: 'Advanced Web Scraping and Crawling Techniques | Complete Guide', 
      url: 'https://webscraping-guide.com/advanced', 
      displayUrl: 'webscraping-guide.com › advanced-techniques',
      description: 'Master advanced web scraping with Python, handling dynamic content, bypassing anti-bot measures, and scaling your crawling infrastructure. Learn about rate limiting, proxy rotation, and CAPTCHA solving techniques for professional web scraping.',
      date: 'Dec 10, 2024'
    },
    { 
      id: 3, 
      title: 'Search Engine Optimization Complete Guide 2024', 
      url: 'https://seo-mastery.com/complete-guide', 
      displayUrl: 'seo-mastery.com › complete-guide',
      description: 'Ultimate SEO guide covering technical SEO, content optimization, link building, and search engine algorithms. Improve your rankings with proven strategies and understand how search engines work in 2024.',
      date: 'Dec 5, 2024'
    },
    { 
      id: 4, 
      title: 'Modern Testing Frameworks Comparison 2024 - Jest vs Cypress vs Playwright', 
      url: 'https://testing-frameworks.dev/comparison', 
      displayUrl: 'testing-frameworks.dev › comparison-2024',
      description: 'Compare popular testing frameworks including Jest, Mocha, Cypress, and Playwright. Find the best testing solution for your project needs with detailed performance benchmarks and feature comparisons.',
      date: 'Nov 28, 2024'
    },
  ]

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setHasSearched(true)
    
    // Simulate search delay
    setTimeout(() => {
      const filteredResults = mockResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filteredResults.length > 0 ? filteredResults : mockResults)
      setLoading(false)
    }, 600)
  }

  if (!hasSearched) {
    // Google Homepage - Exact replica
    return (
      <div className="min-h-screen bg-white flex flex-col font-arial">
        {/* Header */}
        <header className="flex justify-between items-center p-4 text-sm">
          <div></div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:underline">Testing Platform</Link>
            <a href="#" className="text-gray-700 hover:underline">Gmail</a>
            <a href="#" className="text-gray-700 hover:underline">Images</a>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"/>
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center justify-center">
              T
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4" style={{ marginTop: '-56px' }}>
          {/* Google Logo - Exact colors and proportions */}
          <div className="mb-8">
            <svg width="272" height="92" viewBox="0 0 272 92" className="mb-4">
              <g fill="none" fillRule="evenodd">
                <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#34A853"/>
                <path d="M225 3v65h-9.5V3h9.5z" fill="#EA4335"/>
                <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#FBBC05"/>
                <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#EA4335"/>
              </g>
            </svg>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="w-full max-w-xl">
            <div className="relative mb-8">
              <div className="flex items-center w-full border border-gray-300 rounded-full px-5 py-3 hover:shadow-md focus-within:shadow-md transition-shadow duration-200">
                <svg className="w-4 h-4 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 outline-none text-base text-gray-900"
                  data-testid="search-input"
                  autoComplete="off"
                  spellCheck="false"
                />
                <svg className="w-6 h-6 text-gray-400 ml-3 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
                <svg className="w-6 h-6 text-blue-500 ml-3 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
                </svg>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-gray-50 hover:bg-gray-100 border border-gray-50 hover:border-gray-200 hover:shadow-sm text-gray-800 px-4 py-2 rounded text-sm h-9 min-w-[54px] font-medium"
                data-testid="search-button"
              >
                Google Search
              </button>
              <button
                type="button"
                className="bg-gray-50 hover:bg-gray-100 border border-gray-50 hover:border-gray-200 hover:shadow-sm text-gray-800 px-4 py-2 rounded text-sm h-9 min-w-[54px] font-medium"
              >
                I'm Feeling Lucky
              </button>
            </div>
          </form>

          <div className="mt-8 text-sm">
            <p className="text-gray-800">Google offered in: 
              <a href="#" className="text-blue-700 hover:underline ml-2">中文 (简体)</a>
              <a href="#" className="text-blue-700 hover:underline ml-2">中文 (繁體)</a>
              <a href="#" className="text-blue-700 hover:underline ml-2">العربية</a>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100">
          <div className="px-8 py-3 text-sm text-gray-600 border-b border-gray-300">
            <p>China</p>
          </div>
          <div className="px-8 py-3 flex flex-wrap justify-between text-sm text-gray-600">
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Advertising</a>
              <a href="#" className="hover:underline">Business</a>
              <a href="#" className="hover:underline">How Search works</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Settings</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  // Search Results Page - Exact Google styling
  return (
    <div className="min-h-screen bg-white font-arial">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="flex items-center px-6 py-4">
          {/* Google Logo */}
          <Link href="/search" className="mr-8 flex-shrink-0">
            <svg width="92" height="30" viewBox="0 0 272 92" className="w-[92px] h-[30px]">
              <g fill="none" fillRule="evenodd">
                <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#34A853"/>
                <path d="M225 3v65h-9.5V3h9.5z" fill="#EA4335"/>
                <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#FBBC05"/>
                <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#EA4335"/>
              </g>
            </svg>
          </Link>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 hover:shadow-md focus-within:shadow-md">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 outline-none text-base"
                data-testid="search-input"
              />
              <button type="submit" className="ml-3 p-1">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </form>

          <div className="ml-8 flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"/>
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center justify-center">
              T
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6">
          <div className="flex items-center ml-28 space-x-8 text-sm">
            <a href="#" className="flex items-center space-x-2 text-blue-700 border-b-3 border-blue-700 pb-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
              <span>All</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 pb-3 flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
              </svg>
              <span>Images</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 pb-3 flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
              </svg>
              <span>Videos</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 pb-3 flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
              </svg>
              <span>News</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 pb-3 flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h4v-6h2v6h4a2 2 0 002-2V7l-7-5z" clipRule="evenodd"/>
              </svg>
              <span>Shopping</span>
            </a>
            <button className="text-gray-700 hover:text-blue-700 pb-3">More</button>
          </div>
        </div>
      </header>

      {/* Results */}
      <main className="max-w-2xl ml-44 px-6 py-4">
        {loading && (
          <div className="text-gray-600 text-sm">Searching...</div>
        )}

        {!loading && results.length > 0 && (
          <>
            <div className="text-gray-600 text-sm mb-6">
              About {Math.floor(Math.random() * 900000 + 100000).toLocaleString()} results (0.{Math.floor(Math.random() * 99)} seconds)
            </div>

            <div className="space-y-7">
              {results.map((result) => (
                <div key={result.id} data-testid="search-result" className="max-w-2xl">
                  <div className="flex items-center text-sm text-gray-700 mb-1">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-900">{result.displayUrl}</span>
                  </div>
                  <h3 className="text-xl text-blue-800 hover:underline cursor-pointer mb-1 leading-6">
                    {result.title}
                  </h3>
                  <div className="text-gray-600 text-sm mb-2">{result.date} —</div>
                  <p className="text-gray-800 text-sm leading-5">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>

            {/* See More Results */}
            <div className="mt-8">
              <button className="text-blue-800 hover:underline text-sm">
                See more results
              </button>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="text-blue-800 text-4xl font-normal mr-8 tracking-tight">
                  G<span className="text-red-600">o</span><span className="text-yellow-500">o</span><span className="text-blue-800">g</span><span className="text-green-600">l</span><span className="text-red-600">e</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-800 hover:underline cursor-pointer px-3 py-2">Previous</span>
                  <div className="flex space-x-1">
                    <div className="w-10 h-10 bg-blue-800 text-white rounded flex items-center justify-center text-sm">1</div>
                    <button className="w-10 h-10 text-blue-800 hover:bg-gray-100 rounded flex items-center justify-center text-sm">2</button>
                    <button className="w-10 h-10 text-blue-800 hover:bg-gray-100 rounded flex items-center justify-center text-sm">3</button>
                    <button className="w-10 h-10 text-blue-800 hover:bg-gray-100 rounded flex items-center justify-center text-sm">4</button>
                    <button className="w-10 h-10 text-blue-800 hover:bg-gray-100 rounded flex items-center justify-center text-sm">5</button>
                    <button className="w-10 h-10 text-blue-800 hover:bg-gray-100 rounded flex items-center justify-center text-sm">6</button>
                    <button className="w-10 h-10 text-blue-800 hover:bg-gray-100 rounded flex items-center justify-center text-sm">7</button>
                    <button className="w-10 h-10 text-blue-800 hover:bg-gray-100 rounded flex items-center justify-center text-sm">8</button>
                    <button className="w-10 h-10 text-blue-800 hover:bg-gray-100 rounded flex items-center justify-center text-sm">9</button>
                    <button className="w-10 h-10 text-blue-800 hover:bg-gray-100 rounded flex items-center justify-center text-sm">10</button>
                  </div>
                  <span className="text-blue-800 hover:underline cursor-pointer px-3 py-2">Next</span>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}