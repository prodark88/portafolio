const styles = {
    h4:{
        color:'white',
        margin:'7px',
    }
}


const ProgressBar = ({ label, percentage }) => {
  const barStyle = {
    width: `${percentage}%`,
    height: "10px",
    backgroundColor: "#2AD680",
    borderRadius: "5px",
    margin: "2px 0",
  };

  return (
    <div>
      <h4 style={styles.h4}>{label}</h4>
      <div style={barStyle}></div>
    </div>
  );
};

// Luego, en tu componente principal:

export function MySkills() {
  return (
    <div>
      <ProgressBar label="Python" percentage={80} />
      <ProgressBar label="Django" percentage={90} />
      <ProgressBar label="Flask" percentage={75} />
      <ProgressBar label="React" percentage={50} />
      <ProgressBar label="JavaScript" percentage={60} />
      <ProgressBar label="HTML/CSS" percentage={85} />
      <ProgressBar label="BootStrap" percentage={70} />
    </div>
  );
}
