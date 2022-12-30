import { navigations } from '../docs'

let result = ''
let hostName = ''

function GetNodes(navs: any[]) {
	navs.forEach((navigation) => {
		if (navigation.children && navigation.children.length > 0) {
			GetNodes(navigation.children)
		} else {
			result += `
          <url>
            <loc>${hostName + navigation.route}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
          </url>`
		}
	})

	return result
}

export async function GET(event: any) {
	hostName = event.url.origin
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	}
	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${GetNodes(navigations)}
    </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		}
	)
}
