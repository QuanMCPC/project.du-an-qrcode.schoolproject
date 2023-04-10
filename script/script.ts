interface Template {
    [key: string]: string
}
interface HTMLElement {
    replace(data: Template, prefix?: string): void
}

HTMLElement.prototype.replace = function (data: Template, prefix: string = "$_") {
    const alternate_prefix = "id_dlr_";
    const _this: () => HTMLElement = () => this;
    for (const i in data) {
        const old = _this().innerHTML;
        const span: () => HTMLElement | null = () =>
            _this().querySelector(`span.reactive#${alternate_prefix}${i}`)
        if (span() == null) _this().innerHTML =
            old.replace(`${prefix}${i}`, `
                <span class="reactive" id="${alternate_prefix}${i}"></span>`)
        span().innerText = data[i]
    }
}

/**
 * Returns a reference to the first object with the specified value of the ID attribute.
 * @param id String that specifies the ID value.
 * @returns The element
 */
function getId(id: string) { return document.getElementById(id) }

/**
 * Returns the first element that is a descendant of node that matches selectors.
 * @param selector CSS selector to select the element
 * @returns The element
 */
function qSel(selector: string) { return document.querySelector(selector) }

/**
 * Returns all element descendants of node that match selectors.
 * @param sel CSS selector to select elements
 * @returns List of elements
 */
function qSelAll(sel: string) { return document.querySelectorAll(sel) }

/**
 * Get the value of query string
 * @param name Name of the query string
 * @param url The URL to analyze
 * @returns The value
 */
function gPBName(name: string, url = window.location.href): string {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]\\]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

