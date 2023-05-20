export default function ProgressBarBudget(props) {
  const { bgcolor, completed } = props;

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

  return (
    <div className="progress-bar" style={containerStyles}>
      <div className="fill" style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};
