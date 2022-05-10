//Themes

const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style); 

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgLogo: getStyle(html, "--bg-logo"),
    colorMenuA: getStyle(html, "--color-menu-a"),
    bgMenuAHover: getStyle(html, "--bg-menu-a-hover"),
    colorContact: getStyle(html, "--color-contact"),
    colorContactHover: getStyle(html, "--color-contact-hover"),
    colorContactBorder: getStyle(html, "--color-contact-border"),
    bgContactHover: getStyle(html, "--bg-contact-hover"),
    bgMainImage: getStyle(html, "--bg-main-image"),
    bgMainH1: getStyle(html, "--bg-main-h1"),
    colorMainP: getStyle(html, "--color-main-p"),
    tsMainP: getStyle(html, "--ts-main-p"),
    colorButtonBorder: getStyle(html, "--color-button-border"),
    colorButton: getStyle(html, "--color-button"),
    bgButtonCertificateA: getStyle(html, "--bg-button-certificate-a"),
    colorButtonCertificateBorder: getStyle(html, "--color-button-certificate-border"),
    colorButtonCertificate: getStyle(html, "--color-button-certificate"),
    bgChillP: getStyle(html, "--bg-chill-p"),
    bgAboutH1: getStyle(html, "--bg-about-h1"),
    colorBlink: getStyle(html, "--color-blink"),
    bgLanguagesAdjust: getStyle(html, "--bg-languages-adjust"),
    imgLanguages: getStyle(html, "--img-languages"),
    bgLanguagesP: getStyle(html, "--bg-languages-p"),
    bgIdiomas: getStyle(html, "--bg-idiomas"),
    bgIdiomasP: getStyle(html, "--bg-idiomas-p"),
    bgProjectH1: getStyle(html, "--bg-project-h1"),
    colorProjectP: getStyle(html, "--color-project-p"),
    tsProjectP: getStyle(html, "--ts-project-p"),
    bgProjectBox: getStyle(html, "--bg-project-box"),
    bgProjectBoxHover: getStyle(html, "--bg-project-box-hover"),
    projectBoxHoverBorder: getStyle(html, "--project-box-hover-border"),
    bgProjectBoxTextH1Hover: getStyle(html, "--bg-project-box-text-h1-hover"),
    colorProjectBoxTextP: getStyle(html, "--color-project-box-text-p"),
    bgProjectBoxSpan: getStyle(html, "--bg-project-box-span"),
    bgProjectScrollbar: getStyle(html, "--bg-project-scrollbar"),
    bgProjectScrollbarHover: getStyle(html, "--bg-project-scrollbar-hover"),
    bgMainPortfolioH1: getStyle(html, "--bg-main-portfolio-h1"),
    colorMainPortfolioP: getStyle(html, "--color-main-portfolio-p"),
    bgMainPortfolioSpan: getStyle(html, "--bg-main-portfolio-span"),
    tsCertificateP: getStyle(html, "--ts-certificate-p"),
    colorButtonPortfolioBackBorder: getStyle(html, "--color-button-portfolio-back-border"),
    colorButtonPortfolioBack: getStyle(html, "--color-button-portfolio-back"),
    bgButtonPortfolioBack: getStyle(html, "--bg-button-portfolio-back"),
    colorButtonPortfolioA: getStyle(html, "--color-button-portfolio-a"),
    bgButtonPortfolioA: getStyle(html, "--bg-button-portfolio-a"),
    colorButtonPortfolioBorder: getStyle(html, "--color-button-portfolio-border"),
    bgErrorH1: getStyle(html, "--bg-error-h1"),
    bgErrorP: getStyle(html, "--bg-error-p"),
    colorButtonErrorBorder: getStyle(html, "--color-button-error-border"),
    bgButtonError: getStyle(html, "--bg-button-error"),
    colorButtonError: getStyle(html, "--color-button-error"),
    colorSocialMedia: getStyle(html, "--color-social-media"),
    colorSocialMediaHover: getStyle(html, "--color-social-media-hover"),
    tsSocialMedia: getStyle(html, "--ts-social-media"),
    bgForm: getStyle(html, "--bg-form"),
    colorInputWrapper: getStyle(html, "--color-input-wrapper"),
    bgInput: getStyle(html, "--bg-input"),
    colorInput: getStyle(html, "--color-input"),
    colorInputOutline: getStyle(html, "--color-input-outline"),
    colorButtonContactMeBorder: getStyle(html, "--color-button-contact-me-border"),
    bgButtonContactMe: getStyle(html, "--bg-button-contact-me"),
    colorButtonContactMe: getStyle(html, "--color-button-contact-me"),
    bsButtonContactMeHover: getStyle(html, "--bs-button-contact-me-hover"),
    bgWpp: getStyle(html, "--bg-wpp"),
    colorWpp: getStyle(html, "--color-wpp"),
    bsWpp: getStyle(html, "--bs-wpp"),
    bgWppHover: getStyle(html, "--bg-wpp-hover"),
    colorAt: getStyle(html, "--color-at"),
    tsAtHover: getStyle(html, "--ts-at-hover"),
    colorAtHover: getStyle(html, "--color-at-hover"),
    bgThanksH1: getStyle(html, "--bg-thanks-h1"),
    colorThanksH1: getStyle(html, "--color-thanks-h1"),
    colorThanksP: getStyle(html, "--color-thanks-p"),
    borderLoader: getStyle(html, "--border-loader"),
    borderInnerLoader: getStyle(html, "--border-inner-loader"),
    bgButtonThanks: getStyle(html, "--bg-button-thanks"),
    colorButtonThanks: getStyle(html, "--color-button-thanks"),
    bsButtonThanks: getStyle(html, "--bs-button-thanks"),
    bgData: getStyle(html, "--bg-data")
}

const lightMode = {
    bg: getStyle(html, "--light-bg-html"),
    bgLogo: getStyle(html, "--light-bg-logo"),
    colorMenuA: getStyle (html, "--light-color-menu-a"),
    bgMenuAHover: getStyle (html, "--light-bg-menu-a-hover"),
    colorContact: getStyle(html, "--light-color-contact"),
    colorContactHover: getStyle(html, "--light-color-contact-hover"),
    colorContactBorder: getStyle(html, "--light-color-contact-border"),
    bgContactHover: getStyle(html, "--light-bg-contact-hover"),
    bgMainImage: getStyle(html, "--light-bg-main-image"),
    bgMainH1: getStyle(html, "--light-bg-main-h1"),
    colorMainP: getStyle(html, "--light-color-main-p"),
    tsMainP: getStyle(html, "--light-ts-main-p"),
    colorButtonBorder: getStyle(html, "--light-color-button-border"),
    colorButton: getStyle(html, "--light-color-button"),
    bgButtonCertificateA: getStyle(html, "--light-bg-button-certificate-a"),
    colorButtonCertificateBorder: getStyle(html, "--light-color-button-certificate-border"),
    colorButtonCertificate: getStyle(html, "--light-color-button-certificate"),
    bgChillP: getStyle(html, "--light-bg-chill-p"),
    bgAboutH1: getStyle(html, "--light-bg-about-h1"),
    colorBlink: getStyle(html, "--light-color-blink"),
    bgLanguagesAdjust: getStyle(html, "--light-bg-languages-adjust"),
    imgLanguages: getStyle(html, "--light-img-languages"),
    bgLanguagesP: getStyle(html, "--light-bg-languages-p"),
    bgIdiomas: getStyle(html, "--light-bg-idiomas"),
    bgIdiomasP: getStyle(html, "--light-bg-idiomas-p"),
    bgProjectH1: getStyle(html, "--light-bg-project-h1"),
    colorProjectP: getStyle(html, "--light-color-project-p"),
    tsProjectP: getStyle(html, "--light-ts-project-p"),
    bgProjectBox: getStyle(html, "--light-bg-project-box"),
    bgProjectBoxHover: getStyle(html, "--light-bg-project-box-hover"),
    projectBoxHoverBorder: getStyle(html, "--light-project-box-hover-border"),
    bgProjectBoxTextH1Hover: getStyle(html, "--light-bg-project-box-text-h1-hover"),
    colorProjectBoxTextP: getStyle(html, "--light-color-project-box-text-p"),
    bgProjectBoxSpan: getStyle(html, "--light-bg-project-box-span"),
    bgProjectScrollbar: getStyle(html, "--light-bg-project-scrollbar"),
    bgProjectScrollbarHover: getStyle(html, "--light-bg-project-scrollbar-hover"),
    bgMainPortfolioH1: getStyle(html, "--light-bg-main-portfolio-h1"),
    colorMainPortfolioP: getStyle(html, "--light-color-main-portfolio-p"),
    bgMainPortfolioSpan: getStyle(html, "--light-bg-main-portfolio-span"),
    tsCertificateP: getStyle(html, "--light-ts-certificate-p"),
    colorButtonPortfolioBackBorder: getStyle(html, "--light-color-button-portfolio-back-border"),
    colorButtonPortfolioBack: getStyle(html, "--light-color-button-portfolio-back"),
    bgButtonPortfolioBack: getStyle(html, "--light-bg-button-portfolio-back"),
    colorButtonPortfolioA: getStyle(html, "--light-color-button-portfolio-a"),
    bgButtonPortfolioA: getStyle(html, "--light-bg-button-portfolio-a"),
    colorButtonPortfolioBorder: getStyle(html, "--light-color-button-portfolio-border"),
    bgErrorH1: getStyle(html, "--light-bg-error-h1"),
    bgErrorP: getStyle(html, "--light-bg-error-p"),
    colorButtonErrorBorder: getStyle(html, "--light-color-button-error-border"),
    bgButtonError: getStyle(html, "--light-bg-button-error"),
    colorButtonError: getStyle(html, "--light-color-button-error"),
    colorSocialMedia: getStyle(html, "--light-color-social-media"),
    colorSocialMediaHover: getStyle(html, "--light-color-social-media-hover"),
    tsSocialMedia: getStyle(html, "--light-ts-social-media"),
    bgForm: getStyle(html, "--light-bg-form"),
    colorInputWrapper: getStyle(html, "--light-color-input-wrapper"),
    bgInput: getStyle(html, "--light-bg-input"),
    colorInput: getStyle(html, "--light-color-input"),
    colorInputOutline: getStyle(html, "--light-color-input-outline"),
    colorButtonContactMeBorder: getStyle(html, "--light-color-button-contact-me-border"),
    bgButtonContactMe: getStyle(html, "--light-bg-button-contact-me"),
    colorButtonContactMe: getStyle(html, "--light-color-button-contact-me"),
    bsButtonContactMeHover: getStyle(html, "--light-bs-button-contact-me-hover"),
    bgWpp: getStyle(html, "--light-bg-wpp"),
    colorWpp: getStyle(html, "--light-color-wpp"),
    bsWpp: getStyle(html, "--light-bs-wpp"),
    bgWppHover: getStyle(html, "--light-bg-wpp-hover"),
    colorAt: getStyle(html, "--light-color-at"),
    tsAtHover: getStyle(html, "--light-ts-at-hover"),
    colorAtHover: getStyle(html, "--light-color-at-hover"),
    bgThanksH1: getStyle(html, "--light-bg-thanks-h1"),
    colorThanksH1: getStyle(html, "--light-color-thanks-h1"),
    colorThanksP: getStyle(html, "--light-color-thanks-p"),
    borderLoader: getStyle(html, "--light-border-loader"),
    borderInnerLoader: getStyle(html, "--light-border-inner-loader"),
    bgButtonThanks: getStyle(html, "--light-bg-button-thanks"),
    colorButtonThanks: getStyle(html, "--light-color-button-thanks"),
    bsButtonThanks: getStyle(html, "--light-bs-button-thanks"),
    bgData: getStyle(html, "--light-bg-data")
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

const checkboxTheme = JSON.parse(localStorage.getItem('theme'))

if (checkboxTheme) {
  checkbox.checked = checkboxTheme
  changeColors(lightMode)
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)

    localStorage.setItem('theme', target.checked)
})




 





