/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')

let modulesPaths = [
    './src/components/atoms',
    './src/components/molecules',
    './src/components/organisms',
    './src/components/templates'
]

let indexExportContent = 'export {\n'
let indexImportContent = ''

function generateIndexFiles(dir) {
    const files = fs.readdirSync(dir)


    files.forEach(file => {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
            generateIndexFiles(fullPath)
        } else if (file.endsWith('.tsx') && !file.endsWith('.style.tsx') && !file.endsWith('.test.tsx') && !file.endsWith('.stories.tsx')) {
            const baseName = path.basename(file, '.tsx')
            indexImportContent += `import ${baseName} from './${baseName}/${baseName}';\n`
            indexExportContent += `\t${baseName},\n`
        }
    })

    if (modulesPaths.includes(dir)) {
        indexExportContent += '}'
        fs.writeFileSync(path.join(dir, 'index.ts'), indexImportContent+'\n'+indexExportContent)
        fs.writeFileSync(path.join(dir, 'index.d.ts'), `declare module "@${path.basename(dir)}"`)
        indexExportContent = 'export {\n'
        indexImportContent = ''
    }
}

modulesPaths.forEach(modulePath => {
    generateIndexFiles(modulePath)
})