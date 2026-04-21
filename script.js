const icons = {
    phone: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.5 3.1a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 1.8-.6l3.1.5A2 2 0 0 1 22 16.9Z"></path>
        </svg>
    `,
    message: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.8 8.8 0 0 1-3.2-.6L3 21l1.7-5.3A8.5 8.5 0 1 1 21 11.5Z"></path>
        </svg>
    `,
    email: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#2aabee" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"></path>
            <path d="m22 7-10 7L2 7"></path>
        </svg>
    `,
    location: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#25d366" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    `,
    office: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 21h18"></path>
            <path d="M5 21V7l7-4 7 4v14"></path>
            <path d="M9 9h.01"></path>
            <path d="M9 13h.01"></path>
            <path d="M9 17h.01"></path>
            <path d="M15 9h.01"></path>
            <path d="M15 13h.01"></path>
            <path d="M15 17h.01"></path>
        </svg>
    `,
    document: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path>
            <path d="M14 2v6h6"></path>
            <path d="M8 13h8"></path>
            <path d="M8 17h8"></path>
            <path d="M8 9h2"></path>
        </svg>
    `,
    whatsapp: `
        <svg viewBox="0 0 24 24" fill="#25d366" aria-hidden="true">
            <path d="M20.5 11.8c0 4.8-3.9 8.6-8.7 8.6-1.5 0-2.9-.4-4.1-1l-4.2 1.1 1.1-4a8.45 8.45 0 0 1-1.4-4.7c0-4.8 3.9-8.7 8.6-8.7s8.7 3.9 8.7 8.7Zm-8.7-7.2a7.25 7.25 0 0 0-6.2 10.9l.2.4-.7 2.4 2.5-.7.4.2a7.18 7.18 0 0 0 3.8 1.1c4 0 7.2-3.2 7.2-7.1 0-4-3.2-7.2-7.2-7.2Zm3.9 9c-.2-.1-1.2-.6-1.4-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0s-.8-.3-1.6-1a5.9 5.9 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4.1-.3c.1-.1 0-.3 0-.4 0-.1-.4-1.1-.6-1.5-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.4 0-.6.2-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.5 2.3 3.6 3.2.5.2 1 .4 1.3.5.5.2 1 .2 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1 0-.1-.2-.1-.4-.2Z"></path>
        </svg>
    `,
    telegram: `
        <svg viewBox="0 0 24 24" fill="#2aabee" aria-hidden="true">
            <path d="M21 4.7c.3-.2.7.1.6.5l-3 14.2c-.1.4-.5.6-.9.4l-4.5-3.3-2.3 2.2c-.2.2-.4.3-.6.3l.3-4.2L18 8.1c.3-.2 0-.7-.4-.5l-9.2 5.8-4-.9c-.5-.1-.6-.7-.1-.9L21 4.7Z"></path>
        </svg>
    `,
    youtube: `
        <svg viewBox="0 0 24 24" fill="#ff0033" aria-hidden="true">
            <path d="M21.6 7.3a2.97 2.97 0 0 0-2.1-2.1C17.6 4.7 12 4.7 12 4.7s-5.6 0-7.5.5A2.97 2.97 0 0 0 2.4 7.3C2 9.2 2 12 2 12s0 2.8.4 4.7a2.97 2.97 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a2.97 2.97 0 0 0 2.1-2.1c.4-1.9.4-4.7.4-4.7s0-2.8-.4-4.7ZM10.2 15.3V8.7L15.8 12l-5.6 3.3Z"></path>
        </svg>
    `
};

const products = [
    {
        slug: "complex-kakavella",
        name: "Комплекс для сверхтонкого помола какавеллы",
        price: "5 000 000 ₽",
        shortSummary: "Готовый мельничный комплекс для тонкого и сверхтонкого помола какавеллы и других сухих материалов с производительностью до 200 кг/час по какавелле.",
        preview: "assets/products/complex-1.jpg",
        images: [
            "assets/products/complex-1.jpg",
            "assets/products/complex-2.jpg",
            "assets/products/complex-3.jpg",
            "assets/products/complex-4.jpg",
            "assets/products/complex-5.jpg",
            "assets/products/complex-6.jpg",
            "assets/products/complex-7.jpg",
            "assets/products/complex-8.jpg",
            "assets/products/complex-9.jpg",
            "assets/products/complex-10.jpg"
        ],
        description: [
            "Мельничный комплекс для сверхтонкого помола какавеллы находится в отличном рабочем состоянии и готов к эксплуатации. Это решение для предприятий, которым нужен тонкий пищевой помол с высокой производительностью и предсказуемым качеством результата.",
            "Комплекс состоит из двух ступеней: молотковой мельницы высокой производительности для предварительного или основного помола и мельницы сверхтонкого помола для финального доведения продукта до микронной фракции.",
            "По какавелле производительность тонкого помола до 20 мкм достигает 200 кг/час. Оборудование также можно настроить под работу со специями, минеральными добавками и другими сухими сыпучими материалами. Подходит для пищевых производств, переработки вторичного сырья, выпуска порошков и исследовательских задач."
        ],
        specs: [
            ["Цена", "5 000 000 ₽"],
            ["Вид оборудования", "Промышленное"],
            ["Вид специализированного оборудования", "Перерабатывающее"],
            ["Страна производства", "Россия"],
            ["Тип оборудования", "Мельница"],
            ["Перерабатываемый материал", "Пищевые продукты"],
            ["Мощность", "40 кВт"],
            ["Состояние", "Б/у"],
            ["Доступность", "В наличии"],
            ["Тонкость помола", "До 1 мкм"],
            ["Производительность по какавелле", "До 200 кг/час"]
        ],
        video: null
    },
    {
        slug: "mixer-spices-kakao-feed",
        name: "Смеситель для специй, какао, комбикорма",
        price: "400 000 ₽",
        shortSummary: "Универсальный промышленный смеситель для сухих и жиросодержащих смесей: специи, какао, комбикорма, премиксы и пищевые порошки.",
        preview: "assets/products/mixer-1.jpg",
        images: [
            "assets/products/mixer-1.jpg",
            "assets/products/mixer-2.jpg",
            "assets/products/mixer-3.jpg",
            "assets/products/mixer-4.jpg",
            "assets/products/mixer-5.jpg",
            "assets/products/mixer-6.jpg",
            "assets/products/mixer-7.jpg"
        ],
        description: [
            "Универсальный высокоэффективный смеситель для создания однородных сухих и жиросодержащих смесей. Это решение для предприятий, где важны качество смешивания, стабильный результат и надёжность оборудования.",
            "Смеситель подходит для пищевой промышленности, сельского хозяйства, фармацевтики и химии. На нём можно готовить специи, приправы, сухие завтраки, детские смеси, порошки для напитков, сухие смеси для выпечки, какаовеллу, комбикорма и премиксы.",
            "Ключевое преимущество оборудования — высокая однородность смеси до 98%, возможность добавлять жидкие компоненты в процессе работы и смешивать материалы с твёрдыми жирами за счёт водяной рубашки и жиротопки. Это удобный и долговечный вариант для производителей специй, пищевых комбинатов, фасовочных цехов, комбикормовых и фармацевтических производств."
        ],
        specs: [
            ["Цена", "400 000 ₽"],
            ["Вид оборудования", "Промышленное"],
            ["Вид специализированного оборудования", "Смесители"],
            ["Страна производства", "Россия"],
            ["Тип смесителя", "Роторно-лопастной"],
            ["Назначение", "Для сыпучих материалов, пищевых продуктов, фармацевтики, комбикормов и кормовых добавок"],
            ["Ёмкость смесителя", "10–50 л"],
            ["Состояние", "Б/у"],
            ["Доступность", "В наличии"]
        ],
        video: {
            type: "video",
            src: "assets/products/mixer-video.mp4",
            title: "Видео смесителя"
        }
    },
    {
        slug: "elektramo",
        name: "Электродвигатель ELEKTRAMO",
        price: "250 000 ₽",
        shortSummary: "Промышленный двигатель для производственной нагрузки с высоким ресурсом, защитой IP55 и понятными рабочими характеристиками.",
        preview: "assets/products/motor-1.jpeg",
        images: [
            "assets/products/motor-1.jpeg",
            "assets/products/motor-2.jpeg",
            "assets/products/motor-3.jpeg",
            "assets/products/motor-4.jpeg"
        ],
        description: [
            "Электродвигатель ELEKTRAMO — серьёзная промышленная позиция для задач, где важны ресурс, стабильная работа и уверенные технические характеристики.",
            "Это новый двигатель производства Италии, выполненный по стандарту IEC60034, с энергоэффективностью IE2 и защитой IP55, что делает его хорошим решением для производственной нагрузки.",
            "Если нужен надёжный двигатель для работы в промышленной среде без компромиссов по базовым параметрам и качеству исполнения, эта позиция заслуживает отдельного внимания."
        ],
        specs: [
            ["Цена", "250 000 ₽"],
            ["Мощность", "26,4 кВт"],
            ["Обороты", "3540 об/мин"],
            ["Стандарт", "IEC60034"],
            ["Класс энергоэффективности", "IE2"],
            ["Степень защиты", "IP55"],
            ["Класс изоляции", "F/B"],
            ["Система охлаждения", "IC411"],
            ["Рабочая температура", "-20 ... +40 °C"],
            ["Монтаж", "Горизонтальный на лапах"]
        ],
        video: null
    }
];

const getVideoConfig = (video) => {
    if (!video) return null;
    if (video.type === "video") return { type: "video", src: video.src, title: video.title };
    if (video.type === "youtube") return { type: "youtube", src: video.embed, title: video.title };
    if (video.url) {
        const youtubeMatch = video.url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?/]+)/i);
        if (youtubeMatch) {
            return {
                type: "youtube",
                src: `https://www.youtube.com/embed/${youtubeMatch[1]}`,
                title: video.title
            };
        }
        return { type: "video", src: video.url, title: video.title };
    }
    return null;
};

const applyIcons = () => {
    document.querySelectorAll("[data-icon]").forEach((node) => {
        node.innerHTML = icons[node.dataset.icon] ?? "";
    });
};

const setYear = () => {
    document.querySelectorAll("#currentYear").forEach((node) => {
        node.textContent = String(new Date().getFullYear());
    });
};

const lockBodyScroll = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add("menu-open");
    document.body.style.paddingRight = `${Math.max(scrollbarWidth, 0)}px`;
};

const unlockBodyScroll = () => {
    document.body.classList.remove("menu-open");
    document.body.style.paddingRight = "";
};

const maskPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (!digits) return "";

    const normalized = digits.startsWith("8") ? `7${digits.slice(1)}` : digits;
    const base = normalized.startsWith("7") ? normalized : `7${normalized}`;
    const trimmed = base.slice(0, 11);

    let result = "+7";
    if (trimmed.length > 1) result += ` (${trimmed.slice(1, 4)}`;
    if (trimmed.length >= 4) result += `) ${trimmed.slice(4, 7)}`;
    if (trimmed.length >= 7) result += `-${trimmed.slice(7, 9)}`;
    if (trimmed.length >= 9) result += `-${trimmed.slice(9, 11)}`;

    return result;
};

const validators = {
    name: (value) => {
        const normalized = value.trim();
        if (!normalized) return "Укажите имя.";
        if (normalized.length < 2) return "Имя должно быть не короче 2 символов.";
        if (!/^[А-Яа-яA-Za-zЁё\s-]+$/.test(normalized)) return "Имя должно содержать только буквы.";
        return "";
    },
    phone: (value) => {
        const digits = value.replace(/\D/g, "");
        if (!digits) return "Укажите телефон.";
        if (digits.length < 11) return "Введите телефон полностью.";
        return "";
    },
    product: (value) => {
        const normalized = value.trim();
        if (!normalized) return "";
        if (normalized.length < 3) return "Уточните название товара подробнее.";
        return "";
    },
    message: (value) => {
        const normalized = value.trim();
        if (!normalized) return "Опишите запрос.";
        if (normalized.length < 10) return "Сообщение должно быть не короче 10 символов.";
        return "";
    }
};

const setFieldError = (field, message) => {
    const wrapper = field.closest(".field");
    const errorNode = wrapper?.querySelector(`[data-error-for="${field.name}"]`);
    if (!wrapper || !errorNode) return;

    wrapper.classList.toggle("is-invalid", Boolean(message));
    errorNode.textContent = message;
};

const validateField = (field) => {
    const validator = validators[field.name];
    if (!validator) return true;

    const message = validator(field.value);
    setFieldError(field, message);
    return !message;
};

const initForms = () => {
    document.querySelectorAll(".contact-form").forEach((form) => {
        form.querySelectorAll("input, textarea").forEach((field) => {
            if (field.name === "phone") {
                field.addEventListener("input", () => {
                    field.value = maskPhone(field.value);
                    validateField(field);
                });
            } else {
                field.addEventListener("input", () => {
                    validateField(field);
                });
            }

            field.addEventListener("blur", () => {
                validateField(field);
            });
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const fields = [...form.querySelectorAll("input, textarea")];
            const validationResults = fields.map((field) => validateField(field));
            const isValid = validationResults.every(Boolean);
            if (!isValid) return;

            const success = form.querySelector(".form-success");
            form.reset();
            fields.forEach((field) => setFieldError(field, ""));

            if (success) {
                success.hidden = false;
                window.setTimeout(() => {
                    success.hidden = true;
                }, 4500);
            }
        });
    });
};

const initMenu = () => {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("siteNav");

    if (!toggle || !nav) return;

    const closeMenu = () => {
        nav.classList.remove("is-open");
        unlockBodyScroll();
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        if (isOpen) {
            lockBodyScroll();
        } else {
            unlockBodyScroll();
        }
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 980) closeMenu();
    });
};

const productCardMarkup = (product) => `
    <article class="product-card reveal">
        <div class="product-card-image">
            <img src="${product.preview}" alt="${product.name}" loading="lazy">
        </div>
        <h3>${product.name}</h3>
        <div class="product-card-footer">
            <a class="button button-primary" href="products.html?product=${product.slug}">Подробнее</a>
        </div>
    </article>
`;

const renderHomeCards = () => {
    const grid = document.getElementById("homeProductGrid");
    if (!grid) return;

    grid.innerHTML = products.map(productCardMarkup).join("");
    initReveal();
};

const productPageMarkup = (product) => `
    <section class="product-page-header">
        <div class="container reveal">
            <div class="breadcrumbs">
                <a href="index.html#top">Главная</a>
                <span>/</span>
                <a href="index.html#products">Продукция</a>
                <span>/</span>
                <span>${product.name}</span>
            </div>
            <div class="section-head section-head-left">
                <span class="eyebrow">Карточка товара</span>
                <h1>${product.name}</h1>
            </div>
        </div>
    </section>

    <section class="detail-section">
        <div class="container">
            <div class="product-single-layout">
                ${detailMarkup(product)}
            </div>
        </div>
    </section>

    <section class="section section-dark product-page-contacts" id="product-contacts">
        <div class="container contacts-grid">
            <div class="contacts-column reveal">
                <div class="section-head section-head-left">
                    <span class="eyebrow">Контакты</span>
                    <h2>Нужно уточнить стоимость, состояние, наличие или договориться о покупке? Свяжитесь с нами удобным способом.</h2>
                </div>

                <div class="contacts-primary">
                    <a class="contact-accent contact-accent-blue" href="tel:+79253873034">
                        <span><i class="inline-icon" data-icon="phone"></i>Основной номер</span>
                        <strong>+7 925 387 30 34</strong>
                    </a>
                    <a class="contact-accent" href="tel:+79365193433">
                        <span><i class="inline-icon" data-icon="message"></i>WhatsApp / Telegram</span>
                        <strong>+7 936 519 34 33</strong>
                    </a>
                </div>

                <div class="contact-meta">
                    <div class="contact-meta-item">
                        <span><i class="inline-icon" data-icon="email"></i>Email</span>
                        <a href="mailto:ft155@mail.ru">ft155@mail.ru</a>
                    </div>
                    <div class="contact-meta-item">
                        <span><i class="inline-icon" data-icon="location"></i>Самовывоз</span>
                        <p>Тверская область, Лихославльский район, поселок Ильинское, ул. Знаменская, дом 9</p>
                    </div>
                </div>

                <div class="social-row social-row-left">
                    <a class="social-link" href="https://wa.me/79365193433" target="_blank" rel="noreferrer" aria-label="WhatsApp" data-icon="whatsapp"></a>
                    <a class="social-link" href="https://t.me/79365193433" target="_blank" rel="noreferrer" aria-label="Telegram" data-icon="telegram"></a>
                    <a class="social-link" href="https://www.youtube.com/@user-hd1fn2tr2u" target="_blank" rel="noreferrer" aria-label="YouTube" data-icon="youtube"></a>
                </div>
            </div>

            <div class="contacts-aside reveal">
                <form class="contact-form" id="productContactForm" novalidate>
                    <div class="form-head">
                        <span class="eyebrow">Заявка</span>
                        <h3>Оставьте заявку, и мы свяжемся с вами по стоимости, состоянию и условиям покупки нужного оборудования.</h3>
                    </div>
                    <div class="form-grid">
                        <label class="field">
                            <span>Имя</span>
                            <input type="text" name="name" placeholder="Ваше имя" required>
                            <small class="field-error" data-error-for="name"></small>
                        </label>
                        <label class="field">
                            <span>Телефон</span>
                            <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required>
                            <small class="field-error" data-error-for="phone"></small>
                        </label>
                    </div>
                    <label class="field">
                        <span>Товар</span>
                        <input type="text" name="product" value="${product.name}">
                        <small class="field-error" data-error-for="product"></small>
                    </label>
                    <label class="field">
                        <span>Комментарий</span>
                        <textarea name="message" rows="5" placeholder="Что нужно уточнить: стоимость, наличие, характеристики, доставка" required></textarea>
                        <small class="field-error" data-error-for="message"></small>
                    </label>
                    <button class="button button-primary button-full" type="submit">Отправить заявку</button>
                    <p class="form-note">После отправки заявки мы свяжемся с вами и подскажем по стоимости, характеристикам и доступности товара.</p>
                    <p class="form-success" hidden>Заявка отправлена. Мы свяжемся с вами в ближайшее время.</p>
                </form>

                <div class="map-card">
                    <iframe
                        title="Карта по координатам"
                        src="https://yandex.ru/map-widget/v1/?ll=37.358355%2C55.856063&mode=whatshere&whatshere%5Bpoint%5D=37.358355%2C55.856063&whatshere%5Bzoom%5D=16&z=16"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </section>
`;

const initReveal = () => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    items.forEach((item) => observer.observe(item));
};

const detailMarkup = (product) => {
    const thumbs = product.images.map((src, index) => `
        <button class="thumb-button ${index === 0 ? "is-active" : ""}" type="button" data-thumb="${src}">
            <img src="${src}" alt="${product.name} ${index + 1}" loading="lazy">
        </button>
    `).join("");

    const descriptionPanel = product.description.map((text) => `<p>${text}</p>`).join("");

    const tableRows = product.specs.map(([label, value]) => `
        <tr>
            <td>${label}</td>
            <td>${value}</td>
        </tr>
    `).join("");

    const video = getVideoConfig(product.video);

    const videoMarkup = video ? `
        <div class="detail-video">
            <div class="section-head section-head-left">
                <span class="eyebrow">Видео</span>
                <h3>${video.title}</h3>
            </div>
            <div class="detail-video-frame">
                ${video.type === "youtube"
                    ? `<iframe src="${video.src}" title="${video.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                    : `<video src="${video.src}" controls playsinline preload="metadata"></video>`
                }
            </div>
        </div>
    ` : "";

    return `
        <div class="detail-gallery" id="productDetail">
            <div class="detail-main-image">
                <img src="${product.images[0]}" alt="${product.name}" id="detailMainImage">
            </div>
            <div class="thumb-row">
                ${thumbs}
            </div>
        </div>

        <div class="detail-info">
            <div>
                <span class="eyebrow">Карточка товара</span>
                <h2>${product.name}</h2>
            </div>
            <div class="detail-price">${product.price}</div>
            <p>
                ${product.shortSummary}
            </p>
            <div class="detail-actions">
                <a class="button button-primary" href="tel:+79253873034">Позвонить</a>
                <a class="button button-secondary" href="https://wa.me/79365193433" target="_blank" rel="noreferrer">WhatsApp</a>
                <a class="button button-secondary" href="https://t.me/79365193433" target="_blank" rel="noreferrer">Telegram</a>
            </div>
        </div>

        <div class="detail-tabs">
            <div class="tab-head">
                <button class="tab-button is-active" type="button" data-tab-button="description">Описание</button>
                <button class="tab-button" type="button" data-tab-button="specs">Характеристики</button>
            </div>
            <div class="tab-panel is-active" data-tab-panel="description">
                ${descriptionPanel}
            </div>
            <div class="tab-panel" data-tab-panel="specs">
                <table class="detail-table">
                    <tbody>${tableRows}</tbody>
                </table>
            </div>
        </div>

        ${videoMarkup}
    `;
};

const initDetailInteractions = () => {
    const mainImage = document.getElementById("detailMainImage");
    const detailRoot = document.querySelector(".product-single-layout");
    if (!mainImage || !detailRoot) return;

    detailRoot.querySelectorAll("[data-thumb]").forEach((thumb) => {
        thumb.addEventListener("click", () => {
            mainImage.src = thumb.dataset.thumb;
            detailRoot.querySelectorAll("[data-thumb]").forEach((node) => {
                node.classList.remove("is-active");
            });
            thumb.classList.add("is-active");
        });
    });

    detailRoot.querySelectorAll("[data-tab-button]").forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.dataset.tabButton;

            detailRoot.querySelectorAll("[data-tab-button]").forEach((node) => {
                node.classList.toggle("is-active", node === button);
            });

            detailRoot.querySelectorAll("[data-tab-panel]").forEach((panel) => {
                panel.classList.toggle("is-active", panel.dataset.tabPanel === target);
            });
        });
    });
};

const initMediaModal = () => {
    const modal = document.getElementById("mediaModal");
    const content = document.getElementById("mediaModalContent");
    if (!modal || !content) return;

    const closeModal = () => {
        modal.hidden = true;
        content.innerHTML = "";
        unlockBodyScroll();
    };

    document.querySelectorAll("[data-open-video]").forEach((button) => {
        button.addEventListener("click", () => {
            const product = products.find((item) => item.slug === button.dataset.openVideo);
            const video = getVideoConfig(product?.video);
            if (!video) return;

            content.innerHTML = video.type === "youtube"
                ? `<iframe src="${video.src}?autoplay=1" title="${video.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                : `<video src="${video.src}" controls autoplay></video>`;

            modal.hidden = false;
            lockBodyScroll();
        });
    });

    modal.querySelectorAll("[data-close-media]").forEach((node) => {
        node.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.hidden) {
            closeModal();
        }
    });
};

const initProductsPage = () => {
    const shell = document.getElementById("productPageShell");
    if (!shell) return;

    const params = new URLSearchParams(window.location.search);
    const activeProduct = products.find((item) => item.slug === params.get("product")) ?? products[0];

    shell.innerHTML = productPageMarkup(activeProduct);
    applyIcons();
    initForms();
    initDetailInteractions();
    initMediaModal();
    initReveal();
};

const init = () => {
    applyIcons();
    setYear();
    initMenu();
    initForms();
    renderHomeCards();
    initProductsPage();
    initReveal();
};

document.addEventListener("DOMContentLoaded", init);
