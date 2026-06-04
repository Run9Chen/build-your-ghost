'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import { getResult, initialScores, questions, Scores } from '@/data/quiz';

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [done, setDone] = useState(false);
  const result = useMemo(() => getResult(scores), [scores]);

  function choose(effects: Partial<Scores>) {
    const next = { ...scores };
    for (const key of Object.keys(effects) as (keyof Scores)[]) {
      next[key] += effects[key] ?? 0;
    }
    setScores(next);
    if (index === questions.length - 1) setDone(true);
    else setIndex(index + 1);
  }

  function restart() {
    setIndex(0);
    setScores(initialScores);
    setDone(false);
  }

  const q = questions[index];
  const pct = done ? 100 : Math.round((index / questions.length) * 100);

  return (
    <main className="container">
      <Nav />
      {!done ? (
        <section className="quizShell panel">
          <span className="badge">你是什么鬼？ · 第 {index + 1} / {questions.length} 题</span>
          <div className="progress"><div style={{ width: `${pct}%` }} /></div>
          <h1 className="question">{q.text}</h1>
          <div className="options">
            {q.options.map((o) => (
              <button className="option" key={o.text} onClick={() => choose(o.effects)}>{o.text}</button>
            ))}
          </div>
          <p className="small">提示：这个测试不是科学诊断，是一个适合传播的互联网人格入口。测完之后会生成你的“今日鬼格”。</p>
        </section>
      ) : (
        <section className="quizShell">
          <div className="paper" style={{ ['--r' as string]: '-1.2deg' }}>
            <p style={{ letterSpacing: '.18em', fontSize: 13 }}>WHAT GHOST ARE YOU?</p>
            <h1 className="resultName">{result.name}</h1>
            <h2>{result.title}</h2>
            <p style={{ fontSize: 18, lineHeight: 1.9 }}>{result.description}</p>
            <div className="kv">{result.traits.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
          <div className="panel" style={{ marginTop: 20 }}>
            <h2>但这只是今天的你。</h2>
            <p className="small">{result.hook}</p>
            <p className="small">真正有意思的不是“你现在是什么鬼”，而是 100 天后，你还是不是同一个鬼。</p>
            <div className="actions" style={{ justifyContent: 'flex-start' }}>
              <Link className="btn" href="/ghost">开始 Build Your Ghost</Link>
              <button className="btn secondary" onClick={restart}>重新测一次</button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
