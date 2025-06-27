'use client'

import { useState } from 'react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 2847,
    image: 'https://via.placeholder.com/300x300?text=Headphones',
    badge: 'Best Seller',
    prime: true
  },
  {
    id: 2,
    name: 'Smart Watch with Fitness Tracker',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.3,
    reviewCount: 1523,
    image: 'https://via.placeholder.com/300x300?text=Smart+Watch',
    badge: 'Limited Deal',
    prime: true
  },
  {
    id: 3,
    name: 'Laptop Stand Adjustable',
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviewCount: 892,
    image: 'https://via.placeholder.com/300x300?text=Laptop+Stand',
    badge: '',
    prime: false
  },
  {
    id: 4,
    name: 'USB-C Hub Multi-Port Adapter',
    price: 45.99,
    originalPrice: 65.99,
    rating: 4.4,
    reviewCount: 1234,
    image: 'https://via.placeholder.com/300x300?text=USB+Hub',
    badge: 'Amazon Choice',
    prime: true
  },
  {
    id: 5,
    name: 'Wireless Mouse Ergonomic',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.2,
    reviewCount: 567,
    image: 'https://via.placeholder.com/300x300?text=Mouse',
    badge: '',
    prime: true
  },
  {
    id: 6,
    name: 'Mechanical Keyboard RGB',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.6,
    reviewCount: 2341,
    image: 'https://via.placeholder.com/300x300?text=Keyboard',
    badge: 'Best Seller',
    prime: true
  }
]

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')

  const categories = ['All', 'Electronics', 'Computers', 'Accessories', 'Audio', 'Gaming']
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Customer Reviews', 'Newest']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              TestShop
            </Link>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 text-gray-900 rounded-l focus:outline-none"
                  data-testid="product-search"
                />
                <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-r text-gray-900">
                  🔍
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hover:text-yellow-400">Account</button>
              <button className="hover:text-yellow-400">Orders</button>
              <button className="hover:text-yellow-400 relative">
                Cart
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-6">
            <button className="hover:text-yellow-400">All Departments</button>
            <button className="hover:text-yellow-400">Today's Deals</button>
            <button className="hover:text-yellow-400">Customer Service</button>
            <button className="hover:text-yellow-400">Registry</button>
            <button className="hover:text-yellow-400">Gift Cards</button>
            <button className="hover:text-yellow-400">Sell</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 space-y-6">
            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-3">Department</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="text-blue-600"
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-3">Price</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-blue-600" />
                  <span>Under $25</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-blue-600" />
                  <span>$25 to $50</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-blue-600" />
                  <span>$50 to $100</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-blue-600" />
                  <span>$100 & Above</span>
                </label>
              </div>
            </div>

            {/* Brand */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-3">Brand</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-blue-600" />
                  <span>TechPro</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-blue-600" />
                  <span>SmartDevice</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-blue-600" />
                  <span>ElectroMax</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Sort Bar */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  1-16 of over 2,000 results for "electronics"
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                    data-testid="sort-dropdown"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/shop/product/${product.id}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4" data-testid="product-card">
                    {/* Product Image */}
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded"
                      />
                      {product.badge && (
                        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                          {product.badge}
                        </span>
                      )}
                      {product.prime && (
                        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                          Prime
                        </span>
                      )}
                    </div>

                    {/* Product Info */}
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        ({product.reviewCount})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Free Shipping */}
                    <p className="text-sm text-green-600 mt-1">
                      FREE shipping
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}