import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitFeedback } from "../services/feedbackService";

const siteComponents = [
  "Homepage Hero Banner",
  "Main Navigation Menu",
  "Footer Links",
  "User Profile Page",
  "Checkout Flow",
  "Shopping Cart Dropdown",
  "Product Detail Page (PDP)",
  "Product List Page (PLP)",
  "Search Bar",
  "Login/Signup Modal",
  "Blog Post Template",
  "Contact Us Form",
  "Pricing Tables",
  "Customer Testimonials Slider",
  "Marketing Pop-up",
  "Driver Compliance Dashboard",
  "Clearinghouse Consortium Portal",
  "CSA Risk & Score Audit Tool",
  "Remote Safety Console",
  "New Carrier Setup Wizard"
];

const toastMessages = [
  "Great start! 👍",
  "Got it. Moving on! 🚀",
  "Perfect. Almost done! ✨",
  "Looking good! 📝",
  "Nailed it! 🎯"
];

interface ToastItem {
  id: number;
  text: string;
  isError: boolean;
}

export default function FeedbackFlowApplet() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [feedbackType, setFeedbackType] = useState<"bug" | "feature" | "other" | null>(null);
  const [component, setComponent] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  // Transition animation state:
  // stepState tracks the active step being shown, direction tracks animation direction ('forward' | 'backward')
  const [slideDirection, setSlideDirection] = useState<"forward" | "backward">("forward");

  // DOM refs
  const componentInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
  const autocompleteContainerRef = useRef<HTMLDivElement>(null);

  // Toast handler
  const showToast = (message: string, isError = false) => {
    const newToast: ToastItem = {
      id: Date.now() + Math.random(),
      text: message,
      isError,
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 2500);
  };

  // Click outside autocomplete dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        autocompleteContainerRef.current &&
        !autocompleteContainerRef.current.contains(e.target as Node) &&
        componentInputRef.current &&
        !componentInputRef.current.contains(e.target as Node)
      ) {
        setShowAutocomplete(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Confetti effect
  const fireConfetti = () => {
    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces: any[] = [];
    const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

    for (let i = 0; i < 100; i++) {
      pieces.push({
        x: canvas.width / 2,
        y: canvas.height / 2 + 100,
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 1) * 20 - 5,
        size: Math.random() * 10 + 5,
        color: colors[(Math.random() * colors.length) | 0],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }

    let animationId: number;
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let active = false;

      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5; // gravity
        p.rotation += p.rotationSpeed;

        if (p.y < canvas.height) {
          active = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (active) {
        animationId = requestAnimationFrame(update);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    update();
  };

  // Step transitions
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      const randomMsg = toastMessages[Math.floor(Math.random() * toastMessages.length)];
      showToast(randomMsg);

      setSlideDirection("forward");
      setCurrentStep((prev) => prev + 1);

      setTimeout(() => {
        if (currentStep + 1 === 2) {
          componentInputRef.current?.focus();
        } else if (currentStep + 1 === 3) {
          descriptionInputRef.current?.focus();
        }
      }, 400);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setSlideDirection("backward");
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Step 1 type selection
  const handleTypeSelect = (type: "bug" | "feature" | "other") => {
    setFeedbackType(type);
    // Auto-advance for low friction
    setTimeout(() => {
      setSlideDirection("forward");
      setCurrentStep(2);
      const randomMsg = toastMessages[Math.floor(Math.random() * toastMessages.length)];
      showToast(randomMsg);
      setTimeout(() => {
        componentInputRef.current?.focus();
      }, 400);
    }, 300);
  };

  // Step 4 File Handling
  const handleFileChange = (newFile: File) => {
    if (!newFile.type.startsWith("image/")) {
      showToast("Please select an image file.", true);
      return;
    }
    if (newFile.size > 5 * 1024 * 1024) {
      showToast("File is too large (max 5MB).", true);
      return;
    }
    setFile(newFile);
  };

  // Form submission wired directly to Resend
  const handleSubmitForm = async () => {
    setIsSubmitting(true);

    try {
      await submitFeedback({
        type: feedbackType,
        component: component.trim() || "General Area",
        description: description.trim(),
        file: file,
      });

      // Move to success step
      setSlideDirection("forward");
      setCurrentStep(5);
      fireConfetti();
    } catch (err: any) {
      console.error("Submission failed:", err);
      showToast("Something went wrong. Please try again.", true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const handleResetForm = () => {
    setFeedbackType(null);
    setComponent("");
    setDescription("");
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setSlideDirection("backward");
    setCurrentStep(1);
  };

  // Autocomplete matches
  const filteredComponents = siteComponents.filter((c) =>
    c.toLowerCase().includes(component.toLowerCase())
  );

  const progressPercent = currentStep === 5 ? 100 : (currentStep / totalSteps) * 100;

  return (
    <>
      {/* Confetti canvas for completion */}
      <canvas
        ref={confettiCanvasRef}
        id="confetti-canvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]"
      />

      {/* Global Toast Container */}
      <div
        id="toast-container"
        className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${
              toast.isError ? "bg-red-500" : "bg-gray-800"
            } text-white px-6 py-3 rounded-full shadow-lg font-medium text-sm mb-2 flex items-center justify-center transition-all animate-bounce duration-300`}
          >
            {toast.text}
          </div>
        ))}
      </div>

      {/* Main Applet Container */}
      <div className="relative w-full max-w-lg h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col font-sans select-none text-gray-800">
        {/* Header / Progress Indicator (Hidden on success) */}
        {currentStep <= 4 && (
          <div className="px-8 pt-8 pb-4 z-10 bg-white border-b border-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800" id="header-title">
                Feedback
              </h2>
              <button
                id="btn-close"
                type="button"
                onClick={() => navigate("/")}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
              <div
                id="progress-bar"
                className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p id="step-indicator" className="text-xs text-gray-500 font-medium">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        )}

        {/* Cards Container */}
        <div className="relative flex-1 w-full h-full overflow-hidden">
          {/* STEP 1: Type of Feedback */}
          {currentStep === 1 && (
            <div
              id="step-1"
              className="absolute inset-0 w-full h-full p-8 flex flex-col bg-white transition-all duration-400 ease-out"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                What&apos;s on your mind?
              </h3>
              <p className="text-gray-500 mb-6">
                Select the type of feedback you want to provide.
              </p>

              <div className="space-y-4 flex-1">
                {/* Bug Option */}
                <div className="relative">
                  <input
                    type="radio"
                    name="feedback_type"
                    id="type_bug"
                    value="bug"
                    checked={feedbackType === "bug"}
                    onChange={() => handleTypeSelect("bug")}
                    className="sr-only"
                  />
                  <label
                    htmlFor="type_bug"
                    className={`flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      feedbackType === "bug"
                        ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/20"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors ${
                        feedbackType === "bug"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-800 text-lg">
                        Something is broken
                      </span>
                      <span className="block text-sm text-gray-500">
                        Report a bug on an existing feature.
                      </span>
                    </div>
                  </label>
                </div>

                {/* Feature Option */}
                <div className="relative">
                  <input
                    type="radio"
                    name="feedback_type"
                    id="type_feature"
                    value="feature"
                    checked={feedbackType === "feature"}
                    onChange={() => handleTypeSelect("feature")}
                    className="sr-only"
                  />
                  <label
                    htmlFor="type_feature"
                    className={`flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      feedbackType === "feature"
                        ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/20"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors ${
                        feedbackType === "feature"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-500"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-800 text-lg">
                        I have an idea
                      </span>
                      <span className="block text-sm text-gray-500">
                        Propose a new feature or change.
                      </span>
                    </div>
                  </label>
                </div>

                {/* Other Option */}
                <div className="relative">
                  <input
                    type="radio"
                    name="feedback_type"
                    id="type_other"
                    value="other"
                    checked={feedbackType === "other"}
                    onChange={() => handleTypeSelect("other")}
                    className="sr-only"
                  />
                  <label
                    htmlFor="type_other"
                    className={`flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      feedbackType === "other"
                        ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/20"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors ${
                        feedbackType === "other"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-purple-100 text-purple-500"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-800 text-lg">
                        Something else
                      </span>
                      <span className="block text-sm text-gray-500">
                        General thoughts or feedback.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  id="btn-next-1"
                  type="button"
                  disabled={!feedbackType}
                  onClick={goToNextStep}
                  className={`px-6 py-3 font-semibold rounded-xl transition-all cursor-pointer ${
                    feedbackType
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Component Selection (Predictive Text) */}
          {currentStep === 2 && (
            <div
              id="step-2"
              className="absolute inset-0 w-full h-full p-8 flex flex-col bg-white transition-all duration-400 ease-out"
            >
              <h3 id="step-2-title" className="text-2xl font-semibold text-gray-800 mb-2">
                {feedbackType === "bug"
                  ? "Where is the bug?"
                  : feedbackType === "feature"
                  ? "Where should this go?"
                  : "What is this about?"}
              </h3>
              <p id="step-2-subtitle" className="text-gray-500 mb-6">
                Start typing to find the part of the site.
              </p>

              <div className="flex-1 relative">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    ref={componentInputRef}
                    id="component-input"
                    value={component}
                    onChange={(e) => {
                      setComponent(e.target.value);
                      setShowAutocomplete(true);
                    }}
                    onFocus={() => setShowAutocomplete(true)}
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    placeholder={
                      feedbackType === "bug"
                        ? "e.g., Checkout Page, Login Button..."
                        : feedbackType === "feature"
                        ? "e.g., Dashboard, New Page..."
                        : "e.g., General feedback, Performance..."
                    }
                    autoComplete="off"
                  />
                </div>

                {/* Autocomplete Dropdown */}
                {showAutocomplete && (
                  <div
                    ref={autocompleteContainerRef}
                    id="autocomplete-list"
                    className="absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg max-h-48 overflow-y-auto"
                  >
                    {filteredComponents.length > 0 ? (
                      filteredComponents.map((item) => {
                        const regex = new RegExp(`(${component})`, "gi");
                        const parts = item.split(regex);
                        return (
                          <div
                            key={item}
                            onClick={() => {
                              setComponent(item);
                              setShowAutocomplete(false);
                            }}
                            className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-50 last:border-b-0 text-gray-700 text-sm"
                          >
                            {parts.map((part, i) =>
                              part.toLowerCase() === component.toLowerCase() ? (
                                <span key={i} className="font-bold text-blue-600">
                                  {part}
                                </span>
                              ) : (
                                part
                              )
                            )}
                          </div>
                        );
                      })
                    ) : component.trim() !== "" ? (
                      <div
                        onClick={() => setShowAutocomplete(false)}
                        className="p-3 bg-gray-50 text-gray-500 italic cursor-pointer text-sm"
                      >
                        Use &quot;{component}&quot;
                      </div>
                    ) : null}
                  </div>
                )}

                {/* Help text */}
                <div
                  className={`mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 ${
                    feedbackType === "other" ? "hidden" : "block"
                  }`}
                  id="component-help-text"
                >
                  <p className="text-sm text-blue-700 flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Don&apos;t worry if you don&apos;t know the exact name. Just describe the
                      area!
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className="btn-back px-6 py-3 text-gray-500 font-semibold rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  id="btn-next-2"
                  type="button"
                  disabled={component.trim().length <= 2}
                  onClick={goToNextStep}
                  className={`px-6 py-3 font-semibold rounded-xl transition-all cursor-pointer ${
                    component.trim().length > 2
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Description */}
          {currentStep === 3 && (
            <div
              id="step-3"
              className="absolute inset-0 w-full h-full p-8 flex flex-col bg-white transition-all duration-400 ease-out"
            >
              <h3 id="step-3-title" className="text-2xl font-semibold text-gray-800 mb-2">
                {feedbackType === "bug"
                  ? "What went wrong?"
                  : feedbackType === "feature"
                  ? "Describe your idea"
                  : "Your thoughts"}
              </h3>
              <p id="step-3-subtitle" className="text-gray-500 mb-4">
                {feedbackType === "bug"
                  ? "Briefly describe the issue so we can reproduce it."
                  : feedbackType === "feature"
                  ? "How would this feature work? What problem does it solve?"
                  : "Tell us what's on your mind."}
              </p>

              <div className="flex-1 flex flex-col">
                <textarea
                  id="description-input"
                  ref={descriptionInputRef}
                  value={description}
                  maxLength={500}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full flex-1 bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none text-lg"
                  placeholder="Tell us what you expected to happen, and what actually happened..."
                />

                <div className="mt-2 text-right">
                  <span id="char-count" className="text-xs text-gray-400">
                    {description.length} / 500
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className="btn-back px-6 py-3 text-gray-500 font-semibold rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  id="btn-next-3"
                  type="button"
                  disabled={description.trim().length <= 10}
                  onClick={goToNextStep}
                  className={`px-6 py-3 font-semibold rounded-xl transition-all cursor-pointer ${
                    description.trim().length > 10
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Attachments & Submit */}
          {currentStep === 4 && (
            <div
              id="step-4"
              className="absolute inset-0 w-full h-full p-8 flex flex-col bg-white transition-all duration-400 ease-out"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                A picture is worth a thousand words
              </h3>
              <p className="text-gray-500 mb-6">Attach a screenshot if it helps (optional).</p>

              <div className="flex-1">
                {!file ? (
                  <div
                    id="drop-zone"
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragOver(false);
                      if (e.dataTransfer.files.length) {
                        handleFileChange(e.dataTransfer.files[0]);
                      }
                    }}
                    className={`w-full h-40 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-colors cursor-pointer group ${
                      isDragOver
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-blue-400"
                    }`}
                  >
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Click or drag a screenshot here
                    </p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      id="file-input"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files?.length) {
                          handleFileChange(e.target.files[0]);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div
                    id="file-preview"
                    className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span
                        id="file-name"
                        className="text-sm text-gray-700 font-medium truncate max-w-[200px]"
                      >
                        {file.name}
                      </span>
                    </div>
                    <button
                      type="button"
                      id="btn-remove-file"
                      onClick={() => {
                        setFile(null);
                        if (fileInputRef.current) fileInputRef.current.value = "";
                      }}
                      className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className="btn-back px-6 py-3 text-gray-500 font-semibold rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  id="btn-submit"
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmitForm}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send to Devs</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Success State */}
          {currentStep === 5 && (
            <div
              id="step-success"
              className="absolute inset-0 w-full h-full p-8 flex flex-col items-center justify-center bg-white text-center transition-all duration-400"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">You&apos;re awesome!</h3>
              <p className="text-gray-500 text-lg mb-8 max-w-[80%]">
                Thanks for helping make the site better. We&apos;ve added this to the backlog.
              </p>
              <button
                id="btn-restart"
                type="button"
                onClick={handleResetForm}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Report another issue
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
