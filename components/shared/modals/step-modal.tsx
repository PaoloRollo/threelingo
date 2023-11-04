import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress,
  cn,
} from "@nextui-org/react";

import { useCourseStore, useStepModalStore } from "@/lib/store";
import { Question } from "@/lib/interfaces";
import { useUserStore } from "@/lib/store/user-store";

interface StepModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

export const StepModal = ({ isOpen, onOpen, onOpenChange }: StepModalProps) => {
  const address = useUserStore((state) => state.address);
  const course = useCourseStore((state) => state.course);
  const currentStep = useCourseStore((state) => state.currentStep);
  const currentUnit = useCourseStore((state) => state.currentUnit);
  const currentSection = useCourseStore((state) => state.currentSection);
  const setCurrentStep = useCourseStore((state) => state.setCurrentStep);
  const setCurrentUnit = useCourseStore((state) => state.setCurrentUnit);
  const setCurrentSection = useCourseStore((state) => state.setCurrentSection);
  const dbSection = useCourseStore((state) => state.dbSection);
  const dbUnit = useCourseStore((state) => state.dbUnit);
  const dbStep = useCourseStore((state) => state.dbStep);
  const setDbStep = useCourseStore((state) => state.setDbStep);
  const setDbUnit = useCourseStore((state) => state.setDbUnit);
  const setDbSection = useCourseStore((state) => state.setDbSection);
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
  const [gapFill, setGapFill] = useState<string>("");

  const reset = () => {
    setErrors([]);
    setStepFinished(false);
    setLatestAnswer(null);
    setLatestCorrect(null);
    setCurrentQuestion(0);
    setCorrectResponses(0);
    setGapFill("");
  };

  const onFinish = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/courses/${course?.id}/${address}/progress`,
        {
          method: "PUT",
          body: JSON.stringify({
            currentSection,
            currentUnit,
            currentStep: currentStep + 1,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { result } = await res.json();
      setCurrentUnit(result.current_unit);
      setCurrentSection(result.current_section);
      setCurrentStep(result.current_step);
      setDbUnit(result.current_unit);
      setDbSection(result.current_section);
      setDbStep(result.current_step);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
                  className="w-full"
                  color="success"
                />

                <div className="flex flex-col py-24">
                  {!stepFinished && (
                    <>
                      <h2 className="text-2xl text-center">
                        {step.questions[currentQuestion].question.replaceAll(
                          "BLANK",
                          "_____"
                        )}
                      </h2>
                      {step.questions[currentQuestion].type ===
                        "multiple-choice" && (
                        <div className="flex flex-col space-y-4 mt-4">
                          {step.questions[currentQuestion].answers?.map(
                            (answer, index) => {
                              return (
                                <div
                                  key={`answer-${index}`}
                                  onClick={async () => {
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
                                      setLoading(true);
                                      setTimeout(() => {
                                        reset();
                                        setLoading(false);
                                      }, 2000);
                                      return;
                                    }
                                    setLoading(true);
                                    setTimeout(() => {
                                      if (
                                        currentQuestion + 1 ===
                                        step.questions.length
                                      ) {
                                        setStepFinished(true);
                                        onFinish().then(() => {
                                          reset();
                                          toggleStepModal();
                                        });
                                      } else {
                                        setCurrentQuestion(currentQuestion + 1);
                                      }
                                      setGapFill("");
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
                                      "bg-success-500 border-success-700 text-white font-bold",
                                    latestCorrect === false &&
                                      step.questions[currentQuestion]
                                        .correctAnswer === index &&
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
                      {step.questions[currentQuestion].type ===
                        "true-false" && (
                        <div className="flex flex-col space-y-4 mt-4">
                          <div
                            onClick={() => {
                              if (loading) return;
                              setLatestAnswer(0);
                              if (
                                step.questions[currentQuestion]
                                  .correctAnswer === true
                              ) {
                                setCorrectResponses(correctResponses + 1);
                                setLatestCorrect(true);
                              } else {
                                setLatestCorrect(false);
                                setLoading(true);
                                setTimeout(() => {
                                  reset();
                                  setLoading(false);
                                }, 2000);
                                return;
                              }
                              setLoading(true);
                              setTimeout(() => {
                                if (
                                  currentQuestion + 1 ===
                                  step.questions.length
                                ) {
                                  setStepFinished(true);
                                  onFinish().then(() => {
                                    reset();
                                    toggleStepModal();
                                  });
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
                                latestAnswer === 0 &&
                                "bg-red-500 border-red-700 text-white font-bold",
                              latestCorrect === true &&
                                latestAnswer === 0 &&
                                "bg-success-500 border-success-700 text-white font-bold",
                              latestCorrect === false &&
                                latestAnswer === 1 &&
                                "bg-success-500 border-success-700 text-white font-bold"
                            )}
                          >
                            True
                          </div>
                          <div
                            onClick={async () => {
                              if (loading) return;
                              setLatestAnswer(1);
                              if (
                                step.questions[currentQuestion]
                                  .correctAnswer === false
                              ) {
                                setCorrectResponses(correctResponses + 1);
                                setLatestCorrect(true);
                              } else {
                                setLatestCorrect(false);
                                setLoading(true);
                                setTimeout(() => {
                                  reset();
                                  setLoading(false);
                                }, 2000);
                                return;
                              }
                              setLoading(true);
                              setTimeout(() => {
                                if (
                                  currentQuestion + 1 ===
                                  step.questions.length
                                ) {
                                  setStepFinished(true);
                                  onFinish().then(() => {
                                    reset();
                                    toggleStepModal();
                                  });
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
                                latestAnswer === 1 &&
                                "bg-red-500 border-red-700 text-white font-bold",
                              latestCorrect === true &&
                                latestAnswer === 1 &&
                                "bg-success-500 border-success-700 text-white font-bold",
                              latestCorrect === false &&
                                latestAnswer === 0 &&
                                "bg-success-500 border-success-700 text-white font-bold"
                            )}
                          >
                            False
                          </div>
                        </div>
                      )}
                      {step.questions[currentQuestion].type ===
                        "fill-in-the-gap" && (
                        <div className="flex flex-col space-y-4 mt-4">
                          <div
                            className={cn(
                              "border-2 border-b-3 border-gray-300 rounded-xl p-4 w-full flex space-x-2 transition-colors"
                              // latestCorrect === false &&
                              //   latestAnswer === 0 &&
                              //   "bg-red-500 border-red-700 text-white font-bold",
                              // latestCorrect === true &&
                              //   latestAnswer === 0 &&
                              //   "bg-success-500 border-success-700 text-white font-bold"
                            )}
                          >
                            <Input
                              type="text"
                              value={gapFill}
                              onValueChange={setGapFill}
                              isClearable
                            />
                          </div>
                          <Button
                            isDisabled={!gapFill}
                            color={
                              latestCorrect === null
                                ? "primary"
                                : latestCorrect
                                ? "success"
                                : "warning"
                            }
                            onClick={() => {
                              if (loading) return;
                              if (
                                step.questions[currentQuestion].correctAnswer
                                  .toString()
                                  .toLowerCase() === gapFill.toString()
                              ) {
                                setCorrectResponses(correctResponses + 1);
                                setLatestCorrect(true);
                              } else {
                                setLatestCorrect(false);
                                setLoading(true);
                                setTimeout(() => {
                                  reset();
                                  setLoading(false);
                                }, 2000);
                                return;
                              }
                              setLoading(true);
                              setTimeout(() => {
                                if (
                                  currentQuestion + 1 ===
                                  step.questions.length
                                ) {
                                  setStepFinished(true);
                                  onFinish().then(() => {
                                    reset();
                                    toggleStepModal();
                                  });
                                } else {
                                  setCurrentQuestion(currentQuestion + 1);
                                }
                                setGapFill("");
                                setLatestCorrect(null);
                                setLatestAnswer(null);
                                setLoading(false);
                              }, 2000);
                            }}
                          >
                            Check
                          </Button>
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
