const subscriptions = document.querySelectorAll(".subscription");
const continueButton = document.getElementById("subscriptions__continue-btn");

subscriptions.forEach((subscription) => {
  subscription.addEventListener("click", () => {
    subscriptions.forEach((sub) =>
      sub.classList.remove("subscription__selected")
    );
    subscription.classList.add("subscription__selected");
  });
});

continueButton.addEventListener("click", () => {
  const selectedSubscription = document.querySelector(
    ".subscription__selected"
  );
  const index = Array.from(subscriptions).indexOf(selectedSubscription);

  if (index === 0) {
    window.location.href = "https://www.apple.com/";
  } else {
    window.location.href = "https://www.google.com/";
  }
});
