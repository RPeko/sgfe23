import { writeFile } from 'fs';
var str = `
export const environment = {
    production: true,
    bck_url: '${process.env.BCK_URL}',
    env: '${process.env.ENV}'
};
`;
writeFile("./src/environments/environment.prod.ts", str, function(err) {
   if(err) {
      return console.log(err);
   }
    console.log("The file was saved!");
});