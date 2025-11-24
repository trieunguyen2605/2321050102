<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP_bai-1</title>
</head>
<body>
  <?php 
    // 1. Cú pháp in ra màn hình 
    echo "hello world <br>";

    echo "PHP <br>";

    // 2. BIến :
    // cú pháp : $ + tên biến = giá trị của biến 
    $ten = "Nguyễn Văn Triệu";
    $tuoi = 20;

    echo "Xin Chào ". $ten ." "."tuoi ". $tuoi."<br>"; //
    
    // 3. hằng (là duy nhất)
    define("soPi","3.14");
    echo soPi."<br>";

    // 4 phân biệt '' và ""
    echo '$ten'."<br>"; // nháy đơn coi là chuỗi - kết quả in ra là : $ten
    echo "$ten"."<br>";  // nháy kép coi là biến - kết quả in ra là : Nguyễn Văn Triệu 

    // 5 chuỗi 
    #5.1 kiểm tra độ dài chuỗi(strlen) 
    echo strlen($ten)."<br>";
    #5.2 đếm số từ 
    echo str_word_count($ten) . "<br>"; // kết quả in ra là 6
    #5.3 tìm kiếm kí tự 
    echo strpos($ten,"T") . "<br>";
    #5.4 thay thế kí tự trong chuỗi 
    echo str_replace("Văn Triệu","Thúy Nga",$ten) ."<br>";

    // 6 toán tử 
    $soThuNhat = 10;
    $soThuHai = 4;

    // + - * /
    // echo $soThuNhat + $soThuHai ."<br>"; // kết quả = 15; 
    // += -= *= /= %=
    // echo $soThuNhat %= $soThuHai; // kết quả = 0 ;
    // so sánh == != > < >= <= ===

    // 7 câu điều kiện if else 
    // kiểm tra tổng số thứ nhất và số thứ hai 
    // nếu = 15 , thì hiện ra tổng là 15 
    // nếu < 15 , thì hiện ra tổng là ... < 15
    // nếu = 15 , thì hiện ra tổng là 15 
    $tong = $soThuNhat + $soThuHai;
    if( ($tong) >15 ){
      echo "tong la : ".($tong) ." lon hon 15 <br> ";
    }elseif(($tong) <15){
      echo "tong la : ".($tong) . " nho hon 15 <br> ";
    }else{
      echo " tong la : 15 <br>";
    }

    // 8 switch case 
    $color = "red";
    switch($color){
      case "red":
        echo "is red <br>";
        break;
      case "blue":
        echo "is blue <br>";
        break;
      default:
        echo "no color <br>";
        break;
    }

    // 9  for 
    for($i = 0 ;$i<10;$i++){
      echo $i."<br>";
    }
  ?>
</body>
</html>