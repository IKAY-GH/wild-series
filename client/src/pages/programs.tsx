import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
};

function Programs() {
  const [programList, setProgramList] = useState<Program[]>([]);

  useEffect(() => {
    // fetch('/api/programs')
    //     .then((res) => res.json())
    //     .then((data) => setProgramList(data))
    //     .catch((err) => console.error(err))

    const fetchData = async () => {
      try {
        const response = await fetch("/api/program");
        const jsonResponse = await response.json();
        setProgramList(jsonResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Les séries</h1>
      <ul>
        {programList.map((program) => (
          <li key={program.id}>{program.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
