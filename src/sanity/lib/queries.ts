import { groq } from 'next-sanity'

export const productsQuery = groq`*[_type == "product"] {
  ...,
  "slug": slug.current,
  "category": category->slug.current,
  "images": images[].asset->url
}`

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  ...,
  "slug": slug.current,
  "category": category->slug.current,
  "images": images[].asset->url
}`

export const blogPostsQuery = groq`*[_type == "blog"] | order(publishedAt desc) {
  ...,
  "slug": slug.current,
  "image": image.asset->url
}`

export const blogPostBySlugQuery = groq`*[_type == "blog" && slug.current == $slug][0] {
  ...,
  "slug": slug.current,
  "image": image.asset->url
}`

export const categoriesQuery = groq`*[_type == "category"] {
  ...,
  "slug": slug.current
}`
