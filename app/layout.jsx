import { revalia, raleway } from './fonts.js';
import './styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import NewNav from './components/NewNav';
import { Raleway } from 'next/font/google';
import { Revalia } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

export const metadata = {
	title: 'Luchador Movie Review',
	description: 'Oh you Know',
};

export default function RootLayout({ children }) {
	const Revalia = revalia;
	return (
		<html lang='en' className={revalia}>
			<body>
				<Toaster position='bottom-right' toastOptions={{ duration: 3000 }} />
				<Analytics />
				<NewNav />
				{children}
				<script
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `(function(){
                var i,e,d=document,s="script";
                i=d.createElement("script");
                i.async=1;
                i.src="https://cdn.curator.io/published/7ba8ae19-e90a-4ea3-9475-48c7674a9581.js";
                e=d.getElementsByTagName(s)[0];
                e.parentNode.insertBefore(i, e);
              })()`,
					}}
				/>
			</body>
		</html>
	);
}
