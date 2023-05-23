export default function ProgressBarBudget(props) {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  let className;
  if (completed < 25) {
    className = 'low';
  } else if (completed < 50) {
    className = 'middle';
  } else if (completed < 75) {
    className = 'high'
  } else {
    className = 'higher'
  }


  return (
    <div className="progress-bar" style={containerStyles}>
      <div className={className} style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};
