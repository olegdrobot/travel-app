import React, { Component } from 'react';

const countriesArr = [
  Austria: {
      name: {en:"Austria", ru:"Австрия",uk:"Австрія"},
      capital: {en:"Vienna", ru:"Вена", uk:"Відень"},
      image: require('../images/austria/vienna.jpg'),
      description: {
                  en:`Australia is a country in the Southern Hemisphere, located on the mainland of the same name, as well as the nearby islands of the Pacific and Indian Oceans. 
                      When describing Australia, people often talk about the uniqueness of a particular fact. 
                      Even the location of this country is unique — Australia is the only country in the world that occupies the territory of the entire continent. 
                      The largest island of Tasmania lies to the south of the continent. The official name of the country is the Union of Australia. 
                      The flora and fauna of Australia is so amazing that it will leave you with an unforgettable experience!
                      Australia's neighbors are New Zealand, East Timor, Papua New Guinea, Indonesia, Vanuatu, the Solomon Islands, and New Caledonia.`,
                  ru:`Австралия — государство в Южном полушарии, расположенное на одноимённом материке, а также близлежащих островах Тихого и Индийского океанов. 
                      При описании Австралии люди часто говорят об уникальности того или иного факта. 
                      Даже само расположение этой страны уникально — Австралия единственное в мире государство, занимающее территорию всего материка. 
                      Самый крупный остров Тасмания лежит к югу от континента. Официальное название страны — Австралийский союз. 
                      Животный мир и растительный мир Австралии настолько удивителен, что оставит у вас незабываемые впечатления!
                      Соседи Австралии — Новая Зеландия, Восточный Тимор, Папуа – Новая Гвинея, Индонезия, Вануату, Соломоновы острова и Новая Каледония.`,
                  uk:`Австралія-держава в Південній півкулі, розташоване на однойменному материку, а також прилеглих островах Тихого і Індійського океанів. 
                      При описі Австралії люди часто говорять про унікальність того чи іншого факту. 
                      Навіть саме розташування цієї країни унікально-Австралія єдина в світі держава, що займає територію всього материка. 
                      Найбільший острів Тасманія лежить на південь від континенту. Офіційна назва країни-Австралійський союз. 
                      Тваринний світ і рослинний світ Австралії настільки дивовижний, що залишить у вас незабутні враження!
                      Сусіди Австралії-Нова Зеландія, Східний Тимор, Папуа – Нова Гвінея, Індонезія, Вануату, Соломонові Острови і Нова Каледонія.`
      },
      video: "ссылка на видео",
      showplaces: [
              {
                name: {en:"St. Stephen-Cathedral", ru:"Собор Святого Стефана", uk:"Собор Святого Стефана"},
                src: require('../images/austria/St. Stephen-Cathedral.jpg')
              },
              {
                name: {en:"Alps", ru:"Альпы", uk:"Альпи"},
                src: require('../images/austria/alps.jpg')
              },
              {
                name: {en:"Hofburg Palace", ru:"Дворец Хофбург", uk:"Палац Хофбург "},
                src: require( '../images/austria/Hofburg Palace.jpg')
              },
              {
                name: {en:"Schoenbrunn Palace", ru:"Дворец Шенбрунн ", uk:"Палац Шенбрунн "},
                src: require('../images/austria/Schoenbrunn Palace.jpg')
              },
              {
                name: {en:"Belvedere Palace", ru:"Дворец Бельведер ", uk:"Палац Бельведер "},
                src: require('../images/austria/Belvedere Palace.jpg')
              },
              {
                name: {en:"Mozarts House", ru:"Дом Моцарта ", uk:"Будинок Моцарта "},
                src: require( '../images/austria/Mozarts House.jpg')
              }
      ]
  },

  Croatia: {
      name: {en:"Croatia", ru:"Хорватия",uk:"Хорватія"},
      capital: {en:"Zagreb", ru:"Загреб", uk:"Загреб"},
      image: require('../images/croatia/zagreb.jpg'),
      description: {
                en:`Croatia is one of the few countries, the "pearl of the Adriatic" 
                    in the center of Europe, which is still a bit of a mystery, and therefore of great interest to active and caring travelers. 
                    As a rule, Croatia is associated with the dazzling blue of the Adriatic, the scent of pine trees on the shore, cypresses soaring into the bright summer sky. 
                    But this country has also saved many other treasures for you.`,
                ru:`Хорватия — одна из немногих стран, «жемчужина Адриатики» в центре Европы, которая все еще представляет собой некоторую загадку, 
                    а значит, и большой интерес для активных и неравнодушных путешественников. Как правило, 
                    Хорватия ассоциируется с ослепительной голубизной Адриатики, ароматом сосен на берегу, кипарисами, взлетающими в яркое летнее небо. 
                    Но эта страна приберегла для вас еще и множество других своих сокровищ.`,
                uk:`Хорватія-одна з небагатьох країн, «перлина Адріатики» в центрі Європи, яка все ще являє собою деяку загадку, а значить, і великий інтерес для активних і небайдужих мандрівників. 
                    Як правило, Хорватія асоціюється зі сліпучою блакиттю Адріатики, ароматом сосен на березі, кипарисами, що злітають в яскраве літнє небо. 
                    Але ця країна приберегла для вас ще й безліч інших своїх скарбів.`
      },
      video: "https://youtu.be/mLLSD2aUAy0",
      showplaces: [
              {
                name: {en:"Diocletian's Palace (Split)", ru:"Дворец Диоклетиана (Сплит)", uk:"Палац Діоклетіана (Спліт)"},
                src: require('../images/croatia/split.jpg')
              },
              {
                name:{en:"Amphitheater (Pula)", ru:"Амфитеатр (Пула)", uk:"Амфітеатр (Пула)"},
                src: require('../images/croatia/coliseum.jpg')
              },
              {
                name:{en:"Locrum Island (Locrum)", ru:"Остров Локрум (Локрум)", uk:"Острів Локрум (Локрум)"},
                src: require('../images/croatia/island.jpg')
              },
              {
                name:{en:"Hvar Island", ru:"Остров Хвар", uk:"Острів Хвар"},
                src: require('../images/croatia/croatia.jpg')
              },
               {
                name:{en:"The city of Rovinj (Istria peninsula)", ru:"Город Ровинь (полуостров Истрия)", uk:"Місто Ровінь (півострів Істрія)"},
                src: require('../images/croatia/skyline.jpg')
              },
               {
                name:{en:"Prince's Palace (Dubrovnik)", ru:"Княжеский дворец (Дубровник)", uk:"Княжий палац (Дубровник)"},
                src: require('../images/croatia/dubrovnik.jpg')
              },
      ]
  },

  Czech: {
      name: {en:"Czech", ru:"Чехия",uk:"Чехія"},
      capital: {en:"Prague", ru:"Прага", uk:"Прага"},
      image: require('../images/czech/prague.jpg'),
      description: {
                en:`The Czech Republic is a country in Central-Eastern Europe. Despite its small size, the Czech Republic can without exaggeration be 
                    called one of the most original countries in Europe with a rich history and a lot of attractions. 
                    The mild and comfortable climate allows you to visit and organize tours to the Czech Republic at almost any time of the year.
                    The main tourist center of the Czech Republic is its capital, Prague. 
                    Five of its historical districts are included in the list of UNESCO World Heritage Sites, which actually makes 
                    Prague an open-air museum. Walking around Prague, you can enjoy a truly fabulous and even mystical atmosphere. 
                    But the Czech Republic is famous not only for the cultural and historical tourism in Prague, but also, for example, 
                    for its medical resort of Karlovy Vary, especially popular with Russian tourists, as well as other cities.`,
                ru:`Чехия - государство в Центрально-Восточной Европе. Не смотря на небольшие размеры, 
                    Чехию без преувеличения можно назвать одной из самых самобытных стран Европы с богатой историей и массой достопримечательностей. 
                    Мягкий и комфортный климат позволяет посещать и организовывать туры в Чехию практически в любое время года. 
                    Главный туристический центр Чехии - ее столица Прага. 
                    Пять ее исторических районов включены в число объектов Всемирного наследия ЮНЕСКО, что фактически делает Прагу музеем под открытым небом. 
                    Гуляя по Праге, вы можете насладиться по истине сказочной и даже мистической атмосферой. 
                    Но знаменита Чехия не только благодаря культурно-историческому туризму в Праге, но и, например, своим лечебным курортом Карловы Вары , 
                    особенно популярным у российских туристов, а также другими городами.`,
                uk:`Чехія-держава в Центрально-Східній Європі. Незважаючи на невеликі розміри, Чехію без перебільшення можна назвати однією з найбільш самобутніх країн Європи з багатою історією і масою пам'яток. 
                    М'який і комфортний клімат дозволяє відвідувати і організовувати Тури в Чехію практично в будь-який час року. 
                    Головний туристичний центр Чехії - її столиця Прага. 
                    П'ять її історичних районів включені в число об'єктів Всесвітньої спадщини ЮНЕСКО, що фактично робить Прагу музеєм під відкритим небом. 
                    уляючи по Празі, ви можете насолодитися по істині казковою і навіть містичною атмосферою. Але знаменита Чехія не тільки завдяки 
                    культурно-історичному туризму в Празі, але і , наприклад, своїм лікувальним курортом Карлові Вари, 
                    особливо популярним у російських туристів, а також іншими містами.`
      },
      video: "ссылка на видео",
      showplaces: [
              {
                name: {en:"Prague Castle (Prague)", ru:"Пражский град (г.Прага)", uk:"Празький град (м.Прага)"},
                src: require('../images/czech/Prague Castle.jpg')
              },
              {
                name:{en:"Charles Bridge (Prague)", ru:"Карлов мост (г.Прага)", uk:"Карлів міст (м.Прага)"},
                src: require('../images/czech/Charles Bridge.jpg')
              },
              {
                name:{en:"Wenceslas Square (Prague)", ru:"Вацлавская площадь (г.Прага)", uk:"Вацлавська площа (м.Прага)"},
                src: require('../images/czech/Wenceslas Square.jpg')
              },
              {
                name:{en:"Vitus Cathedral (Prague)", ru:"Собор Святого Вита (г.Прага)", uk:"Собор Святого Віта (м.Прага)"},
                src: require('../images/czech/St. Vitus Cathedral.jpg')
              },
              {
                name:{en:"Dancing Building (Prague)", ru:"Танцующее здание (г.Прага)", uk:"Танцююча Будівля (м.Прага)"},
                src: require('../images/czech/Dancing Building.jpg')
              },
              {
                name:{en:"Lednice Castle (50 km from Brno)", ru:"Замок Леднице (50 км от г. Брно)", uk:"Замок Ледніце (50 км від м.Брно)"},
                src: require('../images/czech/Chateau Lednice.jpg')
              },
      ]
  },
  France: {
      name: {en:"France", ru:"Франция",uk:"Франція"},
      capital: {en:"Paris", ru:"Париж", uk:"Париж"},
      image: require('../images/france/paris.jpg'),
      description: {
                en:`France is an exquisite and piquant country that never ceases to amaze and delight. 
                    Anyone who has ever visited France, felt its unique spirit and aroma, got acquainted with its culture and history, 
                    plunged into the carefree French way of life, tried the delights of local cuisine melting on the tongue, 
                    will strive to come here again and again, each time discovering something new.
                    People come here to get in touch with perfection, because the French were able to raise the reputation of everything French to unattainable heights — fashion, cooking, lifestyle, culture and refined entertainment.`,
                ru:`Франция — изысканная и пикантная страна, не перестающая удивлять и восхищать. 
                    Кто хоть однажды побывал во Франции, почувствовал её неповторимый дух и аромат, 
                    познакомился с её культурой и историей, окунулся в беспечный французский образ жизни, попробовал тающие на языке 
                    изыски местной кулинарии, тот будет стремиться сюда вновь и вновь, каждый раз открывая для себя что-то новое.
                    Сюда приезжают, чтобы соприкоснуться с совершенством, ведь французы смогли до недостижимых высот поднять репутацию всего французского — моды, кулинарии, образа жизни, культуры и изысканных развлечений.`,
                uk:`Франція-вишукана і пікантна країна, яка не перестає дивувати і захоплювати. Хто хоч одного разу побував у Франції, 
                    відчув її неповторний дух і аромат, познайомився з її культурою та історією, занурився в безтурботний французький спосіб життя, спробував тануть на мові вишукування місцевої кулінарії, 
                    той буде прагнути сюди знову і знову, кожен раз відкриваючи для себе щось нове. 
                    Сюди приїжджають, щоб стикнутися з досконалістю, адже французи змогли до недосяжних висот підняти репутацію всього французького — моди, кулінарії, способу життя, культури і вишуканих розваг.`
      },
      video: "ссылка на видео",
      showplaces: [
              {
                name: {en:"Eiffel Tower (Paris)", ru:"Эйфелева башня (г.Париж)", uk:"Ейфелева вежа (м.Париж)"},
                src: require('../images/france/Eiffel Tower.jpg')
              },
              {
                name:{en:"The Louvre (Paris)", ru:"Лувр (г.Париж)", uk:"Лувр (м.Париж)"},
                src: require('../images/france/Louvre Museum.jpg')
              },
              {
                name:{en:"The Palace of Versailles (Paris)", ru:"Версальский дворец (г.Париж)", uk:"Версальський палац (м.Париж)"},
                src: require('../images/france/Palace of Versailles.jpg')
              },
              {
                name:{en:"Fontainebleau Palace (50 km from Paris)", ru:"Дворец Фонтенбло (50 км от г.Париж)", uk:"Палац Фонтенбло (50 км від м.Париж)"},
                src: require('../images/france/Fontainebleau Palace.jpg')
              },
              {
                name:{en:"Old town of Carcassonne (Languedoc — Roussillon region)", ru:"Старый город Каркассон (региона Лангедок — Руссильон)", uk:"Старе місто Каркассон (регіону Лангедок-Руссільйон)"},
                src: require('../images/france/Old Town of Carcassonne.jpg')
              },
              {
                name:{en:"Chamonix Mont Blanc (Alps, Mont Blanc)", ru:"Шамони Монблан (Альпы, гора Монблан)", uk:"Шамоні Монблан (Альпи, гора Монблан)"},
                src: require('../images/france/Chamonix Mont Blanc.jpg')
              },
      ]
  },
  Germany: {
      name: {en:"Germany", ru:"Германия",uk:"Німеччина"},
      capital: {en:"Berlin", ru:"Берлин", uk:"Берлін"},
      image: require('../images/germany/berlin.jpg'),
      description: {
                en:`Germany is an amazing country with a thousand-year history and centuries-old traditions, in the annals of which victories and defeats, periods of prosperity and truly tragic pages are written. 
                    Located in Western Europe, it occupies a relatively small area of 357,021 km2, which corresponds to the 62nd place in the world. 
                    In terms of population – 81,197,537 people as of January 1, 2015 – Germany is on the second line of the rating among the countries of 
                    the Old World and is second only to Russia in this indicator.`,
                ru:`Германия – удивительная страна с тысячелетней историей и вековыми традициями, в летопись которой вписаны победы и поражения, периоды расцвета и поистине трагические страницы. 
                    Расположенная в Западной Европе, она занимает относительно небольшую территорию в 357 021 км², что соответствует 62 месту в мире. 
                    По численности же населения – 81 197 537 человек по состоянию на 1 января 2015 года – Германия находится на второй строчке рейтинга 
                    среди стран Старого Света и уступает по этому показателю только России.`,
                uk:`Німеччина-дивовижна країна з тисячолітньою історією і віковими традиціями, в літопис якої вписані перемоги і поразки, періоди розквіту і воістину трагічні сторінки. Розташована в Західній Європі, 
                    вона займає відносно невелику територію в 357 021 км2, що відповідає 62 місцю в світі. 
                    За чисельністю ж населення-81 197 537 осіб станом на 1 січня 2015 року – Німеччина знаходиться на другій сходинці рейтингу серед країн 
                    Старого Світу і поступається за цим показником тільки Росії.`
      },
      video: "ссылка на видео",
      showplaces: [
              {
                name: {en:"Cologne Cathedral (Cologne)", ru:"Кёльнский собор (г.Кёльн)", uk:"Кельнський собор (м.Кельн)"},
                src: require('../images/germany/Cologne Cathedral.jpg')
              },
              {
                name:{en:"Neuschwanstein Castle (Bavarian Alps)", ru:"Замок Нойшванштайн (Баварские Альпы)", uk:"Замок Нойшванштайн (Баварські Альпи)"},
                src: require('../images/germany/Neuschwanstein Castle.jpg')
              },
              {
                name:{en:"Brandenburzki gate (Berlin)", ru:"Бранденбургские ворота (г.Берлин)", uk:"Бранденбурзькі ворота (м.Берлін)"},
                src: require('../images/germany/Brandenburg Gate.jpg')
              },
              {
                name:{en:"Museum Island of Berlin (Berlin)", ru:"Музейный остров Берлина (г.Берлин)", uk:"Музейний острів Берліна (м.Берлін)"},
                src: require('../images/germany/Berlin Museum Island.jpg')
              },
              {
                name:{en:"Rügen Island (north coast of Germany)", ru:"Остров Рюген (северное побережье Германии)", uk:"Острів Рюген (північне узбережжя Німеччини)"},
                src: require('../images/germany/Rügen Island.jpg')
              },
              {
                name:{en:"Reichstag (Berlin)", ru:"Рейхстаг (г. Берлин)", uk:"Рейхстаг (м.Берлін)"},
                src: require('../images/germany/Reichstag.jpg')
              },
      ]
  },
  Italy: {
      name: {en:"Italy", ru:"Италия",uk:"Італія"},
      capital: {en:"Rome", ru:"Рим", uk:"Рим"},
      image: require('../images/italy/rome-1.jpg'),
      description: {
                en:`Italy is an amazing country where history and modernity, different eras and rich cultural heritage, traditions and identity are intertwined. 
                    The ancient monuments of Rome, the charming romance of Venice, the hilly panorama of Tuscany, the southern slopes of the Alps, the wonderful nature, 
                    the sun, the sea, the air-all this is Italy! Having a unique geographical location in the central part of the Mediterranean, 
                    it became the cradle of European civilization. 
                    Here, in the Apennines, the ancient Roman Empire was born, which gave the world famous scientists, talented artists and the largest number of attractions 
                    that made up the golden fund of the UNESCO World Heritage Site.`,
                ru:`Италия – удивительная страна, в которой переплелись история и современность, различные эпохи и богатое культурное наследие, традиции и самобытность. 
                    Памятники старины времен Рима, очаровывающая романтика Венеции, холмистая панорама Тосканы, 
                    южные склоны Альп, чудесная природа, солнце, море, воздух – всё это Италия! 
                    Имеющая уникальное географическое расположение в центральной части Средиземноморья, она стала колыбелью европейской цивилизации. 
                    Здесь, на Апеннинах, зародилась древняя Римская империя, давшая миру знаменитых ученых, талантливых художников и самое большое число достопримечательностей, 
                    составивших золотой фонд Всемирного наследия ЮНЕСКО.`,
                uk:`Італія-дивовижна країна, в якій переплелися історія і сучасність, різні епохи і багата культурна спадщина, традиції і самобутність. 
                    Пам'ятники старовини часів Риму, зачаровує романтика Венеції, горбиста панорама Тоскани, південні схили Альп, чудова природа, сонце, море, 
                    повітря – все це Італія! Має унікальне географічне розташування в центральній частині Середземномор'я, вона стала колискою європейської цивілізації. 
                    Тут, на Апеннінах, зародилася стародавня Римська імперія, що дала світу знаменитих вчених, талановитих художників і найбільше число пам'яток, 
                    що склали золотий фонд Всесвітньої спадщини ЮНЕСКО.`
      },
      video: "ссылка на видео",
      showplaces: [
              {
                name: {en:"Vatican City (Rome)", ru:"Ватикан (г.Рим)", uk:"Ватикан (м.Рим)"},
                src: require('../images/italy/Rome.jpg')
              },
              {
                name:{en:"The Pantheon (Rome)", ru:"Пантеон (г.Рим)", uk:"Пантеон (м.Рим)"},
                src: require('../images/italy/Pantheon.jpg')
              },
              {
                name:{en:"Colosseum (Rome)", ru:"Колизей (г.Рим)", uk:"Колізей (м.Рим)"},
                src: require('../images/italy/Colosseum.jpg')
              },
              {
                name:{en:"Uffizi Gallery (Florence)", ru:"Галерея Уффици (г.Флоренция)", uk:"Галерея Уффіці (м.Флоренція)"},
                src: require('../images/italy/Florence.jpg')
              },
              {
                name:{en:"Grand Canal (Venice)", ru:"Гранд Канал (г.Венеция)", uk:"Гранд Канал (м.Венеція)"},
                src: require('../images/italy/Grand-canal.jpg')
              },
              {
                name:{en:"Milan Cathedral (Milan)", ru:"Миланский собор (г.Милан)", uk:"Міланський собор (м.Мілан)"},
                src: require('../images/italy/Italy.jpg')
              },
      ]
  },
  Poland: {
      name: {en:"Poland", ru:"Польша",uk:"Польща"},
      capital: {en:"Warsaw", ru:"Варшава", uk:"Варшава"},
      image: require('../images/poland/warsaw.jpg'),
      description: {
                en:`Poland is located in Central Europe, surrounded by countries such as Russia, Belarus, Germany, Ukraine, Lithuania, the Czech Republic and Slovakia. 
                    In the north, the Baltic Sea approaches Poland, and in the south, its territories rest on the relief ridges of the Carpathians and Sudetenland. 
                    The rich past, a reminder of which are masterpieces of medieval architecture, luxurious nature and a lot of opportunities for various types of recreation from beach idleness to sightseeing marathons – all these 
                    "travel options" are available to any guest who has set foot on Polish lands. In addition, a trip here can be considered as a budget equivalent of traveling to more "expensive" European countries. 
                    And although Polish castles and churches are slightly inferior in splendor to the architectural sights of Germany and the Czech Republic, 
                    in terms of atmosphere and cultural value, they will easily give them a head start.`,
                ru:`Польша расположилась в Центральной Европе, в окружении таких стран, как Россия, Беларусь, Германия, Украина, Литва, Чехия и Словакия. 
                    На севере к Польше подступает Балтийское море, а на юге ее территории упираются в рельефные хребты Карпат и Судет. 
                    Богатейшее прошлое, напоминанием о котором служат шедевры средневекового зодчества, роскошная природа и масса возможностей для разнообразных видов отдыха от пляжного 
                    ничегонеделания до экскурсионных марафонов – все эти «тревел-опции» доступны любому гостю, ступившему на польские земли. Кроме того, поездку сюда можно рассматривать 
                    как бюджетный аналог путешествий по более «дорогим» европейским странам. 
                    И хотя польские замки и костелы слегка уступают в великолепии архитектурным достопримечательностям Германии и Чехии, в плане атмосферности и культурной ценности они легко дадут им фору.`,
                uk:`Польща розташувалася в Центральній Європі, в оточенні таких країн, як Росія, Білорусь, Німеччина, Україна, Литва, Чехія і Словаччина. 
                    На півночі до Польщі підступає Балтійське море, а на півдні її території впираються в рельєфні хребти Карпат і Судет. 
                    Найбагатше минуле, нагадуванням про яке служать шедеври середньовічного зодчества, розкішна природа і маса можливостей для різноманітних видів відпочинку від пляжного байдикування до 
                    екскурсійних марафонів – всі ці «тревел-опції» доступні будь-якому гостю, що ступив на польські землі. 
                    Крім того, поїздку сюди можна розглядати як бюджетний аналог подорожей по більш «дорогим» європейським країнам. І хоча польські замки і костели злегка поступаються в пишності архітектурним пам'яткам Німеччини та Чехії, 
                    в плані атмосферності і культурної цінності вони легко дадуть їм фору.`
      },
      video: "ссылка на видео",
      showplaces: [
              {
                name: {en:"Warsaw's Old Town", ru:"Старый город Варшавы", uk:"Старе місто Варшави"},
                src: require('../images/poland/Wroclaw Cathedral.jpg')
              },
              {
                name:{en:"Marienburg Castle", ru:"Замок Мариенбург", uk:"Замок Марієнбург"},
                src: require('../images/poland/Marienburg Castle.jpg')
              },
              {
                name:{en:"Old Town of Krakow", ru:"Старый город Кракова", uk:"Старе місто Кракова"},
                src: require('../images/poland/Cracow Old Town.jpg')
              },
              {
                name:{en:"Wawel Castle", ru:"Вавельский замок", uk:"Вавельський замок"},
                src: require('../images/poland/Wawel Castle.jpg')
              },
              {
                name:{en:"Old Town in Gdansk", ru:"Старый город в Гданьске", uk:"Старе місто в Гданську"},
                src: require('../images/poland/Old Town in Gdansk.jpg')
              },
              {
                name:{en:"Vilyanuva Palace", ru:"Вилянувский дворец", uk:"Вілянівський палац"},
                src: require('../images/poland/Vilyanuva Palace.jpg')
              },
      ]
  },
  Slovakia: {
      name: {en:"Slovakia", ru:"Словакия",uk:"Словаччина"},
      capital: {en:"Bratislava", ru:"Братислава", uk:"Братислава"},
      image: require('../images/slovakia/bratislava.jpg'),
      description: {
                en:`Slovakia is located in Central Europe, within the Western Carpathians. 
                    It has an area of 49,034 km2 and a population of 5,443,120 (2017). 
                    Slovakia's border neighbors are the Czech Republic, Poland, Ukraine, Hungary and Austria. The capital of the country is Bratislava. 
                    Slovakia was formed as an independent state on January 1, 1993 after the collapse of Czechoslovakia. 
                    Slovaks make up about 85% of the country's population. 
                    The largest national minority is the Hungarians, who live mainly in the south of the country, along the Hungarian border. 
                    The official language is Slovak, and the majority of the religious population is Catholic.`,
                ru:`Словакия находится в Центральной Европе, в пределах Западных Карпат. 
                    Ее площадь составляет 49 034 км², население – 5 443 120 человек (2017 г.). 
                    Приграничными соседями Словакии являются Чехия, Польша, Украина, Венгрия и Австрия. 
                    Столица страны — Братислава. Словакия образовалась как независимое государство 1 января 1993 года после распада Чехословакии. 
                    Словаки составляют около 85% населения страны. Крупнейшее национальное меньшинство — венгры, живущие преимущественно на юге страны, вдоль венгерской границы. 
                    Государственным языком является словацкий, большинство верующего населения — католики.`,
                uk:`Словаччина знаходиться в Центральній Європі, в межах Західних Карпат. 
                    Її площа становить 49 034 км2, населення – 5 443 120 осіб (2017 р.). 
                    Прикордонними сусідами Словаччини є Чехія, Польща, Україна, Угорщина та Австрія. 
                    Столиця країни-Братислава. Словаччина утворилася як незалежна держава 1 січня 1993 року після розпаду Чехословаччини. 
                    Словаки становлять близько 85% населення країни. Найбільша національна меншина-угорці, що живуть переважно на півдні країни, вздовж угорського кордону. 
                    Державною мовою є Словацька, більшість віруючого населення-католики.`
      },
      video: "ссылка на видео",
      showplaces: [
              {
                name: {en:"Old Town of Bratislava", ru:"Старый город Братиславы", uk:"Старе місто Братислави"},
                src: require('../images/slovakia/Old-town.jpg')
              },
              {
                name:{en:"Spishsky Grad", ru:"Спишский Град", uk:"Спішський Град"},
                src: require('../images/slovakia/Spishsky Grad.jpg')
              },
              {
                name:{en:"Trenciansky Grad", ru:"Тренчьянский Град", uk:"Тренчьянский Град"},
                src: require('../images/slovakia/Trenciansky Grad.jpg')
              },
              {
                name:{en:"The UFO observation deck in Bratislava", ru:"Смотровая площадка НЛО в Братиславе", uk:"Оглядовий майданчик НЛО в Братиславі"},
                src: require('../images/slovakia/UFO observation deck in Bratislava.jpg')
              },
              {
                name:{en:"Main Square of Bratislava", ru:"Главная площадь Братиславы", uk:"Головна площа Братислави"},
                src: require('../images/slovakia/Main Square of Bratislava.jpg')
              },
              {
                name:{en:"The City of Bardeyev", ru:"Город Бардеёв", uk:"Місто Бардеїв"},
                src: require('../images/slovakia/City of Bardeyev.jpg')
              },
      ]
  },
  Spain: {
      name: {en:"Spain", ru:"Испания",uk:"Іспанія"},
      capital: {en:"Madrid", ru:"Мадрид", uk:"Мадрид"},
      image: require('../images/spain/madrid.jpg'),
      description: {
                en:`Испания — красочная, жизнерадостная, солнечная страна, расположенная на юго-западе Европы. 
                    Она занимает примерно 85% территории Пиренейского полуострова, а также Балеарские и Питиузские острова в Средиземном море и Канарские острова в Атлантическом океане. 
                    В Испании находится множество городов, история которых насчитывает не одно тысячелетие, произведений архитектурного искусства и чистейших пляжей, что привлекает сюда, 
                    на эту благодатную землю путешественников из разных уголков мира. 
                    Высоты Пиренеев, Сьерра-Морена и Андалусских гор не оставляют равнодушными любителей активного отдыха: горнолыжные курорты с оборудованными трассами и великолепными пейзажами 
                    каждый год принимают сотни и тысячи отдыхающих. Страну фламенко и корриды, как ее еще называют, ежегодно посещает в среднем 30 млн туристов. 
                    Настоящим раем для пляжного отдыха можно назвать Канарские и Балеарские острова.`,
                ru:`Испания — красочная, жизнерадостная, солнечная страна, расположенная на юго-западе Европы. 
                    Она занимает примерно 85% территории Пиренейского полуострова, а также Балеарские и Питиузские острова в Средиземном море и Канарские острова в Атлантическом океане. 
                    В Испании находится множество городов, история которых насчитывает не одно тысячелетие, произведений архитектурного искусства и чистейших пляжей, 
                    что привлекает сюда, на эту благодатную землю путешественников из разных уголков мира. Высоты Пиренеев, Сьерра-Морена и Андалусских гор не оставляют равнодушными любителей 
                    активного отдыха: горнолыжные курорты с оборудованными трассами и великолепными пейзажами каждый год принимают сотни и тысячи отдыхающих. 
                    Страну фламенко и корриды, как ее еще называют, ежегодно посещает в среднем 30 млн туристов. Настоящим раем для пляжного отдыха можно назвать Канарские и Балеарские острова.`,
                uk:`Іспанія-барвиста, життєрадісна, сонячна країна, розташована на південному заході Європи. 
                    Вона займає приблизно 85% території Піренейського півострова, а також Балеарські і Пітіузькі острови в Середземному морі і Канарські острови в Атлантичному океані. 
                    В Іспанії знаходиться безліч міст, історія яких налічує не одне тисячоліття, творів архітектурного мистецтва і найчистіших пляжів, що приваблює сюди, 
                    на цю благодатну землю мандрівників з різних куточків світу. Висоти Піренеїв, Сьєрра-Морена і Андалуських гір не залишають байдужими любителів активного відпочинку: 
                    гірськолижні курорти з обладнаними трасами і чудовими пейзажами щороку приймають сотні і тисячі відпочиваючих. 
                    Країну фламенко і кориди, як її ще називають, щорічно відвідує в середньому 30 млн туристів. 
                    Справжнім раєм для пляжного відпочинку можна назвати Канарські і Балеарські острови.`
      },
      video: "ссылка на видео",
      showplaces: [
              {
                name: {en:"Sagrada Familia (Barcelona)", ru:"Храм Святого Семейства (Барселона)", uk:"Храм Святого Сімейства (Барселона)"},
                src: require('../images/spain/Sagrada Familia Church.jpg')
              },
              {
                name:{en:"Park Guell (Barcelona)", ru:"Парк Гуэля (Барселона)", uk:"Парк Гуеля (Барселона)"},
                src: require('../images/spain/Guell Park.jpg')
              },
              {
                name:{en:"Colomares Castle (Benalmadena)", ru:"Замок Коломарес (Бенальмадена)", uk:"Замок Коломарес (Бенальмадена)"},
                src: require('../images/spain/Colomares Castle.jpg')
              },
              {
                name:{en:"Alcazar of the Christian Kings (Cordoba)", ru:"Алькасар Христианских королей (Кордова)", uk:"Алькасар християнських королів (Кордова)"},
                src: require('../images/spain/Alcazar of the Christian Kings.jpg')
              },
              {
                name:{en:"Old Town of Cuenca (Cuenca)", ru:"Старый город Куэнка (Куэнка)", uk:"Старе місто Куенка (Куенка)"},
                src: require('../images/spain/Cuenca Old Town.jpg')
              },
              {
                name:{en:"Ibiza (Spain)", ru:"Ибица (Испания)", uk:"Ібіца (Іспанія)"},
                src: require('../images/spain/Ibiza.jpg')
              },
      ]
  },


];

export default countriesArr;