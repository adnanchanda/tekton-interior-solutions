import Link from "next/link";
import { products } from "@/lib/products";

export default function NotFound() {
  return (
    <div className="wrap prose-head">
      <h1>That page is not here.</h1>
      <p className="lead">The link may be old. These pages exist:</p>
      <ul className="ticks">
        <li>
          <Link href="/">Home</Link>
        </li>
        {products.map((p) => (
          <li key={p.slug}>
            <Link href={`/products/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
