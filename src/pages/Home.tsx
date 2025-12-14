import { BackgroundRenderer } from "@/components/background/BackgroundRenderer";

export default function Home() {
	return (
		<BackgroundRenderer>
			<div className="p-6">
				<h1 className="text-4xl font-bold">Welcome to SnapUI</h1>
				<p className="text-muted-foreground mt-2">Explore patterns and favourites.</p>
			</div>
		</BackgroundRenderer>
	);
}
