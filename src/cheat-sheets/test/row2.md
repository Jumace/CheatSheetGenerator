# Hello & World

# Block Quote

>   *     code.in.a.list();
>
>   *    Paragraph.
>
>   * Normal list
>
>   Paragraph.


# Code

```js
alert('some JavaScript code.');
```

```bash
npm run start
```

```
cat someFile.txt | grep this
```

```css
.button {
  color: white;
  padding: 2em 15px;
  --test-var: inherit;
}
```

```css
.button {
  color: white;
  padding: 2em 15px;
  --test-var: inherit;
}
```


```
foo bar baz
```

    alpha bravo charlie

```empty
```

```tabs
  two spaces
	one
		two
	one
	  mixed.
```

# Entities

Plain text:

AT&amp;T with entity, AT&#x26;T with numeric entity, AT&T without entity.

Fenced code language flags:

```AT&amp;T
Something in the AT&amp;T language
```

```AT&#x26;T
Something in the AT&#x26;T language
```

```AT&T
Something in the AT&T language
```

Automatic links:

<http://at&amp;t.com>, <http://at&#x26;t.com>, and <http://at&t.com>.

Link `href`:

[With entity](http://at&amp;t.com), [numeric entity](http://at&#x26;t.com), [without entity](http://at&t.com).

Link `title`:

[With entity](http://att.com "AT&amp;T"), [numeric entity](http://att.com "AT&#x26;T"), [without entity](http://example.com "AT&T").

Image `src`:

![With entity](http://at&amp;t.com/fav.ico), ![numeric entity](http://at&#x26;t.com/fav.ico), ![without entity](http://at&t.com/fav.ico).

Image `alt`:

![AT&amp;T with entity](http://att.com/fav.ico), ![AT&#x26;T with numeric entity](http://att.com/fav.ico), ![AT&T without entity](http://att.com/fav.ico).

Image `title`:

![With entity](http://att.com/fav.ico "AT&amp;T"), ![numeric entity](http://att.com/fav.ico "AT&#x26;T"), ![without entity](http://att.com/fav.ico "AT&T").

Reference `link`:

[Entity][entity], [Numeric entity][numeric-entity], [Literal][literal].

![Entity][entity], ![Numeric entity][numeric-entity], ![Literal][literal].

Reference `title`:

[Entity][title-entity], [Numeric entity][title-numeric-entity], [Literal][title-literal].

![Entity][title-entity], ![Numeric entity][title-numeric-entity], ![Literal][title-literal].

Image Reference `alt`:

![AT&amp;T with entity][reference], ![AT&#x26;T with numeric entity][reference], ![AT&T without entity][reference].

Definitions:

[reference]: http://at&t.com/fav.ico "AT&T favicon"

[entity]: http://at&amp;t.com/fav.ico "ATT favicon"
[numeric-entity]: http://at&#x26;t.com/fav.ico "ATT favicon"
[literal]: http://at&t.com/fav.ico "ATT favicon"

[title-entity]: http://at&t.com/fav.ico "AT&amp;T favicon"
[title-numeric-entity]: http://at&t.com/fav.ico "AT&#x26;T favicon"
[title-literal]: http://at&t.com/fav.ico "AT&T favicon"

# Escape commonmark

These should all get escaped:

Backslash: \\

Backtick: \`

Asterisk: \*

Underscore: \_

Left brace: \{

Right brace: \}

Left bracket: \[

Right bracket: \]

Left paren: \(

Right paren: \)

Greater-than: \>

Hash: \#

Period: \.

Bang: \!

Plus: \+

Minus: \-

**GFM:**

Pipe: \|

Tilde: \~

**Commonmark:**

Quote: \"

Dollar: \$

Percentage: \%

Ampersand: \&

Single quote: \'

Comma: \,

Forward slash: \/

Colon: \:

Semicolon: \;

Less-than: \<

Equals: \=

Question mark: \?

At-sign: \@

Caret: \^

New line: \
only works in paragraphs.

Two spaces:  
only works in paragraphs.

# HTML sanatize

<h1>Alpha</h1>

<strong>Foo</strong> <em>bar</em> <sup>baz</sup> <sub>qux</sub>.

# heading

Alpha [bravo](javascript:alert(1)) charlie.

# Links

[Example](http://example.com "Example Link")

[Example](http://example.com)

[](http://example.com)

[](<> "Example Link")

[](<>)

[]()

# List

*   **One**;
*   _Two_;
*   ~~Three~~.

1. One;
2. Two;

<!--  -->

4. Four.
5. Five.

*   Loose:

    -   Alpha;
    -   Bravo;
    -   Charlie.

*   Loose 2:

    +   Delta;
    +   Echo;
    +   Foxtrot.

*   ***

    And a rule.