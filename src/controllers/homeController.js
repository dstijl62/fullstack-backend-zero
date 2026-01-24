

const getHomepage = (req, res) => {
    //process data
    // call model
     res.send('Hello World! & Nodemon')

};

/*
function getABC(req, res) {
    res.send('Check abc!');
    
}   //-> function kiểu truyền thống

*/

//arrow function -> cú pháp mới, giúp viết code ngắn hơn và tường minh hơn
const getABC = (req, res) => {
    res.send('Check abc!')
};

const getHtml = (req, res) => {
    // res.send('<h1>Hello World! Test html</h1>')
  res.render('sample.ejs');
}

module.exports = {
    getHomepage, getABC, getHtml
}
