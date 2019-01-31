#!/bin/bash/
read -p "Enter Name Of File:  " var
touch "$var.html"
echo "<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>   
    <link rel="icon" href="">
    <link rel="stylesheet" href="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><title>$var</title>
</head>
<body>
//Write Your Code
</body>
</html>">>$var.html
exit 0; 