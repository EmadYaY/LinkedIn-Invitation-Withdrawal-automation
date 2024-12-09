// List of names to exclude from unfollowing
const excludedNames = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7"
].map(name => name.toLowerCase());

// Function to unfollow a user
function unfollowUser() {
  // Find all buttons with the class "artdeco-button__text"
  const followButtons = document.querySelectorAll(".artdeco-button__text");

  // Check if there are any "Following" buttons
  const followingButtons = Array.from(followButtons).filter(button => button.innerText.trim() === "Following");

  if (followingButtons.length > 0) {
    // Loop through "Following" buttons
    for (const button of followingButtons) {
      // Attempt to find the name associated with the "Following" button
      const entityResult = button.closest(".entity-result, .reusable-search__result-container, .display-flex");
      const nameElement = entityResult ? entityResult.querySelector("span[aria-hidden='true'], .t-14, .t-16") : null;

      if (nameElement) {
        const name = nameElement.innerText.trim().toLowerCase();

        if (!excludedNames.includes(name)) {
          console.log(`Unfollowing: ${name}`);
          // Click the "Following" button to unfollow
          button.click();

          // Wait for a short delay (adjust this as needed)
          setTimeout(() => {
            // Find the modal dialog with the class "artdeco-modal"
            const modal = document.querySelector(".artdeco-modal");

            if (modal) {
              // Find the "Unfollow" button inside the modal and click it
              const unfollowButton = modal.querySelector(".artdeco-modal__actionbar .artdeco-button--primary");
              if (unfollowButton) {
                unfollowButton.click();
              }
            }

            // Close the modal
            const closeButton = modal ? modal.querySelector(".artdeco-modal__dismiss") : null;
            if (closeButton) {
              closeButton.click();
            }

            // After unfollowing, continue with the next user
            setTimeout(() => {
              unfollowUser();
            }, 1000); // Adjust the delay if needed
          }, 1000); // Adjust the delay if needed

          return; // Stop processing other buttons for this iteration
        } else {
          console.log(`Skipping: ${name}`);
        }
      } else {
        console.log("No name element found for this button. Skipping.");
      }
    }

    // No "Following" buttons left to process, scroll down
    setTimeout(() => {
      scrollDown();
    }, 1000); // Adjust the delay if needed
  } else {
    console.log("No more 'Following' buttons found. Unfollowing completed.");
  }
}

// Function to scroll down the page
function scrollDown() {
  // Scroll to the bottom of the page
  window.scrollTo(0, document.body.scrollHeight);

  // Wait for the page to load more content (adjust the delay as needed)
  setTimeout(() => {
    unfollowUser();
  }, 2000); // Adjust the delay if needed
}

// Call the scrollDown function to start the process
scrollDown();
