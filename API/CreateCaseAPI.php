<?php
require_once("sqlog.php");

$Casenumber = $_POST['Casenumber'];
$CreatedAt = date("d-m-Y H:i:s");
$Createdby = $_POST['Createdby'];
$clientName = $_POST['clientName'];
$phoneNumber = $_POST['phoneNumber'];
$Address = $_POST['Address'];
$ReciptNumber = $_POST['ReciptNumber'];
$OrderDate = $_POST['OrderDate'];
$ProductSKU = $_POST['ProductSKU'];
$ProductName = $_POST['ProductName'];
$ProductSerial = $_POST['ProductSerial'];
$Supplier = $_POST['Supplier'];
$ProductSerial = $_POST['ProductSerial'];
$CaseDescription = $_POST['CaseDescription'];
$ProductSerial = $_POST['ProductSerial'];
$Status = $_POST['Status'];

if ($Supplier == null || $Supplier == "") {
    $Supplier = "UNKOWN";
}


$sql = "INSERT INTO `cases` (`Casenumber`, `clientName`, `phoneNumber`, `Address`, `ReciptNumber`, `ProductSKU`, `ProductSerial`, `ProductName`, `CaseDescription`, `CreatedAt`, `OrderDate`, `CaseClosedAt`, `Status`, `Fixed`, `Fixed Description`, `Createdby`, `Supplier`) VALUES ('$Casenumber', '$clientName', '$phoneNumber', '$Address', '$ReciptNumber', '$ProductSKU', '$ProductSerial', '$ProductName', '$CaseDescription', current_timestamp(), '$OrderDate', NULL,'$Status', NULL, NULL, '$Createdby', '$Supplier')";


if ($mysqli->query($sql) === true) {
    //echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
    exit();
}
    header("Location: ../caseinspect.php?caseID=$mysqli->insert_id");
    $mysqli->close();
    exit();
?>

