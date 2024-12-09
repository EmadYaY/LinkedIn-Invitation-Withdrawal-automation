# LinkedIn Invitation Withdrawal and Unfollowing Automation Script

This JavaScript script automates the process of withdrawing LinkedIn invitations that have been sent but not yet accepted. It also includes functionality to unfollow users who are not following you back from your LinkedIn connections. 

## Features

### Withdrawal of Invitations Older Than a Month
- **Automatically withdraw invitations** sent "1 month ago," "2 months ago," "3 months ago," or longer.
- **Retries automatically** if some invitations are not withdrawn in the first run, ensuring all older invitations are processed.
- **Staggered Clicks**: Prevents triggering LinkedIn’s anti-bot measures by performing actions with slight delays between clicks.
- **Maximum Retry Limit**: A default retry count of 10 attempts is set to prevent infinite loops.
- **Modal Handling**: Automatically handles the confirmation modal when withdrawing invitations.

### Unfollowing Non-Followers
- **Identify and unfollow** users from your network connections who are not following you back.
- **Exclude specified users** (A, B, C, D,) from being unfollowed.
- **Automatic Retry**: If some users are not unfollowed in the first run, the script will retry to ensure all non-followers are processed.
- **Maximum Retry Limit**: A default retry count of 10 attempts to prevent endless loops.
- **Staggered Clicks**: Prevents triggering LinkedIn’s anti-bot measures by performing actions with slight delays between clicks.

## How to Use

1. **For Invitation Withdrawal**:
   1. Open the [LinkedIn Sent Invitations Page](https://www.linkedin.com/mynetwork/invitation-manager/sent/).
   2. Open your browser's developer console (usually by pressing `F12` or `Ctrl+Shift+I`).
   3. Paste the script into the console and press **Enter**.
   4. The script will automatically search for invitations older than one month and start the withdrawal process.
   5. If not all invitations are withdrawn after the first run, the script will attempt the process again to ensure no invitations are left behind.

2. **For Unfollowing Non-Followers**:
   1. Open your LinkedIn profile.
   2. Open your browser's developer console (usually by pressing `F12` or `Ctrl+Shift+I`).
   3. Paste the script into the console and press **Enter**.
   4. The script will identify connections who are not following you back.
   5. The script will exclude the following users from being unfollowed: A, B, C, D,
   6. If not all non-followers are unfollowed after the first run, the script will attempt the process again to ensure no connections are left unfollowed.

## Notes

- **Ensure you’re logged into your LinkedIn account** before running the script.
- The script works by simulating clicks on the "Withdraw" button for invitations older than one month and the "Unfollow" buttons for connections not following you back.
- You can modify the script to withdraw a specific number of invitations or unfollow a specific number of users by adjusting the `max_limit` variables.
- The script uses standard web DOM queries to locate the invitations and perform the withdrawal actions, so it might break if LinkedIn’s UI changes.

## Limitations

- The script is intended for personal use. **Automated actions on LinkedIn could potentially violate LinkedIn’s terms of service**.
- This script may stop functioning if LinkedIn updates its layout or changes button texts.

## License

Feel free to use this script for personal purposes and make modifications as needed. However, automated actions on LinkedIn may violate its terms of service, so please proceed with caution.

---
