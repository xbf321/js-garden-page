window['PR_SHOULD_USE_CONTINUATION'] = true;
window['PR_TAB_WIDTH'] = 8;
window['PR_normalizedHtml'] = window['PR'] = window['prettyPrintOne'] = window['prettyPrint'] = void 0;
window['_pr_isIE6'] = function() {
    var a = navigator && navigator.userAgent && navigator.userAgent.match(/\bMSIE ([678])\./);
    a = a ? +a[1] : false;
    window['_pr_isIE6'] = function() {
        return a
    }
    ;
    return a
}
;
(function() {
    var A = "break continue do else for if return while ";
    var B = A + "auto case char const default " + "double enum extern float goto int long register short signed sizeof " + "static struct switch typedef union unsigned void volatile ";
    var C = B + "catch class delete false import " + "new operator private protected public this throw true try typeof ";
    var D = C + "alignof align_union asm axiom bool " + "concept concept_map const_cast constexpr decltype " + "dynamic_cast explicit export friend inline late_check " + "mutable namespace nullptr reinterpret_cast static_assert static_cast " + "template typeid typename using virtual wchar_t where ";
    var E = C + "abstract boolean byte extends final finally implements import " + "instanceof null native package strictfp super synchronized throws " + "transient ";
    var F = E + "as base by checked decimal delegate descending event " + "fixed foreach from group implicit in interface internal into is lock " + "object out override orderby params partial readonly ref sbyte sealed " + "stackalloc string select uint ulong unchecked unsafe ushort var ";
    var G = C + "debugger eval export function get null set undefined var with " + "Infinity NaN ";
    var H = "caller delete die do dump elsif eval exit foreach for " + "goto if import last local my next no our print package redo require " + "sub undef unless until use wantarray while BEGIN END ";
    var I = A + "and as assert class def del " + "elif except exec finally from global import in is lambda " + "nonlocal not or pass print raise try with yield " + "False True None ";
    var J = A + "alias and begin case class def" + " defined elsif end ensure false in module next nil not or redo rescue " + "retry self super then true undef unless until when yield BEGIN END ";
    var K = A + "case done elif esac eval fi " + "function in local set then until ";
    var L = (D + F + G + H + I + J + K);
    var M = 'str';
    var N = 'kwd';
    var O = 'com';
    var P = 'typ';
    var Q = 'lit';
    var R = 'pun';
    var S = 'pln';
    var T = 'tag';
    var U = 'dec';
    var V = 'src';
    var W = 'atn';
    var X = 'atv';
    var Y = 'nocode';
    var Z = function() {
        var a = ["!", "!=", "!==", "#", "%", "%=", "&", "&&", "&&=", "&=", "(", "*", "*=", "+=", ",", "-=", "->", "/", "/=", ":", "::", ";", "<", "<<", "<<=", "<=", "=", "==", "===", ">", ">=", ">>", ">>=", ">>>", ">>>=", "?", "@", "[", "^", "^=", "^^", "^^=", "{", "|", "|=", "||", "||=", "~", "break", "case", "continue", "delete", "do", "else", "finally", "instanceof", "return", "throw", "try", "typeof"];
        var b = '(?:^^|[+-]';
        for (var i = 0; i < a.length; ++i) {
            b += '|' + a[i].replace(/([^=<>:&a-z])/g, '\\$1')
        }
        b += ')\\s*';
        return b
    }();
    var ba = /&/g;
    var bb = /</g;
    var bc = />/g;
    var bd = /\"/g;
    function attribToHtml(a) {
        return a.replace(ba, '&amp;').replace(bb, '&lt;').replace(bc, '&gt;').replace(bd, '&quot;')
    }
    function textToHtml(a) {
        return a.replace(ba, '&amp;').replace(bb, '&lt;').replace(bc, '&gt;')
    }
    var be = /&lt;/g;
    var bf = /&gt;/g;
    var bg = /&apos;/g;
    var bh = /&quot;/g;
    var bi = /&amp;/g;
    var bj = /&nbsp;/g;
    function htmlToText(a) {
        var b = a.indexOf('&');
        if (b < 0) {
            return a
        }
        for (--b; (b = a.indexOf('&#', b + 1)) >= 0; ) {
            var c = a.indexOf(';', b);
            if (c >= 0) {
                var d = a.substring(b + 3, c);
                var e = 10;
                if (d && d.charAt(0) === 'x') {
                    d = d.substring(1);
                    e = 16
                }
                var f = parseInt(d, e);
                if (!isNaN(f)) {
                    a = (a.substring(0, b) + String.fromCharCode(f) + a.substring(c + 1))
                }
            }
        }
        return a.replace(be, '<').replace(bf, '>').replace(bg, "'").replace(bh, '"').replace(bj, ' ').replace(bi, '&')
    }
    function isRawContent(a) {
        return 'XMP' === a.tagName
    }
    var bk = /[\r\n]/g;
    function isPreformatted(a, b) {
        if ('PRE' === a.tagName) {
            return true
        }
        if (!bk.test(b)) {
            return true
        }
        var c = '';
        if (a.currentStyle) {
            c = a.currentStyle.whiteSpace
        } else if (window.getComputedStyle) {
            c = window.getComputedStyle(a, null).whiteSpace
        }
        return !c || c === 'pre'
    }
    function normalizedHtml(c, d, e) {
        switch (c.nodeType) {
        case 1:
            var f = c.tagName.toLowerCase();
            d.push('<', f);
            var g = c.attributes;
            var n = g.length;
            if (n) {
                if (e) {
                    var h = [];
                    for (var i = n; --i >= 0; ) {
                        h[i] = g[i]
                    }
                    h.sort(function(a, b) {
                        return (a.name < b.name) ? -1 : a.name === b.name ? 0 : 1
                    });
                    g = h
                }
                for (var i = 0; i < n; ++i) {
                    var j = g[i];
                    if (!j.specified) {
                        continue
                    }
                    d.push(' ', j.name.toLowerCase(), '="', attribToHtml(j.value), '"')
                }
            }
            d.push('>');
            for (var k = c.firstChild; k; k = k.nextSibling) {
                normalizedHtml(k, d, e)
            }
            if (c.firstChild || !/^(?:br|link|img)$/.test(f)) {
                d.push('<\/', f, '>')
            }
            break;
        case 3:
        case 4:
            d.push(textToHtml(c.nodeValue));
            break
        }
    }
    function combinePrefixPatterns(q) {
        var r = 0;
        var s = false;
        var t = false;
        for (var i = 0, n = q.length; i < n; ++i) {
            var u = q[i];
            if (u.ignoreCase) {
                t = true
            } else if (/[a-z]/i.test(u.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ''))) {
                s = true;
                t = false;
                break
            }
        }
        function decodeEscape(a) {
            if (a.charAt(0) !== '\\') {
                return a.charCodeAt(0)
            }
            switch (a.charAt(1)) {
            case 'b':
                return 8;
            case 't':
                return 9;
            case 'n':
                return 0xa;
            case 'v':
                return 0xb;
            case 'f':
                return 0xc;
            case 'r':
                return 0xd;
            case 'u':
            case 'x':
                return parseInt(a.substring(2), 16) || a.charCodeAt(1);
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
                return parseInt(a.substring(1), 8);
            default:
                return a.charCodeAt(1)
            }
        }
        function encodeEscape(a) {
            if (a < 0x20) {
                return (a < 0x10 ? '\\x0' : '\\x') + a.toString(16)
            }
            var b = String.fromCharCode(a);
            if (b === '\\' || b === '-' || b === '[' || b === ']') {
                b = '\\' + b
            }
            return b
        }
        function caseFoldCharset(c) {
            var d = c.substring(1, c.length - 1).match(new RegExp('\\\\u[0-9A-Fa-f]{4}' + '|\\\\x[0-9A-Fa-f]{2}' + '|\\\\[0-3][0-7]{0,2}' + '|\\\\[0-7]{1,2}' + '|\\\\[\\s\\S]' + '|-' + '|[^-\\\\]','g'));
            var e = [];
            var f = [];
            var g = d[0] === '^';
            for (var i = g ? 1 : 0, n = d.length; i < n; ++i) {
                var p = d[i];
                switch (p) {
                case '\\B':
                case '\\b':
                case '\\D':
                case '\\d':
                case '\\S':
                case '\\s':
                case '\\W':
                case '\\w':
                    e.push(p);
                    continue
                }
                var h = decodeEscape(p);
                var j;
                if (i + 2 < n && '-' === d[i + 1]) {
                    j = decodeEscape(d[i + 2]);
                    i += 2
                } else {
                    j = h
                }
                f.push([h, j]);
                if (!(j < 65 || h > 122)) {
                    if (!(j < 65 || h > 90)) {
                        f.push([Math.max(65, h) | 32, Math.min(j, 90) | 32])
                    }
                    if (!(j < 97 || h > 122)) {
                        f.push([Math.max(97, h) & ~32, Math.min(j, 122) & ~32])
                    }
                }
            }
            f.sort(function(a, b) {
                return (a[0] - b[0]) || (b[1] - a[1])
            });
            var k = [];
            var l = [NaN, NaN];
            for (var i = 0; i < f.length; ++i) {
                var m = f[i];
                if (m[0] <= l[1] + 1) {
                    l[1] = Math.max(l[1], m[1])
                } else {
                    k.push(l = m)
                }
            }
            var o = ['['];
            if (g) {
                o.push('^')
            }
            o.push.apply(o, e);
            for (var i = 0; i < k.length; ++i) {
                var m = k[i];
                o.push(encodeEscape(m[0]));
                if (m[1] > m[0]) {
                    if (m[1] + 1 > m[0]) {
                        o.push('-')
                    }
                    o.push(encodeEscape(m[1]))
                }
            }
            o.push(']');
            return o.join('')
        }
        function allowAnywhereFoldCaseAndRenumberGroups(c) {
            var d = c.source.match(new RegExp('(?:' + '\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]' + '|\\\\u[A-Fa-f0-9]{4}' + '|\\\\x[A-Fa-f0-9]{2}' + '|\\\\[0-9]+' + '|\\\\[^ux0-9]' + '|\\(\\?[:!=]' + '|[\\(\\)\\^]' + '|[^\\x5B\\x5C\\(\\)\\^]+' + ')','g'));
            var n = d.length;
            var e = [];
            for (var i = 0, groupIndex = 0; i < n; ++i) {
                var p = d[i];
                if (p === '(') {
                    ++groupIndex
                } else if ('\\' === p.charAt(0)) {
                    var f = +p.substring(1);
                    if (f && f <= groupIndex) {
                        e[f] = -1
                    }
                }
            }
            for (var i = 1; i < e.length; ++i) {
                if (-1 === e[i]) {
                    e[i] = ++r
                }
            }
            for (var i = 0, groupIndex = 0; i < n; ++i) {
                var p = d[i];
                if (p === '(') {
                    ++groupIndex;
                    if (e[groupIndex] === undefined) {
                        d[i] = '(?:'
                    }
                } else if ('\\' === p.charAt(0)) {
                    var f = +p.substring(1);
                    if (f && f <= groupIndex) {
                        d[i] = '\\' + e[groupIndex]
                    }
                }
            }
            for (var i = 0, groupIndex = 0; i < n; ++i) {
                if ('^' === d[i] && '^' !== d[i + 1]) {
                    d[i] = ''
                }
            }
            if (c.ignoreCase && s) {
                for (var i = 0; i < n; ++i) {
                    var p = d[i];
                    var g = p.charAt(0);
                    if (p.length >= 2 && g === '[') {
                        d[i] = caseFoldCharset(p)
                    } else if (g !== '\\') {
                        d[i] = p.replace(/[a-zA-Z]/g, function(a) {
                            var b = a.charCodeAt(0);
                            return '[' + String.fromCharCode(b & ~32, b | 32) + ']'
                        })
                    }
                }
            }
            return d.join('')
        }
        var v = [];
        for (var i = 0, n = q.length; i < n; ++i) {
            var u = q[i];
            if (u.global || u.multiline) {
                throw new Error('' + u);
            }
            v.push('(?:' + allowAnywhereFoldCaseAndRenumberGroups(u) + ')')
        }
        return new RegExp(v.join('|'),t ? 'gi' : 'g')
    }
    var bl = null;
    function getInnerHtml(a) {
        if (null === bl) {
            var b = document.createElement('PRE');
            b.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />'));
            bl = !/</.test(b.innerHTML)
        }
        if (bl) {
            var c = a.innerHTML;
            if (isRawContent(a)) {
                c = textToHtml(c)
            } else if (!isPreformatted(a, c)) {
                c = c.replace(/(<br\s*\/?>)[\r\n]+/g, '$1').replace(/(?:[\r\n]+[ \t]*)+/g, ' ')
            }
            return c
        }
        var d = [];
        for (var e = a.firstChild; e; e = e.nextSibling) {
            normalizedHtml(e, d)
        }
        return d.join('')
    }
    function makeTabExpander(f) {
        var g = '                ';
        var h = 0;
        return function(a) {
            var b = null;
            var c = 0;
            for (var i = 0, n = a.length; i < n; ++i) {
                var d = a.charAt(i);
                switch (d) {
                case '\t':
                    if (!b) {
                        b = []
                    }
                    b.push(a.substring(c, i));
                    var e = f - (h % f);
                    h += e;
                    for (; e >= 0; e -= g.length) {
                        b.push(g.substring(0, e))
                    }
                    c = i + 1;
                    break;
                case '\n':
                    h = 0;
                    break;
                default:
                    ++h
                }
            }
            if (!b) {
                return a
            }
            b.push(a.substring(c));
            return b.join('')
        }
    }
    var bm = new RegExp('[^<]+' + '|<\!--[\\s\\S]*?--\>' + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>' + '|<\/?[a-zA-Z](?:[^>\"\']|\'[^\']*\'|\"[^\"]*\")*>' + '|<','g');
    var bn = /^<\!--/;
    var bo = /^<!\[CDATA\[/;
    var bp = /^<br\b/i;
    var bq = /^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/;
    function extractTags(s) {
        var a = s.match(bm);
        var b = [];
        var c = 0;
        var d = [];
        if (a) {
            for (var i = 0, n = a.length; i < n; ++i) {
                var e = a[i];
                if (e.length > 1 && e.charAt(0) === '<') {
                    if (bn.test(e)) {
                        continue
                    }
                    if (bo.test(e)) {
                        b.push(e.substring(9, e.length - 3));
                        c += e.length - 12
                    } else if (bp.test(e)) {
                        b.push('\n');
                        ++c
                    } else {
                        if (e.indexOf(Y) >= 0 && isNoCodeTag(e)) {
                            var f = e.match(bq)[2];
                            var g = 1;
                            var j;
                            end_tag_loop: for (j = i + 1; j < n; ++j) {
                                var h = a[j].match(bq);
                                if (h && h[2] === f) {
                                    if (h[1] === '/') {
                                        if (--g === 0) {
                                            break end_tag_loop
                                        }
                                    } else {
                                        ++g
                                    }
                                }
                            }
                            if (j < n) {
                                d.push(c, a.slice(i, j + 1).join(''));
                                i = j
                            } else {
                                d.push(c, e)
                            }
                        } else {
                            d.push(c, e)
                        }
                    }
                } else {
                    var k = htmlToText(e);
                    b.push(k);
                    c += k.length
                }
            }
        }
        return {
            source: b.join(''),
            tags: d
        }
    }
    function isNoCodeTag(a) {
        return !!a.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g, ' $1="$2$3$4"').match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/)
    }
    function appendDecorations(a, b, c, d) {
        if (!b) {
            return
        }
        var e = {
            source: b,
            basePos: a
        };
        c(e);
        d.push.apply(d, e.decorations)
    }
    function createSimpleLexer(s, t) {
        var u = {};
        var v;
        (function() {
            var a = s.concat(t);
            var b = [];
            var d = {};
            for (var i = 0, n = a.length; i < n; ++i) {
                var e = a[i];
                var f = e[3];
                if (f) {
                    for (var c = f.length; --c >= 0; ) {
                        u[f.charAt(c)] = e
                    }
                }
                var g = e[1];
                var k = '' + g;
                if (!d.hasOwnProperty(k)) {
                    b.push(g);
                    d[k] = null
                }
            }
            b.push(/[\0-\uffff]/);
            v = combinePrefixPatterns(b)
        }
        )();
        var w = t.length;
        var x = /\S/;
        var y = function(a) {
            var b = a.source
              , basePos = a.basePos;
            var c = [basePos, S];
            var d = 0;
            var e = b.match(v) || [];
            var f = {};
            for (var g = 0, nTokens = e.length; g < nTokens; ++g) {
                var h = e[g];
                var j = f[h];
                var k = void 0;
                var l;
                if (typeof j === 'string') {
                    l = false
                } else {
                    var m = u[h.charAt(0)];
                    if (m) {
                        k = h.match(m[1]);
                        j = m[0]
                    } else {
                        for (var i = 0; i < w; ++i) {
                            m = t[i];
                            k = h.match(m[1]);
                            if (k) {
                                j = m[0];
                                break
                            }
                        }
                        if (!k) {
                            j = S
                        }
                    }
                    l = j.length >= 5 && 'lang-' === j.substring(0, 5);
                    if (l && !(k && typeof k[1] === 'string')) {
                        l = false;
                        j = V
                    }
                    if (!l) {
                        f[h] = j
                    }
                }
                var n = d;
                d += h.length;
                if (!l) {
                    c.push(basePos + n, j)
                } else {
                    var o = k[1];
                    var p = h.indexOf(o);
                    var q = p + o.length;
                    if (k[2]) {
                        q = h.length - k[2].length;
                        p = q - o.length
                    }
                    var r = j.substring(5);
                    appendDecorations(basePos + n, h.substring(0, p), y, c);
                    appendDecorations(basePos + n + p, o, langHandlerForExtension(r, o), c);
                    appendDecorations(basePos + n + q, h.substring(q), y, c)
                }
            }
            a.decorations = c
        };
        return y
    }
    function sourceDecorator(a) {
        var b = []
          , fallthroughStylePatterns = [];
        if (a['tripleQuotedStrings']) {
            b.push([M, /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, '\'"'])
        } else if (a['multiLineStrings']) {
            b.push([M, /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, '\'"`'])
        } else {
            b.push([M, /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, '"\''])
        }
        if (a['verbatimStrings']) {
            fallthroughStylePatterns.push([M, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null])
        }
        if (a['hashComments']) {
            if (a['cStyleComments']) {
                b.push([O, /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/, null, '#']);
                fallthroughStylePatterns.push([M, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, null])
            } else {
                b.push([O, /^#[^\r\n]*/, null, '#'])
            }
        }
        if (a['cStyleComments']) {
            fallthroughStylePatterns.push([O, /^\/\/[^\r\n]*/, null]);
            fallthroughStylePatterns.push([O, /^\/\*[\s\S]*?(?:\*\/|$)/, null])
        }
        if (a['regexLiterals']) {
            var c = ('/(?=[^/*])' + '(?:[^/\\x5B\\x5C]' + '|\\x5C[\\s\\S]' + '|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+' + '/');
            fallthroughStylePatterns.push(['lang-regex', new RegExp('^' + Z + '(' + c + ')')])
        }
        var d = a['keywords'].replace(/^\s+|\s+$/g, '');
        if (d.length) {
            fallthroughStylePatterns.push([N, new RegExp('^(?:' + d.replace(/\s+/g, '|') + ')\\b'), null])
        }
        b.push([S, /^\s+/, null, ' \r\n\t\xA0']);
        fallthroughStylePatterns.push([Q, /^@[a-z_$][a-z_$@0-9]*/i, null], [P, /^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/, null], [S, /^[a-z_$][a-z_$@0-9]*/i, null], [Q, new RegExp('^(?:' + '0x[a-f0-9]+' + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)' + '(?:e[+\\-]?\\d+)?' + ')' + '[a-z]*','i'), null, '0123456789'], [R, /^.[^\s\w\.$@\'\"\`\/\#]*/, null]);
        return createSimpleLexer(b, fallthroughStylePatterns)
    }
    var br = sourceDecorator({
        'keywords': L,
        'hashComments': true,
        'cStyleComments': true,
        'multiLineStrings': true,
        'regexLiterals': true
    });
    function recombineTagsAndDecorations(c) {
        var d = c.source;
        var e = c.extractedTags;
        var f = c.decorations;
        var g = [];
        var h = 0;
        var j = null;
        var k = null;
        var l = 0;
        var m = 0;
        var n = makeTabExpander(window['PR_TAB_WIDTH']);
        var o = /([\r\n ]) /g;
        var p = /(^| ) /gm;
        var q = /\r\n?|\n/g;
        var r = /[ \r\n]$/;
        var s = true;
        var t = window['_pr_isIE6']();
        var u = (t ? (c.sourceNode.tagName === 'PRE' ? (t === 6 ? '&#160;\r\n' : t === 7 ? '&#160;<br>\r' : '&#160;\r') : '&#160;<br />') : '<br />');
        var v = c.sourceNode.className.match(/\blinenums\b(?::(\d+))?/);
        var w;
        if (v) {
            var x = [];
            for (var i = 0; i < 10; ++i) {
                x[i] = u + '</li><li class="L' + i + '">'
            }
            var y = v[1] && v[1].length ? v[1] - 1 : 0;
            g.push('<ol class="linenums"><li class="L', (y) % 10, '"');
            if (y) {
                g.push(' value="', y + 1, '"')
            }
            g.push('>');
            w = function() {
                var a = x[++y % 10];
                return j ? ('</span>' + a + '<span class="' + j + '">') : a
            }
        } else {
            w = u
        }
        function emitTextUpTo(a) {
            if (a > h) {
                if (j && j !== k) {
                    g.push('</span>');
                    j = null
                }
                if (!j && k) {
                    j = k;
                    g.push('<span class="', j, '">')
                }
                var b = textToHtml(n(d.substring(h, a))).replace(s ? p : o, '$1&#160;');
                s = r.test(b);
                g.push(b.replace(q, w));
                h = a
            }
        }
        while (true) {
            var z;
            if (l < e.length) {
                if (m < f.length) {
                    z = e[l] <= f[m]
                } else {
                    z = true
                }
            } else {
                z = false
            }
            if (z) {
                emitTextUpTo(e[l]);
                if (j) {
                    g.push('</span>');
                    j = null
                }
                g.push(e[l + 1]);
                l += 2
            } else if (m < f.length) {
                emitTextUpTo(f[m]);
                k = f[m + 1];
                m += 2
            } else {
                break
            }
        }
        emitTextUpTo(d.length);
        if (j) {
            g.push('</span>')
        }
        if (v) {
            g.push('</li></ol>')
        }
        c.prettyPrintedHtml = g.join('')
    }
    var bs = {};
    function registerLangHandler(a, b) {
        for (var i = b.length; --i >= 0; ) {
            var c = b[i];
            if (!bs.hasOwnProperty(c)) {
                bs[c] = a
            } else if ('console'in window) {
                console['warn']('cannot override language handler %s', c)
            }
        }
    }
    function langHandlerForExtension(a, b) {
        if (!(a && bs.hasOwnProperty(a))) {
            a = /^\s*</.test(b) ? 'default-markup' : 'default-code'
        }
        return bs[a]
    }
    registerLangHandler(br, ['default-code']);
    registerLangHandler(createSimpleLexer([], [[S, /^[^<?]+/], [U, /^<!\w[^>]*(?:>|$)/], [O, /^<\!--[\s\S]*?(?:-\->|$)/], ['lang-', /^<\?([\s\S]+?)(?:\?>|$)/], ['lang-', /^<%([\s\S]+?)(?:%>|$)/], [R, /^(?:<[%?]|[%?]>)/], ['lang-', /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i], ['lang-js', /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i], ['lang-css', /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i], ['lang-in.tag', /^(<\/?[a-z][^<>]*>)/i]]), ['default-markup', 'htm', 'html', 'mxml', 'xhtml', 'xml', 'xsl']);
    registerLangHandler(createSimpleLexer([[S, /^[\s]+/, null, ' \t\r\n'], [X, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, '\"\'']], [[T, /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i], [W, /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ['lang-uq.val', /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/], [R, /^[=<>\/]+/], ['lang-js', /^on\w+\s*=\s*\"([^\"]+)\"/i], ['lang-js', /^on\w+\s*=\s*\'([^\']+)\'/i], ['lang-js', /^on\w+\s*=\s*([^\"\'>\s]+)/i], ['lang-css', /^style\s*=\s*\"([^\"]+)\"/i], ['lang-css', /^style\s*=\s*\'([^\']+)\'/i], ['lang-css', /^style\s*=\s*([^\"\'>\s]+)/i]]), ['in.tag']);
    registerLangHandler(createSimpleLexer([], [[X, /^[\s\S]+/]]), ['uq.val']);
    registerLangHandler(sourceDecorator({
        'keywords': D,
        'hashComments': true,
        'cStyleComments': true
    }), ['c', 'cc', 'cpp', 'cxx', 'cyc', 'm']);
    registerLangHandler(sourceDecorator({
        'keywords': 'null true false'
    }), ['json']);
    registerLangHandler(sourceDecorator({
        'keywords': F,
        'hashComments': true,
        'cStyleComments': true,
        'verbatimStrings': true
    }), ['cs']);
    registerLangHandler(sourceDecorator({
        'keywords': E,
        'cStyleComments': true
    }), ['java']);
    registerLangHandler(sourceDecorator({
        'keywords': K,
        'hashComments': true,
        'multiLineStrings': true
    }), ['bsh', 'csh', 'sh']);
    registerLangHandler(sourceDecorator({
        'keywords': I,
        'hashComments': true,
        'multiLineStrings': true,
        'tripleQuotedStrings': true
    }), ['cv', 'py']);
    registerLangHandler(sourceDecorator({
        'keywords': H,
        'hashComments': true,
        'multiLineStrings': true,
        'regexLiterals': true
    }), ['perl', 'pl', 'pm']);
    registerLangHandler(sourceDecorator({
        'keywords': J,
        'hashComments': true,
        'multiLineStrings': true,
        'regexLiterals': true
    }), ['rb']);
    registerLangHandler(sourceDecorator({
        'keywords': G,
        'cStyleComments': true,
        'regexLiterals': true
    }), ['js']);
    registerLangHandler(createSimpleLexer([], [[M, /^[\s\S]+/]]), ['regex']);
    function applyDecorator(a) {
        var b = a.sourceCodeHtml;
        var c = a.langExtension;
        a.prettyPrintedHtml = b;
        try {
            var d = extractTags(b);
            var f = d.source;
            a.source = f;
            a.basePos = 0;
            a.extractedTags = d.tags;
            langHandlerForExtension(c, f)(a);
            recombineTagsAndDecorations(a)
        } catch (e) {
            if ('console'in window) {
                console['log'](e && e['stack'] ? e['stack'] : e)
            }
        }
    }
    function prettyPrintOne(a, b) {
        var c = {
            sourceCodeHtml: a,
            langExtension: b
        };
        applyDecorator(c);
        return c.prettyPrintedHtml
    }
    function prettyPrint(f) {
        function byTagName(a) {
            return document.getElementsByTagName(a)
        }
        var g = [byTagName('pre')];
        var h = [];
        for (var i = 0; i < g.length; ++i) {
            for (var j = 0, n = g[i].length; j < n; ++j) {
                h.push(g[i][j])
            }
        }
        g = null;
        var l = Date;
        if (!l['now']) {
            l = {
                'now': function() {
                    return (new Date).getTime()
                }
            }
        }
        var k = 0;
        var m;
        function doWork() {
            var a = (window['PR_SHOULD_USE_CONTINUATION'] ? l.now() + 250 : Infinity);
            for (; k < h.length && l.now() < a; k++) {
                var b = h[k];
                var c = 'lang-js';
                if (c) {
                    c = c[1]
                }
                var d = false;
                for (var p = b.parentNode; p; p = p.parentNode) {
                    if (p.tagName === 'pre') {
                        d = true;
                        break
                    }
                }
                if (!d) {
                    var e = getInnerHtml(b);
                    e = e.replace(/(?:\r\n?|\n)$/, '');
                    m = {
                        sourceCodeHtml: e,
                        langExtension: c,
                        sourceNode: b
                    };
                    applyDecorator(m);
                    replaceWithPrettyPrintedHtml()
                }
            }
            if (k < h.length) {
                setTimeout(doWork, 250)
            } else if (f) {
                f()
            }
        }
        function replaceWithPrettyPrintedHtml() {
            var b = m.prettyPrintedHtml;
            if (!b) {
                return
            }
            var c = m.sourceNode;
            if (!isRawContent(c)) {
                c.innerHTML = b
            } else {
                var d = document.createElement('PRE');
                for (var i = 0; i < c.attributes.length; ++i) {
                    var a = c.attributes[i];
                    if (a.specified) {
                        var e = a.name.toLowerCase();
                        if (e === 'class') {
                            d.className = a.value
                        } else {
                            d.setAttribute(a.name, a.value)
                        }
                    }
                }
                d.innerHTML = b;
                c.parentNode.replaceChild(d, c);
                c = d
            }
        }
        doWork()
    }
    window['PR_normalizedHtml'] = normalizedHtml;
    window['prettyPrintOne'] = prettyPrintOne;
    window['prettyPrint'] = prettyPrint;
    window['PR'] = {
        'combinePrefixPatterns': combinePrefixPatterns,
        'createSimpleLexer': createSimpleLexer,
        'registerLangHandler': registerLangHandler,
        'sourceDecorator': sourceDecorator,
        'PR_ATTRIB_NAME': W,
        'PR_ATTRIB_VALUE': X,
        'PR_COMMENT': O,
        'PR_DECLARATION': U,
        'PR_KEYWORD': N,
        'PR_LITERAL': Q,
        'PR_NOCODE': Y,
        'PR_PLAIN': S,
        'PR_PUNCTUATION': R,
        'PR_SOURCE': V,
        'PR_STRING': M,
        'PR_TAG': T,
        'PR_TYPE': P
    }
}
)();
