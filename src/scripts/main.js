const accountForm = document.querySelector("#abrir-conta");
const cpfInput = document.querySelector("#cpf");
const cpfFeedback = document.querySelector("#cpf-feedback");

const carousel = document.querySelector("[data-carousel]");
const carouselSubtitle = document.querySelector("#carousel-subtitle");
const carouselCards = document.querySelectorAll("[data-carousel-card]");
const carouselIndicators = document.querySelectorAll("[data-carousel-indicator]");
const carouselToggle = document.querySelector("[data-carousel-toggle]");

const CPF_LENGTH = 11;

const feedbackStyles = {
  neutral: "mt-2 min-h-5 text-sm font-semibold text-zinc-500",
  error: "mt-2 min-h-5 text-sm font-semibold text-red-600",
  success: "mt-2 min-h-5 text-sm font-semibold text-emerald-600",
};

const carouselProducts = [
  {
    id: "ultravioleta",
    title: "Nubank Ultravioleta",
    subtitle: "Quero uma experiência premium com benefícios exclusivos",
  },
  {
    id: "empresas",
    title: "Nu Empresas",
    subtitle: "Quero gerenciar meu negócio com facilidade",
  },
  {
    id: "nubank",
    title: "Nubank",
    subtitle: "Quero uma conta simples, digital e sem complicação",
  },
];

const carouselState = {
  activeIndex: Number(carousel?.dataset.activeIndex ?? 1),
  isPaused: false,
};

const cardPositionClasses = {
  left: [
    "left-0",
    "top-[56px]",
    "z-[1]",
    "hidden",
    "h-[370px]",
    "w-[285px]",
    "shadow-lg",
    "md:block",
    "opacity-80",
    "scale-95",
  ],
  center: [
    "left-1/2",
    "top-0",
    "z-[3]",
    "h-[420px]",
    "w-[300px]",
    "-translate-x-1/2",
    "shadow-2xl",
    "md:h-[470px]",
    "md:w-[350px]",
    "opacity-100",
    "scale-100",
  ],
  right: [
    "right-0",
    "top-[56px]",
    "z-[1]",
    "hidden",
    "h-[370px]",
    "w-[285px]",
    "shadow-lg",
    "md:block",
    "opacity-80",
    "scale-95",
  ],
};

const removableCardPositionClasses = [
  "left-0",
  "left-1/2",
  "right-0",
  "top-0",
  "top-[56px]",
  "z-[1]",
  "z-[3]",
  "hidden",
  "h-[370px]",
  "h-[420px]",
  "w-[285px]",
  "w-[300px]",
  "-translate-x-1/2",
  "shadow-lg",
  "shadow-2xl",
  "md:block",
  "md:h-[470px]",
  "md:w-[350px]",
  "opacity-80",
  "opacity-100",
  "scale-95",
  "scale-100",
];

function onlyNumbers(value) {
  return value.replace(/\D/g, "").slice(0, CPF_LENGTH);
}

function formatCPF(value) {
  const numbers = onlyNumbers(value);

  if (numbers.length <= 3) {
    return numbers;
  }

  if (numbers.length <= 6) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
  }

  if (numbers.length <= 9) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
  }

  return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9)}`;
}

function isValidCPFLength(value) {
  return onlyNumbers(value).length === CPF_LENGTH;
}

function updateFeedback(message, type = "neutral") {
  if (!cpfFeedback) {
    return;
  }

  cpfFeedback.textContent = message;
  cpfFeedback.className = feedbackStyles[type];
}

function resetInputState() {
  if (!cpfInput) {
    return;
  }

  cpfInput.classList.remove(
    "border-red-500",
    "focus:border-red-500",
    "focus:ring-red-100",
    "border-emerald-500",
    "focus:border-emerald-500",
    "focus:ring-emerald-100",
  );

  cpfInput.classList.add(
    "border-zinc-300",
    "focus:border-[color:var(--purple)]",
    "focus:ring-purple-200",
  );
}

function updateInputState(type = "neutral") {
  if (!cpfInput) {
    return;
  }

  resetInputState();

  if (type === "error") {
    cpfInput.classList.remove(
      "border-zinc-300",
      "focus:border-[color:var(--purple)]",
      "focus:ring-purple-200",
    );

    cpfInput.classList.add(
      "border-red-500",
      "focus:border-red-500",
      "focus:ring-red-100",
    );
  }

  if (type === "success") {
    cpfInput.classList.remove(
      "border-zinc-300",
      "focus:border-[color:var(--purple)]",
      "focus:ring-purple-200",
    );

    cpfInput.classList.add(
      "border-emerald-500",
      "focus:border-emerald-500",
      "focus:ring-emerald-100",
    );
  }
}

function handleCPFInput(event) {
  const formattedCPF = formatCPF(event.target.value);

  event.target.value = formattedCPF;

  if (!formattedCPF) {
    updateInputState();
    updateFeedback("Informe os 11 números do CPF para iniciar a simulação.");
    return;
  }

  if (isValidCPFLength(formattedCPF)) {
    updateInputState("success");
    updateFeedback(
      "CPF preenchido corretamente. Agora é só continuar.",
      "success",
    );
    return;
  }

  updateInputState();
  updateFeedback("Continue digitando até completar os 11 números do CPF.");
}

function handleAccountFormSubmit(event) {
  event.preventDefault();

  if (!cpfInput) {
    return;
  }

  if (!cpfInput.value.trim()) {
    updateInputState("error");
    updateFeedback("Digite seu CPF para continuar.", "error");
    cpfInput.focus();
    return;
  }

  if (!isValidCPFLength(cpfInput.value)) {
    updateInputState("error");
    updateFeedback(
      "CPF incompleto. Digite os 11 números para continuar.",
      "error",
    );
    cpfInput.focus();
    return;
  }

  updateInputState("success");
  updateFeedback(
    "Tudo certo! Esta é uma simulação educacional de abertura de conta.",
    "success",
  );
}

function getActiveCarouselProduct() {
  return carouselProducts[carouselState.activeIndex] ?? carouselProducts[1];
}

function isValidCarouselIndex(index) {
  return Number.isInteger(index) && index >= 0 && index < carouselProducts.length;
}

function getPreviousCarouselIndex() {
  return (
    (carouselState.activeIndex - 1 + carouselProducts.length) %
    carouselProducts.length
  );
}

function getCardVisualPosition(cardIndex) {
  if (cardIndex === carouselState.activeIndex) {
    return "center";
  }

  if (cardIndex === getPreviousCarouselIndex()) {
    return "left";
  }

  return "right";
}

function updateCarouselCards() {
  carouselCards.forEach((card) => {
    const cardIndex = Number(card.dataset.carouselIndex);
    const isActive = cardIndex === carouselState.activeIndex;
    const visualPosition = getCardVisualPosition(cardIndex);

    card.dataset.active = String(isActive);
    card.dataset.position = visualPosition;

    card.classList.remove(...removableCardPositionClasses);
    card.classList.add(...cardPositionClasses[visualPosition]);
  });
}

function updateCarouselIndicators() {
  carouselIndicators.forEach((indicator) => {
    const indicatorIndex = Number(indicator.dataset.indicator);
    const isActive = indicatorIndex === carouselState.activeIndex;

    indicator.setAttribute("aria-current", String(isActive));

    indicator.classList.toggle("w-8", isActive);
    indicator.classList.toggle("bg-black", isActive);
    indicator.classList.toggle("w-2", !isActive);
    indicator.classList.toggle("bg-zinc-300", !isActive);
  });
}

function updateCarouselSubtitle() {
  if (!carouselSubtitle) {
    return;
  }

  const activeProduct = getActiveCarouselProduct();
  carouselSubtitle.textContent = activeProduct.subtitle;
}

function setActiveCarouselIndex(index) {
  if (!carousel || !isValidCarouselIndex(index)) {
    return;
  }

  carouselState.activeIndex = index;
  carousel.dataset.activeIndex = String(index);

  updateCarouselSubtitle();
  updateCarouselCards();
  updateCarouselIndicators();
}

function handleCarouselIndicatorClick(event) {
  const indicator = event.currentTarget;
  const indicatorIndex = Number(indicator.dataset.indicator);

  setActiveCarouselIndex(indicatorIndex);
}

function syncCarouselInitialState() {
  if (!carousel || !carouselSubtitle) {
    return;
  }

  setActiveCarouselIndex(carouselState.activeIndex);

  if (carouselToggle) {
    carouselToggle.setAttribute("aria-pressed", String(carouselState.isPaused));
  }
}

if (cpfInput) {
  cpfInput.addEventListener("input", handleCPFInput);
}

if (accountForm) {
  accountForm.addEventListener("submit", handleAccountFormSubmit);
}

carouselIndicators.forEach((indicator) => {
  indicator.addEventListener("click", handleCarouselIndicatorClick);
});

syncCarouselInitialState();