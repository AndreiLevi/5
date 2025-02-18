Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /menu
- /search
- /sign-in
- /get-started
- /about
- /blog
- /features
- /agencies

Page Implementations:
/menu:
Core Purpose: Display product

/service catalog with categories and pricing
Key Components:
- Category filters
- Product

/service cards
- Price display
- Add to cart functionality
- Interactive menu sections
Layout Structure:
- Grid layout for items
- Sticky category navigation
- Collapsible sections on mobile

/search:
Core Purpose: Allow users to find specific content across the platform
Key Components
- Search bar with autocomplete
- Filters panel
- Results grid
- Search history
- Advanced search options
Layout Structure
- Search bar at top
- Filters sidebar (collapses to top on mobile)
- Results in main content area

/sign-in:
Core Purpose: User authentication and account access
Key Components
- Login form
- Social login options
- Password recovery
- Remember me option
- Sign up link
Layout Structure
- Centered card layout
- Single column form
- Responsive padding

/get-started:
Core Purpose: New user onboarding and registration
Key Components
- Multi-step registration form
- Progress indicator
- Plan selection
- Account setup wizard
Layout Structure
- Step-by-step wizard
- Progress bar at top
- Full-width sections

/about:
Core Purpose: Company information and brand story
Key Components
- Company timeline
- Team section
- Mission statement
- Contact information
- Media gallery
Layout Structure
- Hero section
- Alternating content blocks
- Team grid
- Contact section footer

/blog:
Core Purpose: Content publishing and knowledge sharing
Key Components
- Article cards
- Category filters
- Search functionality
- Author profiles
- Newsletter signup
Layout Structure
- Featured post header
- Article grid
- Sidebar with categories
- Pagination

/features:
Core Purpose: Showcase product

/service capabilities
Key Components:
- Feature cards
- Interactive demos
- Comparison tables
- CTAs
- Testimonials
Layout Structure
- Feature grid
- Demo sections
- Social proof sections
- Mobile-first responsive design

/agencies:
Core Purpose: Agency partner information and registration
Key Components
- Partner benefits
- Registration form
- Case studies
- Partner directory
Layout Structure
- Hero with value proposition
- Benefits grid
- Partner showcase
- Application section

Layouts:
MainLayout:
- Applicable routes: all except /sign-in
- Core components
  - Header with navigation
  - Footer
  - Sidebar (where applicable)
  - Content area
- Responsive behavior
  - Collapsible navigation on mobile
  - Fluid content areas
  - Responsive spacing

AuthLayout
- Applicable routes: /sign-in, /get-started
- Core components
  - Minimal header
  - Authentication forms
  - Brand elements
- Responsive behavior
  - Centered content
  - Full-screen on mobile
  - Adaptive form elements

BlogLayout
- Applicable routes: /blog
- Core components
  - Blog header
  - Content area
  - Sidebar
  - Newsletter section
- Responsive behavior
  - Sidebar moves to bottom on mobile
  - Responsive typography
  - Adaptive image sizing
</page-structure-prompt>