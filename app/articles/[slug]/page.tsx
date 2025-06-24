import { sanityClient, urlFor } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Update Article type to match new schema and support multiple images
interface Article {
  title: string;
  featureImage?: any;
  images?: any[];
  content: any;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  category?: string;
  publishedAt?: string;
}

type Props = { params: { slug: string } }

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
    <main className="container mx-auto max-w-3xl py-10 px-4">
      <div className="mb-6">
        <Button asChild variant="outline" className="mb-2">
          <Link href="/articles">← Back to Articles</Link>
        </Button>
      </div>
      <title>{article.metaTitle || article.title}</title>
      <meta name="description" content={article.metaDescription || ''} />
      <Card className="mb-8 overflow-hidden shadow-lg border border-emerald-100">
        {(article.images && article.images.length > 0) ? (
          <Carousel className="w-full aspect-[16/9] bg-gray-100">
            <CarouselContent>
              {article.images.map((img, idx) => (
                <CarouselItem key={idx}>                  <div className="relative w-full h-64 sm:h-96">
                    <Image
                      src={urlFor(img).url()}
                      alt={article.title}
                      fill
                      className="object-contain object-center w-full h-full rounded-t-lg shadow-md"
                      priority={idx === 0}
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL="/placeholder.jpg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : article.featureImage ? (          <div className="relative w-full aspect-[16/9] bg-gray-100 flex items-center justify-center overflow-hidden">
            <Image
              src={urlFor(article.featureImage).url()}
              alt={article.title}
              fill
              className="object-contain object-center w-full h-full rounded-t-lg shadow-md"
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ) : null}
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-700 mb-2 drop-shadow-lg">{article.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none text-base text-gray-800 dark:text-gray-100">
            <PortableText value={article.content} />
          </div>
          {article.keywords && (
            <div className="mt-6 flex flex-wrap gap-2">
              {article.keywords.map((tag, idx) => (
                <Badge key={tag + '-' + idx} variant="secondary">{tag}</Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
      {sliderArticles.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-green-700">More in {article.category}</h2>
          <Carousel className="relative">
            <CarouselContent>
              {sliderArticles.map((post: any, index: number) => (
                <CarouselItem key={post._id} className="max-w-xs">
                  <Card className="flex flex-col overflow-hidden border border-emerald-100 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-emerald-950">
                    <div className="relative w-full aspect-video overflow-hidden bg-emerald-50 dark:bg-emerald-900">                      {post.featureImage ? (
                        <Image
                          src={urlFor(post.featureImage).url()}
                          alt={post.title}
                          fill
                          className="object-contain object-center w-full h-full transition-transform duration-300 hover:scale-105 rounded-t-lg"
                          sizes="(max-width: 768px) 100vw, 800px"
                          priority={index === 0}
                        />
                      ) : (
                        <Image
                          src="/placeholder.svg"
                          alt={post.title}
                          fill
                          className="object-cover object-center w-full h-full rounded-t-lg"
                        />
                      )}
                    </div>
                    <CardHeader className="flex-1 pb-2">
                      <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-200 mb-1">
                        <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                      </div>
                      <CardTitle className="line-clamp-2 text-green-800 dark:text-green-200 text-xl font-bold mb-1">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3 text-gray-700 dark:text-gray-300 text-base">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">By {post.author || 'Admin'}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full border-green-200 text-green-700 dark:text-green-200">
                        <Link href={`/articles/${post.slug}`}>Read More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
              {showViewMore && (
                <CarouselItem className="max-w-xs flex items-center justify-center">
                  <Button asChild variant="outline" className="w-full h-full border-green-200 text-green-700 dark:text-green-200 mt-8">
                    <Link href={`/articles?category=${encodeURIComponent(article.category ?? '')}`}>View More</Link>
                  </Button>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      )}
    </main>
  )
}
