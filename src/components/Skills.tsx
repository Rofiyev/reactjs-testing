import { FC, useState, useEffect } from "react";

type SkillsProps = {
  skills: string[];
};

const Skills: FC<SkillsProps> = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  4;

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 990);
  }, []);

  return (
    <>
      <ul>
        {skills.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
