import styles from './StepLayout.module.scss';

function StepLayout({ heading, children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.heading}>
        {heading}
      </div>

      {children}
    </div>
  );
}

export default StepLayout;
