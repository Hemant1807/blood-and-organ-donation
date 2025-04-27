import React, { useState, useRef } from "react";

const FeedbackForm = () => {
  const [message, setMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage((prev) => prev + " " + transcript);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setRecording(true);

    recognition.onend = () => {
      setRecording(false);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", message);
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center text-red-600">Feedback / Help Request</h2>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type or Speak your Message"
          className="w-full p-4 border rounded-lg h-32"
        ></textarea>

        <div className="flex items-center justify-center space-x-4">
          <button
            type="button"
            onClick={startListening}
            className={`p-3 rounded-full border-2 ${recording ? "animate-pulse border-red-500" : "border-blue-500"}`}
          >
            🎤
          </button>
          <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-full">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
