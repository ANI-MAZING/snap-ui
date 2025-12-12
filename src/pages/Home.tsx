import { BackgroundRenderer } from "@/components/background/BackgroundRenderer";
import { Navbar } from "@/components/shared/Navbar";

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
