import { useEffect, useRef, useState } from "react";

export default function usePomodoro() {

  const DEFAULT_TIME = 25 * 60;

  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);

  const [isRunning, setIsRunning] = useState(false);

  const [sessions, setSessions] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {

    if (isRunning) {

      timerRef.current = setInterval(() => {

        setTimeLeft((prev) => {

          if (prev <= 1) {

            clearInterval(timerRef.current);

            setIsRunning(false);

            setSessions((s) => s + 1);

            alert("🎉 Pomodoro Session Completed!");

            return DEFAULT_TIME;

          }

          return prev - 1;

        });

      }, 1000);

    }

    return () => clearInterval(timerRef.current);

  }, [isRunning]);

  const startTimer = () => setIsRunning(true);

  const pauseTimer = () => {

    clearInterval(timerRef.current);

    setIsRunning(false);

  };

  const resetTimer = () => {

    clearInterval(timerRef.current);

    setIsRunning(false);

    setTimeLeft(DEFAULT_TIME);

  };

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");

  const seconds = String(timeLeft % 60).padStart(2, "0");

  return {

    minutes,

    seconds,

    sessions,

    isRunning,

    startTimer,

    pauseTimer,

    resetTimer,

  };

}