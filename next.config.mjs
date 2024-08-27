/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	async headers() {
		return [
			{
				source: '/api/:path*',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: 'https://www.jc-ww.ca', // Replace with your domain
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET, POST, PUT, DELETE, OPTIONS',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'Content-Type, Authorization',
					},
				],
			},
		];
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: '/api/:path*',
			},
		];
	},
};
function throwError(envVar) {
	throw `Abort: You need to define ${envVar} in the .env file.`;
	if (!process.env.RESEND_API_KEY) return throwError('RESEND_API_KEY');
	if (!process.env.EMAIL_FROM) return throwError('EMAIL_FROM');
	if (!process.env.EMAIL_TO) return throwError('EMAIL_TO');
}

export default nextConfig;
