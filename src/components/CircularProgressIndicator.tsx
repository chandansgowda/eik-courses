const CircularProgress = ({ value, maxValue }: any) => {
    const percentage = (value / maxValue) * 100;
    const radius = 40; // Radius of the circle
    const strokeWidth = 8; // Width of the stroke
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className="relative flex items-center justify-center">
        <svg
          className="w-24 h-24"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#FFC107"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            fill="none"
            className="transition-all duration-500"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill="#FFC107" // Changed text fill color to amber
            strokeWidth="0" // Removed stroke for cleaner appearance
            dy=".3em"
            className="text-xl font-semibold"
          >
            {value}/{maxValue}
          </text>
        </svg>
      </div>
    );
  };
  
  export default CircularProgress;
  
