function PassingFunctions({ theFunction }) {
    return (
      <div>
        <h2>Passing Functions</h2>
        <button className="btn btn-primary m-1 "
                onClick={theFunction}>
          Invoke the Function
        </button>
      </div>
    );
  }
  export default PassingFunctions;