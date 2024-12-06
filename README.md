# LinkedIn Invitation Withdrawal Automation Script

This JavaScript script automates the process of withdrawing LinkedIn invitations that have been sent but not yet accepted. It is specifically designed to withdraw invitations that are older than one month, including invitations sent 1 month, 2 months, 3 months ago, or longer.

## Features

- **Withdraw Invitations Older Than a Month**: The script checks for invitations with text indicating they were sent "1 month ago" or "2 months ago" (or older) and automatically withdrew them.
- **Automatic Retry**: If some invitations are not withdrawn in the first run, the script will retry and ensure all older invitations are withdrawn.
- **Staggered Clicks**: To avoid triggering LinkedIn's anti-bot measures, the script performs the withdrawal actions with a slight delay between each click.
- **Maximum Retry Limit**: The script includes a limit to avoid infinite loops, with a default retry count of 10 attempts.
- **Modal Handling**: When clicking on an invitation to withdraw, the script waits for the confirmation modal to appear and then automatically confirms the withdrawal.

## How to Use

1. Open the [LinkedIn Sent Invitations Page](https://www.linkedin.com/mynetwork/invitation-manager/sent/).
2. Open your browser's developer console (usually by pressing `F12` or `Ctrl+Shift+I`).
3. Paste the script into the console and press **Enter**.
4. The script will automatically search for invitations older than one month and start the withdrawal process.
5. If all invitations are not withdrawn after the first run, the script will attempt the process again to ensure no invitations are left behind.

## Notes

- Ensure you're logged into your LinkedIn account before running the script.
- The script works by simulating clicks on the "Withdraw" button for invitations older than one month.
- You can modify the script to withdraw a specific number of invitations by adjusting the `max_limit` variable.
- The script uses standard web DOM queries to locate the invitations and perform the withdrawal actions, which means it might break if LinkedIn's UI changes.

## Limitations

- The script is intended for personal use. Automated actions on LinkedIn could potentially violate LinkedIn's terms of service.
- This script might stop working if LinkedIn updates its layout or button text.

## License

Feel free to use this script for personal purposes and make modifications as needed. However, automated actions on LinkedIn may violate its terms of service, so please proceed with caution.
