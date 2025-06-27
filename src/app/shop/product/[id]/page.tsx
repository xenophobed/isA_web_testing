'use client'

import { useState } from 'react'
import Link from 'next/link'

const productData = {
  1: {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    brand: 'TechPro',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 2847,
    images: [
      'https://via.placeholder.com/600x600?text=Headphones+Main',
      'https://via.placeholder.com/600x600?text=Headphones+Side',
      'https://via.placeholder.com/600x600?text=Headphones+Case',
    ],
    description: 'Premium wireless Bluetooth headphones with active noise cancellation, 30-hour battery life, and superior sound quality.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge: 5 min = 2 hours',
      'Premium comfort design',
      'Hi-Res Audio certified'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 ohms',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack'
    },
    inStock: true,
    quantity: 15
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const productId = parseInt(id)
  const product = productData[productId as keyof typeof productData]
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedTab, setSelectedTab] = useState('description')

  if (!product) {
    return <div>Product not found</div>
  }

  const reviews = [
    {
      id: 1,
      user: 'John D.',
      rating: 5,
      date: '2024-01-15',
      title: 'Excellent sound quality!',
      content: 'These headphones exceeded my expectations. The noise cancellation is fantastic and the battery life is as advertised.',
      verified: true
    },
    {
      id: 2,
      user: 'Sarah M.',
      rating: 4,
      date: '2024-01-10',
      title: 'Great value for money',
      content: 'Very comfortable to wear for long periods. Sound quality is good, though not the best I\'ve heard.',
      verified: true
    },
    {
      id: 3,
      user: 'Mike R.',
      rating: 5,
      date: '2024-01-05',
      title: 'Perfect for work from home',
      content: 'The noise cancellation helps me focus during video calls. Highly recommend!',
      verified: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Simplified */}
      <header className="bg-gray-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/shop" className="text-xl font-bold hover:text-yellow-400">
            ← Back to Shop
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg p-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover rounded"
                data-testid="main-product-image"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 rounded ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  data-testid={`thumbnail-${index}`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover rounded" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2" data-testid="product-title">
                {product.name}
              </h1>
              <p className="text-blue-600 hover:underline cursor-pointer">
                Visit the {product.brand} Store
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="ml-2 text-blue-600">{product.rating}</span>
              </div>
              <span className="text-blue-600 hover:underline cursor-pointer">
                {product.reviewCount} ratings
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-red-600" data-testid="product-price">
                  ${product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-green-600 font-medium">FREE Returns</p>
              <p className="text-green-600">FREE delivery tomorrow</p>
            </div>

            {/* Stock Status */}
            <div className="text-green-600 font-medium">
              {product.inStock ? `In Stock - ${product.quantity} left` : 'Currently unavailable'}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium">Qty:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="border border-gray-300 rounded px-3 py-1"
                  data-testid="quantity-select"
                >
                  {[...Array(Math.min(10, product.quantity))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded" data-testid="add-to-cart">
                  Add to Cart
                </button>
                <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 px-4 rounded" data-testid="buy-now">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Security */}
            <div className="border border-gray-200 rounded p-4 text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>Secure transaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📦</span>
                <span>Ships from TestShop</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>↩️</span>
                <span>Return policy: 30 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`py-4 text-sm font-medium capitalize ${
                    selectedTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  data-testid={`tab-${tab}`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === 'description' && (
              <div className="space-y-4">
                <p className="text-gray-700">{product.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div>
                <h3 className="font-semibold mb-4">Technical Specifications</h3>
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-100">
                        <td className="py-2 pr-4 font-medium text-gray-600 w-1/3">{key}</td>
                        <td className="py-2 text-gray-900">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Customer Reviews</h3>
                  <button className="text-blue-600 hover:underline">Write a review</button>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4" data-testid="review">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium">{review.user}</span>
                          {review.verified && (
                            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex text-yellow-400">
                          {'★'.repeat(review.rating)}
                          {'☆'.repeat(5 - review.rating)}
                        </div>
                        <span className="font-medium">{review.title}</span>
                      </div>
                      
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}