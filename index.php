<?php
$ver=$_GET['ver'];
$id=$_GET['id'];
if($ver=="1592"){
	date_default_timezone_set("Asia/Taipei");
	require('./guestList.php');
	$ax = 0;
	foreach($data2 as $data){
		if(strpos($id, $data[0]) !== false){
			$curTime = date('Y/m/d H:i');
			$expireTime = date('Y/m/d H:i', strtotime($data[2]."-".$data[3]."-".$data[4]." ".$data[5].":".$data[6].":59"));
			$remainTime = strtotime($expireTime) - strtotime($curTime);
			if($remainTime > 0){
				echo "歡迎呦,".$data[1];
			$str = sprintf("%s->%s(%s)連上\r\n", date('Y/m/d H:i'), $data[7], $id);
			file_put_contents('log.txt', $str, FILE_APPEND);
			}else{
				echo "fail:過期了";
				echo ';現在時間:'.$curTime;
				echo ';使用期限:'.$expireTime;
			$str = sprintf("%s->%s已過期\r\n", date('Y/m/d H:i'), $data[7], $id);
			file_put_contents('log.txt', $str, FILE_APPEND);
			}
			$ax = $ax + 1;
			break;
		}
	}
	if($ax == 0){
		$data3 = array();
		$data3[] = array("352384100843368", "黑名單1");
		$data3[] = array("865239032632653", "黑名單2");
		$data3[] = array("358868084390176", "黑名單3");
		$data3[] = array("353391090227477", "黑名單4");
		$data3[] = array("353025076573849", "黑名單5");
		$data3[] = array("352003150224218", "黑名單6");
		$data3[] = array("35594409072541",  "黑名單7");
		$data3[] = array("355944090372540", "黑名單8");
		foreach($data3 as $data){
			if(strpos($id, $data[0]) !== false){
				echo "fail:多次嘗試破解，系統禁止使用".$data[1];
				$str = sprintf("%s->%s(%s)嘗試連線\r\n", date('Y/m/d H:i'), $id, $data[1]);
				file_put_contents('log.txt', $str, FILE_APPEND);
			}else{
				echo "fail:你還沒被加到VIP名單".$id;
				$str = sprintf("%s->%s尚未授權連線\r\n", date('Y/m/d H:i'), $id);
				file_put_contents('log.txt', $str, FILE_APPEND);
			}
		}
	}
}else if($ver!=""&&$id==""){
	echo "fail:有新版本呦~快去找玥餅更新";
  $str = sprintf("%s->只有收到版本號(%s)，可能在嘗試破解\r\n", date('Y/m/d H:i'), $ver);
  file_put_contents('log.txt', $str, FILE_APPEND);	
}else if($ver==""&&$id!=""){
	echo "fail:有新版本呦~快去找玥餅更新";
  $str = sprintf("%s只有收到ID(%s)，可能在嘗試破解\r\n", date('Y/m/d H:i'), $id);
  file_put_contents('log.txt', $str, FILE_APPEND);	
}else if($ver==""&&$id==""){
	echo "fail:有新版本呦~快去找玥餅更新";
  $str = sprintf("%s->嘗試用網頁瀏覽\r\n", date('Y/m/d H:i'));
  file_put_contents('log.txt', $str, FILE_APPEND);	
}else{
	echo "fail:有新版本呦~快去找玥餅更新";
  $str = sprintf("%s->%s用舊版本連線\r\n", date('Y/m/d H:i'), $id);
  file_put_contents('log.txt', $str, FILE_APPEND);
}
?>