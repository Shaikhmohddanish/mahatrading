import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { sanityClient, urlFor } from '../../lib/sanity'
import { Metadata } from 'next'
import { getAbsoluteUrl, truncateText } from '@/lib/meta-utils'

interface Article {
  _id: string;
  title: any[]; // Rich text array instead of string
  description?: string;
  slug: string;
  featureImage?: any;
  publishedAt?: string;
  author?: string;
  category?: string;
}

// Metadata for articles listing page
export const metadata: Metadata = {
  title: 'Articles - Maha Tradings',
  description: truncateText('Discover expert insights, tips, and analysis on stock market trading and investing from Maha Tradings.'),
  openGraph: {
    title: 'Articles - Maha Tradings',
    description: truncateText('Discover expert insights, tips, and analysis on stock market trading and investing from Maha Tradings.'),
    type: 'website',
    url: getAbsoluteUrl('articles'),
    images: [
      {
        url: getAbsoluteUrl('/mahatradings-logo.png'),
        width: 1200,
        height: 630,
        alt: 'Maha Tradings Articles',
      }
    ],
    siteName: 'Maha Tradings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles - Maha Tradings',
    description: truncateText('Discover expert insights, tips, and analysis on stock market trading and investing from Maha Tradings.'),
    images: [getAbsoluteUrl('/mahatradings-logo.png')],
  }
};

// Helper function to extract plain text from rich text
function extractPlainText(richText: any[]): string {
  if (!richText || !Array.isArray(richText)) return '';
  
  return richText
    .filter(block => block._type === 'block' && block.children)
    .map(block => 
      block.children
        .filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join('')
    )
    .join(' ');
}

export default async function BlogPage(props: { searchParams?: { page?: string, category?: string } }) {
  const searchParams = props.searchParams ? await props.searchParams : {};
  const page = Number(searchParams.page) || 1;
  const selectedCategory = typeof searchParams.category === 'string' ? searchParams.category : "All";
  const pageSize = 6;

  const query = `*[_type == "article" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    description,
    "slug": slug.current,
    featureImage,
    publishedAt,
    author,
    "category": category->title
  }`
  const allPosts: Article[] = await sanityClient.fetch(query)
  const categories = ["All", ...Array.from(new Set(allPosts.map(post => post.category).filter(Boolean)))]

  // Filter by category if not 'All'
  const filteredPosts = selectedCategory === "All"
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory)

  const totalPages = Math.ceil(filteredPosts.length / pageSize)
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const posts = filteredPosts.slice(start, end)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Insights
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 mb-8 leading-relaxed">
              Discover insights, trends, and expert advice from our trading professionals
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-emerald-100">
              <span>{allPosts.length} Articles</span>
              <span>•</span>
              <span>{categories.length - 1} Categories</span>
            </div>
          </div>
        </div>
      </div>

      {allPosts.length === 0 ? (
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center min-h-[40vh]">
            <div className="text-center py-16 text-xl text-gray-500 dark:text-gray-400 font-semibold">
              Sorry, there are no articles to display at this time. Please check back soon for updates and new content.
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Category Filter */}
          <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-emerald-100 py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    asChild
                    variant={category === selectedCategory ? "default" : "outline"}
                    size="sm"
                    className={`rounded-full px-6 py-2 transition-all duration-300 ${
                      category === selectedCategory
                        ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                        : "bg-white/70 text-emerald-700 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
                    }`}
                  >
                    <Link href={`?category=${encodeURIComponent(category ?? "All")}&page=1`}>{category}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-8 md:gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {posts.map((post, index) => (
                <Card key={post._id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm rounded-2xl hover:scale-105">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 rounded-t-2xl">
                    {post.featureImage ? (
                      <Image
                        src={urlFor(post.featureImage).url()}
                        alt={extractPlainText(post.title)}
                        fill
                        className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-emerald-100 to-teal-100">
                        <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
                        <span className="text-xs font-medium text-emerald-700">{post.category}</span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        }) : ''}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {extractPlainText(post.title)}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white">
                            {(post.author || 'Admin').charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">By {post.author || 'Admin'}</span>
                      </div>
                      
                      <Button asChild variant="ghost" className="group-hover:bg-emerald-50 group-hover:text-emerald-700 rounded-full px-4">
                        <Link href={`/articles/${post.slug}`} className="flex items-center gap-2">
                          Read More
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i + 1}
                      asChild
                      variant={page === i + 1 ? "default" : "ghost"}
                      size="sm"
                      className={`rounded-full w-10 h-10 ${
                        page === i + 1
                          ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md"
                          : "text-emerald-700 hover:bg-emerald-50"
                      }`}
                    >
                      <Link href={`?category=${encodeURIComponent(selectedCategory ?? "All")}&page=${i + 1}`}>
                        {i + 1}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
