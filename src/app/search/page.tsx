'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const mockResults = [
    { id: 1, title: 'Web Automation Best Practices', url: 'https://example.com/automation', description: 'Learn the best practices for web automation testing with Selenium and Playwright.' },
    { id: 2, title: 'Advanced Web Crawling Techniques', url: 'https://example.com/crawling', description: 'Comprehensive guide to web crawling with Python and JavaScript.' },
    { id: 3, title: 'Search Engine Optimization Guide', url: 'https://example.com/seo', description: 'Complete SEO guide for better search engine rankings.' },
    { id: 4, title: 'Testing Framework Comparison', url: 'https://example.com/testing', description: 'Compare different testing frameworks for web applications.' },
    { id: 5, title: 'API Testing with Automation', url: 'https://example.com/api', description: 'How to automate API testing for better reliability.' },
  ]

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    
    // Simulate API delay
    setTimeout(() => {
      const filteredResults = mockResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filteredResults)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            TestSearch
          </Link>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Images</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Videos</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">News</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Maps</a>
          </nav>
        </div>
      </header>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto pt-8 px-4">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the web..."
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              data-testid="search-input"
            />
            <div className="absolute right-3 top-3 flex space-x-2">
              <button
                type="button"
                className="p-1 hover:bg-gray-100 rounded"
                aria-label="Voice search"
              >
                🎤
              </button>
              <button
                type="submit"
                className="p-1 hover:bg-gray-100 rounded"
                aria-label="Search"
                data-testid="search-button"
              >
                🔍
              </button>
            </div>
          </div>
        </form>

        {/* Filters */}
        <div className="flex space-x-4 mb-6 text-sm">
          <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">All</button>
          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full">Web</button>
          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full">Images</button>
          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full">Videos</button>
          <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full">News</button>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-2xl mx-auto px-4">
        {loading && (
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span>Searching...</span>
          </div>
        )}

        {results.length > 0 && !loading && (
          <div className="mb-4 text-sm text-gray-600">
            About {results.length} results (0.{Math.floor(Math.random() * 99)} seconds)
          </div>
        )}

        <div className="space-y-6">
          {results.map((result) => (
            <div key={result.id} className="border-b border-gray-100 pb-4" data-testid="search-result">
              <div className="text-sm text-green-700 mb-1">{result.url}</div>
              <h3 className="text-xl text-blue-600 hover:underline cursor-pointer mb-2">
                {result.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {results.length === 0 && query && !loading && (
          <div className="text-center py-8 text-gray-600">
            <p>No results found for "{query}"</p>
            <p className="text-sm mt-2">Try different keywords or check your spelling</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto py-4 px-4 text-sm text-gray-600">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900">About</a>
              <a href="#" className="hover:text-gray-900">Advertising</a>
              <a href="#" className="hover:text-gray-900">Business</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}