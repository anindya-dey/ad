import { FeaturedPost } from "./featured-post.component";

export function FeaturedPosts() {
  const featuredPosts = [
    'Featured Post 1',
    'Featured Post 2',
    'Featured Post 3',
  ]
  return (
    <>
      {
        featuredPosts.map((content, i) => <FeaturedPost content={content} key={i} />)
      }
    </>
  );
}
