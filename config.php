<?php
$host = 'localhost';
$dbname = 'admin'; // Updated to match your database name
$username = 'root'; // Default XAMPP username
$password = ''; // Default XAMPP password (empty)

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>