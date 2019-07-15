<?php
$txt=$_POST['txt'];
file_put_contents('recentCoupon.php', $txt);
?>