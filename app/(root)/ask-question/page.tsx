import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const AskAQuestion = () => {
  return (
    <>
      <h1 className="h1-bold text-dar100_light900">Ask a question</h1>
      <div>
        <QuestionForm />
      </div>
    </>
  );
};

export default AskAQuestion;
