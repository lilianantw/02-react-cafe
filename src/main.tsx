// 🔹 Імпортуємо React та StrictMode для перевірок у розробці
import { StrictMode } from "react";

// 🔹 Імпортуємо createRoot — новий спосіб рендеру в React 18+
import { createRoot } from "react-dom/client";

// 🔹 Нормалізуємо стилі для всіх браузерів (зовнішня бібліотека)
import "modern-normalize";

// 🔹 Підключаємо власні глобальні стилі
import "./index.css";

// 🔹 Імпортуємо головний компонент додатку
import App from "./components/App/App.tsx";

// 🔹 Знаходимо елемент <div id="root"></div> у HTML
const rootElement = document.getElementById("root")!;

// 🔹 Створюємо "React-корінь" і рендеримо App
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
