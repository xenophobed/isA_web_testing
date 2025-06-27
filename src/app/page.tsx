import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Web Testing Platform
        </h1>
        <p className="text-lg text-center mb-12 text-gray-600">
          Comprehensive testing environment for web automation, crawling, and search
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/search" className="group">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">🔍</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Search Testing</h2>
              <p className="text-gray-600">Google-style search interface for testing search automation</p>
            </div>
          </Link>
          
          <Link href="/shop" className="group">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-orange-600 text-4xl mb-4">🛒</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">E-commerce Testing</h2>
              <p className="text-gray-600">Amazon-style product pages for crawling and data extraction</p>
            </div>
          </Link>
          
          <Link href="/social" className="group">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-purple-600 text-4xl mb-4">📱</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Social Testing</h2>
              <p className="text-gray-600">Social media interfaces for automation testing</p>
            </div>
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/forms" className="group">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-green-600 text-4xl mb-4">📝</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Form Testing</h2>
              <p className="text-gray-600">Complex forms with validation, CAPTCHA, and various input types</p>
            </div>
          </Link>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Testing Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
              <div>✓ Form Validation</div>
              <div>✓ CAPTCHA Systems</div>
              <div>✓ Login Flows</div>
              <div>✓ Dynamic Content</div>
              <div>✓ API Responses</div>
              <div>✓ Data Tables</div>
              <div>✓ Modal Dialogs</div>
              <div>✓ Complex UI Elements</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}