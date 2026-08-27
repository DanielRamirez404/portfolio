import dandadanOtonokeSong from "#assets/dandadan-otonoke.mp3";
import sxfKigekiSong from "#assets/sxf-kigeki.mp3";
import kimetsuZankyosankaSong from "#assets/kimetsu-zankyosanka.mp3"
import blackcloverBlackcatcherSong from "#assets/black-clover-black-catcher.mp3"
import onepieceWeareSong from "#assets/one-piece-we-are.mp3"

type Song = {
  title: string;
  src: string;
}

export const lofiSongs: Song[] = [
  {
    title: "喜劇（スパイファミリー）",
    src: sxfKigekiSong,
  },   
  {
    title: "オトノケ（ダンダダン）",
    src: dandadanOtonokeSong
  },   
  {
    title: "残響散歌（鬼滅の刃）",
    src: kimetsuZankyosankaSong,
  },   
  {
    title: "ブラック キャッチャー",
    src: blackcloverBlackcatcherSong,
  },   
  {
    title: "ウィーアー!（ワンピース）",
    src: onepieceWeareSong,
  },   
];
