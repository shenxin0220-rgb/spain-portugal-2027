const trip = {
  "title": "2027 春节西葡旅行",
  "version": "V2 · 2026.10.23",
  "updated": "2026-10-23",
  "source": "Schengen_Visa_Travel_Itinerary_2027_EN_CN_Revised.xlsx",
  "hotels": {
    "lis": {
      "name": "我的故事特茹酒店｜My Story Hotel Tejo",
      "address": "Rua dos Condes de Monsanto 2, Santa Maria Maior, 1100-159 Lisbon, Portugal",
      "phone": "+351 218 866 182",
      "checkin": "2027-02-07",
      "checkout": "2027-02-10",
      "nights": 3,
      "query": "My Story Hotel Tejo Rua dos Condes de Monsanto 2 Lisboa"
    },
    "sev": {
      "name": "贝克尔酒店｜Hotel Bécquer",
      "address": "Calle Reyes Católicos 4, 41001 Seville, Spain",
      "phone": "+34 954 228 900",
      "checkin": "2027-02-10",
      "checkout": "2027-02-12",
      "nights": 2,
      "query": "Hotel Bécquer Calle Reyes Católicos 4 Sevilla"
    },
    "mad": {
      "name": "加泰罗尼亚丽池酒店｜Hotel Catalonia El Retiro",
      "address": "Av. de la Ciudad de Barcelona 113, 28007 Madrid, Spain",
      "phone": "+34 914 341 120",
      "checkin": "2027-02-12",
      "checkout": "2027-02-15",
      "nights": 3,
      "query": "Hotel Catalonia El Retiro Avenida de la Ciudad de Barcelona 113 Madrid"
    },
    "air": {
      "name": "阿克索尔费里亚酒店｜Axor Feria Hotel",
      "address": "Calle de Campezo 4, 28022 Madrid, Spain",
      "phone": "+34 913 122 379",
      "checkin": "2027-02-15",
      "checkout": "2027-02-16",
      "nights": 1,
      "query": "Axor Feria Hotel Calle de Campezo 4 Madrid"
    }
  },
  "days": [
    {
      "date": "02/07",
      "weekday": "周日",
      "city": "抵达里斯本",
      "title": "北京 → 伊斯坦布尔 → 里斯本",
      "summary": "国际航班日。夜间抵达后直接乘出租车到酒店休息。",
      "hotel": "lis",
      "stops": [
        {
          "name": "北京首都国际机场 T3",
          "local": "Beijing Capital International Airport T3",
          "query": "Beijing Capital International Airport Terminal 3",
          "time": "08:40 起飞",
          "detail": "",
          "status": ""
        },
        {
          "name": "伊斯坦布尔机场",
          "local": "İstanbul Havalimanı",
          "query": "Istanbul Airport",
          "time": "14:20 抵达；21:20 转机起飞",
          "detail": "转机停留 7 小时。",
          "status": ""
        },
        {
          "name": "里斯本机场 T1",
          "local": "Aeroporto Humberto Delgado — Terminal 1",
          "query": "Lisbon Airport Terminal 1",
          "time": "23:25 抵达",
          "detail": "",
          "status": ""
        },
        {
          "name": "我的故事特茹酒店",
          "local": "My Story Hotel Tejo",
          "query": "My Story Hotel Tejo Rua dos Condes de Monsanto 2 Lisboa",
          "time": "抵达后入住",
          "detail": "预订从 2 月 7 日开始；实际到店可能已是 2 月 8 日凌晨。",
          "status": ""
        }
      ],
      "transports": [
        {
          "kind": "flight",
          "title": "土耳其航空 TK197",
          "text": "北京首都 T3（PEK）08:40 → 伊斯坦布尔（IST）14:20",
          "status": "已订"
        },
        {
          "kind": "flight",
          "title": "土耳其航空 TK1779",
          "text": "伊斯坦布尔（IST）21:20 → 里斯本 T1（LIS）23:25",
          "status": "已订"
        },
        {
          "kind": "local",
          "title": "机场 → 酒店",
          "text": "出租车。",
          "status": ""
        }
      ],
      "note": "不安排景点。提前告知酒店凌晨到店，并确认保留 2 月 7 日的房间。",
      "todos": [
        "里斯本酒店凌晨入住与保留房间：待酒店确认。"
      ],
      "tag": "当晚酒店已订",
      "transport": "土耳其航空 TK197：北京首都 T3（PEK）08:40 → 伊斯坦布尔（IST）14:20；土耳其航空 TK1779：伊斯坦布尔（IST）21:20 → 里斯本 T1（LIS）23:25；机场 → 酒店：出租车。",
      "stay": "我的故事特茹酒店｜My Story Hotel Tejo（已预订）｜Rua dos Condes de Monsanto 2, Santa Maria Maior, 1100-159 Lisbon, Portugal",
      "status": "里斯本酒店凌晨入住与保留房间：待酒店确认。"
    },
    {
      "date": "02/08",
      "weekday": "周一",
      "city": "波尔图",
      "title": "里斯本往返波尔图｜Lisboa ⇄ Porto",
      "summary": "当天往返：保留原网站七景点路线，当晚仍返回里斯本酒店。",
      "hotel": "lis",
      "stops": [
        {
          "name": "里斯本东方站",
          "local": "Lisboa Oriente",
          "time": "早间出发",
          "query": "Lisboa Oriente"
        },
        {
          "name": "波尔图坎帕尼扬站",
          "local": "Porto Campanhã",
          "query": "Porto Campanhã"
        },
        {
          "name": "圣本托火车站",
          "local": "Estação de São Bento",
          "query": "Estação de São Bento Porto"
        },
        {
          "name": "莱罗书店",
          "local": "Livraria Lello",
          "detail": "需关注预约及排队",
          "query": "Livraria Lello Porto"
        },
        {
          "name": "教士塔",
          "local": "Torre dos Clérigos",
          "detail": "登塔可选，体力不足可只看外观",
          "query": "Torre dos Clérigos Porto"
        },
        {
          "name": "波尔图主教座堂",
          "local": "Sé do Porto",
          "detail": "外观与广场优先",
          "query": "Sé do Porto"
        },
        {
          "name": "里贝拉老城",
          "local": "Ribeira",
          "detail": "午餐与河岸漫步",
          "query": "Ribeira Porto"
        },
        {
          "name": "路易一世大桥",
          "local": "Ponte de Dom Luís I",
          "query": "Ponte de Dom Luís I Porto"
        },
        {
          "name": "莫罗花园",
          "local": "Jardim do Morro",
          "detail": "可选塞拉山观景点；返程前留足时间",
          "query": "Jardim do Morro Porto"
        },
        {
          "name": "波尔图返程 → 里斯本",
          "local": "Porto → Lisboa",
          "time": "晚间"
        }
      ],
      "transports": [
        {
          "kind": "intercity",
          "title": "里斯本 ⇄ 波尔图",
          "text": "保留原网站往返安排。往返票据及最终班次未包含在本次行程单中，待补充；旧版 AP31／AP36 为参考，不作为已订信息。",
          "status": "待确认"
        }
      ],
      "note": "七景点版增加书店、教士塔、莫罗花园。返程前预留车站接驳时间；若到达晚或排队长，优先舍弃书店内部/登塔。",
      "todos": [
        "波尔图往返票据及最终班次：待补充确认。"
      ],
      "tag": "当晚酒店已订",
      "transport": "里斯本 ⇄ 波尔图：保留原网站往返安排。往返票据及最终班次未包含在本次行程单中，待补充；旧版 AP31／AP36 为参考，不作为已订信息。",
      "stay": "我的故事特茹酒店｜My Story Hotel Tejo（已预订）｜Rua dos Condes de Monsanto 2, Santa Maria Maior, 1100-159 Lisbon, Portugal",
      "status": "波尔图往返票据及最终班次：待补充确认。"
    },
    {
      "date": "02/09",
      "weekday": "周二",
      "city": "里斯本周边",
      "title": "卡斯凯什 → 辛特拉海岸线一日游",
      "summary": "从里斯本出发，沿海岸前往辛特拉历史中心，傍晚返回同一家酒店。",
      "hotel": "lis",
      "stops": [
        {
          "name": "卡斯凯什",
          "local": "Cascais",
          "query": "Cascais Portugal",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "地狱之口",
          "local": "Boca do Inferno",
          "query": "Boca do Inferno Cascais",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "罗卡角",
          "local": "Cabo da Roca",
          "query": "Cabo da Roca",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "辛特拉历史中心",
          "local": "Centro Histórico de Sintra",
          "query": "Centro Histórico de Sintra",
          "time": "",
          "detail": "",
          "status": ""
        }
      ],
      "transports": [
        {
          "kind": "local",
          "title": "全日交通",
          "text": "出租车：里斯本 → 卡斯凯什 → 地狱之口 → 罗卡角 → 辛特拉 → 里斯本。",
          "status": ""
        }
      ],
      "note": "按行程单只安排辛特拉历史中心；今天不额外加入宫殿参观。各段出租车需自行安排。",
      "todos": [],
      "tag": "当晚酒店已订",
      "transport": "全日交通：出租车：里斯本 → 卡斯凯什 → 地狱之口 → 罗卡角 → 辛特拉 → 里斯本。",
      "stay": "我的故事特茹酒店｜My Story Hotel Tejo（已预订）｜Rua dos Condes de Monsanto 2, Santa Maria Maior, 1100-159 Lisbon, Portugal",
      "status": "以最新行程单与实际票据为准。"
    },
    {
      "date": "02/10",
      "weekday": "周三",
      "city": "里斯本 → 塞维利亚",
      "title": "贝伦区游览 → 晚班机赴塞维利亚",
      "summary": "退房后游览贝伦区，回酒店取行李，再前往机场。",
      "hotel": "sev",
      "stops": [
        {
          "name": "热罗尼莫斯修道院",
          "local": "Mosteiro dos Jerónimos",
          "query": "Mosteiro dos Jerónimos Lisboa",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "贝伦塔",
          "local": "Torre de Belém",
          "query": "Torre de Belém Lisboa",
          "time": "",
          "detail": "外观参观。",
          "status": ""
        },
        {
          "name": "我的故事特茹酒店",
          "local": "My Story Hotel Tejo",
          "query": "My Story Hotel Tejo Rua dos Condes de Monsanto 2 Lisboa",
          "time": "",
          "detail": "返回取寄存行李；退房与寄存安排以酒店确认为准。",
          "status": ""
        },
        {
          "name": "里斯本机场 T1",
          "local": "Aeroporto Humberto Delgado — Terminal 1",
          "query": "Lisbon Airport Terminal 1",
          "time": "21:45 起飞",
          "detail": "",
          "status": ""
        },
        {
          "name": "塞维利亚机场",
          "local": "Aeropuerto de Sevilla",
          "query": "Seville Airport",
          "time": "23:45 抵达",
          "detail": "",
          "status": ""
        },
        {
          "name": "贝克尔酒店",
          "local": "Hotel Bécquer",
          "query": "Hotel Bécquer Calle Reyes Católicos 4 Sevilla",
          "time": "",
          "detail": "机场乘出租车前往酒店；可能于 2 月 11 日凌晨到店。",
          "status": ""
        }
      ],
      "transports": [
        {
          "kind": "flight",
          "title": "葡萄牙航空 TP1106",
          "text": "里斯本 T1（LIS）21:45 → 塞维利亚（SVQ）23:45",
          "status": "已订"
        },
        {
          "kind": "local",
          "title": "市内及机场接驳",
          "text": "里斯本市内：出租车、地铁及步行；取行李后出租车到机场；塞维利亚机场到酒店乘出租车。",
          "status": ""
        }
      ],
      "note": "航班时间为两地当地时间。今天从里斯本酒店退房，入住塞维利亚酒店。",
      "todos": [
        "贝克尔酒店深夜／次日凌晨入住与保留房间：待酒店确认。"
      ],
      "tag": "当晚酒店已订",
      "transport": "葡萄牙航空 TP1106：里斯本 T1（LIS）21:45 → 塞维利亚（SVQ）23:45；市内及机场接驳：里斯本市内：出租车、地铁及步行；取行李后出租车到机场；塞维利亚机场到酒店乘出租车。",
      "stay": "贝克尔酒店｜Hotel Bécquer（已预订）｜Calle Reyes Católicos 4, 41001 Seville, Spain",
      "status": "贝克尔酒店深夜／次日凌晨入住与保留房间：待酒店确认。"
    },
    {
      "date": "02/11",
      "weekday": "周四",
      "city": "格拉纳达往返",
      "title": "阿尔罕布拉宫当天往返｜Sevilla ⇄ Granada",
      "summary": "仅安排阿尔罕布拉宫一日游；参观后返回塞维利亚，不在格拉纳达过夜。",
      "hotel": "sev",
      "stops": [
        {
          "name": "塞维利亚武器广场汽车站",
          "local": "Estación de Autobuses Plaza de Armas",
          "query": "Estación de Autobuses Plaza de Armas Sevilla",
          "time": "",
          "detail": "往返大巴班次及实际乘车站以购票结果为准。",
          "status": ""
        },
        {
          "name": "格拉纳达汽车站",
          "local": "Estación de Autobuses de Granada",
          "query": "Estación de Autobuses de Granada",
          "time": "",
          "detail": "下车后出租车前往阿尔罕布拉宫。",
          "status": ""
        },
        {
          "name": "阿尔罕布拉宫",
          "local": "Alhambra",
          "query": "Alhambra Granada",
          "time": "",
          "detail": "综合参观门票已购买。",
          "status": "门票已购"
        },
        {
          "name": "纳斯里德宫",
          "local": "Palacios Nazaríes",
          "query": "Palacios Nazaríes Granada",
          "time": "13:00 指定入场",
          "detail": "提前到达指定入口；以门票及景区要求为准。",
          "status": "固定入场"
        },
        {
          "name": "返回塞维利亚贝克尔酒店",
          "local": "Hotel Bécquer",
          "query": "Hotel Bécquer Calle Reyes Católicos 4 Sevilla",
          "time": "当晚返回",
          "detail": "",
          "status": ""
        }
      ],
      "transports": [
        {
          "kind": "coach",
          "title": "塞维利亚 ⇄ 格拉纳达",
          "text": "城际大巴往返。最新行程单未提供班次或出票信息，购票及出发时间待落实。",
          "status": "待安排"
        },
        {
          "kind": "local",
          "title": "格拉纳达汽车站 ⇄ 阿尔罕布拉宫",
          "text": "出租车往返；宫区内步行。",
          "status": ""
        }
      ],
      "note": "选择大巴时，务必为 13:00 纳斯里德宫固定入场预留到站、出租车接驳与入园时间。大件行李留在塞维利亚酒店。",
      "todos": [
        "格拉纳达往返大巴：待落实购票及班次。"
      ],
      "tag": "当晚酒店已订",
      "transport": "塞维利亚 ⇄ 格拉纳达：城际大巴往返。最新行程单未提供班次或出票信息，购票及出发时间待落实。；格拉纳达汽车站 ⇄ 阿尔罕布拉宫：出租车往返；宫区内步行。",
      "stay": "贝克尔酒店｜Hotel Bécquer（已预订）｜Calle Reyes Católicos 4, 41001 Seville, Spain",
      "status": "格拉纳达往返大巴：待落实购票及班次。"
    },
    {
      "date": "02/12",
      "weekday": "周五",
      "city": "塞维利亚 → 马德里",
      "title": "塞维利亚游览 → 高铁赴马德里",
      "summary": "白天游览塞维利亚，晚上乘已订高铁前往马德里。",
      "hotel": "mad",
      "stops": [
        {
          "name": "塞维利亚王宫",
          "local": "Real Alcázar de Sevilla",
          "query": "Real Alcázar de Sevilla",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "塞维利亚主教座堂及吉拉尔达塔",
          "local": "Catedral de Sevilla y Giralda",
          "query": "Catedral de Sevilla",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "西班牙广场",
          "local": "Plaza de España",
          "query": "Plaza de España Sevilla",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "塞维利亚圣胡斯塔站",
          "local": "Sevilla-Santa Justa",
          "query": "Sevilla Santa Justa",
          "time": "18:08 发车",
          "detail": "安排好取行李及前往车站的时间，提前到站。",
          "status": ""
        },
        {
          "name": "马德里阿托查站",
          "local": "Madrid-Puerta de Atocha",
          "query": "Madrid Puerta de Atocha",
          "time": "20:46 抵达",
          "detail": "",
          "status": ""
        },
        {
          "name": "加泰罗尼亚丽池酒店",
          "local": "Hotel Catalonia El Retiro",
          "query": "Hotel Catalonia El Retiro Avenida de la Ciudad de Barcelona 113 Madrid",
          "time": "",
          "detail": "从阿托查站乘出租车或地铁到酒店。",
          "status": ""
        }
      ],
      "transports": [
        {
          "kind": "rail",
          "title": "iryo 高速列车 06177",
          "text": "塞维利亚圣胡斯塔站 18:08 → 马德里阿托查站 20:46",
          "status": "已订"
        },
        {
          "kind": "local",
          "title": "市内出行及到店",
          "text": "塞维利亚：出租车、地铁及步行；马德里阿托查站 → 酒店：出租车或地铁。",
          "status": ""
        }
      ],
      "note": "王宫和主教座堂的参观时间需与高铁衔接；景点预约状态未在最新行程单中列明。",
      "todos": [],
      "tag": "当晚酒店已订",
      "transport": "iryo 高速列车 06177：塞维利亚圣胡斯塔站 18:08 → 马德里阿托查站 20:46；市内出行及到店：塞维利亚：出租车、地铁及步行；马德里阿托查站 → 酒店：出租车或地铁。",
      "stay": "加泰罗尼亚丽池酒店｜Hotel Catalonia El Retiro（已预订）｜Av. de la Ciudad de Barcelona 113, 28007 Madrid, Spain",
      "status": "以最新行程单与实际票据为准。"
    },
    {
      "date": "02/13",
      "weekday": "周六",
      "city": "马德里",
      "title": "马德里王宫与市中心｜Madrid",
      "summary": "以王宫、广场和格兰维亚大道为主的市中心游览。",
      "hotel": "mad",
      "stops": [
        {
          "name": "马德里王宫",
          "local": "Palacio Real de Madrid",
          "query": "Palacio Real de Madrid",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "马约尔广场",
          "local": "Plaza Mayor",
          "query": "Plaza Mayor Madrid",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "太阳门广场",
          "local": "Puerta del Sol",
          "query": "Puerta del Sol Madrid",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "格兰维亚大道",
          "local": "Gran Vía",
          "query": "Gran Vía Madrid",
          "time": "",
          "detail": "",
          "status": ""
        }
      ],
      "transports": [
        {
          "kind": "local",
          "title": "市内交通",
          "text": "出租车、地铁及步行。",
          "status": ""
        }
      ],
      "note": "按照最新行程单安排四个核心地点；入内参观需另行核对预约与开放情况。",
      "todos": [],
      "tag": "当晚酒店已订",
      "transport": "市内交通：出租车、地铁及步行。",
      "stay": "加泰罗尼亚丽池酒店｜Hotel Catalonia El Retiro（已预订）｜Av. de la Ciudad de Barcelona 113, 28007 Madrid, Spain",
      "status": "以最新行程单与实际票据为准。"
    },
    {
      "date": "02/14",
      "weekday": "周日",
      "city": "托莱多往返",
      "title": "托莱多一日游｜Madrid ⇄ Toledo",
      "summary": "乘城际大巴往返，傍晚回到马德里酒店。",
      "hotel": "mad",
      "stops": [
        {
          "name": "河谷观景台",
          "local": "Mirador del Valle",
          "query": "Mirador del Valle Toledo",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "圣马丁桥",
          "local": "Puente de San Martín",
          "query": "Puente de San Martín Toledo",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "托莱多主教座堂",
          "local": "Catedral de Toledo",
          "query": "Catedral de Toledo",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "索科多韦尔广场",
          "local": "Plaza de Zocodover",
          "query": "Plaza de Zocodover Toledo",
          "time": "",
          "detail": "",
          "status": ""
        }
      ],
      "transports": [
        {
          "kind": "coach",
          "title": "马德里 ⇄ 托莱多",
          "text": "城际大巴往返。行程单未列班次或出票信息，乘车站与时间待确认。",
          "status": "待安排"
        },
        {
          "kind": "local",
          "title": "托莱多市内",
          "text": "出租车及步行。",
          "status": ""
        }
      ],
      "note": "保留大巴返程缓冲时间；河谷观景台与老城区之间可乘出租车。",
      "todos": [
        "托莱多往返大巴：待确认购票、班次及乘车站。"
      ],
      "tag": "当晚酒店已订",
      "transport": "马德里 ⇄ 托莱多：城际大巴往返。行程单未列班次或出票信息，乘车站与时间待确认。；托莱多市内：出租车及步行。",
      "stay": "加泰罗尼亚丽池酒店｜Hotel Catalonia El Retiro（已预订）｜Av. de la Ciudad de Barcelona 113, 28007 Madrid, Spain",
      "status": "托莱多往返大巴：待确认购票、班次及乘车站。"
    },
    {
      "date": "02/15",
      "weekday": "周一",
      "city": "马德里 → 机场酒店",
      "title": "普拉多与丽池公园 → 机场酒店",
      "summary": "白天游览，下午前往机场附近酒店，准备次日早班机。",
      "hotel": "air",
      "stops": [
        {
          "name": "普拉多博物馆",
          "local": "Museo Nacional del Prado",
          "query": "Museo Nacional del Prado Madrid",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "丽池公园",
          "local": "Parque del Retiro",
          "query": "Parque del Retiro Madrid",
          "time": "",
          "detail": "",
          "status": ""
        },
        {
          "name": "阿克索尔费里亚酒店",
          "local": "Axor Feria Hotel",
          "query": "Axor Feria Hotel Calle de Campezo 4 Madrid",
          "time": "下午入住",
          "detail": "由马德里市区乘出租车前往。",
          "status": ""
        }
      ],
      "transports": [
        {
          "kind": "local",
          "title": "市内与换酒店",
          "text": "市内观光：出租车、地铁及步行。马德里市区 → Axor Feria Hotel：出租车。",
          "status": ""
        }
      ],
      "note": "今天从加泰罗尼亚丽池酒店退房。次日 06:15 起飞，请提前确认机场酒店凌晨接送时间及实际航站楼。",
      "todos": [
        "Axor Feria 凌晨机场接送：待确认班车时间、预约方式和航站楼；必要时预约出租车。"
      ],
      "tag": "当晚酒店已订",
      "transport": "市内与换酒店：市内观光：出租车、地铁及步行。马德里市区 → Axor Feria Hotel：出租车。",
      "stay": "阿克索尔费里亚酒店｜Axor Feria Hotel（已预订）｜Calle de Campezo 4, 28022 Madrid, Spain",
      "status": "Axor Feria 凌晨机场接送：待确认班车时间、预约方式和航站楼；必要时预约出租车。"
    },
    {
      "date": "02/16",
      "weekday": "周二",
      "city": "返程",
      "title": "马德里 → 伊斯坦布尔 → 北京",
      "summary": "离开申根区，经伊斯坦布尔转机，2 月 17 日抵达北京。",
      "hotel": null,
      "stops": [
        {
          "name": "马德里巴拉哈斯机场",
          "local": "Aeropuerto Adolfo Suárez Madrid-Barajas",
          "query": "Adolfo Suárez Madrid Barajas Airport",
          "time": "06:15 起飞",
          "detail": "实际出发航站楼以机票／航司通知为准。",
          "status": ""
        },
        {
          "name": "伊斯坦布尔机场",
          "local": "İstanbul Havalimanı",
          "query": "Istanbul Airport",
          "time": "12:30 抵达；17:05 转机起飞",
          "detail": "",
          "status": ""
        },
        {
          "name": "北京首都国际机场",
          "local": "Beijing Capital International Airport",
          "query": "Beijing Capital International Airport",
          "time": "2 月 17 日 07:00 抵达",
          "detail": "",
          "status": ""
        }
      ],
      "transports": [
        {
          "kind": "flight",
          "title": "土耳其航空 TK1360",
          "text": "马德里（MAD）06:15 → 伊斯坦布尔（IST）12:30",
          "status": "已订"
        },
        {
          "kind": "flight",
          "title": "土耳其航空 TK196",
          "text": "伊斯坦布尔（IST）17:05 → 北京（PEK）07:00（次日，2 月 17 日）",
          "status": "已订"
        },
        {
          "kind": "local",
          "title": "机场酒店 → 机场",
          "text": "酒店接驳班车或出租车；凌晨接送安排待酒店确认。",
          "status": "待确认"
        }
      ],
      "note": "今晨从机场酒店退房；当晚在飞机上，无酒店住宿。所有航班时刻均为当地时间。",
      "todos": [
        "凌晨机场接送：前一日落实，未确认前不要按班车已安排处理。"
      ],
      "tag": "返程",
      "transport": "土耳其航空 TK1360：马德里（MAD）06:15 → 伊斯坦布尔（IST）12:30；土耳其航空 TK196：伊斯坦布尔（IST）17:05 → 北京（PEK）07:00（次日，2 月 17 日）；机场酒店 → 机场：酒店接驳班车或出租车；凌晨接送安排待酒店确认。",
      "stay": "飞机上／无酒店住宿",
      "status": "凌晨机场接送：前一日落实，未确认前不要按班车已安排处理。"
    }
  ]
};
