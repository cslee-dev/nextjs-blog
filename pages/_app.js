import '../styles/global.css'
// 전역 css 로드
// 공통되는 루트 컴포넌트
// _app.js는 수정마다 재시작 필요
export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}