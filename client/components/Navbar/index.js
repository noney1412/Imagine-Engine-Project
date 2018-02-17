import Router from "next/router";
import Link from "next/link";
import NProgress from "nprogress";
import { Navbar } from "./_styled";

Router.onRouteChangeStart = url => {
	console.log(`Loading: ${url}`);
	NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
	<div>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/about">
			<a>about</a>
		</Link>
	</div>
);
