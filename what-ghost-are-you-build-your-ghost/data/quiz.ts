export type Axis = 'social' | 'action' | 'emotion' | 'desire' | 'order' | 'luck';
export type Scores = Record<Axis, number>;

export type Question = {
  id: number;
  text: string;
  options: { text: string; effects: Partial<Scores> }[];
};

export const initialScores: Scores = {
  social: 0,
  action: 0,
  emotion: 0,
  desire: 0,
  order: 0,
  luck: 0,
};

export const questions: Question[] = [
  { id: 1, text: '周末突然空出来一天，你第一反应是？', options: [
    { text: '关机，躺下，世界与我无关。', effects: { action: -2, social: -1 } },
    { text: '约人，出门，不能浪费这条命。', effects: { action: 2, social: 2 } },
  ]},
  { id: 2, text: '朋友两小时没回消息，你会？', options: [
    { text: '开始脑补：是不是我说错话了？', effects: { emotion: 2, luck: -1 } },
    { text: '忘了这回事，等他回。', effects: { emotion: -1, order: 1 } },
  ]},
  { id: 3, text: '你深夜最容易想什么？', options: [
    { text: '过去：我当时是不是不该那样？', effects: { emotion: 2, action: -1 } },
    { text: '未来：我到底能不能混出来？', effects: { desire: 2, action: 1 } },
  ]},
  { id: 4, text: '突然中了100万，你第一步是？', options: [
    { text: '先爽一下，人不能白活。', effects: { desire: 1, order: -2 } },
    { text: '先规划，别又变成倒霉鬼。', effects: { order: 2, luck: -1 } },
  ]},
  { id: 5, text: '你更讨厌哪种状态？', options: [
    { text: '大家都在进步，我还在原地。', effects: { desire: 2, action: 1 } },
    { text: '每天都要努力，真的烦。', effects: { action: -2, desire: -1 } },
  ]},
  { id: 6, text: '聚会里你通常是？', options: [
    { text: '能不说话就不说话，在角落当鬼。', effects: { social: -2, emotion: 1 } },
    { text: '负责把场子搞活，不能冷。', effects: { social: 2, action: 1 } },
  ]},
  { id: 7, text: '有人说你不行，你会？', options: [
    { text: '表面没事，晚上偷偷破防。', effects: { emotion: 2, luck: -1 } },
    { text: '记住这句话，然后卷死他。', effects: { desire: 2, action: 2 } },
  ]},
  { id: 8, text: '你的房间/桌面更像？', options: [
    { text: '乱中有乱，我自有一套玄学。', effects: { order: -2, action: -1 } },
    { text: '东西必须归位，不然心里难受。', effects: { order: 2, emotion: -1 } },
  ]},
  { id: 9, text: '遇到喜欢的人，你更可能？', options: [
    { text: '心里演完八十集，现实一句不说。', effects: { emotion: 2, social: -1 } },
    { text: '先试探，能撩就撩，人生苦短。', effects: { social: 2, desire: 1 } },
  ]},
  { id: 10, text: '事情快到deadline了，你会？', options: [
    { text: '最后一晚通宵，吊着命做完。', effects: { action: -1, order: -2 } },
    { text: '提前拆开做，不想被命运审判。', effects: { order: 2, action: 1 } },
  ]},
  { id: 11, text: '你的朋友最可能怎么评价你？', options: [
    { text: '这个人脑子里全是戏。', effects: { emotion: 2, social: 1 } },
    { text: '这个人脑子里全是计划。', effects: { order: 2, desire: 1 } },
  ]},
  { id: 12, text: '你更像哪一种互联网状态？', options: [
    { text: '刷到凌晨三点，灵魂在屏幕里漂。', effects: { action: -1, order: -1, social: -1 } },
    { text: '看到机会就想做点东西。', effects: { action: 2, desire: 2 } },
  ]},
  { id: 13, text: '倒霉事发生时，你会？', options: [
    { text: '果然，世界又开始针对我。', effects: { luck: -2, emotion: 1 } },
    { text: '先解决，骂命运没用。', effects: { action: 2, emotion: -1 } },
  ]},
  { id: 14, text: '如果人生是一场游戏，你的玩法是？', options: [
    { text: '随缘探索，主线不急。', effects: { desire: -1, order: -1 } },
    { text: '升级、打怪、拿成就。', effects: { desire: 2, action: 2 } },
  ]},
  { id: 15, text: '你最想被AI记住什么？', options: [
    { text: '我的感受，我的变化，我那些说不出口的部分。', effects: { emotion: 2, social: -1 } },
    { text: '我的目标，我的选择，我怎样一步步变强。', effects: { desire: 2, order: 1 } },
  ]},
  { id: 16, text: '你看到“你是什么鬼”这个测试时，真实想法是？', options: [
    { text: '测一下，反正我也不知道自己是什么鬼。', effects: { emotion: 1, luck: -1 } },
    { text: '笑死，我倒要看看它怎么骂我。', effects: { social: 1, action: 1 } },
  ]},
];

export type GhostResult = {
  key: string;
  name: string;
  title: string;
  description: string;
  traits: string[];
  hook: string;
};

export const ghostResults: GhostResult[] = [
  { key: 'bailan', name: '摆烂鬼', title: '你不是不想赢，你只是先躺一会儿。', description: '你对世界有自己的节奏。别人急着升级打怪，你更关心今天能不能舒服地活着。你的问题不是没有野心，而是经常被疲惫、拖延和“算了吧”按住。', traits: ['低行动', '低秩序', '高自我保护'], hook: 'Build Your Ghost 会记录你从摆烂到突然开卷的每一个瞬间。' },
  { key: 'juwang', name: '卷王鬼', title: '你嘴上说随便，背地里已经开卷。', description: '你害怕停在原地，也很难真正放松。你经常把焦虑转化成行动，把比较变成燃料。你不是天生爱卷，你只是太想证明自己。', traits: ['高行动', '高野心', '强目标感'], hook: '让你的数字幽灵记住：你不是一直强，你只是一直没停。' },
  { key: 'danxiao', name: '胆小鬼', title: '你不是胆小，你只是把后果想得太完整。', description: '你很敏感，也很谨慎。很多事情你不是不敢做，而是在开始之前已经把失败、尴尬、失去都预演了一遍。', traits: ['高情绪', '低行动', '高风险感知'], hook: '100天后回头看，你会发现很多恐惧只是旧版本的你。' },
  { key: 'shekong', name: '社恐鬼', title: '你在人间营业，在心里退群。', description: '你不是讨厌人类，你只是讨厌无效社交。你需要独处充电，也经常在热闹里突然感觉自己像个旁观者。', traits: ['低社交', '高内省', '慢热'], hook: 'Build Your Ghost 是一个不用表演的地方。' },
  { key: 'xianyanbao', name: '显眼包鬼', title: '你一出现，空气都开始有弹幕。', description: '你很容易成为场子的中心。你可能不一定想抢风头，但你的表达欲、反应速度和整活能力会自动把你推到台前。', traits: ['高社交', '高行动', '强表达'], hook: '把你每天的整活碎片存下来，未来会是一部很吵但很真实的自传。' },
  { key: 'liana' , name: '恋爱脑鬼', title: '你不是恋爱脑，你只是太容易相信心动。', description: '你对关系、暧昧和细节很敏感。别人一句话你能分析半天，别人一个眼神你能脑补一季。', traits: ['高情绪', '高关系敏感', '容易上头'], hook: '让AI帮你记录每一次上头，也记录你慢慢清醒。' },
  { key: 'segui', name: '色鬼', title: '你承认吧，你对吸引力很诚实。', description: '你对喜欢、欲望、颜值、暧昧有很强的雷达。你不是肤浅，只是比别人更诚实地面对身体和心动。', traits: ['高欲望', '高感官', '高心动敏感'], hook: '你的数字幽灵会记住你每一次心动的模式。' },
  { key: 'jiugui', name: '酒鬼', title: '你不是爱喝，你是想把人生调成微醺。', description: '你需要释放，需要一个按钮让紧绷的自己松下来。你喜欢的不是酒本身，而是那种“终于不用硬撑”的感觉。', traits: ['情绪释放', '压力敏感', '夜晚人格'], hook: '它会记住你什么时候最需要被接住。' },
  { key: 'daomei', name: '倒霉鬼', title: '你的人生像随机事件高发区。', description: '你经常觉得自己被命运针对。但也正因为如此，你练出了一种奇怪的韧性：一边骂，一边活。', traits: ['低幸运感', '高吐槽欲', '强复原力'], hook: '把倒霉写下来，它就会变成你的黑色幽默档案。' },
  { key: 'jiling', name: '机灵鬼', title: '你脑子转得快，嘴也不一定慢。', description: '你擅长临场反应，能在混乱里找到路，也经常有一些别人想不到的点子。', traits: ['高反应', '高行动', '高创造'], hook: 'Build Your Ghost 会把你的灵光一闪存成星图。' },
  { key: 'diansigui', name: '吊死鬼', title: '你被某件事挂住太久了。', description: '你很容易卡在一段关系、一个选择、一种遗憾里。你不是放不下所有事，你只是对某些东西太认真。', traits: ['高执念', '高情绪', '低放下能力'], hook: '每天一句话，看看你是如何慢慢松手的。' },
  { key: 'baiwuchang', name: '白无常', title: '你温和，但你看得很透。', description: '你外表轻盈，内心清醒。你能理解很多人的苦，也知道很多东西终会过去。', traits: ['高共情', '高理性', '温柔疏离'], hook: '你的幽灵不是吵闹的，它像一盏冷白色的灯。' },
  { key: 'heiwuchang', name: '黑无常', title: '你不太说软话，但很可靠。', description: '你有边界感，不喜欢废话。你看起来冷，但关键时刻能扛事。', traits: ['强边界', '高执行', '低情绪外露'], hook: '让AI记录你那些不说出口但一直在做的事。' },
  { key: 'niutou', name: '牛头', title: '你很能扛，但别真把自己当牛。', description: '你习惯硬撑，习惯解决问题，习惯让别人觉得你没事。你的强大是真的，累也是真的。', traits: ['高承压', '高行动', '低求助'], hook: '你的数字幽灵会替你承认：你也会累。' },
  { key: 'mamian', name: '马面', title: '你表面冷静，内心已经跑完八百里。', description: '你行动快，想得也多。你经常一边焦虑，一边把事情推进。', traits: ['高行动', '高紧张', '高速度'], hook: '它会记录你的奔跑，也记录你为什么奔跑。' },
  { key: 'guhun', name: '孤魂野鬼', title: '你不属于任何地方，但也因此自由。', description: '你有很强的独立感和漂浮感。你可能会在人群里孤独，也会在孤独里感到安全。', traits: ['极低社交', '高内省', '精神游牧'], hook: 'Build Your Ghost 是给漂浮的人造一个锚点。' },
  { key: 'saibogui', name: '赛博鬼', title: '你的灵魂可能已经上传了一半。', description: '你对互联网、AI、虚拟身份和未来感天然敏感。现实是肉身的，网络才像你的第二个脑子。', traits: ['高互联网浓度', '高想象力', '高自我记录欲'], hook: '你非常适合创造自己的数字幽灵。' },
  { key: 'changsheng', name: '长生鬼', title: '你不是怕死，你是怕被彻底忘记。', description: '你在意痕迹、记忆和存在。你希望某些东西能留下来，哪怕只是每天一句话。', traits: ['高存在感需求', '高记录欲', '高时间感'], hook: '这就是 Build Your Ghost 为你存在的原因。' },
];

export function getResult(scores: Scores): GhostResult {
  const { social, action, emotion, desire, order, luck } = scores;
  if (desire >= 6 && emotion >= 4) return byKey('changsheng');
  if (desire >= 5 && action >= 5 && order >= 2) return byKey('juwang');
  if (social <= -5 && emotion >= 3) return byKey('guhun');
  if (social <= -3) return byKey('shekong');
  if (social >= 5 && action >= 2) return byKey('xianyanbao');
  if (action <= -5 && order <= -3) return byKey('bailan');
  if (emotion >= 6 && action <= 1) return byKey('danxiao');
  if (luck <= -5) return byKey('daomei');
  if (order >= 5 && emotion <= 1) return byKey('heiwuchang');
  if (order >= 4 && emotion >= 2) return byKey('baiwuchang');
  if (action >= 5 && emotion >= 3) return byKey('mamian');
  if (action >= 5) return byKey('niutou');
  if (emotion >= 5 && social >= 1) return byKey('liana');
  if (desire >= 5 && social >= 1) return byKey('segui');
  if (order <= -4 && emotion >= 2) return byKey('diansigui');
  if (action >= 3 && social >= 1) return byKey('jiling');
  if (emotion >= 4) return byKey('jiugui');
  return byKey('saibogui');
}

function byKey(key: string) {
  return ghostResults.find((r) => r.key === key) ?? ghostResults[0];
}
