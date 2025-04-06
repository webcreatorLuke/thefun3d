// Display pop-up and handle user input
function checkOwner() {
  const networkID = "ownerID"; // Replace with the owner's actual network ID
  const userID = getUserNetworkID(); // Placeholder function

  if (userID === networkID) {
    const userResponse = confirm("Do you want to edit the website?");
    if (userResponse) {
      // Command to open File Explorer - This will require backend interaction
      alert("Redirecting to file explorer...");
      window.location.href = "file://C:/Users/leere/Desktop/My website"; // Does not work in most browsers
    }
  }
}

// Mock function to get network ID (requires backend for real implementation)
function getUserNetworkID() {
  return "ownerID"; // Replace with logic for real implementation
}

checkOwner();
