// Test regex functionality
const testLines = [
    "console.log('🎉 Hello from Test Vite Project!');",
    "console.log('🔍 Perfect for testing extension logs!');", 
    "console.log('⚡ HMR is ready to go!');",
    "console.log(\"Simple double quotes\");",
    "console.log(`Template literal`);",
    "// This is not a log",
    "const x = 5;"
];

// Test the regex
const consoleLogRegex = /console\.log\s*\(\s*(['"`])([^]*?)\1\s*\)/;

testLines.forEach((line, index) => {
    const match = consoleLogRegex.exec(line);
    if (match) {
        console.log(`Line ${index}: Found log: "${match[2]}"`);
    } else {
        console.log(`Line ${index}: No match`);
    }
});
