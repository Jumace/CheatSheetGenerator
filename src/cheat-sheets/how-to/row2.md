# Develop New Cheat Sheet

First make sure the server abd watcher are running.

Afterwards you need to copy an existing cheat sheet, e.g. `how-to`. For that go to `src/cheat-sheets`and copy the folder `how-to` and rename the new copy.

In the new cheat sheet folder you find multiple files:

## index.js

The watcher or builder will call this file to create one HTML file out of the .md files in this directory.

The value of the variable `name` needs to be changed to the name of your cheat sheet.

## row[0-9].md

One .md file will be one row in the final HTML code.

The order of the rows is determined by the number in the file name, starting with 1 and counting up.

## template.html

The HTML skeleton for your final cheat sheet.

In this file you also need to update the name of the cheat sheet.

Furthermore, if you want different number of rows, you need to adapt the placeholders in this template file.

Last but not least can you change here the used theme of the cheat sheet.

For available themes please have a look into the `themes` folder.