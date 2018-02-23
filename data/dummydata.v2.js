const faker = require('faker');
const sampleInit = require('./sampleInitialData.js');


const randomElement = function(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const price = ["$", "$$", "$$$", "$$$$", "$$$$$"];
const styles = ['fancy', 'casual', 'dress-code enforced', 'no dress-code'];
const hours = ["M - F, 7am - 8pm", "M - Sat, 10am - 9pm", "M - Sun, 8am - 10pm", "M - F, 10am - 6pm"];


const ext = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/ext1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/ext2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/ext3.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/ext4.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/ext5.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/ext6.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/ext7.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/ext8.jpeg"];
const int = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/int1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/int2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/int3.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/int4.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/int5.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/int6.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/int7.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/int8.jpeg"];

const boba = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/boba1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/boba2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/boba3.jpeg"];
const burger = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/burger1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/burger2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/burger3.jpeg"];
const chinese = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/chinese1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/chinese2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/chinese3.jpeg"];
const coffee = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/coffee1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/coffee3.jpeg"];
const dimSum = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/dimsum1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/dimsum2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/dimsum3.jpeg"];
const donuts = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/donuts1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/donuts2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/donuts3.jpeg"];
const iceCream = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/icecream1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/icecream2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/icecream3.jpeg"];
const indian = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/indian1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/indian2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/indian3.jpeg"];
const pasta = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/pasta1.jpg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/pasta2.jpg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/pasta3.jpg"];
const pizza = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/pizza1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/pizza2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/pizza3.jpeg"];
const sandwich = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/sandwich1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/sandwich2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/sandwich3.jpeg"];
const sushi = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/sushi1.jpg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/sushi2.jpg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/sushi3.jpg"];
const taco = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/taco1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/taco2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/taco3.jpeg"];
const thai = ["https://s3-us-west-1.amazonaws.com/imagesfornamson/thai1.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/thai2.jpeg", "https://s3-us-west-1.amazonaws.com/imagesfornamson/thai3.jpeg"];

const allItems = boba.concat(burger).concat(chinese).concat(coffee).concat(dimSum).concat(donuts).concat(iceCream).concat(indian).concat(pasta).concat(pizza).concat(sandwich).concat(sushi).concat(taco).concat(thai);





for (let i = 0; i < dummy.length; i++) {
  sampleInit[i].about.description = faker.lorem.paragraphs();
  sampleInit[i].about.phone = faker.phone.phoneNumberFormat();
  sampleInit[i].about.hours = randomElement(hours);
  sampleInit[i].about.style = randomElement(styles);
  sampleInit[i].about.price = randomElement(price);
  sampleInit[i].banner = randomElement(int);
};


