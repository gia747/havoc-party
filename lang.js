// Havoc Party site i18n — mirrors the game's 12-language list.
// Any element with data-i18n="key" gets translated; data-i18n-attr
// can map attributes too. Selection persists in localStorage.
(function () {
  const LANGS = [
    {id: 'en', flag: '🇬🇧', label: 'English'},
    {id: 'ar', flag: '🇸🇦', label: 'العربية', rtl: true},
    {id: 'fr', flag: '🇫🇷', label: 'Français'},
    {id: 'de', flag: '🇩🇪', label: 'Deutsch'},
    {id: 'nl', flag: '🇳🇱', label: 'Nederlands'},
    {id: 'ru', flag: '🇷🇺', label: 'Русский'},
    {id: 'zh', flag: '🇨🇳', label: '中文'},
    {id: 'ja', flag: '🇯🇵', label: '日本語'},
    {id: 'ko', flag: '🇰🇷', label: '한국어'},
    {id: 'ms', flag: '🇲🇾', label: 'Bahasa Melayu'},
    {id: 'id', flag: '🇮🇩', label: 'Bahasa Indonesia'},
    {id: 'vi', flag: '🇻🇳', label: 'Tiếng Việt'},
  ];

  const T = {
    en: {
      nav_home: 'Home', nav_terms: 'Terms', nav_privacy: 'Privacy', nav_disclaimer: 'Disclaimer',
      hero_h2: 'Chaos you can laugh at.<br />Physics you can blame.',
      hero_p: 'A physics-driven party brawler from <strong>SheGoz Technologies</strong>. Grab your friends, pick a fighter, and survive 12 hazard-packed arenas — races, brawls, ball stadiums and worse.',
      f1h: '12 Arenas', f1p: 'Sky cranes, clock rotors, shark reefs, volcanos, fan factories — each with hazards that can end your run in one bad step.',
      f2h: 'Real Multiplayer', f2p: 'Public and private rooms, host-authoritative settings, bots that fill seats until friends arrive.',
      f3h: 'Party Physics', f3p: 'Punch, grab, carry and throw rivals off the stage. Flailing ragdolls guaranteed.',
      rights: 'All rights reserved.', madeby: 'is a product of SheGoz Technologies. Player verification is provided by Cloudflare Turnstile.',
      doc_note: 'This document is provided in English; translations may follow.',
    },
    ar: {
      nav_home: 'الرئيسية', nav_terms: 'الشروط', nav_privacy: 'الخصوصية', nav_disclaimer: 'إخلاء المسؤولية',
      hero_h2: 'فوضى تضحك منها.<br />وفيزياء تلقي اللوم عليها.',
      hero_p: 'لعبة قتال جماعية بفيزياء حركة من <strong>SheGoz Technologies</strong>. اجمع أصدقاءك، اختر مقاتلك، وانجُ في 12 ساحة مليئة بالمخاطر — سباقات ومعارك وملاعب كرة وما هو أسوأ.',
      f1h: '12 ساحة', f1p: 'رافعات سماء ودوّارات ساعة وشعاب أسماك قرش وبراكين ومصانع مراوح — كل واحدة بمخاطر تنهي جولتك بخطوة خاطئة.',
      f2h: 'لعب جماعي حقيقي', f2p: 'غرف عامة وخاصة، إعدادات يفرضها المضيف، وبوتات تملأ المقاعد حتى يصل الأصدقاء.',
      f3h: 'فيزياء الحفلات', f3p: 'لكم وامسك واحمل وارمِ المنافسين خارج المنصة. رقصات راجدول مضحكة مضمونة.',
      rights: 'جميع الحقوق محفوظة.', madeby: 'منتج من SheGoz Technologies. التحقق من اللاعبين مقدم عبر Cloudflare Turnstile.',
      doc_note: 'هذه الوثيقة مقدمة بالإنجليزية وقد تتبعها ترجمات.',
    },
    fr: {
      nav_home: 'Accueil', nav_terms: 'Conditions', nav_privacy: 'Confidentialité', nav_disclaimer: 'Avertissement',
      hero_h2: 'Un chaos hilarant.<br />Une physique coupable.',
      hero_p: 'Un party-brawler physique de <strong>SheGoz Technologies</strong>. Rassemblez vos amis, choisissez un combattant et survivez à 12 arènes pleines de pièges.',
      f1h: '12 arènes', f1p: 'Grues, rotors d\'horloge, récifs à requins, volcans, usines de ventilateurs — chaque danger peut finir votre partie.',
      f2h: 'Vrai multijoueur', f2p: 'Salons publics et privés, réglages imposés par l\'hôte, bots qui remplissent en attendant vos amis.',
      f3h: 'Physique festive', f3p: 'Frappez, attrapez, portez et jetez vos rivaux hors de la scène. Ragdolls hilarants garantis.',
      rights: 'Tous droits réservés.', madeby: 'est un produit de SheGoz Technologies. La vérification des joueurs est assurée par Cloudflare Turnstile.',
      doc_note: 'Ce document est fourni en anglais ; des traductions pourront suivre.',
    },
    de: {
      nav_home: 'Start', nav_terms: 'AGB', nav_privacy: 'Datenschutz', nav_disclaimer: 'Hinweis',
      hero_h2: 'Chaos zum Lachen.<br />Physik zum Schuldgeben.',
      hero_p: 'Ein physikgetriebener Party-Brawler von <strong>SheGoz Technologies</strong>. Schnapp dir deine Freunde, wähle einen Kämpfer und überlebe 12 Arenen voller Gefahren.',
      f1h: '12 Arenen', f1p: 'Baukräne, Uhrrotoren, Haifischriffe, Vulkane, Ventilatorfabriken — jede Gefahr kann deinen Lauf beenden.',
      f2h: 'Echter Multiplayer', f2p: 'Öffentliche und private Räume, Host-Einstellungen für alle, Bots füllen Plätze bis Freunde kommen.',
      f3h: 'Party-Physik', f3p: 'Schlagen, greifen, tragen und Rivalen von der Bühne werfen. Wackelnde Ragdolls garantiert.',
      rights: 'Alle Rechte vorbehalten.', madeby: 'ist ein Produkt von SheGoz Technologies. Spielerverifizierung durch Cloudflare Turnstile.',
      doc_note: 'Dieses Dokument liegt auf Englisch vor; Übersetzungen folgen ggf.',
    },
    nl: {
      nav_home: 'Home', nav_terms: 'Voorwaarden', nav_privacy: 'Privacy', nav_disclaimer: 'Disclaimer',
      hero_h2: 'Chaos om om te lachen.<br />Fysica om de schuld te geven.',
      hero_p: 'Een physics-gedreven party-brawler van <strong>SheGoz Technologies</strong>. Verzamel je vrienden, kies een vechter en overleef 12 arena\'s vol gevaren.',
      f1h: '12 arena\'s', f1p: 'Hijskranen, klokrotoren, haaienriffen, vulkanen, ventilatorfabrieken — elk gevaar kan je run eindigen.',
      f2h: 'Echte multiplayer', f2p: 'Openbare en privéruimtes, instellingen van de host gelden, bots vullen plekken tot vrienden komen.',
      f3h: 'Party-fysica', f3p: 'Slaan, grijpen, dragen en rivalen van het podium gooien. Failbare ragdolls gegarandeerd.',
      rights: 'Alle rechten voorbehouden.', madeby: 'is een product van SheGoz Technologies. Spelersverificatie via Cloudflare Turnstile.',
      doc_note: 'Dit document is in het Engels; vertalingen volgen mogelijk.',
    },
    ru: {
      nav_home: 'Главная', nav_terms: 'Условия', nav_privacy: 'Конфиденциальность', nav_disclaimer: 'Отказ от ответственности',
      hero_h2: 'Хаос, над которым смеёшься.<br />Физика, которую винишь.',
      hero_p: 'Физический party-бrawler от <strong>SheGoz Technologies</strong>. Собирай друзей, выбирай бойца и выживи в 12 аренах, полных опасностей.',
      f1h: '12 арен', f1p: 'Небесные краны, часовые роторы, акульи рифы, вулканы, фабрики вентиляторов — любая опасность может закончить забег.',
      f2h: 'Настоящий мультиплеер', f2p: 'Публичные и приватные комнаты, настройки хозяина для всех, боты занимают места до прихода друзей.',
      f3h: 'Праздничная физика', f3p: 'Бей, хватай, неси и бросай соперников со сцены. Кукольные полёты гарантированы.',
      rights: 'Все права защищены.', madeby: 'является продуктом SheGoz Technologies. Проверка игроков — Cloudflare Turnstile.',
      doc_note: 'Документ представлен на английском; переводы могут появиться позже.',
    },
    zh: {
      nav_home: '首页', nav_terms: '条款', nav_privacy: '隐私', nav_disclaimer: '免责声明',
      hero_h2: '让你笑出声的混乱。<br />让你甩锅的物理引擎。',
      hero_p: '<strong>SheGoz Technologies</strong> 出品的物理派对乱斗游戏。叫上好友，选择战士，在12个危机四伏的竞技场中生存下来。',
      f1h: '12个竞技场', f1p: '空中吊机、钟表转子、鲨鱼礁、火山、风扇工厂——每个危险都可能终结你的比赛。',
      f2h: '真人在线对战', f2p: '公开和私密房间，房主设定对所有人生效，机器人占位直到朋友加入。',
      f3h: '派对物理', f3p: '拳打、抓住、扛起并把对手扔下舞台。保证有搞笑的布娃娃摔飞。',
      rights: '版权所有。', madeby: '是 SheGoz Technologies 的产品。玩家验证由 Cloudflare Turnstile 提供。',
      doc_note: '本文件以英文提供，译文可能稍后推出。',
    },
    ja: {
      nav_home: 'ホーム', nav_terms: '利用規約', nav_privacy: 'プライバシー', nav_disclaimer: '免責事項',
      hero_h2: '笑えるカオス。<br />物理エンジンのせいにしよう。',
      hero_p: '<strong>SheGoz Technologies</strong> が贈る物理パーティーブロウラー。友達と集まってファイターを選び、危険だらけの12のアリーナを生き残ろう。',
      f1h: '12のアリーナ', f1p: 'スカイクレーン、時計ローター、サメの礁、火山、ファン工場——どの危険も一歩でランを終わらせる。',
      f2h: '本物のマルチプレイ', f2p: '公開・非公開ルーム、ホストの設定が全員に適用、友達が来るまでボットが席を埋める。',
      f3h: 'パーティー物理', f3p: '殴って、掴んで、運んで、ライバルをステージから投げ飛ばせ。フラフラのラグドール保証付き。',
      rights: 'All rights reserved.', madeby: 'は SheGoz Technologies の製品です。プレイヤー認証は Cloudflare Turnstile を使用。',
      doc_note: 'この文書は英語で提供されています。翻訳は後日提供される場合があります。',
    },
    ko: {
      nav_home: '홈', nav_terms: '이용약관', nav_privacy: '개인정보', nav_disclaimer: '면책조항',
      hero_h2: '웃길 수밖에 없는 혼돈.<br />물리엔진 탓을 하세요.',
      hero_p: '<strong>SheGoz Technologies</strong>의 물리 파티 브롤러. 친구와 함께 파이터를 고르고 위험 가득한 12개 아레나에서 살아남으세요.',
      f1h: '12개 아레나', f1p: '스카이 크레인, 시계 로터, 상어 암초, 화산, 팬 공장 — 모든 위험이 한 번에 당신의 런을 끝낼 수 있습니다.',
      f2h: '진짜 멀티플레이', f2p: '공개/비공개 방, 호스트 설정이 모두에게 적용, 친구가 올 때까지 봇이 자리를 채웁니다.',
      f3h: '파티 피직스', f3p: '때리고, 잡고, 들어 올리고, 라이벌을 무대 밖으로 던지세요. 팔다리 휘젓는 래그돌 보장.',
      rights: 'All rights reserved.', madeby: '는 SheGoz Technologies의 제품입니다. 플레이어 인증은 Cloudflare Turnstile로 제공됩니다.',
      doc_note: '이 문서는 영어로 제공되며 번역본은 추후 제공될 수 있습니다.',
    },
    ms: {
      nav_home: 'Utama', nav_terms: 'Terma', nav_privacy: 'Privasi', nav_disclaimer: 'Penafian',
      hero_h2: 'Kekacauan yang melucukan.<br />Fizik yang boleh dipersalahkan.',
      hero_p: 'Party-brawler berasaskan fizik daripada <strong>SheGoz Technologies</strong>. Ajak kawan, pilih pejuang, dan survive di 12 arena penuh bahaya.',
      f1h: '12 arena', f1p: 'Kren langit, rotor jam, terumbu jerung, gunung berapi, kilang kipas — setiap bahaya boleh tamatkan larian anda.',
      f2h: 'Multiplayer sebenar', f2p: 'Bilik awam dan peribadi, tetapan host digunapakai, bot mengisi tempat sehingga kawan tiba.',
      f3h: 'Fizik parti', f3p: 'Tumbuk, cengkam, dukung dan baling lawan keluar pentas. Ragdoll terkelemas dijamin.',
      rights: 'Hak cipta terpelihara.', madeby: 'ialah produk SheGoz Technologies. Pengesahan pemain oleh Cloudflare Turnstile.',
      doc_note: 'Dokumen ini disediakan dalam Bahasa Inggeris; terjemahan mungkin menyusul.',
    },
    id: {
      nav_home: 'Beranda', nav_terms: 'Ketentuan', nav_privacy: 'Privasi', nav_disclaimer: 'Sanggahan',
      hero_h2: 'Kekacauan yang bikin ngakak.<br />Fisika yang bisa disalahkan.',
      hero_p: 'Party-brawler berbasis fisika dari <strong>SheGoz Technologies</strong>. Ajak teman, pilih petarung, dan bertahan di 12 arena penuh bahaya.',
      f1h: '12 arena', f1p: 'Derek langit, rotor jam, karang hiu, gunung berapi, pabrik kipas — setiap bahaya bisa mengakhiri larimu.',
      f2h: 'Multiplayer sungguhan', f2p: 'Ruang publik dan privat, pengaturan host berlaku untuk semua, bot mengisi slot sampai teman datang.',
      f3h: 'Fisika pesta', f3p: 'Pukul, pegang, angkat, dan lempar lawan keluar panggung. Ragdoll ngaco dijamin.',
      rights: 'Hak cipta dilindungi.', madeby: 'adalah produk SheGoz Technologies. Verifikasi pemain oleh Cloudflare Turnstile.',
      doc_note: 'Dokumen ini tersedia dalam Bahasa Inggris; terjemahan dapat menyusul.',
    },
    vi: {
      nav_home: 'Trang chủ', nav_terms: 'Điều khoản', nav_privacy: 'Bảo mật', nav_disclaimer: 'Miễn trừ',
      hero_h2: 'Hỗn loạn cười chảy nước mắt.<br />Đổ lỗi cho vật lý.',
      hero_p: 'Game đấu trường vật lý dạo tiệc từ <strong>SheGoz Technologies</strong>. Rủ bạn bè, chọn đấu sĩ, sống sót qua 12 đấu trường đầy nguy hiểm.',
      f1h: '12 đấu trường', f1p: 'Cẩu trời, rotor đồng hồ, rạn cá mập, núi lửa, nhà máy quạt — mỗi mối nguy đều có thể kết thúc ván của bạn.',
      f2h: 'Multiplayer thật', f2p: 'Phòng công khai và riêng tư, cài đặt của chủ phòng áp cho tất cả, bot lấp chỗ tới khi bạn bè vào.',
      f3h: 'Vật lý tiệc tùng', f3p: 'Đấm, túm, bê và ném đối thủ ra khỏi sàn. Ragdoll vùng vẫy được đảm bảo.',
      rights: 'Đã đăng ký bản quyền.', madeby: 'là sản phẩm của SheGoz Technologies. Xác minh người chơi bởi Cloudflare Turnstile.',
      doc_note: 'Tài liệu này được cung cấp bằng tiếng Anh; bản dịch có thể ra sau.',
    },
  };

  function apply(id) {
    const dict = T[id] || T.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });
    const rtl = LANGS.find((l) => l.id === id)?.rtl === true;
    document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', id);
    try { localStorage.setItem('hp_lang', id); } catch (e) {}
    const btn = document.getElementById('langBtnLabel');
    if (btn) btn.textContent = (LANGS.find((l) => l.id === id) || LANGS[0]).flag;
  }

  function mountPicker() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:relative;display:inline-block;margin-left:20px';
    wrap.innerHTML =
      '<button id="langBtn" style="background:#ffffff12;border:1px solid #ffffff33;border-radius:10px;' +
      'padding:5px 10px;font-size:18px;cursor:pointer;color:inherit" title="Language">' +
      '<span id="langBtnLabel">🇬🇧</span> ▾</button>' +
      '<div id="langMenu" style="display:none;position:absolute;inset-inline-end:0;top:110%;background:#17103a;' +
      'border:1px solid #ffffff2a;border-radius:12px;padding:6px;z-index:50;min-width:170px;max-height:60vh;overflow:auto">' +
      LANGS.map((l) =>
        `<button data-lang="${l.id}" style="display:flex;gap:8px;align-items:center;width:100%;background:none;` +
        `border:none;color:#f1f0ff;padding:8px 10px;border-radius:8px;cursor:pointer;font-size:14px;text-align:start">` +
        `${l.flag} ${l.label}</button>`).join('') +
      '</div>';
    nav.appendChild(wrap);
    const menu = wrap.querySelector('#langMenu');
    wrap.querySelector('#langBtn').addEventListener('click', () => {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });
    menu.querySelectorAll('[data-lang]').forEach((b) =>
      b.addEventListener('click', () => { apply(b.dataset.lang); menu.style.display = 'none'; }));
    document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) menu.style.display = 'none'; });
  }

  mountPicker();
  let saved = 'en';
  try { saved = localStorage.getItem('hp_lang') || 'en'; } catch (e) {}
  apply(saved);
})();
