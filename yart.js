var resumeMarkdownParser = function (rawInput) {
    String.prototype._parseMarkdownAnchor = function () {
        return this.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
	};
    String.prototype.beginWith = function (__sub) {
        if (this.indexOf(__sub) == 0) {
            return true;
		} else {
            return false;
		};
	};
    Array.prototype.add = function(x) {
        if (typeof(x) === 'number') {
            this.push('_num-' + x);
    	} else if (typeof(x) === 'string') {
            this.push(x);
		} else {
            for (var i = 0; i < x.length; i++) {
                this.push(x[i]);
			};
		};
	};
    var _ast = rawInput.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n\n/g, '\n').replace(/\n\n/g, '\n').split('\n');
    for (var i = 0; i < _ast.length; i++) {
        var _htmlTag = '';
        var _htmlTagClassList = ['lazy-display-animation'];
        var _htmlText = '';
        _ast[i] = _ast[i].trim();
        if (_ast[i].beginWith('@ ')) {
			_htmlTag = 'h1';
			_htmlText = _ast[i].slice(2);
		} else if (_ast[i].beginWith('@@ ')) {
			_htmlTag = 'div';
			_htmlTagClassList.add('contact');
			_htmlText = _ast[i].slice(3).replace(/(.*?)(:|：) /i, '<em>$1</em>')._parseMarkdownAnchor();
		} else if (_ast[i].beginWith('# ')) {
			_htmlTag = 'h2';
			_htmlTagClassList.add('section-heading');
			_htmlText = _ast[i].slice(2)._parseMarkdownAnchor();
		} else if (_ast[i].beginWith('## ')) {
			_htmlTag = 'h3';
			_htmlText = _ast[i].slice(3).replace(/(.*) \{/i, '<span class="job">$1</span> {').replace(/ \{(.*)\}/, ' <span class="duration">$1</span>')._parseMarkdownAnchor();
		} else if (_ast[i].beginWith(':: ')) {
			_htmlTag = 'div';
			_htmlTagClassList.add('ref');
			_htmlText = _ast[i].slice(3)._parseMarkdownAnchor();
		} else if (_ast[i].beginWith('// ')) {
			_htmlTag = 'div';
			_htmlTagClassList.add('subsection-tagline');
			_htmlText = _ast[i].slice(3)._parseMarkdownAnchor();
		} else if (_ast[i].beginWith('====')) {
			_htmlTag = 'div';
			_htmlTagClassList.add(['page-break', 'page-start']);
			_htmlText = '';
		} else {
			_htmlTag = 'p';
			_htmlText = _ast[i]._parseMarkdownAnchor();
		}
        // console.log(_htmlTag);
        // console.log(_htmlText);
        // console.log(_htmlTagClassList);
        var _htmlElementGenerated = document.createElement(_htmlTag);
		_htmlElementGenerated.setAttribute('class', _htmlTagClassList.join(' '));
		_htmlElementGenerated.innerHTML = _htmlText;
		document.getElementById('cont').appendChild(_htmlElementGenerated);
	};
};
