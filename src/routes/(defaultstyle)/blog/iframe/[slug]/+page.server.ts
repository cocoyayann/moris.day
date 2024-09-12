import fs from 'node:fs';

export async function load({params}) {
    let code = fs.readFileSync(`${process.cwd()}/iframecodes/${params.slug}.html`, 'utf8')
    return {code: code}
}