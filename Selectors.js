
    // /* equivalent to `var wb = XLSX.readFile("sheetjs.xlsx");` */
    // var buf = fs.readFileSync("sheetjs.xlsx");
    // var workbook = XLSX.read(buf, {type:'buffer'});

    // let worksheet = workbook.Sheets[workbook.SheetNames[0]]
    // let lss = [{}]


    // for (let i = 2; i < 3; i++) {
    //     const title = worksheet[`A${i}`].v;
    //     const main = worksheet[`B${i}`].v;
    //     const desc = worksheet[`C${i}`].v;
    //     const icon_image = worksheet[`D${i}`].v;
    //     const app_link = worksheet[`E${i}`].v;
    //     const web_link = worksheet[`F${i}`].v;
    //     const nps = worksheet[`G${i}`].v;
    //     const useful = worksheet[`H${i}`].v;
    //     const recommend = worksheet[`I${i}`].v;
    //     const review1 = worksheet[`J${i}`].v;
    //     const review2 = worksheet[`K${i}`].v;
    //     const review3 = worksheet[`L${i}`].v;
    //     const platform = worksheet[`M${i}`].v;
    //     console.log("title", title);
    //     console.log("main", main);
    //     console.log("desc", desc);
    //     console.log("icon_image", icon_image);
    //     console.log("app_link", app_link);
    //     console.log("web_link", web_link);
    //     console.log("nps", nps);
    //     console.log("useful", useful);
    //     console.log("recommend", recommend);
    //     console.log("review1", review1);
    //     console.log("review2", review2);
    //     console.log("review3", review3);
    //     console.log("platform", platform);
    //     let body = 
    //             {
    //                 title:title,
    //                 main:main,
    //                 desc:desc,
    //                 icon_image:icon_image,
    //                 app_link:app_link,
    //                 web_link:web_link,
    //                 nps:nps,
    //                 useful:useful,
    //                 recommend:recommend,
    //                 review1:review1,
    //                 review2:review2,
    //                 review3:review3,
    //                 platform:platform
    //             }

    //     lss = [...lss, body]
    // }
    // console.log(lss)


for (let l = 0; l < 10; l++) {
    console.log(Math.floor(Math.random() *3))
}
