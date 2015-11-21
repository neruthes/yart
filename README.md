# Yart — Yet another resume tool.

See the [author's resume](https://joyneop.xyz/resume/) as online demo. Although it is maintained as parallel of Yart.

## Yart-flavored-Markdown

```
@ John Appleseed

@@ TEL: +1 (408) 555-5555
@@ Email: [john.appleseed@example.com](mailto:john.appleseed@example.com)

# Experience

// Start with two slashes for subheading

## Job Title @ Company {10/2015—Present}

Detailed description of this period of experience.

:: Add comment by starting with two colons. This is useful if you want to reference a URL on Internet.

==== A line starting with four equal signs will generate a page break for printing.
```

## Customizing

Put your content in the `#source-md` element of `resume.html`.

You can remove the download link if you'd like.

Don't forget to change the webpage title.

If you don't want to add an avatar, simply remove `<img class="avatar" data-async-src="./avatar.png">` in the `#cont` element of `resume.html`.

## Themes

Current codebase is a scrap. You may want to create custom themes later upon the codebase gets refactored.

## For Print

This resume tool is print-ready. You can produce a PDF from the webpage. This functionality is provided in browser's printing feature.

## Other

### Don't know what fonts to use?

Sans-serif:

- Seravek (OS X built-in)
- Segoe UI (Windows built-in)
- [Ropa Sans Pro](http://www.myfonts.com/fonts/lettersoup/ropa-sans-pro/?refby=joyneop) (free `Ropa Sans Pro Regular & Italic`)

Serif:

- Iowan Old Style (OS X built-in)
- Palatino (OS X built-in)
- Athelas (OS X built-in)
- [Andron Freefont](http://www.myfonts.com/fonts/andreas-stotzner/andron-freefont/?refby=joyneop) (free for Desktop only)
- [Garibaldi](http://www.myfonts.com/fonts/harbor-type/garibaldi/?refby=joyneop) (free `Garibaldi Medium`)
- [EB Garamond](https://www.google.com/fonts#QuickUsePlace:quickUse/Family:EB+Garamond)
- [Ashbury](http://www.myfonts.com/fonts/hoftype/ashbury/?refby=joyneop) (free `Ashbury Light`)

## License

MIT License as included within this repository.
