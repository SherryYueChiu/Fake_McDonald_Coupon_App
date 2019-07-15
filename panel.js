$(function () {
    var imgZoomRate = 0.55; //優惠分頁圖片縮放率
    var importedData = [];
    var fieldset = $("fieldset");
    var arr1 = new Array(),
    arr2 = new Array(),
    arr3 = new Array();
    var coupon = new Array();
coupon[0]=["1元薯餅",	"1元小薯",	"1元小熱咖",	"1元蛋捲冰",	"10元吉事蛋堡",	"10元吉事堡",	"10元麥香魚",	"10元芥末堡",	"10元辣雞堡",	"10元小冰奶",	"10元滿福堡",	"10元薯餅吐司",	"20元芝麻聖代",	"10元麥香雞",	"20塊雞塊加四塊",	"30元雙茶花聖代",	"33飲品送滿福堡",	"33飲品送薯餅吐司",	"大冷飲送大麥克",	"大冷飲送麥香雞",	"大冷飲送辣雞堡",	"大冷飲送滿福堡",	"40元蛋捲冰+小薯",	"50元經典大早餐",	"60元大薯+聖代",	"65元大薯+玉米湯",	"65元好時光大早餐",	"75元好精彩大早餐",	"75元班尼迪克大早餐",	"餐送蝦堡",	"餐送BBQ翅",	"滿福堡加蛋1+1",	"大麥克1+1",	"辣雞堡1+1",	"板烤雞1+1",	"辣翅1+1",	"雞塊1+1",	"搖搖雞腿排1+1",	"嫩雞堡1+1",	"四塊辣雞塊1+1",	"蝦堡1+1",	"大薯1+1",	"拿1+1",	"滿福堡1+1",	"薯餅買1+1",	"蘋果派1+1",	"OREO冰炫風1+1",	"無骨雞腿排1+1",	"可可布朗尼冰炫風1+1",	"豬排土司1+1",	"大冰紅1+1",	"BBQ翅1+1",	"香檸脆雞堡1+1",	"辣蝦堡1+1",	"韓式炸雞堡1+1",	"鮭魚堡1+1",	"海陸堡1+1",	"雙魚堡1+1",	"福牛堡1+1",	"福雞堡1+1",	"來牛堡1+1",	"來雞堡1+1",	"揚蝦堡1+1",	"烤雞堡1+1",	"雞柳條1+1",	"塔塔魚堡1+1",	"黑牛堡1+1",	"辣脆雞堡1+1",	"紅玉冰炫風1+1",	"雙牛起司黑堡1+1",	"辣醬脆雞紅堡1+1",	"鳳梨派1+1",	"起司脆薯雙牛堡1+1",	"BBQ脆雞堡1+1",	"搖搖雞球1+1",	"香芋派1+1",	"松菇黑牛堡1+1",	"大冰綠1+1",	"冰黑咖1+1",	"熱黑咖1+1",	"小熱咖1+1",	"大可樂1+1",	"酷蘇打1+1",	"早餐送火腿蛋堡",	"黑咖送香雞蛋堡",	"黑咖送麥香雞",	"99熱中拿+鬆餅",	"99冰中拿+鬆餅",	"拿送鬆餅",	"拿送豬排土司",	"拿送香雞蛋堡",	"黑咖送滿福堡",	"餐送蘋果派",	"餐送麥香雞",	"餐送麥香魚",	"餐送蛋捲冰",	"餐送蘋果派",	"餐送聖代",	"餐送辣翅",	"餐送雞塊",	"餐送玉米湯"];
coupon[1]=["http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G050.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G051.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G052.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G053.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G056.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G057.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S065.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S098.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S109.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G077.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G034.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G078.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G081.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G066.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G032.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G083.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G011.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G014.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G021.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G023.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G024.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G025.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G096.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G069.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G141.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G186.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G070.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G071.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G072.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G134.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G015.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S034.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S042.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S043.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S044.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S046.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S048.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S099.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S100.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S103.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S127.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_S037.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G033.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G035.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G036.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G038.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G039.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G049.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G075.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G091.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G092.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G093.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G106.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G107.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G109.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G110.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G111.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G112.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G113.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G114.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G115.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G116.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G119.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G120.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G123.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G126.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G128.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G129.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G142.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G143.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G144.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G145.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G150.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G151.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G182.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G183.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G188.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G136.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G139.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G140.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G045.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G047.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G124.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G012.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G026.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G085.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G094.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G095.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G097.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G130.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G131.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G132.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G133.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G089.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G090.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G016.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G017.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G018.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G019.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G020.jpg","http://sherryyuechiu.azurewebsites.net/juebinbaubau/img/P_G187.jpg"];
coupon[2]=["已絕版",	"已絕版",	"已絕版",		"已絕版",		"10",			"10",			"10",			"10",			"10",			"10",			"10",			"10",			"已絕版",		"10",			"199",				"已絕版",			"33",				"33",				"40",				"40",				"40",				"40",				"40",				"50",				"已絕版",			"65",				"已絕版",			"已絕版",			"已絕版",				"99+",		"已絕版",		"58",				"72",			"72",			"已絕版",		"42",		"49",		"55",				"82",			"已絕版",			"69",		"55",		"75+",		"47",			"32",			"32",			"55",				"已絕版",			"已絕版",				"59",			"40",			"已絕版",	"已絕版",			"已絕版",		"已絕版",			"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",		"已絕版",			"已絕版",			"已絕版",			"已絕版",		"已絕版",				"已絕版",		"49",			"已絕版",		"已絕版",			"40",			"65",			"65",			"33",			"40",			"已絕版",		"29+",				"65",				"65",			"99",				"99",				"75+",		"75+",			"75+",			"65",			"99+",			"99+",			"99+",			"99+",			"99+",			"99+",		"99+",		"99+",		"99+"];

    //轉換陣列格式
    var _coupon = new Array();
    for (i = 0; i < coupon[0].length; i++) {
        _coupon[i] = {
            item: coupon[0][i],
            url: coupon[1][i],
            price: coupon[2][i]
        }
    }

    //預先顯示單一頁面：連線紀錄
    getLogLines();
    getRecordLines();
    getVIPList();
    $("#recordView").hide();
    $("#VIPManager").hide();
    $("#couponGenerator").hide();

    //分頁顯示切換
    $("#btn4LogView").click(function () {
        $("#recordView").hide();
        $("#VIPManager").hide();
        $("#couponGenerator").hide();
        $("#logView").show();
    });
    $("#btn4RecordView").click(function () {
        $("#logView").hide();
        $("#VIPManager").hide();
        $("#couponGenerator").hide();
        $("#recordView").show();
    });
    $("#btn4VIPManager").click(function () {
        $("#logView").hide();
        $("#recordView").hide();
        $("#couponGenerator").hide();
        $("#VIPManager").show();
    });
    $("#btn4couponGenerator").click(function () {
        $.get("./recentCoupon.php", function (data) {
            importCoupon(data)
            $("#logView").hide();
            $("#recordView").hide();
            $("#VIPManager").hide();
            $("#couponGenerator").show();
        });
    });

    //更新優惠鈕
    $("#couponUpdateBtn").click(function () {
        $.post("./writeRecentCoupon.php", {
            txt: $("#txtarea").val()
        }, function (d) {
            //隱藏未儲存提醒
            $("#coupon_unsave_notify").hide();
            alertBox("更新成功");
        });
    });

    //讀入已設優惠
    function importCoupon(data) {
        //陣列化資料
        importedData = data.split(";")
            importedData = importedData.map(o => o.split(","));

        //依價錢排序
        sortByPriceIncrease();

        //自動勾選預設項目
        $("fieldset label").each(function (index) {
            for (i = 0; i < importedData[2].length; i++) {
                if ($(this).html().indexOf(importedData[2][i].replace("<", "&lt;").replace(">", "&gt;")) != -1) {
                    $(this).trigger("click");
                }
            }
        });
        //重新綁定事件
        couponBtnRebind();
        //隱藏未儲存提醒
        $("#coupon_unsave_notify").hide();
    }

    //依價錢排序優惠
    function sortByPriceIncrease() {
        fieldset.html(`<legend>手動設定優惠<font class="float-right text-danger" id="coupon_unsave_notify" style="display:none">*</font></legend>`);
        //忽略已絕版項目
        _coupon = _coupon.filter(function (o) {
                return o.price.indexOf("已絕版") == -1;
            });
        console.log(_coupon)
        //依價錢排序
        _coupon = _coupon.sort(function (a, b) {
                return 1 * (a.price.replace("+", "")) - 1 * (b.price.replace("+", ""));
            });

        //寫入畫面
        _coupon.forEach(function (o, i) {
            if (o.price != -1) {
                fieldset.append(`<label for="checkbox-${i}">${o.item}<${o.price}><br><img src="${o.url}" width="${(215*imgZoomRate)}" height="${(384*imgZoomRate)}"/></label>`);
                fieldset.append(`<input type="checkbox" name="checkbox-${i}" id="checkbox-${i}" d1="${o.url.replace("http:\/\/mcdapp1.azureedge.net\/","http:\/\/sherryyuechiu.azurewebsites.net/juebinbaubau/img/")}" d2="${o.url}" d3="${o.item}" d4="${o.price}">`);
            }
        });

        //設定樣式
        $("input").checkboxradio();
        $("label").css("text-align", "left");

        //重新綁定事件
        couponBtnRebind();
    }

    //優惠分頁重新綁定事件
    function couponBtnRebind() {
        $("input").change(function () {
            arr1 = new Array(),
            arr2 = new Array(),
            arr3 = new Array();
            for (i = 0; i < _coupon.length; i++) {
                if ($("#checkbox-" + i).prop("checked")) {
                    arr1.push($("#checkbox-" + i).attr("d1"));
                    arr2.push($("#checkbox-" + i).attr("d2"));
                    arr3.push($("#checkbox-" + i).attr("d3") + "<" + $("#checkbox-" + i).attr("d4") + ">");
                }
            }
            var str = arr1.join(",") + ";" + arr2.join(",") + ";" + arr3.join(",");
            $("#txtarea").html(str.replace(/http:\/\/mcdapp1.azureedge.net\//g, "http:\/\/sherryyuechiu.azurewebsites.net\/juebinbaubau\/img\/"));

            //未儲存提醒
            $("#coupon_unsave_notify").show();
        });
    }

    var VIPListTxt = "";
    var VIPList = [];

    //讀入用戶名單並寫入畫面
    function getVIPList() {
        $.get("./guestList.txt", function (data) {
            //陣列化資料
            VIPListTxt = data;
            VIPList = VIPListTxt.split("\r\n");
            VIPList = VIPList.map(o => o.substr(18).replace(/ /g, "").replace(/\)/g, "").replace(/\;/g, "").replace(/\"/g, ""));
            VIPList = VIPList.map(o => o.split(","));
            html = `<table class="table table-dark table-striped">
				<thead>
					<tr>
						<td>UUID</td>
						<td>留言</td>
						<td>年</td>
						<td>月</td>
						<td>日</td>
						<td>時</td>
						<td>分</td>
						<td>用戶<font id="VIP_unsave_notify" style="display:none" class="float-right text-danger">*</font></td>
					</td>
				</thead>
				<tbody>`

                //依到期時間先後排序
                VIPList.sort(function (a, b) {
                    dt1 = new Date(a[2], a[3] - 1, a[4], a[5], a[6]).valueOf();
                    dt2 = new Date(b[2], b[3] - 1, b[4], b[5], b[6]).valueOf();
                    return dt2 - dt1;
                });

            //寫入畫面
            VIPList.forEach(function (o) {
                if (o[0] > 2) {
                    html += `<tr><td>${o[0]}</td><td>${o[1]}</td><td>${o[2]}</td><td>${o[3]}</td><td>${o[4]}</td><td>${o[5]}</td><td>${o[6]}</td><td>${o[7]}</td></tr>`;
                }
            });
            html += "</tbody></table>"
            $("#VIPManager").html(html);

            //加入操作按鈕
            html = `<div id='addGuest' class="btn btn-secondary btn-block">新增</div>`;
            $("#VIPManager").append(html);
            html = `<div id='saveBtn' class="btn btn-secondary btn-block">確定更新</div>`;
            $("#VIPManager").append(html);

            //綁定事件
            bindEvt4VIPList();

            //新增資料
            $("#addGuest").click(function () {
                html = "<tr><td>身份碼</td><td>留言</td><td>2019</td><td>12</td><td>31</td><td>23</td><td>59</td><td>稱呼</td></tr>";
                $("#VIPManager tbody").append(html);
                bindEvt4VIPList();
            });
        });
    }

    var LogLinesTxt = "";
    var LogLines = [];

    //連線紀錄讀入
    function getLogLines() {
        $.get("./log.txt", function (data) {
            //陣列化資料
            LogLinesTxt = data;
            LogLines = LogLinesTxt.split("\r\n")
                LogLines = LogLines.reverse()
                LogLines = LogLines.map(o => [o.substr(0, 10), o.substr(11, 5), o.substr(18)])

                //加入畫面
                html = `<table class="table table-dark table-striped">
				<thead>
					<tr>
						<td>日期</td>
						<td>時間</td>
						<td>紀錄</td>
					</td>
				</thead>
				<tbody>`

                LogLines.forEach(function (o) {
                    if (o[0] !== "") {
                        html += `<tr><td>${o[0]}</td><td>${o[1]}</td><td>${o[2]}</td></tr>`;
                    }
                });
            html += "</tbody></table>"
            $("#logView").html(html)
            bind4log();
        });

    }
    var recordLinesTxt = "";
    var recordLines = [];

    //兌換紀錄讀入
    function getRecordLines() {
        $.get("./record.txt", function (data) {
            //陣列化資料
            recordLinesTxt = data;
            recordLines = recordLinesTxt.split("\r\n")
                recordLines = recordLines.reverse()
                recordLines = recordLines.map(o => [o.substr(0, 10), o.substr(11, 5), o.substr(18)])

                //加入畫面
                html = `<table class="table table-dark table-striped">
				<thead>
					<tr>
						<td>日期</td>
						<td>時間</td>
						<td>紀錄</td>
					</td>
				</thead>
				<tbody>`

                recordLines.forEach(function (o) {
                    if (o[0] !== "") {
                        html += `<tr><td>${o[0]}</td><td>${o[1]}</td><td>${o[2]}</td></tr>`;
                    }
                });
            html += "</table>";
            $("#recordView").html(html);
            bind4record();
        });

    }
    var focusMode = false;
    var focusMode2 = false;

    function bind4record() {
        //特定用戶紀錄及全覽紀錄切換
        $("#recordView tbody tr td:last-child").click(function () {
            txt = $(this).text();
            they = "";
            VIPList.forEach(function (o, i) {
                if (txt.indexOf(o[7]) != -1) {
                    they = o[7];
                }
            });
            if (!focusMode) {
                $("#recordView tbody tr td:last-child").each(function (i) {
                    if ($(this).text().indexOf(they) == -1)
                        $(this).parent(0).hide();
                });
                focusMode = true;
            } else {
                $("#recordView tbody tr").show();
                focusMode = false;
            }
        });
    }

    function bind4log() {
        //特定用戶紀錄及全覽紀錄切換
        $("#logView tbody tr td:last-child").click(function () {
            txt = $(this).text();
            they = "";
            VIPList.forEach(function (o, i) {
                if (txt.indexOf(o[7]) != -1) {
                    they = o[7];
                }
            });
            if (!focusMode2) {
                $("#logView tbody tr td:last-child").each(function (i) {
                    if ($(this).text().indexOf(they) == -1)
                        $(this).parent(0).hide();
                });
                focusMode2 = true;
            } else {
                $("#logView tbody tr").show();
                focusMode2 = false;
            }
        });
    }

    //用戶名單事件綁定
    function bindEvt4VIPList() {
        //表格內容自訂修改
        $("#VIPManager tbody td").click(function () {
            oriTxt = $(this).text()
                newTxt = prompt("輸入新資料", $(this).text())
                if (newTxt) {
                    //更新畫面資訊
                    $(this).html(newTxt);
                    //未儲存提醒
                    $("#VIP_unsave_notify").show();
                }
        });

        //資料上傳鈕
        $("#saveBtn").click(function () {
            VIPListTxt = "";
            for (v0 = 0; v0 < $("#VIPManager tr").length; v0++) {
                o = $("#VIPManager tr").eq(v0)
                    if (o.find("td").eq(0).text().length < 10)
                        continue;
                    if (v0 > 0)
                        VIPListTxt += '\r\n';
                    VIPListTxt += `$data2[] = array("${o.find("td").eq(0).text()}","${o.find("td").eq(1).text()}",${o.find("td").eq(2).text()},${o.find("td").eq(3).text()},${o.find("td").eq(4).text()},${o.find("td").eq(5).text()},${o.find("td").eq(6).text()},"${o.find("td").eq(7).text()}");`;
            }
            $.get("./writeGuestList.php", {
                txt: VIPListTxt
            }, function (d) {
                //隱藏未儲存提醒
                $("#VIP_unsave_notify").hide();
                alertBox("更新成功");
            });
        });

        //alertBox
        function alertBox(msg) {
            $("#alertBox_msg").html(msg);
            $("#alertBox").modal();
        }

    }
});