import Link from "next/link";

export default function Index() {
	return (
		<div> 
			<p>Welcome to Drake University Official Apparel</p>
			<Link href="/items">																										
				<a title = "Start Shopping!">Start Shopping!</a>
			</Link>
		</div>
	);
}
