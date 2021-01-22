import styles from './layout.module.css'
// css module을 지원하는데 위치는 어디든 상관없다. 단 이름 명명규칙 another.module.css  module 을 반드시 추가
export default function Layout({children}) {
  return <div className={styles.container}>{children}</div>
}