HTMLElement.prototype.replace = function (data, prefix = "$_") {
    const alternate_prefix = "id_dlr_";
    const _this = () => this;
    for (const i in data) {
        const old = _this().innerHTML;
        const span = () => _this().querySelector(`span.reactive#${alternate_prefix}${i}`);
        if (span() == null)
            _this().innerHTML =
                old.replace(`${prefix}${i}`, `
                <span class="reactive" id="${alternate_prefix}${i}"></span>`);
        span().innerText = data[i];
    }
};
function getId(id) { return document.getElementById(id); }
function qSel(selector) { return document.querySelector(selector); }
function qSelAll(sel) { return document.querySelectorAll(sel); }
function gPBName(name, url = window.location.href) {
    if (!url)
        url = window.location.href;
    name = name.replace(/[\[\]\\]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
//# sourceMappingURL=script.js.map