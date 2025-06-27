'use client'

import { useState } from 'react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Apple AirPods Pro (2nd Generation) Wireless Earbuds with MagSafe Charging Case - Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone',
    price: 199.99,
    originalPrice: 249.00,
    rating: 4.4,
    reviewCount: 47382,
    image: 'https://via.placeholder.com/300x300/f0f0f0/333333?text=AirPods+Pro',
    badge: "Amazon's Choice",
    prime: true,
    delivery: 'Get it as soon as Tomorrow, Dec 28',
    location: 'FREE delivery to China',
    sponsored: false,
    coupon: 'Save 5% with coupon',
    savings: '20% off'
  },
  {
    id: 2,
    name: 'Apple Watch Series 9 [GPS 45mm] Smart Watch with Midnight Aluminum Case with Midnight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant',
    price: 379.00,
    originalPrice: 429.00,
    rating: 4.3,
    reviewCount: 12847,
    image: 'https://via.placeholder.com/300x300/f0f0f0/333333?text=Apple+Watch',
    badge: '#1 Best Seller',
    prime: true,
    delivery: 'Get it as soon as Tomorrow, Dec 28',
    location: 'FREE delivery to China',
    sponsored: true,
    coupon: '',
    savings: '12% off'
  },
  {
    id: 3,
    name: 'Samsung Galaxy Buds2 True Wireless Bluetooth Earbuds, Improved Active Noise Cancellation, Comfortable Fit, Touch Controls, Quality Sound, US Version, Graphite',
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.2,
    reviewCount: 8934,
    image: 'https://via.placeholder.com/300x300/f0f0f0/333333?text=Galaxy+Buds',
    badge: '',
    prime: true,
    delivery: 'Get it as soon as Tomorrow, Dec 28',
    location: 'FREE delivery to China',
    sponsored: false,
    coupon: 'Save 10% with coupon',
    savings: '40% off'
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with Auto Noise Canceling Optimizer, Crystal Clear Hands-Free Calling, and Alexa Voice Control, Silver',
    price: 328.00,
    originalPrice: 399.99,
    rating: 4.5,
    reviewCount: 15623,
    image: 'https://via.placeholder.com/300x300/f0f0f0/333333?text=Sony+Headphones',
    badge: "Amazon's Choice",
    prime: true,
    delivery: 'Get it as soon as Tomorrow, Dec 28',
    location: 'FREE delivery to China',
    sponsored: false,
    coupon: '',
    savings: '18% off'
  }
]

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('electronics')
  const [sortBy, setSortBy] = useState('Featured')

  const renderStars = (rating: number, size: 'sm' | 'md' = 'sm') => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    const starSize = size === 'sm' ? 'text-sm' : 'text-base'
    
    return (
      <div className="flex items-center">
        <div className={`flex ${starSize}`}>
          {[...Array(fullStars)].map((_, i) => (
            <span key={i} className="text-yellow-500">★</span>
          ))}
          {hasHalfStar && <span className="text-yellow-500">☆</span>}
          {[...Array(emptyStars)].map((_, i) => (
            <span key={i} className="text-gray-300">★</span>
          ))}
        </div>
        <span className="text-blue-600 text-sm ml-1 hover:underline cursor-pointer hover:text-red-700">
          {rating}
        </span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Amazon Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        {/* Main Header */}
        <div className="px-3 py-2">
          <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:border border-white p-1 rounded">
              <div className="text-white text-2xl font-bold flex items-end">
                <span>amazon</span>
                <div className="w-6 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-sm ml-1 mb-1 flex items-center justify-center">
                  <div className="w-4 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </Link>

            {/* Deliver to */}
            <div className="hidden lg:flex items-center hover:border border-white p-1 rounded cursor-pointer">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <div className="text-xs">
                <div className="text-gray-300">Deliver to</div>
                <div className="font-bold">China</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-3">
              <div className="flex h-10">
                <select className="bg-gray-200 text-gray-900 px-2 text-sm border-r border-gray-400 rounded-l-md hover:bg-gray-300">
                  <option>All Departments</option>
                  <option>Arts & Crafts</option>
                  <option>Automotive</option>
                  <option>Baby</option>
                  <option>Beauty & Personal Care</option>
                  <option>Books</option>
                  <option>Boys' Fashion</option>
                  <option>Computers</option>
                  <option>Electronics</option>
                </select>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Amazon"
                  className="flex-1 px-3 text-gray-900 outline-none text-base"
                  data-testid="product-search"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 px-4 rounded-r-md border-l border-yellow-600">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block text-xs hover:border border-white p-1 rounded cursor-pointer">
                <div className="text-gray-300">Hello, sign in</div>
                <div className="font-bold">Account & Lists ▾</div>
              </div>
              <div className="hidden lg:block text-xs hover:border border-white p-1 rounded cursor-pointer">
                <div className="text-gray-300">Returns</div>
                <div className="font-bold">& Orders</div>
              </div>
              <div className="flex items-center hover:border border-white p-1 rounded cursor-pointer">
                <div className="relative mr-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2a1 1 0 0 1 2 0v2h6V2a1 1 0 0 1 2 0v2h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1zM6 6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6z"/>
                    <path d="M7 8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8z"/>
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                    0
                  </span>
                </div>
                <div className="text-xs">
                  <div className="font-bold">Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="bg-gray-800 px-3 py-2">
          <div className="flex items-center space-x-6 max-w-screen-2xl mx-auto text-sm">
            <button className="flex items-center hover:border border-white p-1 rounded">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
              All
            </button>
            <a href="#" className="hover:border border-white p-1 rounded">Today's Deals</a>
            <a href="#" className="hover:border border-white p-1 rounded">Customer Service</a>
            <a href="#" className="hover:border border-white p-1 rounded">Registry</a>
            <a href="#" className="hover:border border-white p-1 rounded">Gift Cards</a>
            <a href="#" className="hover:border border-white p-1 rounded">Sell</a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-4 py-3 text-sm text-gray-700 bg-gray-50 border-b">
        <div className="max-w-screen-2xl mx-auto">
          <a href="#" className="text-blue-600 hover:underline hover:text-red-700">Electronics</a>
          <span className="mx-2 text-gray-500">›</span>
          <a href="#" className="text-blue-600 hover:underline hover:text-red-700">Headphones & Earbuds</a>
          <span className="mx-2 text-gray-500">›</span>
          <span>Wireless Earbuds</span>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 py-4">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <aside className="w-64 space-y-6">
            {/* Department */}
            <div className="bg-white border border-gray-200 rounded p-4">
              <h3 className="font-bold text-base mb-3 text-gray-900">Department</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-start space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" className="mt-1" />
                  <span>Electronics</span>
                </label>
                <div className="ml-4 space-y-1 text-xs">
                  <label className="flex items-start space-x-2 cursor-pointer hover:text-blue-600">
                    <input type="checkbox" className="mt-1" />
                    <span>Headphones & Earbuds</span>
                  </label>
                  <label className="flex items-start space-x-2 cursor-pointer hover:text-blue-600">
                    <input type="checkbox" className="mt-1" />
                    <span>Speakers</span>
                  </label>
                  <label className="flex items-start space-x-2 cursor-pointer hover:text-blue-600">
                    <input type="checkbox" className="mt-1" />
                    <span>Cell Phones & Accessories</span>
                  </label>
                </div>
                <label className="flex items-start space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" className="mt-1" />
                  <span>Computers & Accessories</span>
                </label>
                <label className="flex items-start space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" className="mt-1" />
                  <span>Video Games</span>
                </label>
                <label className="flex items-start space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" className="mt-1" />
                  <span>Home & Kitchen</span>
                </label>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="bg-white border border-gray-200 rounded p-4">
              <h3 className="font-bold text-base mb-3 text-gray-900">Customer Reviews</h3>
              <div className="space-y-2 text-sm">
                {[4, 3, 2, 1].map((stars) => (
                  <label key={stars} className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                    <input type="checkbox" />
                    <div className="flex items-center">
                      <div className="flex text-yellow-500 text-sm">
                        {[...Array(stars)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                        {[...Array(5 - stars)].map((_, i) => (
                          <span key={i} className="text-gray-300">★</span>
                        ))}
                      </div>
                      <span className="ml-2 text-blue-600">& Up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand */}
            <div className="bg-white border border-gray-200 rounded p-4">
              <h3 className="font-bold text-base mb-3 text-gray-900">Brand</h3>
              <div className="space-y-2 text-sm">
                {['Apple', 'Samsung', 'Sony', 'Anker', 'Bose', 'JBL', 'Beats'].map((brand) => (
                  <label key={brand} className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                    <input type="checkbox" />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="bg-white border border-gray-200 rounded p-4">
              <h3 className="font-bold text-base mb-3 text-gray-900">Price</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" />
                  <span>Under $25</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" />
                  <span>$25 to $50</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" />
                  <span>$50 to $100</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" />
                  <span>$100 to $200</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" />
                  <span>$200 & Above</span>
                </label>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-700">$</span>
                  <input type="number" placeholder="Min" className="w-16 px-2 py-1 border border-gray-300 rounded text-xs" />
                  <span className="text-gray-500">to</span>
                  <span className="text-gray-700">$</span>
                  <input type="number" placeholder="Max" className="w-16 px-2 py-1 border border-gray-300 rounded text-xs" />
                  <button className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-xs">Go</button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-base text-gray-900">
                    <span className="font-normal">1-16 of over 50,000 results for </span>
                    <span className="font-bold text-red-700">"{searchQuery}"</span>
                  </h1>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-700">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                    data-testid="sort-dropdown"
                  >
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Avg. Customer Review</option>
                    <option>Newest Arrivals</option>
                    <option>Best Sellers</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {products.map((product) => (
                <Link key={product.id} href={`/shop/product/${product.id}`}>
                  <div className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-4 h-full flex flex-col relative" data-testid="product-card">
                    {/* Sponsored Tag */}
                    {product.sponsored && (
                      <div className="text-xs text-gray-500 mb-2 font-medium">Sponsored</div>
                    )}

                    {/* Product Image */}
                    <div className="relative mb-4 flex justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain"
                      />
                      {product.badge && (
                        <div className="absolute top-2 left-2">
                          <span className={`text-white text-xs px-2 py-1 rounded text-center font-medium ${
                            product.badge.includes('Best Seller') ? 'bg-red-700' :
                            product.badge.includes('Choice') ? 'bg-orange-600' : 'bg-blue-600'
                          }`}>
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-sm text-gray-900 mb-2 line-clamp-4 hover:text-blue-600 cursor-pointer">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center mb-2">
                        {renderStars(product.rating)}
                        <span className="text-blue-600 text-sm ml-2 hover:underline hover:text-red-700 cursor-pointer">
                          ({product.reviewCount.toLocaleString()})
                        </span>
                      </div>

                      {/* Savings */}
                      {product.savings && (
                        <div className="bg-red-700 text-white text-xs px-2 py-1 rounded w-fit mb-2 font-medium">
                          {product.savings}
                        </div>
                      )}

                      {/* Price */}
                      <div className="mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-700">$</span>
                          <span className="text-2xl font-normal text-gray-900" data-testid="product-price">
                            {product.price.toString().split('.')[0]}
                          </span>
                          <span className="text-sm text-gray-700 self-start mt-1">
                            {product.price.toString().split('.')[1]}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Coupon */}
                      {product.coupon && (
                        <div className="mb-2">
                          <span className="text-xs text-green-700 font-medium">
                            {product.coupon}
                          </span>
                        </div>
                      )}

                      {/* Delivery */}
                      <div className="text-sm text-gray-700 mb-1">
                        {product.delivery}
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        {product.location}
                      </div>

                      {/* Prime */}
                      {product.prime && (
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold">
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
            <div className="mt-8 flex justify-center">
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 text-sm">
                See more results
              </button>
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-1">
                <span className="text-blue-600 hover:underline hover:text-red-700 cursor-pointer px-2 py-1 text-sm">← Previous</span>
                <div className="flex space-x-1">
                  <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded font-bold text-sm">1</div>
                  <button className="text-blue-600 hover:underline hover:text-red-700 px-3 py-1 text-sm">2</button>
                  <button className="text-blue-600 hover:underline hover:text-red-700 px-3 py-1 text-sm">3</button>
                  <span className="px-2 py-1 text-sm">...</span>
                  <button className="text-blue-600 hover:underline hover:text-red-700 px-3 py-1 text-sm">10</button>
                </div>
                <span className="text-blue-600 hover:underline hover:text-red-700 cursor-pointer px-2 py-1 text-sm">Next →</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}