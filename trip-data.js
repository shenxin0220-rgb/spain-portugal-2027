const trip = {
  "title": "2027 春节西葡旅行",
  "version": "V2 · 马德里新版 · 2026.11.14",
  "updated": "2026-11-14",
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
      "city": "马德里·皇宫线",
      "title": "马德里皇宫历史线｜Madrid",
      "summary": "皇宫与历史街区 → 德波神庙日落 → Riu 屋顶夜景。以下游览时段为建议，不代表门票已预约。",
      "hotel": "mad",
      "stops": [
        {
          "name": "酒店 → 马德里皇宫",
          "local": "Hotel Catalonia El Retiro → Palacio Real de Madrid",
          "time": "建议 09:15–10:00",
          "detail": "建议乘出租车，预留排队和寻找入口的时间。",
          "status": "",
          "query": "Palacio Real de Madrid"
        },
        {
          "name": "马德里皇宫",
          "local": "Palacio Real de Madrid",
          "time": "建议 10:00–12:00",
          "detail": "内部参观；建议预约 10:00 入场，门票仍需落实。",
          "status": "",
          "query": "Palacio Real de Madrid"
        },
        {
          "name": "皇宫与主教堂观景台",
          "local": "Mirador de la Cornisa",
          "time": "建议 12:00–12:30",
          "detail": "拍摄阿穆德纳主教堂、皇宫与周边街景。",
          "status": "",
          "query": "Mirador de la Cornisa"
        },
        {
          "name": "摩尔人庄园",
          "local": "Jardines del Campo del Moro",
          "time": "建议 12:30–13:30",
          "detail": "花园位于皇宫下方，按实际开放入口绕行。",
          "status": "",
          "query": "Jardines del Campo del Moro"
        },
        {
          "name": "圣米盖尔市场",
          "local": "Mercado de San Miguel",
          "time": "建议 13:45–14:45",
          "detail": "午餐、Tapas 与西班牙小吃。",
          "status": "",
          "query": "Mercado de San Miguel"
        },
        {
          "name": "马约尔广场",
          "local": "Plaza Mayor",
          "time": "建议 14:45–15:20",
          "detail": "历史广场街拍，周边短暂漫步。",
          "status": "",
          "query": "Plaza Mayor Madrid"
        },
        {
          "name": "太阳门广场",
          "local": "Puerta del Sol",
          "time": "建议 15:20–16:00",
          "detail": "寻找西班牙公路零公里标志。",
          "status": "",
          "query": "Puerta del Sol Madrid"
        },
        {
          "name": "自由活动、咖啡与休息",
          "local": "Madrid",
          "time": "建议 16:00–17:30",
          "detail": "为傍晚日落预留体力与移动时间。",
          "status": "",
          "query": ""
        },
        {
          "name": "德波神庙",
          "local": "Templo de Debod",
          "time": "建议 17:45–19:00",
          "detail": "日落优先。附件预估 2/13 日落约 18:47，出发前再核对天气与日落时间。",
          "status": "",
          "query": "Templo de Debod"
        },
        {
          "name": "Riu 西班牙广场酒店 360º 屋顶酒吧",
          "local": "Riu Plaza España 360º Rooftop Bar",
          "time": "建议 19:15–20:15",
          "detail": "登高看马德里夜景；入场政策、开放与费用提前核对。",
          "status": "",
          "query": "Riu Plaza España 360 Rooftop Bar Madrid"
        },
        {
          "name": "晚餐、返回酒店",
          "local": "Hotel Catalonia El Retiro",
          "time": "20:15 之后",
          "detail": "不再安排其他远距离景点。",
          "status": "",
          "query": "Hotel Catalonia El Retiro Avenida de la Ciudad de Barcelona 113 Madrid"
        }
      ],
      "transports": [
        {
          "kind": "local",
          "title": "酒店往返与市中心出行",
          "text": "往返酒店建议出租车；核心老城路段步行，必要时乘地铁或出租车。",
          "status": ""
        }
      ],
      "note": "全天地点较密集。如皇宫或花园耗时超出预期，可缩短摩尔人庄园或广场停留。德波神庙日落优先，Riu 安排看夜景，不必抢日落。",
      "todos": [
        "马德里皇宫：建议预约 10:00，尚未提供已购门票信息。",
        "Riu 屋顶酒吧入场政策、开放与费用：出发前核对。"
      ],
      "tag": "当晚酒店已订",
      "transport": "酒店往返与市中心出行：往返酒店建议出租车；核心老城路段步行，必要时乘地铁或出租车。",
      "stay": "加泰罗尼亚丽池酒店｜Hotel Catalonia El Retiro（已预订）｜Av. de la Ciudad de Barcelona 113, 28007 Madrid, Spain",
      "status": "马德里皇宫：建议预约 10:00，尚未提供已购门票信息。；Riu 屋顶酒吧入场政策、开放与费用：出发前核对。"
    },
    {
      "date": "02/14",
      "weekday": "周日",
      "city": "托莱多往返",
      "title": "托莱多一日游｜Madrid ⇄ Toledo",
      "summary": "保留完整的托莱多当天往返，不并入马德里两天市内步行游览。",
      "hotel": "mad",
      "stops": [
        {
          "name": "马德里 → 托莱多",
          "local": "Madrid → Toledo",
          "time": "早晨",
          "detail": "乘长途大巴，班次与乘车站以实际订票为准。",
          "status": "",
          "query": ""
        },
        {
          "name": "山谷观景台",
          "local": "Mirador del Valle",
          "time": "上午",
          "detail": "先欣赏托莱多古城全景，建议乘出租车衔接。",
          "status": "",
          "query": "Mirador del Valle Toledo"
        },
        {
          "name": "索科多韦尔广场",
          "local": "Plaza de Zocodover",
          "time": "上午",
          "detail": "进入古城，沿中世纪街道散步。",
          "status": "",
          "query": "Plaza de Zocodover Toledo"
        },
        {
          "name": "托莱多主教座堂",
          "local": "Catedral Primada de Toledo",
          "time": "中午",
          "detail": "如入内参观，按当天开放与票务时间安排。",
          "status": "",
          "query": "Catedral Primada de Toledo"
        },
        {
          "name": "古城午餐与自由散步",
          "local": "Casco Histórico de Toledo",
          "time": "中午至下午",
          "detail": "老城巷道多坡路，穿舒适鞋。",
          "status": "",
          "query": "Casco Histórico de Toledo"
        },
        {
          "name": "圣马丁桥",
          "local": "Puente de San Martín",
          "time": "下午",
          "detail": "远眺塔霍河谷、城墙和桥景。",
          "status": "",
          "query": "Puente de San Martín Toledo"
        },
        {
          "name": "托莱多 → 马德里",
          "local": "Toledo → Madrid",
          "time": "傍晚",
          "detail": "乘大巴返回，继续入住加泰罗尼亚丽池酒店。",
          "status": "",
          "query": "Hotel Catalonia El Retiro Avenida de la Ciudad de Barcelona 113 Madrid"
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
      "note": "周日教堂参观可能受宗教活动影响，以官方开放时间为准。托莱多坡路较多，优先保留观景台与主教堂。",
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
      "city": "马德里·公园线",
      "title": "马德里公园艺术线 → 机场酒店｜Madrid",
      "summary": "丽池公园 → 阿尔卡拉门 → 普拉多博物馆 → 取行李 → 机场酒店。约 17:00 到店，尽早休息。以下为建议时段。",
      "hotel": "air",
      "stops": [
        {
          "name": "早餐、退房、寄存行李",
          "local": "Hotel Catalonia El Retiro",
          "time": "建议 08:30–09:30",
          "detail": "从市区酒店退房，先寄存行李。",
          "status": "",
          "query": "Hotel Catalonia El Retiro Avenida de la Ciudad de Barcelona 113 Madrid"
        },
        {
          "name": "丽池公园",
          "local": "Parque del Retiro",
          "time": "建议 09:30–10:15",
          "detail": "湖畔和主要林荫步道散步。",
          "status": "",
          "query": "Parque del Retiro Madrid"
        },
        {
          "name": "丽池玫瑰园",
          "local": "La Rosaleda del Retiro",
          "time": "建议 10:15–10:35",
          "detail": "可选：2 月非主要花期，快速经过即可，也可跳过。",
          "status": "可选",
          "query": "La Rosaleda del Retiro"
        },
        {
          "name": "阿尔卡拉门",
          "local": "Puerta de Alcalá",
          "time": "建议 10:35–11:30",
          "detail": "沿公园步行出入口拍照，路线可按现场出口调整。",
          "status": "",
          "query": "Puerta de Alcalá Madrid"
        },
        {
          "name": "前往普拉多博物馆",
          "local": "Museo Nacional del Prado",
          "time": "建议 11:30–12:00",
          "detail": "预留入口安检与预约检票时间。",
          "status": "",
          "query": "Museo Nacional del Prado Madrid"
        },
        {
          "name": "普拉多博物馆",
          "local": "Museo Nacional del Prado",
          "time": "建议 12:00–14:30",
          "detail": "馆内参观约 2–2.5 小时，建议提前买票。",
          "status": "",
          "query": "Museo Nacional del Prado Madrid"
        },
        {
          "name": "午餐、返回市区酒店取行李",
          "local": "Hotel Catalonia El Retiro",
          "time": "建议 14:30–15:30",
          "detail": "领取寄存行李后前往机场区域。",
          "status": "",
          "query": "Hotel Catalonia El Retiro Avenida de la Ciudad de Barcelona 113 Madrid"
        },
        {
          "name": "阿克索尔费里亚酒店",
          "local": "Axor Feria Hotel",
          "time": "建议 15:30–17:00 前往并入住",
          "detail": "从市中心乘出租车前往；机场酒店已预订。",
          "status": "",
          "query": "Axor Feria Hotel Calle de Campezo 4 Madrid"
        },
        {
          "name": "晚餐、整理行李、早点休息",
          "local": "Axor Feria Hotel",
          "time": "17:00 以后",
          "detail": "向酒店确认次日凌晨机场接送时刻、上车点、预约方式与航站楼。",
          "status": "",
          "query": ""
        }
      ],
      "transports": [
        {
          "kind": "local",
          "title": "市内交通与更换酒店",
          "text": "市内出租车、地铁及步行；市中心 → Axor Feria Hotel 建议乘出租车。",
          "status": ""
        },
        {
          "kind": "local",
          "title": "次日凌晨机场接送",
          "text": "订单含机场接送；具体凌晨班次、上车点和出发航站楼仍需向酒店预约核对，必要时改乘出租车。",
          "status": "待确认"
        }
      ],
      "note": "这天不再安排第二次日落或 Riu 夜景；Riu 已移至 2 月 13 日。约 17:00 抵达机场酒店后早点休息，为次日 06:15 返程航班准备。",
      "todos": [
        "普拉多博物馆门票：建议提前预约 12:00 入场，尚未提供已购票信息。",
        "机场酒店凌晨接送：确认具体发车时刻、上车点、预约要求与出发航站楼。"
      ],
      "tag": "当晚酒店已订",
      "transport": "市内交通与更换酒店：市内出租车、地铁及步行；市中心 → Axor Feria Hotel 建议乘出租车。；次日凌晨机场接送：订单含机场接送；具体凌晨班次、上车点和出发航站楼仍需向酒店预约核对，必要时改乘出租车。",
      "stay": "阿克索尔费里亚酒店｜Axor Feria Hotel（已预订）｜Calle de Campezo 4, 28022 Madrid, Spain",
      "status": "普拉多博物馆门票：建议提前预约 12:00 入场，尚未提供已购票信息。；机场酒店凌晨接送：确认具体发车时刻、上车点、预约要求与出发航站楼。"
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
  ],
  "madrid_update_source": "2027西葡旅行完整行程_马德里新版(1).pdf，第9–11页"
};
