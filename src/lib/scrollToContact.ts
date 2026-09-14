/**
 * Smoothly scrolls to the Contact section (`#form`), offset for the sticky
 * header. Clamped the same way as the lead form's own scroll corrections
 * (see LeadForm's `nudgeCardIntoView`) so the scroll can never overshoot
 * past the Contact section's bottom edge into the FAQ section below it.
 */
export function scrollToContactForm() {
  const section = document.getElementById("form");
  if (!section) return;

  const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 80;
  const topPadding = headerHeight + 16;

  const sectionRect = section.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const currentScrollY = window.scrollY;

  const desiredScrollY = currentScrollY + sectionRect.top - topPadding;
  const maxScrollY = currentScrollY + sectionRect.bottom - viewportHeight;
  const documentMaxScrollY = document.documentElement.scrollHeight - viewportHeight;
  const targetScrollY = Math.max(0, Math.min(desiredScrollY, maxScrollY, documentMaxScrollY));

  window.scrollTo({ top: targetScrollY, behavior: "smooth" });
}
