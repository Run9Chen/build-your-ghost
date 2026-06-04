import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="brand" href="/">BUILD YOUR GHOST / 赛博永生器</Link>
      <div className="navLinks">
        <Link href="/quiz">你是什么鬼？</Link>
        <Link href="/ghost">数字幽灵</Link>
      </div>
    </nav>
  );
}
