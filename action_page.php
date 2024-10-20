<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $firstName = htmlspecialchars($_POST['firstname']);
    $lastName = htmlspecialchars($_POST['lastname']);
    
    // Output the form data
    echo "<h2>Submitted Data</h2>";
    echo "First Name: " . $firstName . "<br>";
    echo "Last Name: " . $lastName . "<br>";
}
?>