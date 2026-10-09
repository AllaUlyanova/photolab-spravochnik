const ROLES = [
  {id:"photographer", name:"Фотограф", about:"Съёмка, работа с детьми, электронные фото"},
  {id:"printer", name:"Печатник", about:"Печать, сувениры, брак и расходники"},
  {id:"seller", name:"Продавец", about:"Приём заказа, касса, разговор с клиентом"},
  {id:"lead", name:"Старший смены", about:"Открытие точки, перерывы, касса в конце дня"},
  {id:"manager", name:"Управляющий", about:"Стажёры, отчёты, порядок на точках"},
  {id:"office", name:"Офис", about:"Отпуск, больничный, зарплата"}
];
const ALL = ROLES.map(r => r.id);

// [[id|текст]] – ссылка на другой регламент
const DOCS = [
  {id:"pr-brak", roles:["printer","seller"], chapter:"Печать", title:"Брак печати: признаки и порядок замены", updated:"2026-10-02",
   tags:"брак перепечатка испорченный полосы цвет журнал брака",
   sum:"Как отличить брак от нормы, когда печатать заново и как записать замену.",
   body:[
    {h:"Что считается браком"},
    {ol:["Полосы, пятна или точки от печатающей головки.","Сдвиг цвета: кожа зеленоватая или красная, белый фон с оттенком.","Обрезан край кадра: лицо ребёнка, рамка или надпись.","Отпечаток помят, поцарапан или с отпечатками пальцев.","Не тот размер или не та бумага, например глянец вместо матовой."]},
    {note:"Не брак – небольшая разница с монитором. Экран светится, бумага отражает свет, поэтому отпечаток всегда чуть темнее. Покажите клиенту контрольный образец на стойке."},
    {h:"Что делать"},
    {ol:["Отложите отпечаток в лоток «Брак». Не выбрасывайте до конца смены.","Если есть полосы – сделайте тестовую печать дюз и при необходимости чистку.","Перепечатайте заказ вне очереди. Клиент не ждёт дольше 10 минут.","Запишите замену в журнал брака: номер заказа, причина, сколько листов.","Брак повторился трижды за смену – сообщите старшему смены."]},
    {warn:"Брак клиенту не продаём даже со скидкой. Если клиент просит «и так сойдёт» – отдаём бесплатно и всё равно перепечатываем."},
    {h:"Брак сувениров"},
    {p:"Кружки, магниты и пазлы с браком тоже кладём в лоток, но в журнал пишем отдельной строкой: заготовка стоит дороже бумаги. Подробнее – в регламенте [[pr-mug|Печать на кружках и сувенирах]]."}
   ]},
  {id:"pr-mug", roles:["printer"], chapter:"Печать", title:"Печать на кружках и сувенирах", updated:"2026-09-18",
   tags:"кружка магнит пазл сублимация термопресс сувенир",
   sum:"Температура, время и проверка перед выдачей для кружек, магнитов и пазлов.",
   body:[
    {h:"Перед печатью"},
    {ol:["Проверьте заготовку на сколы и пятна – с браком в работу не берём.","Зеркальте макет перед печатью на сублимационной бумаге.","Протрите кружку сухой салфеткой: пыль даёт белые точки."]},
    {h:"Режимы пресса"},
    {ol:["Кружка белая: 180 °C, 180 секунд.","Магнит: 190 °C, 60 секунд.","Пазл: 190 °C, 50 секунд, лёгкое давление."]},
    {warn:"Кружку после пресса берём только в перчатке и сразу опускаем в воду – иначе изображение «плывёт»."},
    {p:"Испорченную заготовку отмечаем по правилам [[pr-brak|брака печати]]."}
   ]},
  {id:"pr-supplies", roles:["printer","lead"], chapter:"Расходники", title:"Бумага, чернила и заказ расходников", updated:"2026-08-30",
   tags:"бумага чернила картридж заказ расходники остаток склад",
   sum:"Когда заказывать бумагу и чернила, чтобы точка не встала в выходные.",
   body:[
    {ol:["Остатки проверяем каждый четверг и пишем в таблицу расходников.","Бумаги меньше двух рулонов или чернил меньше 30% – заявка старшему смены в тот же день.","Новые расходники вскрываем только после того, как закончились старые."]},
    {note:"Запас на праздники и каникулы – двойной. Заявку на декабрь подаём до 20 ноября."}
   ]},
  {id:"ph-efoto", roles:["photographer","seller"], chapter:"После съёмки", title:"Электронные фото: как передать клиенту", updated:"2026-10-05",
   tags:"электронные фото файлы ссылка облако флешка мессенджер исходники",
   sum:"Как продать и передать фото в электронном виде, не теряя файлы.",
   body:[
    {h:"Способы передачи"},
    {ol:["Ссылка на облако – основной способ, ссылка работает 30 дней.","Мессенджер клиента – только с рабочего телефона точки.","Флешка клиента – только после проверки антивирусом на кассовом компьютере."]},
    {h:"Порядок"},
    {ol:["Клиент выбирает кадры на экране, вы отмечаете их в программе звёздочкой.","Оплату пробиваем до отправки файлов, позиция «Электронное фото».","Выгружаем кадры в папку заказа: дата, номер заказа, фамилия.","Отправляем ссылку и говорим: «Ссылка работает 30 дней, скачайте сегодня»."]},
    {note:"Исходники в полном размере храним на точке 14 дней. Если клиент потерял файлы – отдаём повторно бесплатно."},
    {warn:"Фото детей не публикуем в соцсетях точки без письменного согласия родителя. Бланк согласия – в папке «Документы»."}
   ]},
  {id:"ph-kids", roles:["photographer"], chapter:"Съёмка", title:"Как снимать детей: правила площадки", updated:"2026-09-10",
   tags:"дети съёмка ребёнок плачет родители безопасность реквизит",
   sum:"Безопасность на площадке и что делать, если ребёнок не хочет сниматься.",
   body:[
    {ol:["Родитель всегда рядом с ребёнком и в поле вашего зрения.","Реквизит ниже пояса взрослого, без мелких деталей для детей до 3 лет.","Ребёнок плачет дольше минуты – делаем паузу, а не уговариваем.","Сладости и игрушки предлагаем только с разрешения родителя."]},
    {note:"Лучшие кадры – в первые 5 минут. Подготовьте свет и реквизит до того, как ребёнок зайдёт на площадку."}
   ]},
  {id:"ph-reshoot", roles:["photographer"], chapter:"Съёмка", title:"Брак при съёмке: что переснимаем бесплатно", updated:"2026-09-10",
   tags:"брак пересъёмка закрытые глаза размытый кадр бесплатно",
   sum:"Когда пересъёмка за счёт точки, а когда – новая съёмка.",
   body:[
    {ol:["Все кадры размыты или пересвечены – переснимаем бесплатно в тот же день.","Закрытые глаза на всех кадрах серии – переснимаем бесплатно.","Клиенту не понравились эмоции ребёнка – это новая съёмка со скидкой 30%."]},
    {p:"Если клиент недоволен – действуйте по регламенту [[se-complaint|жалобы клиента]]."}
   ]},
  {id:"se-order", roles:["seller"], chapter:"Касса", title:"Приём заказа и оплата", updated:"2026-09-25",
   tags:"заказ оплата касса чек квитанция предоплата срок выдачи",
   sum:"Что спросить у клиента, как оформить заказ и когда брать оплату.",
   body:[
    {ol:["Уточните, что нужно: печать, сувенир, электронные фото или всё вместе.","Назовите срок выдачи по прайсу и запишите телефон клиента.","Печать и электронные фото – оплата сразу. Сувениры – предоплата 50%.","Выдайте чек и квитанцию с номером заказа."]},
    {note:"Номер заказа клиент называет при выдаче – по нему ищем папку и пакет."}
   ]},
  {id:"se-complaint", roles:["seller","lead"], chapter:"Клиенты", title:"Жалоба клиента: что делать", updated:"2026-10-01",
   tags:"жалоба недоволен претензия возврат конфликт клиент",
   sum:"Как выслушать недовольного клиента и решить вопрос на месте.",
   body:[
    {ol:["Выслушайте до конца, не перебивайте и не спорьте.","Повторите суть: «Правильно понимаю, что…?»","Предложите решение в рамках ваших прав: перепечатка, пересъёмка, замена сувенира.","Клиент хочет вернуть деньги – зовите старшего смены. Продавец возврат не делает.","Запишите жалобу в журнал: дата, суть, что предложили, чем закончилось."]},
    {note:"Помогают фразы «Давайте разберёмся» и «Сейчас сделаем заново». Злят – «Это не ко мне» и «Так всегда печатается»."},
    {p:"Если причина в качестве печати – смотрите [[pr-brak|брак печати]]."}
   ]},
  {id:"ld-breaks", roles:ALL, chapter:"Смена", title:"Перерывы и обед", updated:"2026-10-07",
   tags:"перерыв перерывы обед отдых подмена смена график",
   sum:"Сколько перерывов положено, когда их брать и кто подменяет.",
   body:[
    {h:"Сколько отдыхаем"},
    {ol:["Смена 8 часов – обед 30 минут и два перерыва по 10 минут.","Смена 12 часов – обед 45 минут и три перерыва по 10 минут.","Обед не раньше чем через 3 часа после открытия и не позже чем за 2 часа до закрытия."]},
    {h:"Как уйти на перерыв"},
    {ol:["Напишите в чат точки: «Ухожу на перерыв до 14:10».","Дождитесь подмены – точку без сотрудника не оставляем.","Заказы в работе передайте вслух: номер и что осталось сделать."]},
    {note:"Пиковые часы – с 12 до 15 в выходные и каникулы. В это время перерывы короче на 5 минут, остаток добираем после пика."},
    {warn:"Перерывы не переносим на конец смены, чтобы уйти раньше."}
   ]},
  {id:"ld-open", roles:["lead"], chapter:"Смена", title:"Открытие и закрытие точки", updated:"2026-09-20",
   tags:"открытие закрытие точка смена сигнализация чек-лист",
   sum:"Чек-лист на первые и последние 15 минут смены.",
   body:[
    {h:"Открытие"},
    {ol:["Включите принтеры и пресс – им нужно 10 минут на прогрев.","Проверьте остатки бумаги и заготовок.","Сделайте тестовый отпечаток и сравните с контрольным образцом.","Отправьте фото витрины в чат управляющему."]},
    {h:"Закрытие"},
    {ol:["Готовые заказы разложите по номерам в лоток выдачи.","Сделайте резервную копию папки заказов за день.","Закройте кассу по регламенту [[ld-cash|кассы в конце смены]]."]}
   ]},
  {id:"ld-cash", roles:["lead","seller"], chapter:"Касса", title:"Касса в конце смены", updated:"2026-09-28",
   tags:"касса z-отчёт выручка инкассация сверка конец смены",
   sum:"Как сверить выручку и закрыть смену без расхождений.",
   body:[
    {ol:["Пересчитайте наличные дважды, вдвоём с продавцом.","Сверьте с отчётом кассы и терминала.","Расхождение больше 100 ₽ – пишите управляющему до закрытия смены.","Снимите Z-отчёт и положите его в папку смены."]}
   ]},
  {id:"mg-intern", roles:["manager"], chapter:"Люди", title:"Стажировка нового сотрудника", updated:"2026-09-05",
   tags:"стажёр стажировка новый сотрудник обучение наставник",
   sum:"Как провести первые три дня нового человека на точке.",
   body:[
    {ol:["День 1 – наблюдает за наставником и читает регламенты своей роли.","День 2 – работает сам, наставник рядом.","День 3 – самостоятельная смена и короткий тест по регламентам."]},
    {note:"Ссылку на этот справочник и код доступа стажёр получает в первый день."}
   ]},
  {id:"mg-report", roles:["manager"], chapter:"Отчёты", title:"Еженедельный отчёт по точке", updated:"2026-09-15",
   tags:"отчёт неделя выручка брак жалобы показатели",
   sum:"Какие цифры собрать к понедельнику и куда их отправить.",
   body:[
    {ol:["Выручка по дням и среднему чеку.","Число заказов с браком и жалоб из журналов.","Остатки расходников и заявки на следующую неделю."]}
   ]},
  {id:"of-leave", roles:["office"], chapter:"Кадры", title:"Отпуск, больничный и замена", updated:"2026-09-01",
   tags:"отпуск больничный замена заявление график",
   sum:"За сколько дней предупреждать и кто ищет замену.",
   body:[
    {ol:["Отпуск – заявление за 14 дней через управляющего.","Больничный – сообщите управляющему до начала смены, документ – в офис.","Замену на смену ищет управляющий, не сам сотрудник."]}
   ]}
];

const QUICK = ["брак","перерывы","электронные фото","кружка","касса"];

/* ---------- вспомогательное ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const role = id => ROLES.find(r => r.id === id);
const docById = id => DOCS.find(d => d.id === id);
const fmtDate = s => new Date(s + "T12:00:00").toLocaleDateString("ru-RU",{day:"numeric",month:"long"});
const norm = s => s.toLowerCase().replace(/ё/g,"е");
const stem = w => w.length > 5 ? w.slice(0,-2) : w.length > 4 ? w.slice(0,-1) : w;
const words = q => norm(q).split(/[^a-zа-я0-9]+/).filter(w => w.length > 1).map(stem);

function inline(text, terms){
  let html = esc(text).replace(/\[\[([\w-]+)\|([^\]]+)\]\]/g, (_, id, t) => `<a href="#/doc/${id}">${t}</a>`);
  return terms && terms.length ? highlight(html, terms) : html;
}
function highlight(html, terms){
  // подсвечиваем только в тексте, не внутри тегов
  return html.split(/(<[^>]+>)/).map(part => {
    if (part.startsWith("<")) return part;
    let out = part;
    terms.forEach(t => {
      const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/е/g,"[её]") + "[а-яё]*)","gi");
      out = out.replace(re, "<mark>$1</mark>");
    });
    return out;
  }).join("");
}
const plain = d => [d.title, d.sum, d.tags, ...d.body.map(b => b.h || b.p || b.note || b.warn || (b.ol || []).join(" "))].join(" ").replace(/\[\[[\w-]+\|([^\]]+)\]\]/g,"$1");

function dots(d){
  const ids = d.roles.length === ALL.length ? ALL : d.roles;
  return `<span class="dots" aria-hidden="true">${ids.map(id => `<i style="background:var(--c-${id})"></i>`).join("")}</span>`;
}
function docItem(d, snippet){
  return `<li><a href="#/doc/${d.id}${snippet ? "?q=" + encodeURIComponent(snippet.q) : ""}">
    <b>${snippet ? snippet.title : esc(d.title)}</b>${dots(d)}
    <p>${snippet ? snippet.text : esc(d.sum)}</p></a></li>`;
}

/* ---------- экраны ---------- */
function viewHome(){
  const recent = [...DOCS].sort((a,b) => b.updated.localeCompare(a.updated)).slice(0,4);
  return `
    <h1>Регламенты для каждой роли</h1>
    <p class="lead">Выберите свою роль или найдите правило по слову – например, что делать с браком или когда идти на обед.</p>
    <p class="quick-label">Часто ищут</p>
    <div class="quick">${QUICK.map(q => `<a href="#/search?q=${encodeURIComponent(q)}">${q}</a>`).join("")}</div>
    <h2 class="sec">Роли</h2>
    <ul class="roles">${ROLES.map(r => {
      const n = DOCS.filter(d => d.roles.includes(r.id)).length;
      return `<li><a href="#/role/${r.id}" style="--role:var(--c-${r.id})"><span class="patch"></span>
        <span><b>${r.name}</b><small>${r.about}</small><small>${n} ${plural(n,"регламент","регламента","регламентов")}</small></span></a></li>`;
    }).join("")}</ul>
    <h2 class="sec">Недавно обновлены</h2>
    <ul class="doclist">${recent.map(d => docItem(d)).join("")}</ul>`;
}
function viewRole(id){
  const r = role(id); if (!r) return viewMissing();
  const docs = DOCS.filter(d => d.roles.includes(id));
  const chapters = [...new Set(docs.map(d => d.chapter))];
  return `
    <nav class="crumbs" aria-label="Путь"><a href="#/">Все роли</a></nav>
    <div class="band"><span class="patch"></span><div><h1>${r.name}</h1><p>${r.about}</p></div></div>
    ${chapters.map(c => `<section class="chapter"><h2>${c}</h2>
      <ul class="doclist">${docs.filter(d => d.chapter === c).map(d => docItem(d)).join("")}</ul></section>`).join("")}`;
}
function viewDoc(id, q, from){
  const d = docById(id); if (!d) return viewMissing();
  const terms = q ? words(q) : [];
  const r = role(from && d.roles.includes(from) ? from : d.roles[0]);
  let sec = 0;
  const body = d.body.map(b => {
    if (b.h){ sec++; return `<h2>${inline(b.h, terms)}</h2>`; }
    if (b.ol){ const s = sec || 1; return `<ol style="--sec:'${s}'">${b.ol.map(li => `<li><span>${inline(li, terms)}</span></li>`).join("")}</ol>`; }
    if (b.note) return `<div class="box note"><b>Важно знать</b>${inline(b.note, terms)}</div>`;
    if (b.warn) return `<div class="box warn" role="note"><b>Запрещено</b>${inline(b.warn, terms)}</div>`;
    return `<p>${inline(b.p, terms)}</p>`;
  }).join("");
  const roleLinks = d.roles.length === ALL.length ? "Для всех ролей" : d.roles.map(x => `<a href="#/role/${x}">${role(x).name}</a>`).join(", ");
  const related = DOCS.filter(x => x.id !== d.id && x.roles.includes(r.id) && x.chapter === d.chapter).slice(0,3);
  return `
    <nav class="crumbs" aria-label="Путь"><a href="#/">Все роли</a><span aria-hidden="true">/</span><a href="#/role/${r.id}">${r.name}</a><span aria-hidden="true">/</span><span>${d.chapter}</span></nav>
    <article class="doc">
      <h1>${inline(d.title, terms)}</h1>
      <p class="sum">${inline(d.sum, terms)}</p>
      <div class="meta"><span>${roleLinks}</span><span>Обновлено ${fmtDate(d.updated)}</span></div>
      ${body}
      ${related.length ? `<div class="related"><h2>Ещё в разделе «${d.chapter}»</h2>${related.map(x => `<a href="#/doc/${x.id}">${esc(x.title)}</a>`).join("")}</div>` : ""}
    </article>`;
}
function viewSearch(q){
  const terms = words(q);
  if (!terms.length) return `<h1>Поиск</h1><p class="lead">Введите слово в строку поиска вверху – например, «брак» или «обед».</p>`;
  const found = DOCS.map(d => {
    const title = norm(d.title), text = norm(plain(d));
    if (!terms.every(t => text.includes(t))) return null;
    const score = terms.reduce((s,t) => s + (title.includes(t) ? 10 : 0) + (norm(d.tags).includes(t) ? 4 : 0) + text.split(t).length - 1, 0);
    // фрагмент вокруг первого совпадения
    const raw = plain(d).replace(d.title,"").replace(d.tags,"");
    const i = norm(raw).indexOf(terms[0]);
    let frag = i < 0 ? d.sum : (i > 50 ? "…" : "") + raw.slice(Math.max(0,i-50), i + 110).trim() + "…";
    return {d, score, snippet:{q, title:highlight(esc(d.title), terms), text:highlight(esc(frag), terms)}};
  }).filter(Boolean).sort((a,b) => b.score - a.score);
  if (!found.length) return `<h1>Ничего не нашлось по запросу «${esc(q)}»</h1>
    <div class="empty"><p>Попробуйте другое слово или короче: «обед» вместо «обеденный перерыв».</p>
    <div class="quick">${QUICK.map(x => `<a href="#/search?q=${encodeURIComponent(x)}">${x}</a>`).join("")}</div></div>`;
  return `<h1>Поиск: «${esc(q)}»</h1>
    <p class="result-count">${found.length} ${plural(found.length,"регламент","регламента","регламентов")}</p>
    <ul class="doclist">${found.map(f => docItem(f.d, f.snippet)).join("")}</ul>`;
}
function viewAbout(){
  return `<div class="about">
    <nav class="crumbs" aria-label="Путь"><a href="#/">Все роли</a></nav>
    <h1>Как устроен справочник</h1>
    <p class="lead">Это прототип – одна условная корпоративная книга, чтобы показать логику. Тексты при сборке заменяются вашими.</p>
    <h2 class="sec">Что уже работает в прототипе</h2>
    <ul>
      <li>Навигация по ролям: роль – содержание раздела – страница регламента.</li>
      <li>Поиск по словам с подсветкой: находит «брак», «перерывы», «электронные фото» в заголовках и тексте.</li>
      <li>Один регламент может относиться к нескольким ролям – например, перерывы видят все.</li>
      <li>Вход по коду доступа.</li>
      <li>Удобно читать с телефона в зале.</li>
    </ul>
    <h2 class="sec">Как будет в готовом справочнике</h2>
    <ul>
      <li>Тексты правит HR или администратор в визуальном редакторе, без программиста.</li>
      <li>Закрытый доступ по паролю для всех сотрудников или по ролям.</li>
      <li>Все главы корпоративной книги, перенесённые из PDF.</li>
    </ul>
  </div>`;
}
const viewMissing = () => `<h1>Такой страницы нет</h1><p class="lead">Возможно, регламент переименовали. Вернитесь к <a href="#/">списку ролей</a> или воспользуйтесь поиском.</p>`;
function plural(n,a,b,c){const m=n%10,h=n%100;return m===1&&h!==11?a:m>=2&&m<=4&&(h<12||h>14)?b:c}

/* ---------- маршруты ---------- */
let lastRole = null;
function route(){
  const [path, qs] = location.hash.slice(1).split("?");
  const q = new URLSearchParams(qs || "").get("q") || "";
  const parts = (path || "/").split("/").filter(Boolean);
  let html, current = null, title = "Корпоративная книга PHOTO LAB";
  if (!parts.length) html = viewHome();
  else if (parts[0] === "role"){ current = parts[1]; lastRole = current; html = viewRole(current); title = (role(current)?.name || "") + " – PHOTO LAB"; }
  else if (parts[0] === "doc"){ const d = docById(parts[1]); current = d && d.roles.includes(lastRole) ? lastRole : d?.roles[0]; html = viewDoc(parts[1], q, current); title = (d?.title || "") + " – PHOTO LAB"; }
  else if (parts[0] === "search"){ html = viewSearch(q); title = "Поиск – PHOTO LAB"; }
  else if (parts[0] === "about") html = viewAbout();
  else html = viewMissing();

  const view = $("#view");
  view.innerHTML = html;
  document.title = title;
  if (current && role(current)) view.style.setProperty("--role", `var(--c-${current})`); else view.style.removeProperty("--role");
  document.querySelectorAll("#side-roles a").forEach(a => { if (a.dataset.id === current) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  if (parts[0] !== "search"){ window.scrollTo(0,0); if ($("#q") !== document.activeElement) $("#q").value = ""; }
  if (parts[0] === "search" && $("#q").value !== q && document.activeElement !== $("#q")) $("#q").value = q;
  const mark = view.querySelector("article mark");
  if (mark) mark.scrollIntoView({block:"center"});
}

function startApp(){
  $("#gate").hidden = true;
  $("#app").hidden = false;
  $("#side-roles").innerHTML = ROLES.map(r => `<a href="#/role/${r.id}" data-id="${r.id}" style="--role:var(--c-${r.id})"><span class="sw" style="background:var(--c-${r.id})"></span>${r.name}</a>`).join("");
  let t;
  $("#q").addEventListener("input", e => {
    clearTimeout(t);
    t = setTimeout(() => {
      const v = e.target.value.trim();
      const target = v ? "#/search?q=" + encodeURIComponent(v) : "#/";
      if (location.hash.startsWith("#/search")) location.replace(target); else location.hash = target;
    }, 180);
  });
  $("#search-form").addEventListener("submit", e => { e.preventDefault(); const v = $("#q").value.trim(); if (v) location.hash = "#/search?q=" + encodeURIComponent(v); });
  window.addEventListener("hashchange", route);
  route();
}

/* ---------- вход по коду (демо) ---------- */
const CODE = "2026";
let ok = false;
try { ok = sessionStorage.getItem("pl-ok") === "1"; } catch(e){}
if (ok) startApp();
else {
  $("#gate").hidden = false;
  $("#code").focus();
  $("#gate-form").addEventListener("submit", e => {
    e.preventDefault();
    if ($("#code").value.trim() === CODE){
      try { sessionStorage.setItem("pl-ok","1"); } catch(e){}
      startApp();
    } else {
      $("#gate-err").textContent = "Код не подошёл. Проверьте цифры или спросите управляющего.";
      $("#code").select();
    }
  });
}
