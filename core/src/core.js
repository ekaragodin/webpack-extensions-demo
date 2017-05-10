const extensions = [];

export function registerExtension(extension) {
    console.log('Register extension.', extension);
    extensions.push(extension);
}

export function runExtensions() {
    console.log('Run extensions.');
    extensions.forEach((extension) => extension.run());
}
