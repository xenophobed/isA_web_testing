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
      description: 'Learn comprehensive web automation testing techniques including Selenium, Playwright, and Cypress. Discover best practices for reliable test automation...' 
    },
    { 
      id: 2, 
      title: 'Advanced Web Scraping and Crawling Techniques', 
      url: 'https://webscraping-guide.com/advanced', 
      displayUrl: 'webscraping-guide.com › advanced',
      description: 'Master advanced web scraping with Python, handling dynamic content, bypassing anti-bot measures, and scaling your crawling infrastructure...' 
    },
    { 
      id: 3, 
      title: 'Search Engine Optimization Complete Guide', 
      url: 'https://seo-mastery.com/complete-guide', 
      displayUrl: 'seo-mastery.com › complete-guide',
      description: 'Ultimate SEO guide covering technical SEO, content optimization, link building, and search engine algorithms. Improve your rankings with proven strategies...' 
    },
    { 
      id: 4, 
      title: 'Modern Testing Frameworks Comparison 2024', 
      url: 'https://testing-frameworks.dev/comparison', 
      displayUrl: 'testing-frameworks.dev › comparison',
      description: 'Compare popular testing frameworks including Jest, Mocha, Cypress, and Playwright. Find the best testing solution for your project needs...' 
    },
    { 
      id: 5, 
      title: 'API Testing and Automation Tools', 
      url: 'https://api-testing.tools/automation', 
      displayUrl: 'api-testing.tools › automation',
      description: 'Comprehensive guide to API testing automation using Postman, RestAssured, and custom frameworks. Learn to test REST and GraphQL APIs effectively...' 
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
    // Google Homepage
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4">
          <div></div>
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/" className="text-gray-700 hover:underline">Testing Platform</Link>
            <a href="#" className="text-gray-700 hover:underline">Gmail</a>
            <a href="#" className="text-gray-700 hover:underline">Images</a>
            <button className="w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-semibold">
              T
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4" style={{ marginTop: '-100px' }}>
          {/* Google Logo */}
          <div className="mb-8">
            <svg viewBox="0 0 272 92" width="272" height="92" className="mb-4">
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
          <form onSubmit={handleSearch} className="w-full max-w-lg">
            <div className="relative">
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-3 hover:shadow-md focus-within:shadow-md transition-shadow">
                <button type="button" className="mr-3">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder=""
                  className="flex-1 outline-none text-base"
                  data-testid="search-input"
                  autoComplete="off"
                />
                <button type="button" className="ml-3">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4z"></path>
                    <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5a.75.75 0 001.5 0v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                type="submit"
                className="bg-gray-50 hover:bg-gray-100 border border-gray-50 hover:border-gray-200 text-gray-800 px-4 py-2 rounded text-sm"
                data-testid="search-button"
              >
                Google Search
              </button>
              <button
                type="button"
                className="bg-gray-50 hover:bg-gray-100 border border-gray-50 hover:border-gray-200 text-gray-800 px-4 py-2 rounded text-sm"
              >
                I'm Feeling Lucky
              </button>
            </div>
          </form>

          <div className="mt-8 text-sm text-gray-600">
            <p>Google offered in: 
              <a href="#" className="text-blue-600 hover:underline ml-2">中文</a>
              <a href="#" className="text-blue-600 hover:underline ml-2">Español</a>
              <a href="#" className="text-blue-600 hover:underline ml-2">Français</a>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="px-8 py-3 text-sm text-gray-600">
            <p>China</p>
          </div>
          <div className="border-t border-gray-200 px-8 py-3 flex flex-wrap justify-between text-sm text-gray-600">
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

  // Search Results Page
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-3">
        <div className="flex items-center">
          {/* Google Logo */}
          <Link href="/search" className="mr-8">
            <svg viewBox="0 0 92 30" width="92" height="30">
              <g fill="none" fillRule="evenodd">
                <path d="M42.24 14.47c0 3.92-3.07 6.81-6.83 6.81s-6.83-2.89-6.83-6.81c0-3.95 3.07-6.81 6.83-6.81s6.83 2.86 6.83 6.81zm-2.99 0c0-2.45-1.78-4.13-3.84-4.13s-3.84 1.68-3.84 4.13c0 2.42 1.78 4.13 3.84 4.13s3.84-1.71 3.84-4.13z" fill="#EA4335"/>
                <path d="M59.74 14.47c0 3.92-3.07 6.81-6.83 6.81s-6.83-2.89-6.83-6.81c0-3.95 3.07-6.81 6.83-6.81s6.83 2.86 6.83 6.81zm-2.99 0c0-2.45-1.78-4.13-3.84-4.13s-3.84 1.68-3.84 4.13c0 2.42 1.78 4.13 3.84 4.13s3.84-1.71 3.84-4.13z" fill="#FBBC05"/>
                <path d="M76.5 8.1v12.23c0 5.03-2.97 7.09-6.47 7.09-3.3 0-5.29-2.21-6.04-4.01l2.61-.81c.47 1.11 1.6 2.42 3.43 2.42 2.24 0 3.64-1.39 3.64-3.99v-.98h-.1c-.67.82-1.96 1.55-3.59 1.55-3.41 0-6.53-2.97-6.53-6.79 0-3.85 3.12-6.84 6.53-6.84 1.62 0 2.92.72 3.59 1.52h.1v-1.06h2.84zm-2.63 6.43c0-2.4-1.6-4.16-3.64-4.16-2.06 0-3.8 1.76-3.8 4.16 0 2.38 1.74 4.11 3.8 4.11 2.04 0 3.64-1.73 3.64-4.11z" fill="#34A853"/>
                <path d="M80.5 1v19.98h-2.92V1h2.92z" fill="#EA4335"/>
                <path d="M92 16.73l2.32 1.55c-.75 1.11-2.56 3.02-5.68 3.02-3.87 0-6.77-3-6.77-6.81 0-4.05 2.92-6.81 6.43-6.81 3.54 0 5.27 2.81 5.84 4.34l.31.77-9.12 3.77c.7 1.37 1.78 2.07 3.3 2.07 1.52 0 2.58-.75 3.36-1.89zm-7.15-2.45l6.09-2.53c-.34-.85-1.34-1.44-2.53-1.44-1.52 0-3.64 1.34-3.56 3.97z" fill="#FBBC05"/>
                <path d="M12.5 12.73V9.83h9.77c.1.5.14 1.1.14 1.75 0 2.17-.59 4.85-2.5 6.82-1.86 1.94-4.24 2.97-7.38 2.97C5.57 21.37.11 16.57.11 10.72.11 4.88 5.57.08 12.53.08c3.23 0 5.53 1.27 7.25 2.92l-2.04 2.04c-1.24-1.16-2.92-2.07-5.21-2.07-4.26 0-7.59 3.43-7.59 7.69 0 4.26 3.33 7.69 7.59 7.69 2.76 0 4.34-1.11 5.35-2.12.82-.82 1.36-1.99 1.57-3.58l-6.91.01z" fill="#EA4335"/>
              </g>
            </svg>
          </Link>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 hover:shadow-md focus-within:shadow-md">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 outline-none text-base"
                data-testid="search-input"
              />
              <button type="submit" className="ml-3">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </form>

          <div className="ml-8 flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-semibold">
              T
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center mt-3 ml-32">
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-3">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
                <span>All</span>
              </div>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-3">Images</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-3">Videos</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-3">News</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-3">Shopping</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-3">More</a>
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
              About {Math.floor(Math.random() * 900000) + 100000} results (0.{Math.floor(Math.random() * 99)} seconds)
            </div>

            <div className="space-y-8">
              {results.map((result) => (
                <div key={result.id} data-testid="search-result">
                  <div className="text-sm text-gray-600 mb-1">
                    {result.displayUrl}
                  </div>
                  <h3 className="text-xl text-blue-600 hover:underline cursor-pointer mb-1">
                    {result.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center">
              <div className="flex items-center space-x-1">
                <span className="text-blue-600 text-2xl font-bold mr-6">Gooooooogle</span>
                <button className="px-3 py-2 text-blue-600 hover:underline">Previous</button>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded">1</button>
                  <button className="w-10 h-10 text-blue-600 hover:bg-gray-100 rounded">2</button>
                  <button className="w-10 h-10 text-blue-600 hover:bg-gray-100 rounded">3</button>
                  <button className="w-10 h-10 text-blue-600 hover:bg-gray-100 rounded">4</button>
                  <button className="w-10 h-10 text-blue-600 hover:bg-gray-100 rounded">5</button>
                </div>
                <button className="px-3 py-2 text-blue-600 hover:underline">Next</button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}