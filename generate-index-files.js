/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')

let modulesPaths = [
    './src/components/atoms',
    './src/components/molecules',
    './src/components/organisms',
    './src/components/templates',
    './src/pages'
]

let indexExportContent = ''

function generateIndexFiles(dir) {
    const files = fs.readdirSync(dir)


    files.forEach(file => {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
            generateIndexFiles(fullPath)
        } 
        else if (file.endsWith('.tsx') && (!file.endsWith('.style.tsx') && !file.endsWith('.test.tsx') && !file.endsWith('.stories.tsx'))) {
            const baseName = path.basename(file, '.tsx')
            indexExportContent += `export { default as ${baseName} } from './${baseName}/${baseName}'\n`
            try{
                const data = fs.readFileSync(fullPath, 'utf-8')
                const regex = /export (type|interface) ([A-z]*)/gsm
                while ((match = regex.exec(data)) !== null) {
                    indexExportContent += `export { ${match[2]} } from './${baseName}/${baseName}'\n`
                }
            }
            catch(err){
                console.log(err)
            }
        }
    })

    if (modulesPaths.includes(dir)) {
        fs.writeFileSync(path.join(dir, 'index.ts'), indexExportContent)
        fs.writeFileSync(path.join(dir, 'index.d.ts'), `declare module '@${path.basename(dir)}'`)
        indexExportContent = ''
    }
}

modulesPaths.forEach(modulePath => {
    generateIndexFiles(modulePath)
})