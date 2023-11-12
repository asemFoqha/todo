import { FC, useEffect, useState } from 'react';
import ITodo from '../interfaces/ITodo';
import axios from 'axios';

interface Props {
  todos: ITodo[];
}

const Summary: FC<Props> = ({ todos }) => {
  const [summary, setSummary] = useState<string>();

  //   const apiKey = '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';
  const apiKey = 'an api key';
  //    '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';
  const prompt =
    'Please summarize the following to-do list:\n1. Buy groceries: Apples, milk, eggs.\n2. Complete project report by Friday.\n3. Schedule a meeting with the team for next week.\n4. Pay bills: electricity, water, internet.';

  const requestData = {
    model: 'text-embedding-ada-002',
    input: prompt,
  };

  const handleGenerate = () => {
    axios
      .post('https://api.openai.com/v1/completions', requestData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const summary = response.data.embedding[0];
        setSummary(summary);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div
        onClick={handleGenerate}
        style={{
          width: 200,
          height: 60,
          backgroundColor: 'lightGreen',
          marginBottom: 20,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <p>Generate</p>
      </div>
      <p style={{ fontSize: 50 }}>{summary}</p>
    </>
  );
};
export default Summary;
