console.log("person 1: Show Ticket");
console.log("person 2: Show Ticket");

const preMovie = async () => {
  const promiseWifeBringTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket");
    }, 3000);
  });
  const getPopCorn = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("popcon");
    }, 3000);
  });
  const getButter = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("butter");
    }, 3000);
  });
  const getColdDrink = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Thumbs ups");
    }, 3000);
  });

  let ticket = await promiseWifeBringTicket;
  console.log(`wife: i have the ${ticket}`);
  console.log("husband: we should go in");
  console.log("wife: no i am hungry");

  let popcorn = await getPopCorn;
  console.log(`husband: i got some ${popcorn}`);
  console.log("husband: we should go in");
  console.log("wife:I need butter on my popcon");

  let butter = await getButter;
  console.log(`husband: i gor some ${butter} on popcorn`);
  console.log("husband: any thing eles darling");
  console.log("wife: Yes I want Cold Drinks");

  let coldDrink = await getColdDrink
  console.log(`husband: i have some ${coldDrink} and popcorn with extra butter`)
  console.log("husband: any thing eles darling");
  console.log("wife: no  lets go we are getting late");
  console.log("husband: thank you for reminder");
  return ticket;
};
preMovie().then((msg) => console.log(`person3: show ${msg}`));
console.log("person 4: Show Ticket");
console.log("person 5: Show Ticket");
