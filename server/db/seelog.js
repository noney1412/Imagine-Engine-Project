export default function seelog(
	obj,
	title,
	CheckObj = "NONE",
	input = ["NONE"]
) {
	console.log(`
------------------------------------------
1️⃣    ✔️  ${title}
------------------------------------------
‍👁‍  typeOf The Object, ${typeof obj};

CheckList :
${CheckObj}

INPUT :

${input.map((v, i) => `input No. 📺   ${i + 1} ` + v)}

OUTPUT :

${obj}


------------------End---------------------

##########################################
    `);
}
