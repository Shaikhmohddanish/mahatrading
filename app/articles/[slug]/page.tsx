import { sanityClient, urlFor } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { portableTextComponents } from '@/components/portable-text-components'
import '@/styles/blog.css'
import { Metadata } from 'next'
import { getAbsoluteUrl, truncateText, getSocialShareImage } from '@/lib/meta-utils'
import SocialShare from '@/components/social-share'

// Update Article type to match new schema and support multiple images
interface Article {
  title: any[]; // Rich text array instead of string
  featureImage?: any;
  images?: any[];
  content: any;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  category?: string;
  publishedAt?: string;
}

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

type Props = { params: { slug: string } }

// Generate metadata for SEO and social sharing
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  
  // Fetch article data for metadata
  const query = `*[_type == "article" && slug.current == $slug][0] {
    title,
    featureImage,
    metaTitle,
    metaDescription,
    keywords,
    "category": category->title,
    publishedAt
  }`
  
  const article = await sanityClient.fetch(query, { slug });
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.'
    };
  }
  
  const title = article.metaTitle || extractPlainText(article.title);
  const description = truncateText(article.metaDescription || extractPlainText(article.title));
  // Use our optimized social sharing image utility
  const imageUrl = getSocialShareImage(article.featureImage, urlFor);
  
  return {
    title,
    description,
    keywords: article.keywords || [],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: article.publishedAt,
      url: getAbsoluteUrl(`articles/${slug}`),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: title,
        }
      ],
      siteName: 'Maha Tradings',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    // Additional metadata for WhatsApp and other platforms
    other: {
      'whatsapp-preview-image': imageUrl
    }
  };
}

export default async function ArticleDetailPage(props: Props) {
  const params = await props.params;
  const query = `*[_type == "article" && slug.current == $slug][0] {
    title,
    featureImage,
    images,
    content,
    metaTitle,
    metaDescription,
    keywords,
    "category": category->title,
    publishedAt
  }`
  const article: Article = await sanityClient.fetch(query, { slug: params.slug })

  if (!article) return notFound()

  // Fetch more articles from the same category (excluding current)
  const moreQuery = `*[_type == "article" && status == "published" && category->title == $category && slug.current != $slug] | order(publishedAt desc)[0...7] {
    _id,
    title,
    description,
    "slug": slug.current,
    featureImage,
    publishedAt,
    author,
    "category": category->title
  }`
  const moreArticles = article.category ? await sanityClient.fetch(moreQuery, { category: article.category, slug: params.slug }) : []
  const showViewMore = moreArticles.length === 7
  const sliderArticles = moreArticles.slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Back Button */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-emerald-100 py-4">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="hover:bg-emerald-50 hover:text-emerald-700 rounded-full">
            <Link href="/articles" className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm rounded-3xl mb-12">
            {/* Featured Image Section */}
            {(article.images && article.images.length > 0) ? (
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {article.images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-t-3xl">
                          <Image
                            src={urlFor(img).url()}
                            alt={extractPlainText(article.title)}
                            fill
                            className="object-contain w-full h-full"
                            priority={idx === 0}
                            sizes="100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
                  <CarouselNext className="right-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
                </Carousel>
              </div>
            ) : article.featureImage ? (
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-t-3xl">
                <Image
                  src={urlFor(article.featureImage).url()}
                  alt={extractPlainText(article.title)}
                  fill
                  className="object-contain w-full h-full"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ) : null}

            {/* Article Header */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
                  <span className="text-sm font-medium text-emerald-700">{article.category}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  }) : ''}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {extractPlainText(article.title)}
              </h1>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed blog-content">
                <PortableText 
                  value={article.content}
                  components={portableTextComponents}
                />
              </div>

              {/* Social Share */}
              <SocialShare 
                url={`/articles/${params.slug}`} 
                title={extractPlainText(article.title)}
              />

              {/* Keywords */}
              {article.keywords && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">TAGS</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.keywords.map((tag, idx) => (
                      <Badge key={tag + '-' + idx} variant="secondary" className="px-3 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Related Articles Section */}
          {sliderArticles.length > 0 && (
            <section className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  More in <span className="text-emerald-600">{article.category}</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover more insights and expert advice in this category
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {sliderArticles.map((post: any, index: number) => (
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
                          <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-emerald-600 font-medium">{post.category}</span>
                        <span className="text-xs text-gray-500">
                          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          }) : ''}
                        </span>
                      </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {extractPlainText(post.title)}
                    </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                        {post.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">By {post.author || 'Admin'}</span>
                        <Button asChild variant="ghost" size="sm" className="group-hover:bg-emerald-50 group-hover:text-emerald-700 rounded-full">
                          <Link href={`/articles/${post.slug}`} className="flex items-center gap-1">
                            <span className="text-xs">Read</span>
                            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* View More Button */}
              {showViewMore && (
                <div className="text-center">
                  <Button asChild className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href={`/articles?category=${encodeURIComponent(article.category ?? '')}`} className="flex items-center gap-2">
                      <span>View All {article.category} Articles</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  )
}
