const icons = {
    phone: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.5 3.1a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 1.8-.6l3.1.5A2 2 0 0 1 22 16.9Z"></path>
        </svg>
    `,
    message: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.8 8.8 0 0 1-3.2-.6L3 21l1.7-5.3A8.5 8.5 0 1 1 21 11.5Z"></path>
        </svg>
    `,
    email: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"></path>
            <path d="m22 7-10 7L2 7"></path>
        </svg>
    `,
    location: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    `,
    office: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
        shortSummary: "Двухступенчатый мельничный комплекс для сухого тонкого и сверхтонкого помола какавеллы, специй и других сыпучих материалов.",
        preview: "assets/products/complex-1.webp",
        images: [
            "assets/products/complex-1.webp",
            "assets/products/complex-2.webp",
            "assets/products/complex-3.webp",
            "assets/products/complex-4.webp",
            "assets/products/complex-5.webp",
            "assets/products/complex-6.webp",
            "assets/products/complex-7.webp",
            "assets/products/complex-8.webp",
            "assets/products/complex-9.webp"
        ],
        description: [
            "Комплекс в рабочем состоянии и готов к запуску на производстве. Подходит, когда нужен сухой тонкий и сверхтонкий помол какавеллы с понятной производительностью и без доукомплектации по базовой линии.",
            "В составе две ступени: молотковая мельница для предварительного или основного помола и мельница сверхтонкого помола для доведения продукта до нужной микронной фракции.",
            "По какавелле производительность тонкого помола до 20 мкм составляет до 200 кг/час. Комплекс можно перенастроить под специи, минеральные добавки и другие сухие сыпучие материалы."
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
        shortSummary: "Роторно-лопастной смеситель для сухих и жиросодержащих смесей: специи, какао, премиксы, комбикорма и пищевые порошки.",
        preview: "assets/products/mixer-1.webp",
        images: [
            "assets/products/mixer-1.webp",
            "assets/products/mixer-2.webp",
            "assets/products/mixer-3.webp",
            "assets/products/mixer-4.webp",
            "assets/products/mixer-5.webp",
            "assets/products/mixer-6.webp"
        ],
        description: [
            "Смеситель рассчитан на получение однородных сухих и жиросодержащих смесей без сложной переналадки. Подходит для тех задач, где важны повторяемость смеси и удобная очистка между партиями.",
            "На нём можно смешивать специи, приправы, какао-продукты, сухие напитки, смеси для выпечки, комбикорма, премиксы и порошковые составы для пищевого, кормового и фармпроизводства.",
            "По объявлению заявлена однородность смеси до 98%, есть возможность вводить жидкие компоненты и работать с твёрдыми жирами через водяную рубашку и жиротопку."
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
        shortSummary: "Промышленный электродвигатель 26,4 кВт с защитой IP55 и оборотами 3540 об/мин для стабильной производственной нагрузки.",
        preview: "assets/products/motor-1.webp",
        images: [
            "assets/products/motor-1.webp",
            "assets/products/motor-2.webp",
            "assets/products/motor-3.webp",
            "assets/products/motor-4.webp"
        ],
        description: [
            "Электродвигатель под производственную нагрузку, где важны стабильные обороты, нормальный запас по защите и понятные паспортные характеристики.",
            "Двигатель производства Италии выполнен по стандарту IEC60034, имеет класс энергоэффективности IE2 и степень защиты IP55.",
            "Подойдёт как готовая силовая позиция для промышленного оборудования, где не нужен компромисс по базовым рабочим параметрам."
        ],
        specs: [
            ["Цена", "250 000 ₽"],
            ["Состояние", "Б/у"],
            ["Доступность", "В наличии"],
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
    document.documentElement.classList.add("menu-open");
    document.body.classList.add("menu-open");
    document.body.style.paddingRight = `${Math.max(scrollbarWidth, 0)}px`;
};

const unlockBodyScroll = () => {
    document.documentElement.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    document.body.style.paddingRight = "";
};

const normalizePhoneDigits = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (!digits) return "";

    const normalized = digits.startsWith("8") ? `7${digits.slice(1)}` : digits;
    return (normalized.startsWith("7") ? normalized : `7${normalized}`).slice(0, 11);
};

const maskPhone = (value) => {
    const trimmed = normalizePhoneDigits(value);
    if (!trimmed) return "";

    let result = "+7";
    if (trimmed.length > 1) result += ` (${trimmed.slice(1, 4)}`;
    if (trimmed.length >= 4) result += `) ${trimmed.slice(4, 7)}`;
    if (trimmed.length >= 7) result += `-${trimmed.slice(7, 9)}`;
    if (trimmed.length >= 9) result += `-${trimmed.slice(9, 11)}`;

    return result;
};

const countDigitsBeforeCaret = (value, caretPosition) => value
    .slice(0, caretPosition)
    .replace(/\D/g, "")
    .length;

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

const getSpecValue = (product, label) => product.specs.find(([key]) => key === label)?.[1] ?? "";

const getProductTags = (product) => ["Состояние", "Доступность"]
    .map((label) => getSpecValue(product, label))
    .filter(Boolean);

const getProductHighlights = (product) => {
    const preferredLabels = [
        "Мощность",
        "Производительность по какавелле",
        "Тонкость помола",
        "Тип смесителя",
        "Ёмкость смесителя",
        "Обороты",
        "Степень защиты",
        "Состояние",
        "Доступность"
    ];

    return preferredLabels
        .map((label) => {
            const value = getSpecValue(product, label);
            return value ? [label, value] : null;
        })
        .filter(Boolean)
        .slice(0, 3);
};

let openMediaLightbox = () => {};
let refreshAnchorLinks = () => {};
const lightboxState = {
    mode: "",
    gallery: [],
    index: 0,
    title: ""
};

const initForms = () => {
    document.querySelectorAll(".contact-form").forEach((form) => {
        form.querySelectorAll("input, textarea").forEach((field) => {
            if (field.name === "phone") {
                field.addEventListener("input", () => {
                    const digits = normalizePhoneDigits(field.value);
                    field.value = digits.length <= 1 ? "" : maskPhone(digits);
                    validateField(field);
                });

                field.addEventListener("keydown", (event) => {
                    if (!["Backspace", "Delete"].includes(event.key)) return;

                    const digits = normalizePhoneDigits(field.value);
                    if (!digits) return;

                    event.preventDefault();

                    const start = field.selectionStart ?? field.value.length;
                    const end = field.selectionEnd ?? start;
                    const startDigitIndex = countDigitsBeforeCaret(field.value, start);
                    const endDigitIndex = countDigitsBeforeCaret(field.value, end);
                    const nextDigits = digits.split("");

                    if (start !== end) {
                        nextDigits.splice(startDigitIndex, Math.max(endDigitIndex - startDigitIndex, 1));
                    } else if (event.key === "Backspace") {
                        const removeIndex = startDigitIndex - 1;
                        if (removeIndex >= 0) nextDigits.splice(removeIndex, 1);
                    } else {
                        const removeIndex = startDigitIndex;
                        if (removeIndex < nextDigits.length) nextDigits.splice(removeIndex, 1);
                    }

                    field.value = nextDigits.length <= 1 ? "" : maskPhone(nextDigits.join(""));
                    validateField(field);

                    window.requestAnimationFrame(() => {
                        const position = field.value.length;
                        field.setSelectionRange(position, position);
                    });
                });

                field.addEventListener("blur", () => {
                    field.value = maskPhone(field.value);
                    validateField(field);
                });
            } else {
                field.addEventListener("input", () => {
                    validateField(field);
                });
                field.addEventListener("blur", () => {
                    validateField(field);
                });
            }
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const fields = [...form.querySelectorAll("input, textarea")];
            fields.forEach((field) => {
                if (field.name === "phone") {
                    field.value = maskPhone(field.value);
                }
            });
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
        toggle.setAttribute("aria-label", "Открыть меню");
    };

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        if (isOpen) {
            lockBodyScroll();
            toggle.setAttribute("aria-label", "Закрыть меню");
        } else {
            unlockBodyScroll();
            toggle.setAttribute("aria-label", "Открыть меню");
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

const initAnchorLinks = () => {
    const scrollToHash = (hash, updateHistory = true) => {
        if (!hash || hash === "#") return;

        const target = document.querySelector(hash);
        if (!target) return;

        const headerOffset = document.getElementById("siteHeader")?.offsetHeight ?? 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset - 20;

        window.scrollTo({
            top: Math.max(targetTop, 0),
            behavior: "smooth",
        });

        if (updateHistory) {
            history.replaceState(null, "", hash);
        }
    };

    const bindAnchors = (root = document) => {
        root.querySelectorAll('a[href^="#"]').forEach((link) => {
            if (link.dataset.anchorBound === "true") return;

            link.dataset.anchorBound = "true";
            link.addEventListener("click", (event) => {
                const hash = link.getAttribute("href");
                if (!hash || hash === "#") return;

                const target = document.querySelector(hash);
                if (!target) return;

                event.preventDefault();
                scrollToHash(hash);
            });
        });
    };

    refreshAnchorLinks = bindAnchors;
    bindAnchors();

    if (window.location.hash) {
        window.setTimeout(() => {
            scrollToHash(window.location.hash, false);
        }, 80);
    }
};

const productCardMarkup = (product) => {
    const tags = getProductTags(product)
        .map((tag) => `<span class="product-chip">${tag}</span>`)
        .join("");

    return `
        <article class="product-card reveal">
            <div class="product-card-image">
                <img src="${product.preview}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-card-body">
                ${tags ? `<div class="product-card-meta">${tags}</div>` : ""}
                <h3>${product.name}</h3>
                <div class="product-card-price">${product.price}</div>
                <p class="product-card-summary">${product.shortSummary}</p>
            </div>
            <div class="product-card-footer">
                <a class="button button-primary" href="products.html?product=${product.slug}">Подробнее</a>
            </div>
        </article>
    `;
};

const renderHomeCards = () => {
    const grid = document.getElementById("homeProductGrid");
    if (!grid) return;

    grid.innerHTML = products.map(productCardMarkup).join("");
    refreshAnchorLinks();
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
    const tags = getProductTags(product)
        .map((tag) => `<span class="detail-chip">${tag}</span>`)
        .join("");

    const highlights = getProductHighlights(product)
        .map(([label, value]) => `
            <div class="detail-highlight">
                <span>${label}</span>
                <strong>${value}</strong>
            </div>
        `)
        .join("");

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
                <button class="detail-main-button" type="button" data-open-current-image aria-label="Открыть фото ${product.name}">
                    <img src="${product.images[0]}" alt="${product.name}" id="detailMainImage">
                </button>
            </div>
            <div class="thumb-row">
                ${thumbs}
            </div>
        </div>

        <div class="detail-info">
            <div>
                <h2>${product.name}</h2>
            </div>
            <div class="detail-price">${product.price}</div>
            ${tags ? `<div class="detail-tags">${tags}</div>` : ""}
            <p>
                ${product.shortSummary}
            </p>
            ${highlights ? `<div class="detail-highlights">${highlights}</div>` : ""}
            <div class="detail-actions">
                <a class="button button-primary" href="tel:+79253873034">
                    <i class="inline-icon button-icon" data-icon="phone"></i>
                    <span>Позвонить</span>
                </a>
                <a class="button button-brand button-whatsapp" href="https://wa.me/79365193433" target="_blank" rel="noreferrer">
                    <i class="inline-icon button-icon" data-icon="whatsapp"></i>
                    <span>WhatsApp</span>
                </a>
                <a class="button button-brand button-telegram" href="https://t.me/79365193433" target="_blank" rel="noreferrer">
                    <i class="inline-icon button-icon" data-icon="telegram"></i>
                    <span>Telegram</span>
                </a>
                <a class="button button-secondary" href="index.html#contacts">Оставить заявку</a>
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
    const mainButton = document.querySelector("[data-open-current-image]");
    const detailRoot = document.querySelector(".product-single-layout");
    if (!mainImage || !detailRoot || !mainButton) return;

    mainButton.addEventListener("click", () => {
        openMediaLightbox({
            mode: "image",
            src: mainImage.src,
            title: mainImage.alt,
            gallery: Array.from(detailRoot.querySelectorAll("[data-thumb]")).map((node) => node.dataset.thumb),
            index: Array.from(detailRoot.querySelectorAll("[data-thumb]")).findIndex((node) => node.classList.contains("is-active"))
        });
    });

    detailRoot.querySelectorAll("[data-thumb]").forEach((thumb) => {
        thumb.addEventListener("click", () => {
            const isActive = thumb.classList.contains("is-active");
            if (isActive) {
                openMediaLightbox({
                    mode: "image",
                    src: thumb.dataset.thumb,
                    title: thumb.querySelector("img")?.alt ?? mainImage.alt,
                    gallery: Array.from(detailRoot.querySelectorAll("[data-thumb]")).map((node) => node.dataset.thumb),
                    index: Array.from(detailRoot.querySelectorAll("[data-thumb]")).indexOf(thumb)
                });
                return;
            }

            mainImage.src = thumb.dataset.thumb;
            mainImage.alt = thumb.querySelector("img")?.alt ?? mainImage.alt;
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
    const dialog = modal?.querySelector(".media-modal-dialog");
    const content = document.getElementById("mediaModalContent");
    const navButtons = modal ? Array.from(modal.querySelectorAll("[data-media-nav]")) : [];
    if (!modal || !content || !dialog) return;

    const closeModal = () => {
        modal.hidden = true;
        content.innerHTML = "";
        dialog.dataset.mode = "";
        dialog.dataset.gallery = "false";
        lightboxState.mode = "";
        lightboxState.gallery = [];
        lightboxState.index = 0;
        lightboxState.title = "";
        unlockBodyScroll();
    };

    const renderLightboxImage = () => {
        const src = lightboxState.gallery[lightboxState.index];
        content.innerHTML = `<img src="${src}" alt="${lightboxState.title || "Фото товара"}">`;
        dialog.dataset.gallery = String(lightboxState.gallery.length > 1);
    };

    const stepLightbox = (step) => {
        if (lightboxState.mode !== "image" || lightboxState.gallery.length < 2) return;

        lightboxState.index = (lightboxState.index + step + lightboxState.gallery.length) % lightboxState.gallery.length;
        renderLightboxImage();
    };

    const openModal = ({ mode, src, title, gallery = [], index = 0 }) => {
        dialog.dataset.mode = mode;
        lightboxState.mode = mode;
        lightboxState.title = title ?? "Фото товара";

        if (mode === "image") {
            lightboxState.gallery = gallery.length ? gallery : [src];
            lightboxState.index = index >= 0 ? index : 0;
            renderLightboxImage();
        } else {
            dialog.dataset.gallery = "false";
            content.innerHTML = src.includes("youtube.com/embed")
                ? `<iframe src="${src}?autoplay=1" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                : `<video src="${src}" controls autoplay playsinline></video>`;
        }

        modal.hidden = false;
        lockBodyScroll();
    };

    openMediaLightbox = openModal;

    document.querySelectorAll("[data-open-video]").forEach((button) => {
        button.addEventListener("click", () => {
            const product = products.find((item) => item.slug === button.dataset.openVideo);
            const video = getVideoConfig(product?.video);
            if (!video) return;

            openModal({
                mode: "video",
                src: video.src,
                title: video.title
            });
        });
    });

    modal.querySelectorAll("[data-close-media]").forEach((node) => {
        node.addEventListener("click", closeModal);
    });

    navButtons.forEach((button) => {
        button.addEventListener("click", () => {
            stepLightbox(Number(button.dataset.mediaNav));
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.hidden) {
            closeModal();
            return;
        }

        if (modal.hidden || lightboxState.mode !== "image") return;

        if (event.key === "ArrowLeft") {
            stepLightbox(-1);
        }

        if (event.key === "ArrowRight") {
            stepLightbox(1);
        }
    });
};

const initProductsPage = () => {
    const shell = document.getElementById("productPageShell");
    if (!shell) return;

    const params = new URLSearchParams(window.location.search);
    const activeProduct = products.find((item) => item.slug === params.get("product")) ?? products[0];
    const description = document.querySelector('meta[name="description"]');

    document.title = `${activeProduct.name} | TECHPRO`;
    if (description) {
        description.setAttribute("content", `${activeProduct.name} — реальные фото, характеристики, цена и контакты по покупке.`);
    }

    shell.innerHTML = productPageMarkup(activeProduct);
    applyIcons();
    refreshAnchorLinks(shell);
    initForms();
    initDetailInteractions();
    initMediaModal();
    initReveal();
};

const init = () => {
    applyIcons();
    setYear();
    initMenu();
    initAnchorLinks();
    initForms();
    renderHomeCards();
    initProductsPage();
    initReveal();
};

document.addEventListener("DOMContentLoaded", init);
