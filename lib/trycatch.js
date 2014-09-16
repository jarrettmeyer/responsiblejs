var fs = require('fs');

function readSpec() {
  fs.readFile("./i_do_not_exist.txt", function (err, data) {
    if (err) {
      throw Error(err);
    }
    console.log(data);
  });
}


try {
  readSpec();
} catch (e) {
  console.error(e);
}
