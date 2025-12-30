/* Challenge #15: Drawing Tables

ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on a gift and children management application.

To improve the presentation, he wants to create a drawTable function that receives an array of objects and turns it into a text table.

The drawn table must have:

    A header with column letters (A, B, C…).
    The content of the table is the values of the objects.
    The values must be left-aligned.
    The fields always leave one space on the left.
    The fields leave on the right the space needed to align the box.

The function receives a second parameter sortBy that indicates the name of the field by which the rows must be sorted. The order will be ascending alphabetical if the values are strings and ascending numeric if they are numbers.

Check the example to see how you should draw the table: */

function drawTable(data, sortBy) {

  // sort array
  const sortedData = data.sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB;
    } else {
      return String(valA).localeCompare(String(valB));
    }
  });
  
  // find num of cols / cols
  const dataCols = Object.keys(sortedData[0]);

  // name columns letters
  const colLetters = dataCols.map((_el, i) => String.fromCharCode(65 + i));

  // get column widths (+ 2 for blank space around each listing)
  const colWidths = [];
  dataCols.forEach((colName, colIndex) => {
    let maxLength = 1;
    sortedData.forEach(row => {
      const value = String(row[colName]);
      if (value.length > maxLength) {
        maxLength = value.length;
      }
    })
    colWidths[colIndex] = maxLength + 2;
  });

  // reusable line building functions

  function buildRow(cells, colWidths) {
    let rowString = '|';
    for (let i = 0; i < cells.length; i++) {
      const content = String(cells[i]);
      const totalWidth = colWidths[i];
      const leftPadding = 1;
      const rightPadding = totalWidth - content.length - leftPadding;
      rowString += ' ' + content + ' '.repeat(rightPadding) + '|';
    }
    return rowString + '\n';
  }

  function buildLine(colWidths) {
    let line = '+';
    colWidths.forEach(width => {
      line += '-'.repeat(width) + '+';
    })
    return line + '\n';
  }

  // render table
    // top border
    // header row
    // header seperator
    // data rows
    // bottom border

  let table = buildLine(colWidths) + buildRow(colLetters, colWidths) + buildLine(colWidths);
  
  sortedData.forEach(row => {
    const rowCells = dataCols.map(col => row[col]);
    table += buildRow(rowCells, colWidths);
  })

  table += buildLine(colWidths).slice(0, -1);

  console.log(table);
  return table;
}

// Examples

drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
)
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
)
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+