import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { sanityClient, urlFor } from '../../lib/sanity'

interface Article {
  _id: string;
  title: string;
  description?: string;
  slug: string;
  featureImage?: any;
  publishedAt?: string;
  author?: string;
  category?: string;
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
    <div className="container py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        {allPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh]">
            <div className="text-center py-16 text-xl text-gray-500 dark:text-gray-400 font-semibold">
              Sorry, there are no articles to display at this time. Please check back soon for updates and new content.
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-3 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-green-700 sm:text-5xl md:text-6xl mb-2">Our Blog</h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                Insights, inspiration, and practical advice from our design experts.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  asChild
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className="rounded-full px-4 py-1 bg-emerald-50 text-green-700 border-green-200 hover:text-white hover:bg-green-600"
                >
                  <Link href={`?category=${encodeURIComponent(category ?? "All")}&page=1`}>{category}</Link>
                </Button>
              ))}
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Card key={post._id} className="flex flex-col overflow-hidden border border-emerald-100 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-emerald-950">
                  <div className="relative w-full aspect-video overflow-hidden bg-emerald-50 dark:bg-emerald-900">
                    {post.featureImage ? (
                      <Image
                        src={urlFor(post.featureImage).width(800).height(600).fit('max').auto('format').url()}
                        alt={post.title}
                        fill
                        className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105 rounded-t-lg"
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
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  asChild
                  variant={page === i + 1 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full border-green-200 text-green-700 dark:text-green-200 bg-emerald-50 hover:text-white hover:bg-green-600"
                >
                  <Link href={`?category=${encodeURIComponent(selectedCategory ?? "All")}&page=${i + 1}`}>{i + 1}</Link>
                </Button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
