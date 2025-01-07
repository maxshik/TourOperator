﻿use tours_shik

CREATE TABLE tours (
    id INT PRIMARY KEY,
    tour_name VARCHAR(255),
    stars INT,
    country VARCHAR(255),
    city VARCHAR(255),
    short_description TEXT,
    departure_date DATE,
    countless_nights INT,
    feeding VARCHAR(255),
    number_type VARCHAR(255),
    price money,
    description TEXT,
    safe BIT,
    internet BIT,
    hairdryer BIT,
    mini_kitchen BIT,
    shower BIT,
    air_conditioning BIT,
    balcony BIT,
    mini_bar BIT,
    telephone BIT,
    room_service BIT,
    medical_help BIT,
    bars INT,
    restaurants BIT,
    laundry BIT,
    swimming_pool BIT,
    children_pool BIT,
    children_playground BIT,
    sports_grounds BIT
);


INSERT INTO tours
(id, tour_name, stars, country, city, short_description, departure_date, countless_nights, feeding, number_type, price, description, 
safe, internet, hairdryer, mini_kitchen, shower, air_conditioning, balcony, mini_bar, telephone, room_service, medical_help, bars, restaurants, laundry, swimming_pool, children_pool, children_playground, sports_grounds)
VALUES
(1, 'Club Hotel Sera', 5, 'Турция', 'Анталия', 'Отличный instagram-отель на берегу моря', '2023-12-01', 10, 'FB', 'Studio room', 2000, 'Красивый отель с многолетней историей и комфортной территорией со всеми условиями. Для нас комфорт и хорошее настроение клиента превыше всего! Отличное расположение отеля и наличие всего необходимого на территории отеля позволяет забыть о долгих дорогах.', 
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1),
(2, 'Swissotel The Bosphorus Istanbul', 5, 'Турция', 'Стамбул', 'Роскошный отель с видом на Босфор и исторический центр города', '2023-12-01', 10, 'BB', 'Deluxe room', 3000, 'Отель Swissotel The Bosphorus Istanbul расположен в самом сердце Стамбула, с видом на пролив Босфор. Отель предлагает номера с ЖК-телевизорами и имеет спа-центр с крытым и открытым бассейнами. Отель находится в нескольких минутах ходьбы от достопримечательностей, таких как Голубая мечеть, Айя-София и Топкапы. Отель также имеет собственный сад, фитнес-центр и несколько ресторанов и баров, где можно насладиться изысканной кухней и напитками.', 
1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 3, 0, 1, 0, 1, 0, 1),
(3, 'The Marmara Taksim', 5, 'Турция', 'Стамбул', 'Современный отель в самом центре Стамбула, рядом с площадью Таксим', '2023-12-01', 10, 'HB', 'Standard room', 2500, 'Отель The Marmara Taksim возвышается над оживленной площадью Таксим в Стамбуле и предлагает роскошные номера с кабельным телевидением, бесплатным Wi-Fi и великолепным видом на Босфор и город. Отель имеет крытый бассейн, сауну, турецкую баню и фитнес-центр. Отель также находится в непосредственной близости от многих ресторанов, баров, магазинов и культурных достопримечательностей Стамбула.', 
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 0),
(4, 'Wyndham Grand İzmir Özdilek', 5, 'Турция', 'Измир', 'Пятизвездочный городской отель на берегу Измирского залива', '2023-12-01', 10, 'AI', 'Superior room', 2200, 'Отель Wyndham Grand İzmir Özdilek расположен на берегу Измирского залива и предлагает номера с видом на море, природу и город. Отель имеет крытый и открытый бассейны, спа-центр, фитнес-центр и несколько ресторанов и баров. Отель также находится в удобном месте для посещения делового и исторического центра Измира, а также близлежащих достопримечательностей, таких как древний город Эфес и дом Девы Марии.', 
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1),
(5, 'Hotel Ickale', 5, 'Турция', 'Анкара', 'Элегантный отель в центре Анкары с богатым выбором услуг', '2023-12-01', 10, 'FB', 'Deluxe room', 1800, 'Отель Hotel Ickale расположен в районе Мальтепе в Анкаре и имеет крытый бассейн, сауну, джакузи и хаммам. Отель предлагает номера с бесплатным Wi-Fi и современными удобствами. Отель также имеет ресторан, бар, конференц-залы и парковку. Отель находится в нескольких минутах езды от делового и культурного центра Анкары, а также от таких достопримечательностей, как мавзолей Ататюрка, музей Анатолийских цивилизаций и Красная площадь.', 
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0);
INSERT INTO tours (id, tour_name, stars, country, city, short_description, departure_date, countless_nights, feeding, number_type, price, description, safe, internet, hairdryer, mini_kitchen, shower, air_conditioning, balcony, mini_bar, telephone, room_service, medical_help, bars, restaurants, laundry, swimming_pool, children_pool, children_playground, sports_grounds)
VALUES 
(6, 'Albostan Park Hotel', 4, 'Египет', 'Шарм-эль-Шейх', 'Уютный отель с собственным пляжем и аквапарком', '2023-12-01', 10, 'AI', 'Standard room', 1500, 'Отель Albostan Park Hotel расположен в районе Набк-Бей, в 10 км от аэропорта Шарм-эль-Шейха. Отель предлагает номера с кондиционером, спутниковым телевидением и мини-баром. Отель имеет собственный песчаный пляж, аквапарк с 9 горками, 4 открытых бассейна, спа-центр, фитнес-центр и детский клуб. Отель также имеет 3 ресторана, 4 бара и дискотеку.', 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1),
(7, 'Pickalbatros Palace Resort', 5, 'Египет', 'Шарм-эль-Шейх', 'Роскошный курортный отель с видом на Красное море', '2023-12-01', 10, 'AI', 'Deluxe room', 2000, 'Отель Pickalbatros Palace Resort расположен на берегу Красного моря, в 7 км от центра Шарм-эль-Шейха. Отель предлагает номера с балконом или террасой, кондиционером, ЖК-телевизором и сейфом. Отель имеет приватный пляж, 4 открытых бассейна, 2 теннисных корта, спа-центр, фитнес-центр и анимационную команду. Отель также имеет 6 ресторанов, 5 баров и кальянную.', 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0),
(8, 'Cairo Marriott Hotel & Omar Khayyam Casino', 5, 'Египет', 'Каир', 'Исторический отель с казино и садом', '2023-12-01', 10, 'BB', 'Deluxe room', 2500, 'Отель Cairo Marriott Hotel & Omar Khayyam Casino расположен в историческом здании на острове Замалек, в 500 метрах от Каирского музея. Отель предлагает номера с балконом, видом на реку Нил или на сад, кондиционером и мини-баром. Отель имеет казино, открытый бассейн, фитнес-центр и 15 ресторанов и баров, где можно насладиться разнообразной кухней и напитками.', 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0),
(9, 'Hotel Ritz Paris', 5, 'Франция', 'Париж', 'Роскошный отель в центре Парижа', '2023-12-01', 7, 'BB', 'Executive room', 3500, 'Отель Ritz Paris расположен в центре Парижа, в нескольких шагах от площади Вандом и Оперы Гарнье. Отель предлагает роскошные номера с элегантным декором, мини-баром и сейфом. В отеле есть престижные рестораны, бары, спа-центр, фитнес-центр и бассейн. Отель также предлагает услуги прачечной, консьержа и бесплатный Wi-Fi.', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 1, 0),
(10, 'Hotel Plaza Athénée', 5, 'Франция', 'Париж', 'Изысканный отель на проспекте Монтень', '2023-12-01', 7, 'BB', 'Deluxe room', 4000, 'Отель Plaza Athénée расположен на проспекте Монтень в центре Парижа, в непосредственной близости от Эйфелевой башни. Отель предлагает роскошные номера с уникальным дизайном, кондиционером, мини-баром и сейфом. В отеле есть 5 ресторанов, бар, спа-центр, фитнес-центр и бассейн. Отель также предлагает услуги по прачечной, бесплатный Wi-Fi и трансфер в аэропорт.', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0);

INSERT INTO tours
(id, tour_name, stars, country, city, short_description, departure_date, countless_nights, feeding, number_type, price, description, 
safe, internet, hairdryer, mini_kitchen, shower, air_conditioning, balcony, mini_bar, telephone, room_service, medical_help, bars, restaurants, laundry, swimming_pool, children_pool, children_playground, sports_grounds)
VALUES
(11, 'Hotel Monterey Grasmere Osaka', 4, 'Япония', 'Осака', 'Стильный отель в центре Осаки с видом на город и залив', '2023-12-01', 10, 'BB', 'Standard room', 2500, 'Отель Hotel Monterey Grasmere Osaka расположен в районе Намба, в непосредственной близости от станции метро и железнодорожного вокзала. Отель предлагает номера с кондиционером, холодильником, телевизором и бесплатным Wi-Fi. Отель также имеет ресторан, бар, кафе, бизнес-центр и парковку. Отель находится в удобном месте для посещения таких достопримечательностей, как парк развлечений Universal Studios Japan, аквариум Osaka Kaiyukan и замок Осака.', 
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0),
(12, 'Park Hyatt Tokyo', 5, 'Япония', 'Токио', 'Роскошный отель в небоскребе с панорамным видом на Токио и гору Фудзи', '2023-12-01', 10, 'AI', 'Deluxe room', 5000, 'Отель Park Hyatt Tokyo занимает верхние этажи 52-этажного небоскреба в районе Синдзюку. Отель предлагает номера с высокими потолками, окнами от пола до потолка, кроватями с итальянским постельным бельем, ванной комнатой с глубокой ванной и душем, телевизором с плоским экраном, DVD-плеером и бесплатным Wi-Fi. Отель также имеет спа-центр, фитнес-центр, крытый бассейн, несколько ресторанов и баров, в том числе знаменитый бар New York Grill & Bar на 52-м этаже с впечатляющим видом на город. Отель находится в 15 минутах ходьбы от парка Ёёги и в 20 минутах езды от Императорского дворца.', 
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1),
(13, 'The Ritz-Carlton, Tokyo', 5, 'Япония', 'Токио', 'Изысканный отель в самом высоком здании Токио с непревзойденным сервисом', '2023-12-01', 10, 'FB', 'Club room', 6000, 'Отель The Ritz-Carlton, Tokyo занимает верхние этажи 53-этажного небоскреба Midtown Tower в районе Роппонги. Отель предлагает номера с великолепным видом на Токио и гору Фудзи, кроватями с фирменным постельным бельем, ванной комнатой с дождевым душем и ванной, телевизором с плоским экраном, DVD-плеером и бесплатным Wi-Fi. Отель также имеет спа-центр, фитнес-центр, крытый бассейн, несколько ресторанов и баров, в том числе ресторан Hinokizaka с традиционной японской кухней и бар The Lobby Lounge & Bar с живой музыкой. Отель находится в 5 минутах ходьбы от станции метро Роппонги и в 10 минутах езды от Императорского дворца.', 
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1);

INSERT INTO tours
(id, tour_name, stars, country, city, short_description, departure_date, countless_nights, feeding, number_type, price, description, 
safe, internet, hairdryer, mini_kitchen, shower, air_conditioning, balcony, mini_bar, telephone, room_service, medical_help, bars, restaurants, laundry, swimming_pool, children_pool, children_playground, sports_grounds)
VALUES
(14, 'Atlantis The Palm, Dubai', 5, 'ОАЭ', 'Дубай', 'Впечатляющий отель на острове Пальма Джумейра с собственным аквапарком и аквариумом', '2023-12-01', 10, 'AI', 'Ocean room', 4000, 'Отель Atlantis The Palm, Dubai расположен на искусственном острове Пальма Джумейра и предлагает номера с видом на Персидский залив или остров. Отель имеет собственный пляж, аквапарк Aquaventure с 30 горками и аттракционами, аквариум The Lost Chambers с более чем 65 тысячами морских животных, спа-центр, фитнес-центр и несколько ресторанов и баров, в том числе ресторан Nobu с японской кухней и бар Nasimi Beach с видом на небоскреб Бурдж-Халифа. Отель находится в 25 минутах езды от аэропорта Дубая и в 20 минутах езды от торгового центра Dubai Mall.', 
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1),
(15, 'Jumeirah Emirates Towers', 5, 'ОАЭ', 'Дубай', 'Современный отель в двух башнях с высококлассным обслуживанием и удобным расположением', '2023-12-01', 10, 'BB', 'Deluxe room', 3000, 'Отель Jumeirah Emirates Towers состоит из двух элегантных башен, соединенных между собой торговым центром Boulevard. Отель предлагает номера с кондиционером, телевизором с плоским экраном, мини-баром и бесплатным Wi-Fi. Отель также имеет открытый бассейн, спа-центр, фитнес-центр и несколько ресторанов и баров, в том числе ресторан Al Nafoorah с ливанской кухней и бар The Rib Room с стейками. Отель находится в 5 минутах ходьбы от станции метро Emirates Towers и в 10 минутах езды от торгового центра Dubai Mall и небоскреба Бурдж-Халифа.', 
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0),
(16, 'Rosewood Abu Dhabi', 5, 'ОАЭ', 'Абу-даби', 'Изысканный отель на острове Аль-Мария с видом на море и город', '2023-12-01', 10, 'BB', 'Deluxe room', 3500, 'Отель Rosewood Abu Dhabi расположен на острове Аль-Мария, в центре делового и культурного района Абу-даби. Отель предлагает номера с видом на Персидский залив или город, кроватями с постельным бельем из египетского хлопка, ванной комнатой с дождевым душем и ванной, телевизором с плоским экраном, iPod-доком и бесплатным Wi-Fi. Отель также имеет открытый бассейн, спа-центр, фитнес-центр и несколько ресторанов и баров, в том числе ресторан Zuma с японской кухней и бар Glo с коктейлями и музыкой. Отель находится в 5 минутах ходьбы от торгового центра The Galleria и в 15 минутах езды от Шейх-Зайед-мечети.', 
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0),
(17, 'Royal Rose Hotel', 5, 'ОАЭ', 'Абу-даби', 'Роскошный отель в стиле французского дворца с изящным декором и обстановкой', '2023-12-01', 10, 'HB', 'Standard room', 2000, 'Отель Royal Rose Hotel вдохновлен архитектурой французского дворца XVII века и предлагает номера с кондиционером, телевизором с плоским экраном, мини-баром и бесплатным Wi-Fi. Отель также имеет крытый бассейн, спа-центр, фитнес-центр и несколько ресторанов и баров, в том числе ресторан Brasserie Cafe с европейской кухней и бар Printania с арабскими закусками и напитками. Отель находится в 5 минутах ходьбы от торгового центра Abu Dhabi Mall и в 10 минутах езды от набережной Корниш и пляжа Аль-Батин.',
1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0);
