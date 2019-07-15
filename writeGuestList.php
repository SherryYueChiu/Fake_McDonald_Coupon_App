<?php
$txt=$_GET['txt'];
file_put_contents('guestList.txt', $txt);
$php="<?php\r\n\$data2 = array();\r\n".$txt."\r\n?>";
file_put_contents('guestList.php', $php);
?>