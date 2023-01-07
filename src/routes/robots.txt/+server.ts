import { site_base_url } from '../(docs)/docs'

export const prerender = true

export async function GET(event: any) {
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	}
	return new Response(`User-agent: * \nAllow: / \n \nSitemap: ${site_base_url}/sitemap.xml`.trim(), {
		headers: {
			'Content-Type': 'text/plain',
		},
	})
}
