import styles from './Loader.style.module.scss'

export function Loader(): JSX.Element {
  return (
     <div className={styles.wrapper}> 
        <div className={styles.loading}>
        <span></span>
        <span></span>
        <span></span>
         <span></span>
        </div>
     </div>
  );
}