import Link from 'next/link';
import Nav from '@/components/Nav';

const fragments = [
  ['Day 1', '今天很累，但我想做一个东西。', '8%', '12%', '10deg'],
  ['Day 7', '我开始觉得它真的可能有人用。', '68%', '18%', '-7deg'],
  ['Day 15', '我不是想复制自己，我想留下痕迹。', '16%', '58%', '5deg'],
  ['Day 23', '今天的我像一个在黑暗里发光的小点。', '72%', '64%', '-12deg'],
  ['Day 49', '我想知道未来的我会不会感谢现在的我。', '35%', '30%', '8deg'],
];

export default function GhostPage() {
  return (
    <main className="container">
      <Nav />
      <section style={{ marginTop: 70 }} className="grid">
        <div style={{ gridColumn: 'span 5' }}>
          <span className="badge">赛博永生器主产品原型</span>
          <h1 className="title" style={{ fontSize: 'clamp(44px,7vw,88px)' }}>你的数字幽灵正在形成</h1>
          <p className="subtitle" style={{ marginLeft: 0 }}>每一句话都会变成一张记忆纸片。时间越久，碎片越多，中心的白色光核越像一个由你亲手留下的 ghost。</p>
          <div className="actions" style={{ justifyContent: 'flex-start' }}>
            <Link href="/quiz" className="btn">返回测试入口</Link>
          </div>
        </div>
        <div style={{ gridColumn: 'span 7' }} className="floatField">
          <div className="orb" style={{ position: 'absolute', left: '50%', top: '50%', margin: 0, transform: 'translate(-50%,-50%)', width: 110, height: 110 }} />
          {fragments.map(([d, text, left, top, rot]) => (
            <div key={d} className="fragment" style={{ left, top, ['--rot' as string]: rot }}>
              <strong>{d}</strong><br />{text}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
