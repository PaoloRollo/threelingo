import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress,
  cn,
} from "@nextui-org/react";

import { useStepModalStore } from "@/lib/store";
import { Question } from "@/lib/interfaces";

interface StepModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

export const StepModal = ({ isOpen, onOpen, onOpenChange }: StepModalProps) => {
  const step = useStepModalStore((state) => state.step);
  const toggleStepModal = useStepModalStore((state) => state.toggleStepModal);
  const [content, setContent] = useState<string>("");
  const [correctResponses, setCorrectResponses] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [latestCorrect, setLatestCorrect] = useState<boolean | null>(null);
  const [latestAnswer, setLatestAnswer] = useState<number | null>(null);
  const [errors, setErrors] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [stepFinished, setStepFinished] = useState<boolean>(false);

  const reset = () => {
    setErrors([]);
    setStepFinished(false);
    setLatestAnswer(null);
    setLatestCorrect(null);
    setCurrentQuestion(0);
    setCorrectResponses(0);
  };

  if (!step) {
    return (
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
          <ModalContent className="text-foreground">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  No step found!
                </ModalHeader>
                <ModalBody>
                  <p>You are trying to access a step that does not exist.</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          reset();
          onOpenChange();
        }}
        size="full"
        isKeyboardDismissDisabled={true}
        isDismissable={false}
      >
        <ModalContent className="text-foreground">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  {/* <Image src={target.image} className="h-12" /> */}
                  <h1 className="text-2xl font-bold">{step.name}</h1>
                </div>
              </ModalHeader>
              <ModalBody className="flex flex-col overflow-scroll">
                <Progress
                  aria-label="Step progress"
                  value={(correctResponses / step.questions.length) * 100}
                  className="max-w-md"
                  color="success"
                />

                <div className="flex flex-col py-24">
                  {!stepFinished && (
                    <>
                      <h2 className="text-2xl text-center">
                        {step.questions[currentQuestion].question}
                      </h2>
                      {step.questions[currentQuestion].type ===
                        "multiple-choice" && (
                        <div className="flex flex-col space-y-4 mt-4">
                          {step.questions[currentQuestion].answers?.map(
                            (answer, index) => {
                              return (
                                <div
                                  key={`answer-${index}`}
                                  onClick={() => {
                                    if (loading) return;
                                    setLatestAnswer(index);
                                    if (
                                      step.questions[currentQuestion]
                                        .correctAnswer === index
                                    ) {
                                      setCorrectResponses(correctResponses + 1);
                                      setLatestCorrect(true);
                                    } else {
                                      setLatestCorrect(false);
                                      setErrors([
                                        ...errors,
                                        step.questions[currentQuestion],
                                      ]);
                                    }
                                    setLoading(true);
                                    setTimeout(() => {
                                      if (
                                        currentQuestion + 1 ===
                                        step.questions.length
                                      ) {
                                        setStepFinished(true);
                                        setTimeout(() => {
                                          reset();
                                          toggleStepModal();
                                        }, 2000);
                                      } else {
                                        setCurrentQuestion(currentQuestion + 1);
                                      }
                                      setLatestCorrect(null);
                                      setLatestAnswer(null);
                                      setLoading(false);
                                    }, 2000);
                                  }}
                                  className={cn(
                                    "border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full flex space-x-2 transition-colors",
                                    latestCorrect === false &&
                                      latestAnswer === index &&
                                      "bg-red-500 border-red-700 text-white font-bold",
                                    latestCorrect === true &&
                                      latestAnswer === index &&
                                      "bg-success-500 border-success-700 text-white font-bold"
                                  )}
                                >
                                  {answer}
                                </div>
                              );
                            }
                          )}
                        </div>
                      )}
                    </>
                  )}
                  {stepFinished &&
                  correctResponses === step.questions.length ? (
                    <>
                      <h2 className="text-2xl text-center">
                        You completed the{" "}
                        <span className="font-bold">{step.name}</span> step!
                      </h2>
                      <h4 className="text-center animate-pulse mt-4">
                        Going back...
                      </h4>
                    </>
                  ) : (
                    stepFinished && (
                      <>
                        <h2 className="text-2xl text-center">
                          You did not make it!
                        </h2>
                        <h3 className="text-xl text-center mt-2 text-black/60">
                          You got {correctResponses} out of{" "}
                          {step.questions.length} questions correct.
                        </h3>
                        <h4 className="text-center animate-pulse mt-4">
                          Going back...
                        </h4>
                      </>
                    )
                  )}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
