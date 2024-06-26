import NavMenu from '@/components/NavMenu';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-24">
			<h1 className="mb-6 flex items-center gap-4 text-2xl font-semibold">SideDish demo</h1>
			<div className="mb-8">
				It is really easy to embed SideDish into your application.
				<br />
				This git repo contains multiple examples of how to do it.
				<div>
					<Link href="https://github.com/sidedishdev/demo" className="flex items-center gap-4 p-4">
						<Image alt="Github logo" src="/github-mark.png" height={50} width={50} />
						<span>Github repo</span>
					</Link>
				</div>
			</div>
			<div>
				<NavMenu />
			</div>
		</main>
	);
}
