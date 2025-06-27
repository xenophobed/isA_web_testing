# Web Testing Platform

A comprehensive testing environment designed for web automation, crawling, and search testing. This platform simulates real-world websites and provides various testing scenarios for developers working on web automation tools.

## Features

### 🔍 Search Testing (Google-style)
- Search interface with real-time results
- Filter and sorting options
- Pagination and result counts
- Advanced search parameters

### 🛒 E-commerce Testing (Amazon-style)
- Product catalog with filtering
- Detailed product pages
- Shopping cart simulation
- Review systems and ratings
- Product images and specifications

### 📱 Social Media Testing (TikTok/Twitter-style)
- User authentication flows
- Social feed interactions
- Post creation and engagement
- User profiles and verification badges

### 📝 Complex Forms Testing
- Multi-step form validation
- Various input types and validations
- CAPTCHA systems (Math, Text, Image)
- Real-time error handling
- Conditional form fields

## Testing Scenarios

This platform is designed to test:

### Web Automation
- Login flows and authentication
- Form filling and submission
- Button clicks and navigation
- Modal dialogs and popups
- Dynamic content loading
- CAPTCHA solving

### Web Crawling
- Product data extraction
- Structured data parsing
- Image and media URLs
- Pagination handling
- Category navigation
- Price and inventory data

### Web Search
- Search query processing
- Result parsing and extraction
- Filter application
- Sort functionality
- Advanced search parameters

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd web-testing-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

3. Follow the prompts to configure your deployment.

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Testing Elements

### Data Test IDs

The platform includes comprehensive `data-testid` attributes for automated testing:

- Search: `search-input`, `search-button`, `search-result`
- Products: `product-card`, `product-price`, `add-to-cart`
- Social: `social-post`, `like-button`, `comment-button`
- Forms: `email`, `password`, `captcha-input`, `submit-button`

### API Endpoints

Simulated API responses for testing API automation:

- `GET /api/products` - Product listing
- `GET /api/products/:id` - Product details
- `POST /api/search` - Search functionality
- `POST /api/auth/login` - Authentication

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
- Create an issue on GitHub
- Contact the development team

---

Built with Next.js, TypeScript, and Tailwind CSS for comprehensive web testing scenarios.