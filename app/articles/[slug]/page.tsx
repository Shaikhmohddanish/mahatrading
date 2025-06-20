import { sanityClient, urlFor } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

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

  return (
    <main className="container mx-auto max-w-3xl py-10 px-4">
      <title>{article.metaTitle || article.title}</title>
      <meta name="description" content={article.metaDescription || ''} />
      <Card className="mb-8 overflow-hidden shadow-lg border border-emerald-100">
        {(article.images && article.images.length > 0) ? (
          <Carousel className="w-full aspect-[16/9] bg-gray-100">
            <CarouselContent>
              {article.images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative w-full h-64 sm:h-96">
                    <Image
                      src={urlFor(img).width(800).height(450).fit('max').url()}
                      alt={article.title}
                      fill
                      className="object-cover object-center w-full h-full rounded-t-lg shadow-md"
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
        ) : article.featureImage ? (
          <div className="relative w-full aspect-[16/9] bg-gray-100 flex items-center justify-center overflow-hidden">
            <Image
              src={urlFor(article.featureImage).width(800).height(450).fit('max').url()}
              alt={article.title}
              fill
              className="object-cover object-center w-full h-full rounded-t-lg shadow-md"
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
    </main>
  )
}
