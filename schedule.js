module.exports = [
  /*
    0 日
    1 月
    2 火
    3 水
    4 木
    5 金
    6 土
  */

  /*
  イベントを記述するときは、以下の2パターンで。
  ところどころnumberっぽいのにstringになっていますが、これは仕様です。

  まずは、毎週あるイベントの書き方です
  {
    name: string,
    startTime: string,		// HHMMの形式で書く。どちらも2桁になるように必ず0パディングして記述すること。
    endTime: string,		// startTimeと同じ
    repeat: boolean,		// 常にtrue
    dayOfWeek: string,		// 上に表があります。stringなので注意
    active: boolean,		// 一時的にお休みする場合はfalseにしてください
  }

  続いて単発のイベントの場合
  {
    name: string,
    startTime: string,		// 上の場合と同じ
    endTime: string,		// 同上
    repeat: boolean,		// 常にfalse
    date: string,		// MM/DDの形式で、2桁になるように必ず0パディングして記述すること
  },
  */

  {
    name: "Unityでゲームを作る",
    startTime: "2000",
    endTime: "2200",
    repeat: true,
    dayOfWeek: "6",
    active: true,
  },
  {
    name: "DTM練習会",
    startTime: "1900",
    endTime: "",
    repeat: true,
    dayOfWeek: "3",
    active: true,
  },
  {
    name: "お絵かきプロジェクト",
    startTime: "1700",
    endTime: "",
    repeat: true,
    dayOfWeek: "0",
    active: true,
  },
  {
    name: "みんなでゲームを作る",
    startTime: "1400",
    endTime: "",
    repeat: true,
    dayOfWeek: "0",
    active: true,
  },
  {
    name: "3DCG勉強会",
    startTime: "2030",
    endTime: "",
    repeat: true,
    dayOfWeek: "2",
    active: true,
  },
  {
    name: "Rustを完全に理解する",
    startTime: "2000",
    endTime: "",
    repeat: true,
    dayOfWeek: "5",
    active: true,
  },
  {
    name: "Webサービス勉強会",
    startTime: "2000",
    endTime: "2200",
    repeat: true,
    dayOfWeek: "0",
    active: true,
  },
  {
    name: "競技プログラミング練習会",
    startTime: "1700",
    endTime: "2000",
    repeat: true,
    dayOfWeek: "6",
    active: true,
  },
  {
    name: "Principles of Program Analysis 読み会",
    startTime: "2000",
    endTime: "2130",
    repeat: true,
    dayOfWeek: "3",
    active: true,
  },
  {
    name: "例会",
    startTime: "2100",
    endTime: "2200",
    repeat: true,
    dayOfWeek: "1",
    active: true,
  },
  {
    name: "例会",
    startTime: "2100",
    endTime: "2200",
    repeat: true,
    dayOfWeek: "4",
    active: true,
  },
  {
    name: "ラピッドコーディング祭り (Unity)",
    startTime: "1200",
    endTime: "1700",
    repeat: false,
    date: "04/30",
  },
  {
    name: "ラピッドコーディング祭り (3DCG)",
    startTime: "1200",
    endTime: "1700",
    repeat: false,
    date: "05/07",
  },
  {
    name: "ラピッドコーディング祭り 第3回",
    startTime: "1200",
    endTime: "1700",
    repeat: false,
    date: "05/14",
  },
  {
    name: "GitHub講習会 第0回",
    startTime: "1400",
    endTime: "",
    repeat: false,
    date: "05/01",
  },
  {
    name: "GitHub講習会 第1回",
    startTime: "1400",
    endTime: "1630",
    repeat: false,
    date: "05/08",
  },
]

