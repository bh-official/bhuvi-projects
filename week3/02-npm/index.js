import chalk from "chalk";
import cowsay from "cowsay";


console.log(chalk.blue("Hello world!"));
console.log(chalk.bgGreen.red("Hello world"));

console.log(
  cowsay.say({
    text: "I'm a cow and I love to say",
    e: "><",
    T: "U",
  })
);

console.log(
    cowsay.say({
        text: "Do I look like a cow?",
        e: `OO`,
        T:`v`,

    })
)

console.log(chalk.yellow(`Hi all`)+ `Hope you are doing great`+ chalk.red(`!`));

console.log(chalk.red.bgBlue.bold(`Hello World!`));

console.log(chalk.green.bgCyan.underline(`Yipee`)+chalk.bgMagenta.green(`!`));

console.log(chalk.bgWhite(
    `I have white as my background color ` + chalk.blueBright(`so i decided to have blue as my text color`)
));

console.log(chalk.underline(`Text1: ${chalk.red(`I'm Red`)}
Text2: ${chalk.green(`I'm green`)}
Text3: ${chalk.yellow(`I'm Yellow`)}`));

const color1=chalk.bgCyanBright
const color2=chalk.green

console.log(color1(`color1 text`));
console.log(color2(`color2 text`));





