(function run() {
    console.log("Started");
    var totalCount = 0;
    var els = [];
    var invitations = [];
    var maxAttempts = 10; // Limit the number of retries to avoid infinite loop

    // Function to populate elements based on the "Sent month ago" condition
    function populateEls() {
        els = document.getElementsByClassName("artdeco-button__text");
        invitations = [];  // Reset invitations list
        console.log("Populating invitations...");

        // Loop through all elements and find those with "month" in the text (older invitations)
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            var invitationCard = el.closest('.invitation-card');
            
            // Ensure invitationCard exists and has the "month ago" condition in the text
            if (invitationCard) {
                var invitationText = invitationCard.innerText.toLowerCase();
                console.log("Invitation text: " + invitationText);

                // Check if the invitation is older than a month
                if (invitationText.includes("month ago") || invitationText.includes("months ago")) {
                    invitations.push(el);  // Add button to invitations list
                    console.log("Invitation added to withdrawal list.");
                }
            }
        }

        console.log("Found " + invitations.length + " invitations older than a month.");
    }

    // Function to run the withdrawal process
    function runWithdraw(attempts) {
        console.log("Attempt #" + attempts);
        
        // Stop after maxAttempts
        if (attempts > maxAttempts) {
            console.log("Reached max attempts. Stopping...");
            return;
        }

        var idx = 0;
        var len = invitations.length;
        console.log("Starting withdrawal...");

        // Loop through each invitation and perform the withdrawal
        while (idx < len) {
            var el = invitations[idx];
            console.log("IDX: " + idx + " El: " + el);

            if (el) {
                // Set a timeout to stagger the clicks and prevent too fast interactions
                setTimeout(function(elll, idx) {
                    totalCount++;
                    console.log("Running... Click " + totalCount);
                    elll.click();
                    
                    // Wait for the modal to appear, then find the "Withdraw" button
                    setTimeout(function() {
                        // Find all button elements and search for one that contains the text "Withdraw"
                        var buttons = document.querySelectorAll('button');
                        var confirmBtn = null;
                        
                        // Loop through the buttons to find one with "Withdraw" text
                        for (var i = 0; i < buttons.length; i++) {
                            if (buttons[i].innerText.trim().toLowerCase() === 'withdraw') {
                                confirmBtn = buttons[i];
                                break;
                            }
                        }

                        // If the confirmation button is found in the modal, click it
                        if (confirmBtn) {
                            confirmBtn.click();
                            console.log("Invitation withdrawn.");
                        } else {
                            console.log("Withdraw button not found.");
                        }
                    }, 1500); // Increased wait time for modal to appear
                    
                    // If we reached the last invitation, we need to load new invitations
                    if (len === idx + 1) {
                        console.log("Need to find new elems");
                        setTimeout(function() {
                            populateEls(); // Re-populate elements for any newly loaded invitations
                            if (invitations.length === 0) {
                                console.log("..........Done");
                            } else {
                                console.log("Rerun withdraw...");
                                runWithdraw(attempts + 1); // Restart withdrawal for new elements
                            }
                        }, 1000);
                    }
                }, idx * 1000, el, idx); // Stagger clicks with a delay
            }
            idx++;
        }
    }

    populateEls();
    runWithdraw(1);
})();
