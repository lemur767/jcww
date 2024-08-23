/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	async headers() {
		return [
			{
				source: '/api/send',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET, DELETE, PUT, POST, PATCH',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'Accept-Post, Accept, Content-Length, Content-Type, X-Requested-With, X-Api-Version, User-Agent, Host, Accept-Endcoding, Connection',
					},
				],
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
