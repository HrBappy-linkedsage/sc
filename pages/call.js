import Link from "next/link";
export default function App() {
  return (
    <div id="app__page__">
      <h1>Call ...</h1>
      <Link as={`/live/`} href={{ pathname: '/live/*'}}>call</Link>
    </div>
  );
}
