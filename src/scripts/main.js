const accountForm = document.querySelector("#abrir-conta");
const cpfInput = document.querySelector("#cpf");
const cpfFeedback = document.querySelector("#cpf-feedback");

const CPF_LENGTH = 11;

const feedbackStyles = {
  neutral: "mt-2 min-h-5 text-sm font-semibold text-zinc-500",
  error: "mt-2 min-h-5 text-sm font-semibold text-red-600",
  success: "mt-2 min-h-5 text-sm font-semibold text-emerald-600",
};

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
    updateFeedback("CPF preenchido corretamente. Agora é só continuar.", "success");
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
    updateFeedback("CPF incompleto. Digite os 11 números para continuar.", "error");
    cpfInput.focus();
    return;
  }

  updateInputState("success");
  updateFeedback(
    "Tudo certo! Esta é uma simulação educacional de abertura de conta.",
    "success",
  );
}

if (cpfInput) {
  cpfInput.addEventListener("input", handleCPFInput);
}

if (accountForm) {
  accountForm.addEventListener("submit", handleAccountFormSubmit);
}