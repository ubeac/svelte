export async function GET(event: any) {
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	}
	return new Response(`User-agent: * \nAllow: / \n \nSitemap: ${event.url.origin}/sitemap.xml`.trim(), {
		headers: {
			'Content-Type': 'text/plain',
		},
	})
}
