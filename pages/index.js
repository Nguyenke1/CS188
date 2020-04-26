import Link from "next/link";

export default function Index() {
	return (
		<div> 
			<p>Welcome to Drake University Official Apparel</p>
			<ul>
				<li>
					<Link href="/items">																										
						<a title = "Start Shopping!">Start Shopping!</a>
					</Link>
				</li>
				<li>
					<Link href="/cart">																										
						<a title = "View Cart">View Cart</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
