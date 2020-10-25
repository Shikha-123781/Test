<?php 
  include_once './databaseConnection.php';
  $database = new Database();
  $dbconnect = $database->getConnection();
  $query = "select * from signupinfo";
	$query_result = mysqli_query($dbconnect,$query);
  if (!$query_result) {
    die("Could not successfully run query ($sql) from DB: " . mysqli_error());
  }
  $_response=[];
  if (mysqli_num_rows($query_result) == 0) {
    $_response = json_encode($_response);
    echo $_response;
    exit;
  }
  
  while ($row = mysqli_fetch_assoc($query_result)) {
    extract($row);
    $response_item=array(
      "firstName" => $firstName,
      "LastName" => $lastName,
      "email" => $email,
      "mobileNumber" => $mobileNumber,
      "country" =>$country,
      "state" =>$state,
      "city" =>$city,
      "password"=>$password,
      "id" => $id
    );
    array_push($_response,$response_item);
  }
	mysqli_close($dbconnect);
	$_response = json_encode($_response);
	echo $_response;
?>