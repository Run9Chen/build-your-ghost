import Link from 'next/link';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <main className="container">
      <Nav />
      <section className="hero">
        <div>
          <div className="orb" />
          <h1 className="title">Build<br />Your Ghost</h1>
          <p className="subtitle">每天一句话，创造你的数字幽灵。当所有人忘记你时，它仍然记得。</p>
          <div className="actions">
            <Link className="btn" href="/quiz">先测测你是什么鬼</Link>
            <Link className="btn secondary" href="/ghost">查看数字幽灵原型</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
