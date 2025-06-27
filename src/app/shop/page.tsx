'use client'

import { useState } from 'react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Apple AirPods Pro (2nd Generation) Wireless Earbuds with MagSafe Charging Case',
    price: 199.99,
    originalPrice: 249.00,
    rating: 4.4,
    reviewCount: 47382,
    image: 'https://via.placeholder.com/300x300?text=AirPods+Pro',
    badge: 'Amazon\'s Choice',
    prime: true,
    delivery: 'FREE delivery Wed, Dec 27',
    sponsored: false
  },
  {
    id: 2,
    name: 'Apple Watch Series 9 [GPS 45mm] Smart Watch with Midnight Aluminum Case with Midnight Sport Band',
    price: 379.00,
    originalPrice: 429.00,
    rating: 4.3,
    reviewCount: 12847,
    image: 'https://via.placeholder.com/300x300?text=Apple+Watch',
    badge: 'Best Seller',
    prime: true,
    delivery: 'FREE delivery Wed, Dec 27',
    sponsored: true
  },
  {
    id: 3,
    name: 'Samsung Galaxy Buds2 True Wireless Bluetooth Earbuds, Improved Active Noise Cancellation',
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.2,
    reviewCount: 8934,
    image: 'https://via.placeholder.com/300x300?text=Galaxy+Buds',
    badge: '',
    prime: true,
    delivery: 'FREE delivery Wed, Dec 27',
    sponsored: false
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with Auto Noise Canceling Optimizer',
    price: 328.00,
    originalPrice: 399.99,
    rating: 4.5,
    reviewCount: 15623,
    image: 'https://via.placeholder.com/300x300?text=Sony+Headphones',
    badge: 'Amazon\'s Choice',
    prime: true,
    delivery: 'FREE delivery Wed, Dec 27',
    sponsored: false
  },
  {
    id: 5,
    name: 'Anker Wireless Charger, PowerWave 10 Stand with Watch Holder for Apple Watch, No AC Adapter',
    price: 35.99,
    originalPrice: 49.99,
    rating: 4.4,
    reviewCount: 28947,
    image: 'https://via.placeholder.com/300x300?text=Anker+Charger',
    badge: 'Best Seller',
    prime: true,
    delivery: 'FREE delivery Wed, Dec 27',
    sponsored: false
  },
  {
    id: 6,
    name: 'SAMSUNG 65-Inch Class Crystal UHD 4K CU7000 Series Smart TV with Object Tracking Sound Lite',
    price: 497.99,
    originalPrice: 649.99,
    rating: 4.3,
    reviewCount: 6789,
    image: 'https://via.placeholder.com/300x300?text=Samsung+TV',
    badge: '',
    prime: false,
    delivery: 'FREE delivery Fri, Dec 29',
    sponsored: true
  }
]

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('Featured')

  const categories = [
    'Electronics', 'Computers', 'Smart Home', 'Arts & Crafts', 'Automotive', 
    'Baby', 'Beauty & Personal Care', 'Books', 'Women\'s Fashion', 'Men\'s Fashion'
  ]

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-orange-400 text-sm">★</span>
        ))}
        {hasHalfStar && <span className="text-orange-400 text-sm">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-300 text-sm">★</span>
        ))}
        <span className="text-blue-600 text-sm ml-1 hover:underline cursor-pointer">
          {rating}
        </span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="bg-gray-900 text-white">
        {/* Main Header */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-white text-xl font-bold">
                <span className="bg-orange-400 text-black px-1 rounded">amazon</span>
              </div>
            </Link>

            {/* Deliver to */}
            <div className="hidden md:flex items-center text-sm">
              <div>
                <div className="text-gray-300 text-xs">Deliver to</div>
                <div className="font-bold">📍 China</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="flex">
                <select className="bg-gray-200 text-gray-900 px-2 py-2 rounded-l text-sm border-r border-gray-400">
                  <option>All</option>
                  <option>Electronics</option>
                  <option>Computers</option>
                  <option>Books</option>
                </select>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Amazon"
                  className="flex-1 px-3 py-2 text-gray-900 outline-none"
                  data-testid="product-search"
                />
                <button className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-r">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-sm">
                <div className="text-gray-300 text-xs">Hello, sign in</div>
                <div className="font-bold">Account & Lists</div>
              </div>
              <div className="hidden md:block text-sm">
                <div className="text-gray-300 text-xs">Returns</div>
                <div className="font-bold">& Orders</div>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 text-lg mr-1">🛒</span>
                <span className="font-bold">Cart</span>
                <span className="bg-orange-400 text-gray-900 rounded-full w-5 h-5 text-xs flex items-center justify-center ml-1">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="bg-gray-800 px-4 py-2">
          <div className="flex items-center space-x-6 max-w-7xl mx-auto text-sm">
            <button className="hover:text-gray-300">☰ All</button>
            <a href="#" className="hover:text-gray-300">Today's Deals</a>
            <a href="#" className="hover:text-gray-300">Customer Service</a>
            <a href="#" className="hover:text-gray-300">Registry</a>
            <a href="#" className="hover:text-gray-300">Gift Cards</a>
            <a href="#" className="hover:text-gray-300">Sell</a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-4 py-3 text-sm text-gray-600 border-b">
        <div className="max-w-7xl mx-auto">
          <a href="#" className="hover:text-orange-600">Electronics</a>
          <span className="mx-2">›</span>
          <a href="#" className="hover:text-orange-600">Headphones</a>
          <span className="mx-2">›</span>
          <span>Wireless Earbuds</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 space-y-6">
            {/* Department */}
            <div>
              <h3 className="font-bold text-lg mb-3">Department</h3>
              <div className="space-y-2 text-sm">
                {categories.map((category, index) => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer hover:text-orange-600">
                    <input type="checkbox" className="rounded" />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Customer Reviews */}
            <div>
              <h3 className="font-bold mb-3">Customer Reviews</h3>
              <div className="space-y-2 text-sm">
                {[4, 3, 2, 1].map((stars) => (
                  <label key={stars} className="flex items-center space-x-2 cursor-pointer hover:text-orange-600">
                    <input type="checkbox" className="rounded" />
                    <div className="flex">
                      {[...Array(stars)].map((_, i) => (
                        <span key={i} className="text-orange-400">★</span>
                      ))}
                      {[...Array(5 - stars)].map((_, i) => (
                        <span key={i} className="text-gray-300">★</span>
                      ))}
                    </div>
                    <span>& Up</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand */}
            <div>
              <h3 className="font-bold mb-3">Brand</h3>
              <div className="space-y-2 text-sm">
                {['Apple', 'Samsung', 'Sony', 'Anker', 'Bose'].map((brand) => (
                  <label key={brand} className="flex items-center space-x-2 cursor-pointer hover:text-orange-600">
                    <input type="checkbox" className="rounded" />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-bold mb-3">Price</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-2 cursor-pointer hover:text-orange-600">
                  <input type="checkbox" className="rounded" />
                  <span>Under $25</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-orange-600">
                  <input type="checkbox" className="rounded" />
                  <span>$25 to $50</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-orange-600">
                  <input type="checkbox" className="rounded" />
                  <span>$50 to $100</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-orange-600">
                  <input type="checkbox" className="rounded" />
                  <span>$100 to $200</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-orange-600">
                  <input type="checkbox" className="rounded" />
                  <span>$200 & Above</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl">
                  <span className="font-normal">1-16 of over 50,000 results for </span>
                  <span className="font-bold">"electronics"</span>
                </h1>
                <div className="flex items-center space-x-2 text-sm">
                  <span>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                    data-testid="sort-dropdown"
                  >
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Avg. Customer Review</option>
                    <option>Newest Arrivals</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link key={product.id} href={`/shop/product/${product.id}`}>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow h-full flex flex-col" data-testid="product-card">
                    {/* Sponsored Tag */}
                    {product.sponsored && (
                      <div className="text-xs text-gray-500 mb-2">Sponsored</div>
                    )}

                    {/* Product Image */}
                    <div className="relative mb-4 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded"
                      />
                      {product.badge && (
                        <div className="absolute top-2 left-2">
                          <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-sm text-gray-900 mb-2 line-clamp-3 flex-1">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center mb-2">
                        {renderStars(product.rating)}
                        <span className="text-blue-600 text-sm ml-2 hover:underline cursor-pointer">
                          ({product.reviewCount.toLocaleString()})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900" data-testid="product-price">
                            ${product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Delivery */}
                      <div className="text-sm text-gray-600 mb-2">
                        {product.delivery}
                      </div>

                      {/* Prime */}
                      {product.prime && (
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            prime
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
                Load more results
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}