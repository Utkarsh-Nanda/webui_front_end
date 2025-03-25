import Card from "./Card";
import { useState } from "react";

const Analyze = ({ data, loading, toggleAnalysisBar }) => {
  const safeData = Array.isArray(data) ? data : [];
  const [value, setValue] = useState(50);

  return (
    <div>
      {loading ? (
        <div className="grid grid-cols-1 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} loading={true} />
          ))}
        </div>
      ) : (
        <div>
          <p className="font-bold text-2xl mb-4">Event Details: </p>
          <div className="flex flex-col gap-8">
            {safeData.map((item) => (
              <Card loading={false} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Analyze;
